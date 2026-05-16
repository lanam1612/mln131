import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Edges, OrbitControls } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'
import * as THREE from 'three'
import type { ExtrudedMap } from '@/lib/geo'
import { regions } from '@/data'
import type { RegionId } from '@/data/types'
import { RegionHotspot } from './RegionHotspot'

interface VietnamMap3DProps {
  map: ExtrudedMap
  activeRegionId: RegionId | null
  onSelectRegion: (id: RegionId) => void
}

const DEPTH = 0.35

export function VietnamMap3D({
  map,
  activeRegionId,
  onSelectRegion,
}: VietnamMap3DProps) {
  const reduced = useReducedMotion() ?? false

  // Compute hotspot world positions once: [x, depth + lift, -y_north].
  const hotspots = useMemo(
    () =>
      regions.map((r) => {
        const [x, y] = map.project(r.coordinates[0], r.coordinates[1])
        const position: [number, number, number] = [x, DEPTH + 0.08, -y]
        return { region: r, position }
      }),
    [map],
  )

  return (
    <Canvas
      shadows
      camera={{ position: [0, 7, 8.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.55} />
      <hemisphereLight args={['#FDF6EC', '#0F4C75', 0.35]} />
      <directionalLight
        position={[6, 10, 5]}
        intensity={1.05}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-6, 4, -4]} intensity={0.25} />

      <Suspense fallback={null}>
        <CountryMesh geometry={map.geometry} />
        {hotspots.map(({ region, position }) => (
          <RegionHotspot
            key={region.id}
            region={region}
            position={position}
            isActive={activeRegionId === region.id}
            onSelect={onSelectRegion}
            reduced={reduced}
          />
        ))}
        {/* Ground shadow plane */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.001, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 22]} />
          <shadowMaterial opacity={0.18} />
        </mesh>
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        autoRotate={!reduced}
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.4}
        minDistance={6}
        maxDistance={14}
        target={[0, 0, 0]}
      />
    </Canvas>
  )
}

function CountryMesh({ geometry }: { geometry: THREE.ExtrudeGeometry }) {
  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial
        color="#F4ECDC"
        roughness={0.72}
        metalness={0.08}
        side={THREE.DoubleSide}
      />
      <Edges color="#DA251D" threshold={20} lineWidth={1} />
    </mesh>
  )
}
