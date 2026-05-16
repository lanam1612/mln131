import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { regions } from '@/data'
import type { RegionId } from '@/data/types'
import { detectWebGL, useVietnamMap } from './useMapInteraction'
import { VietnamMap3D } from './VietnamMap3D'
import { Vietnam2DFallback } from './Vietnam2DFallback'
import { RegionDetailModal } from './RegionDetailModal'
import { ComparisonView } from './ComparisonView'
import { Button } from '@/components/ui/Button'

export function InteractiveMap() {
  const [activeRegionId, setActiveRegionId] = useState<RegionId | null>(null)
  const [comparisonOpen, setComparisonOpen] = useState(false)
  const mapResource = useVietnamMap()
  const webglAvailable = useMemo(() => detectWebGL(), [])

  const activeRegion = useMemo(
    () => regions.find((r) => r.id === activeRegionId) ?? null,
    [activeRegionId],
  )

  return (
    <section
      id="map"
      className="relative border-t border-neutral-200/70 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader onCompare={() => setComparisonOpen(true)} />

        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-bg-cream to-white shadow-sm">
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setActiveRegionId(r.id)}
                className="group inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-neutral-700 shadow-sm ring-1 ring-neutral-200 backdrop-blur transition-all hover:bg-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 md:text-xs"
                aria-label={`Mở chi tiết vùng ${r.name}`}
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: r.color }}
                  aria-hidden
                />
                {r.name}
              </button>
            ))}
          </div>

          <div className="h-[80vh] min-h-[600px] md:h-[88vh] md:min-h-[720px]">
            <MapStage
              status={mapResource.status}
              error={mapResource.error}
              webglAvailable={webglAvailable}
              hasGeometry={mapResource.data !== null}
            >
              {mapResource.data && webglAvailable ? (
                <VietnamMap3D
                  map={mapResource.data}
                  activeRegionId={activeRegionId}
                  onSelectRegion={setActiveRegionId}
                />
              ) : (
                <div className="flex h-full items-center justify-center p-6">
                  <Vietnam2DFallback
                    activeRegionId={activeRegionId}
                    onSelectRegion={setActiveRegionId}
                  />
                </div>
              )}
            </MapStage>
          </div>

          <div className="border-t border-neutral-200 bg-white/80 px-4 py-3 text-center font-mono text-[11px] tracking-wider text-neutral-500 uppercase backdrop-blur md:text-xs">
            Kéo để xoay · Cuộn để phóng to · Click 4 hotspot để mở chi tiết
          </div>
        </div>

        <Legend />
      </div>

      <RegionDetailModal
        region={activeRegion}
        open={activeRegion !== null}
        onClose={() => setActiveRegionId(null)}
        onCompare={() => {
          setActiveRegionId(null)
          setComparisonOpen(true)
        }}
      />

      <ComparisonView
        open={comparisonOpen}
        onClose={() => setComparisonOpen(false)}
      />
    </section>
  )
}

// ---------------------------------------------------------------------------

interface MapStageProps {
  status: 'loading' | 'ready' | 'error'
  error: string | null
  webglAvailable: boolean
  hasGeometry: boolean
  children: React.ReactNode
}

function MapStage({
  status,
  error,
  webglAvailable,
  hasGeometry,
  children,
}: MapStageProps) {
  if (status === 'loading') {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-neutral-500">
        <motion.div
          className="h-10 w-10 rounded-full border-2 border-brand-red border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="font-mono text-xs tracking-wider uppercase">
          Đang dựng bản đồ Việt Nam...
        </p>
      </div>
    )
  }

  if (status === 'error' || !hasGeometry) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
        <div className="rounded-full bg-amber-100 p-3 text-amber-700">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3 1.5 21.5h21L12 3Zm0 6v6m0 3v.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-sm text-neutral-700">
          Không tải được mô hình 3D — hiển thị bản đồ 2D dự phòng.
        </p>
        {error && (
          <p className="font-mono text-xs text-neutral-400">{error}</p>
        )}
        {!webglAvailable && (
          <p className="font-mono text-xs text-neutral-400">
            (Trình duyệt không hỗ trợ WebGL)
          </p>
        )}
      </div>
    )
  }

  return <>{children}</>
}

function SectionHeader({ onCompare }: { onCompare: () => void }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 inline-block rounded-full bg-brand-red/10 px-3 py-1 font-mono text-xs font-medium tracking-wide text-brand-red uppercase">
          Phần IV · Bản đồ tương tác
        </div>
        <h2 className="font-display mb-3 text-3xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl">
          4 vùng đất chiến lược
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Khám phá bản đồ 3D Việt Nam — click vào từng hotspot màu để mở panel
          chi tiết về dân tộc, tôn giáo, vấn đề an ninh và chính sách của mỗi
          vùng.
        </p>
      </div>
      <Button variant="secondary" size="md" onClick={onCompare}>
        So sánh 4 vùng
      </Button>
    </div>
  )
}

function Legend() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {regions.map((r) => (
        <li
          key={r.id}
          className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm"
        >
          <span
            className="inline-block h-3 w-3 shrink-0 rounded-full"
            style={{ backgroundColor: r.color }}
            aria-hidden
          />
          <span className="font-display font-semibold text-neutral-900">
            {r.name}
          </span>
        </li>
      ))}
    </ul>
  )
}
