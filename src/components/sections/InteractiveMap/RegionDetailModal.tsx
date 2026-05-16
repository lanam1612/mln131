import { useMemo, useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Tabs, type TabItem } from '@/components/ui/Tabs'
import { Button } from '@/components/ui/Button'
import type { Region } from '@/data/types'
import { cn } from '@/lib/utils'

const TAB_ITEMS: TabItem[] = [
  { id: 'overview', label: 'Tổng quan', shortLabel: 'Tổng quan' },
  { id: 'ethnicities', label: 'Dân tộc', shortLabel: 'Dân tộc' },
  { id: 'religions', label: 'Tôn giáo', shortLabel: 'Tôn giáo' },
  { id: 'security', label: 'Vấn đề an ninh', shortLabel: 'An ninh' },
  { id: 'policies', label: 'Chính sách', shortLabel: 'Chính sách' },
]

interface RegionDetailModalProps {
  region: Region | null
  open: boolean
  onClose: () => void
  onCompare: () => void
}

export function RegionDetailModal({
  region,
  open,
  onClose,
  onCompare,
}: RegionDetailModalProps) {
  const [activeTab, setActiveTab] = useState<string>('overview')
  const [prevRegionId, setPrevRegionId] = useState<string | undefined>(
    region?.id,
  )
  // Reset tab when switching regions — React-recommended render-time reset.
  if (region?.id !== prevRegionId) {
    setPrevRegionId(region?.id)
    setActiveTab('overview')
  }

  const titleAdornment = useMemo(() => {
    if (!region) return null
    return (
      <span
        className="inline-block h-3 w-3 shrink-0 rounded-full ring-2 ring-white"
        style={{ backgroundColor: region.color }}
        aria-hidden
      />
    )
  }, [region])

  if (!region) return null

  return (
    <Modal
      open={open}
      onClose={onClose}
      variant="side"
      title={`${region.name} — ${region.scope}`}
      titleAdornment={titleAdornment}
      labelledBy={`region-modal-${region.id}`}
    >
      <div className="border-b border-neutral-200 px-6 pt-2 md:px-8">
        <Tabs
          items={TAB_ITEMS}
          activeId={activeTab}
          onChange={setActiveTab}
          ariaLabel="Thông tin chi tiết vùng"
          idPrefix={`region-tab-${region.id}`}
          className="border-b-0"
        />
      </div>

      <div className="px-6 py-6 md:px-8 md:py-8">
        {activeTab === 'overview' && <OverviewTab region={region} />}
        {activeTab === 'ethnicities' && <EthnicitiesTab region={region} />}
        {activeTab === 'religions' && <ReligionsTab region={region} />}
        {activeTab === 'security' && <SecurityTab region={region} />}
        {activeTab === 'policies' && <PoliciesTab region={region} />}
      </div>

      <footer className="sticky bottom-0 mt-auto border-t border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur md:px-8">
        <Button variant="secondary" size="md" onClick={onCompare}>
          So sánh 4 vùng
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M3 8h10m0 0l-4-4m4 4l-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </footer>
    </Modal>
  )
}

// ---------------------------------------------------------------------------
// Tab panels
// ---------------------------------------------------------------------------

function OverviewTab({ region }: { region: Region }) {
  return (
    <div className="space-y-6">
      <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
        {region.overview}
      </p>
      <ImageGallery region={region} />
    </div>
  )
}

function EthnicitiesTab({ region }: { region: Region }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-500 md:text-base">
        {region.ethnicities.length} dân tộc tiêu biểu sinh sống tại{' '}
        {region.name}.
      </p>
      <ul className="space-y-3">
        {region.ethnicities.map((e) => (
          <li
            key={e.name}
            className="rounded-lg border border-neutral-200 bg-white p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-base font-bold text-neutral-900 md:text-lg">
                {e.name}
              </h3>
              <span className="font-mono text-xs text-brand-navy md:text-sm">
                {e.population}
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700 md:text-base">
              {e.characteristics}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ReligionsTab({ region }: { region: Region }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-500 md:text-base">
        Các tôn giáo và tín ngưỡng đang hiện diện tại {region.name}.
      </p>
      <ul className="space-y-3">
        {region.religions.map((r) => (
          <li
            key={r.name}
            className="rounded-lg border border-neutral-200 bg-white p-4"
          >
            <h3 className="font-display text-base font-bold text-neutral-900 md:text-lg">
              {r.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700 md:text-base">
              {r.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SecurityTab({ region }: { region: Region }) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 text-sm text-amber-900 md:text-base">
        Các vấn đề an ninh – chia rẽ dân tộc/tôn giáo từng và đang xảy ra tại{' '}
        {region.name}. Lưu ý phân biệt rõ giữa hoạt động tôn giáo chân chính và
        sự lợi dụng của thế lực phản động.
      </div>
      <ul className="space-y-4">
        {region.securityIssues.map((s, i) => (
          <li
            key={i}
            className={cn(
              'rounded-lg border bg-white p-4',
              s.era === 'historical'
                ? 'border-neutral-300'
                : 'border-brand-red/30',
            )}
          >
            <div className="mb-1 flex items-center gap-2">
              <span
                className={cn(
                  'inline-block rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide uppercase',
                  s.era === 'historical'
                    ? 'bg-neutral-200 text-neutral-700'
                    : 'bg-brand-red/10 text-brand-red',
                )}
              >
                {s.era === 'historical' ? 'Lịch sử' : 'Hiện đại'}
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-neutral-900 md:text-lg">
              {s.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700 md:text-base">
              {s.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PoliciesTab({ region }: { region: Region }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-neutral-500 md:text-base">
        Chính sách của Đảng và Nhà nước đã và đang triển khai tại {region.name}.
      </p>
      <ol className="space-y-3">
        {region.policies.map((p, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-4"
          >
            <span
              className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 font-mono text-xs font-bold text-brand-navy"
              aria-hidden
            >
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
              {p}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function ImageGallery({ region }: { region: Region }) {
  if (region.images.length === 0) return null
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {region.images.map((img) => (
        <figure
          key={img.src}
          className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <figcaption className="px-3 py-2 text-xs text-neutral-600 md:text-sm">
            {img.alt}
            {img.source && (
              <span className="block text-[11px] text-neutral-400 italic">
                Nguồn: {img.source}
              </span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
