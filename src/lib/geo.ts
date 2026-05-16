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
// Produces a flat-on-XZ extruded country mesh with consistent (lng, lat) → world
// projection so hotspots align with the geometry.
// =============================================================================

export type ProjectFn = (lng: number, lat: number) => [number, number]

export interface ExtrudedMap {
  geometry: THREE.ExtrudeGeometry
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
  /** Extrusion depth (world units) along +Y. */
  depth?: number
  /** Optional bevel size; pass 0 to disable. */
  bevel?: number
}

export function buildExtrudedMap(
  geojson: FeatureCollection,
  options: BuildOptions = {},
): ExtrudedMap {
  const fitSize = options.fitSize ?? [10, 12]
  const depth = options.depth ?? 0.35
  const bevel = options.bevel ?? 0.02

  const mainland = pickMainland(geojson)
  const mainlandFC: FeatureCollection = {
    type: 'FeatureCollection',
    features: [mainland],
  }

  const projection: GeoProjection = geoMercator().fitSize(fitSize, mainlandFC)

  // Raw projection has Y growing southward; flip so positive Y = north.
  const projectRaw: ProjectFn = (lng, lat) => {
    const r = projection([lng, lat])
    if (!r) return [0, 0]
    return [r[0], -r[1]]
  }

  // Compute bbox of projected mainland to center on origin.
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

  // Build a Shape (with optional holes) per polygon ring.
  const shapes: THREE.Shape[] = []
  const collectPolygon = (polygon: Polygon) => {
    if (polygon.coordinates.length === 0) return
    const outer = ringToShape(polygon.coordinates[0], project)
    if (!outer) return
    for (let i = 1; i < polygon.coordinates.length; i++) {
      const hole = ringToPath(polygon.coordinates[i], project)
      if (hole) outer.holes.push(hole)
    }
    shapes.push(outer)
  }
  if (mainland.geometry.type === 'Polygon') {
    collectPolygon(mainland.geometry)
  } else if (mainland.geometry.type === 'MultiPolygon') {
    for (const poly of mainland.geometry.coordinates) {
      collectPolygon({ type: 'Polygon', coordinates: poly })
    }
  }

  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 1,
  })

  // The shape lies in XY with extrusion along +Z. Rotate so it lies on the XZ
  // ground plane with extrusion going up (+Y) and north pointing into -Z.
  geometry.rotateX(-Math.PI / 2)
  geometry.computeVertexNormals()

  return {
    geometry,
    bounds: { width: maxX - minX, height: maxY - minY },
    project,
  }
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

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
  // Fallback: largest by rough bbox area.
  let best = geojson.features[0]
  let bestArea = 0
  for (const f of geojson.features) {
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
