import * as THREE from 'three'
import { geoMercator, type GeoProjection } from 'd3-geo'
import type {
  Feature,
  FeatureCollection,
  Polygon,
  Position,
} from 'geojson'

// =============================================================================
// GeoJSON → Three.js helpers for the Vietnam interactive map.
// Produces a flat-on-XZ extruded country mesh plus a secondary mesh for the
// Trường Sa / Hoàng Sa archipelagos (stored as closed MultiLineString rings
// in the source GeoJSON). One shared projection so hotspots align with the
// geometry regardless of which feature they belong to.
// =============================================================================

export type ProjectFn = (lng: number, lat: number) => [number, number]

export interface ExtrudedMap {
  /** Mainland + coastal islands (MultiPolygon features). */
  mainland: THREE.ExtrudeGeometry
  /** Trường Sa + Hoàng Sa, or null if the source has no MultiLineString features. */
  islands: THREE.ExtrudeGeometry | null
  bounds: { width: number; height: number }
  /**
   * Project geographic coords to local (x, y) where x is east-west (positive
   * east) and y is north-south (positive north). The XZ ground placement maps
   * y → -z, so a label at world position uses `[x, depth + offset, -y]`.
   */
  project: ProjectFn
}

interface BuildOptions {
  /** Fit the projection into a [w, h] rectangle before centering. */
  fitSize?: [number, number]
  /** Extrusion depth (world units) along +Y for the mainland mesh. */
  depth?: number
  /** Extrusion depth for the islands mesh (defaults to depth * 0.55). */
  islandsDepth?: number
  /** Optional bevel size; pass 0 to disable. */
  bevel?: number
}

export function buildExtrudedMap(
  geojson: FeatureCollection,
  options: BuildOptions = {},
): ExtrudedMap {
  const fitSize = options.fitSize ?? [14, 16]
  const depth = options.depth ?? 0.35
  const islandsDepth = options.islandsDepth ?? depth * 0.55
  const bevel = options.bevel ?? 0.02

  // Project the ENTIRE FeatureCollection so islands land in correct
  // relative positions east of the mainland.
  const projection: GeoProjection = geoMercator().fitSize(fitSize, geojson)

  // Raw projection has Y growing southward; flip so positive Y = north.
  const projectRaw: ProjectFn = (lng, lat) => {
    const r = projection([lng, lat])
    if (!r) return [0, 0]
    return [r[0], -r[1]]
  }

  // Center on the mainland feature so the country sits at the world origin
  // and the islands extend to the east — matches the conventional Vietnam
  // map layout used in textbooks.
  const mainland = pickMainland(geojson)
  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity
  visitFeaturePositions(mainland, (pos) => {
    const [x, y] = projectRaw(pos[0], pos[1])
    if (x < minX) minX = x
    if (x > maxX) maxX = x
    if (y < minY) minY = y
    if (y > maxY) maxY = y
  })
  const centerX = (minX + maxX) / 2
  const centerY = (minY + maxY) / 2

  const project: ProjectFn = (lng, lat) => {
    const [x, y] = projectRaw(lng, lat)
    return [x - centerX, y - centerY]
  }

  // Split features into mainland (polygons) vs islands (closed line rings).
  const mainlandShapes: THREE.Shape[] = []
  const islandShapes: THREE.Shape[] = []

  for (const feature of geojson.features) {
    const g = feature.geometry
    if (g.type === 'Polygon') {
      collectPolygonShape(g, mainlandShapes, project)
    } else if (g.type === 'MultiPolygon') {
      for (const poly of g.coordinates) {
        collectPolygonShape(
          { type: 'Polygon', coordinates: poly },
          mainlandShapes,
          project,
        )
      }
    } else if (g.type === 'LineString') {
      collectClosedLineShape(g.coordinates, islandShapes, project)
    } else if (g.type === 'MultiLineString') {
      for (const line of g.coordinates) {
        collectClosedLineShape(line, islandShapes, project)
      }
    }
  }

  const mainlandGeometry = buildExtrudeGeometry(mainlandShapes, depth, bevel)

  let islandsGeometry: THREE.ExtrudeGeometry | null = null
  if (islandShapes.length > 0) {
    islandsGeometry = buildExtrudeGeometry(islandShapes, islandsDepth, 0)
  }

  return {
    mainland: mainlandGeometry,
    islands: islandsGeometry,
    bounds: { width: maxX - minX, height: maxY - minY },
    project,
  }
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function buildExtrudeGeometry(
  shapes: THREE.Shape[],
  depth: number,
  bevel: number,
): THREE.ExtrudeGeometry {
  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 1,
  })
  // Lay flat on XZ ground plane: north points to -Z, extrusion up (+Y).
  geometry.rotateX(-Math.PI / 2)
  geometry.computeVertexNormals()
  return geometry
}

function collectPolygonShape(
  polygon: Polygon,
  out: THREE.Shape[],
  project: ProjectFn,
) {
  if (polygon.coordinates.length === 0) return
  const outer = ringToShape(polygon.coordinates[0], project)
  if (!outer) return
  for (let i = 1; i < polygon.coordinates.length; i++) {
    const hole = ringToPath(polygon.coordinates[i], project)
    if (hole) outer.holes.push(hole)
  }
  out.push(outer)
}

function collectClosedLineShape(
  line: Position[],
  out: THREE.Shape[],
  project: ProjectFn,
) {
  // The Vietnam GeoJSON stores islands (Trường Sa / Hoàng Sa) as closed line
  // rings. Treat each closed ring as a polygon outline so it extrudes into a
  // visible landmass on the 3D map.
  const shape = ringToShape(line, project)
  if (shape) out.push(shape)
}

function pickMainland(geojson: FeatureCollection): Feature {
  for (const f of geojson.features) {
    const props = (f.properties ?? {}) as Record<string, unknown>
    if (
      props.ADMIN === 'Vietnam' ||
      props.NAME === 'Vietnam' ||
      props.SOVEREIGNT === 'Vietnam' ||
      props.NAME_EN === 'Vietnam'
    ) {
      return f
    }
  }
  // Fallback: largest polygon feature by rough bbox area.
  let best = geojson.features[0]
  let bestArea = 0
  for (const f of geojson.features) {
    if (f.geometry.type !== 'Polygon' && f.geometry.type !== 'MultiPolygon')
      continue
    const area = roughBboxArea(f)
    if (area > bestArea) {
      bestArea = area
      best = f
    }
  }
  return best
}

function roughBboxArea(feature: Feature): number {
  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity
  visitFeaturePositions(feature, (pos) => {
    if (pos[0] < minX) minX = pos[0]
    if (pos[0] > maxX) maxX = pos[0]
    if (pos[1] < minY) minY = pos[1]
    if (pos[1] > maxY) maxY = pos[1]
  })
  if (!isFinite(minX)) return 0
  return (maxX - minX) * (maxY - minY)
}

function visitFeaturePositions(
  feature: Feature,
  visit: (pos: Position) => void,
) {
  const g = feature.geometry
  if (g.type === 'Polygon') {
    for (const ring of g.coordinates) for (const pt of ring) visit(pt)
  } else if (g.type === 'MultiPolygon') {
    for (const poly of g.coordinates)
      for (const ring of poly) for (const pt of ring) visit(pt)
  }
}

function ringToShape(ring: Position[], project: ProjectFn): THREE.Shape | null {
  if (ring.length < 3) return null
  const shape = new THREE.Shape()
  const [x0, y0] = project(ring[0][0], ring[0][1])
  shape.moveTo(x0, y0)
  for (let i = 1; i < ring.length; i++) {
    const [x, y] = project(ring[i][0], ring[i][1])
    shape.lineTo(x, y)
  }
  return shape
}

function ringToPath(ring: Position[], project: ProjectFn): THREE.Path | null {
  if (ring.length < 3) return null
  const path = new THREE.Path()
  const [x0, y0] = project(ring[0][0], ring[0][1])
  path.moveTo(x0, y0)
  for (let i = 1; i < ring.length; i++) {
    const [x, y] = project(ring[i][0], ring[i][1])
    path.lineTo(x, y)
  }
  return path
}
