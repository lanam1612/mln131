import { useRef, useState } from 'react'
import { useFrame, type ThreeEvent } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import type { Region } from '@/data/types'

interface RegionHotspotProps {
  region: Region
  position: [number, number, number]
  isActive: boolean
  onSelect: (id: Region['id']) => void
  reduced: boolean
}

export function RegionHotspot({
  region,
  position,
  isActive,
  onSelect,
  reduced,
}: RegionHotspotProps) {
  const [hovered, setHovered] = useState(false)
  const ringRef = useRef<THREE.Mesh>(null)
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (reduced) return
    if (ringRef.current) {
      const t = (clock.elapsedTime * 0.7) % 1
      const scale = 1 + t * 2.2
      ringRef.current.scale.set(scale, scale, 1)
      const mat = ringRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.55 * (1 - t)
    }
    if (sphereRef.current) {
      const target = hovered || isActive ? 1.35 : 1
      sphereRef.current.scale.lerp(
        new THREE.Vector3(target, target, target),
        0.15,
      )
    }
  })

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }
  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setHovered(false)
    document.body.style.cursor = ''
  }
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    onSelect(region.id)
  }

  return (
    <group position={position}>
      {/* Pulse ring on the ground plane */}
      {!reduced && (
        <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
          <ringGeometry args={[0.13, 0.18, 48]} />
          <meshBasicMaterial
            color={region.color}
            transparent
            opacity={0.5}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Hotspot sphere */}
      <mesh
        ref={sphereRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        castShadow
      >
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshStandardMaterial
          color={region.color}
          emissive={region.color}
          emissiveIntensity={isActive ? 0.9 : 0.35}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Floating label */}
      <Html
        position={[0, 0.45, 0]}
        center
        distanceFactor={6}
        zIndexRange={[10, 0]}
      >
        <button
          type="button"
          onClick={() => onSelect(region.id)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label={`Mở chi tiết vùng ${region.name}`}
          className="pointer-events-auto inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-display text-xs font-semibold tracking-tight whitespace-nowrap text-brand-navy shadow-md ring-1 ring-neutral-200 transition-all duration-200 hover:bg-white hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red md:text-sm"
          style={{
            transform: hovered || isActive ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: region.color }}
            aria-hidden
          />
          {region.name}
        </button>
      </Html>
    </group>
  )
}
