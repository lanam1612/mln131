import { useEffect, useState } from 'react'
import type { FeatureCollection } from 'geojson'
import { buildExtrudedMap, type ExtrudedMap } from '@/lib/geo'

const GEOJSON_URL = '/assets/models/vietnam.geojson'

interface MapResource {
  status: 'loading' | 'ready' | 'error'
  data: ExtrudedMap | null
  error: string | null
}

/**
 * Loads the Vietnam GeoJSON once and builds the extruded Three.js geometry.
 * Returns the same instance on re-renders; tears down on unmount.
 */
export function useVietnamMap(): MapResource {
  const [state, setState] = useState<MapResource>({
    status: 'loading',
    data: null,
    error: null,
  })

  useEffect(() => {
    let cancelled = false
    let mapInstance: ExtrudedMap | null = null

    fetch(GEOJSON_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<FeatureCollection>
      })
      .then((geojson) => {
        if (cancelled) return
        try {
          mapInstance = buildExtrudedMap(geojson, {
            fitSize: [10, 14],
            depth: 0.35,
            bevel: 0.015,
          })
          setState({ status: 'ready', data: mapInstance, error: null })
        } catch (err) {
          setState({
            status: 'error',
            data: null,
            error: err instanceof Error ? err.message : 'Lỗi xử lý GeoJSON',
          })
        }
      })
      .catch((err) => {
        if (cancelled) return
        setState({
          status: 'error',
          data: null,
          error:
            err instanceof Error
              ? err.message
              : 'Không tải được file bản đồ',
        })
      })

    return () => {
      cancelled = true
      mapInstance?.geometry.dispose()
    }
  }, [])

  return state
}

export function detectWebGL(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    return Boolean(gl)
  } catch {
    return false
  }
}
