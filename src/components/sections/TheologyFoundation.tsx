import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Tabs, type TabItem } from '@/components/ui/Tabs'
import { theologyTabs } from '@/data'
import type { TheoryTab } from '@/data/types'
import { BlockRender } from './_shared/theoryBlocks'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
const QUERY_KEY = 'theology'

export function TheologyFoundation() {
  const items: TabItem[] = useMemo(
    () =>
      theologyTabs.map((t) => ({
        id: t.id,
        label: t.title,
        shortLabel: t.shortTitle,
      })),
    [],
  )
  const validIds = useMemo(() => items.map((i) => i.id), [items])

  const [activeId, setActiveId] = useState<string>(
    () => readActiveFromUrl(validIds) ?? theologyTabs[0].id,
  )

  // Sync URL ?theology=<1-based index> on change.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const idx = theologyTabs.findIndex((t) => t.id === activeId)
    if (idx === -1) return
    const url = new URL(window.location.href)
    const desired = String(idx + 1)
    if (url.searchParams.get(QUERY_KEY) === desired) return
    url.searchParams.set(QUERY_KEY, desired)
    window.history.replaceState({}, '', url)
  }, [activeId])

  useEffect(() => {
    const onPop = () => {
      const id = readActiveFromUrl(validIds)
      if (id) setActiveId(id)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [validIds])

  const active = theologyTabs.find((t) => t.id === activeId) ?? theologyTabs[0]

  return (
    <section
      id="theology"
      className="relative border-t border-neutral-200/70 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader />
        <Tabs
          items={items}
          activeId={activeId}
          onChange={setActiveId}
          ariaLabel="Bốn tab nền tảng lý luận tôn giáo"
          idPrefix="theology-tab"
          className="mb-10 md:mb-14"
        />
        <div
          role="tabpanel"
          id={`theology-tab-panel-${active.id}`}
          aria-labelledby={`theology-tab-${active.id}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            >
              <h3 className="font-display mb-6 text-2xl leading-tight font-bold tracking-tight text-neutral-900 md:mb-8 md:text-3xl">
                {active.title}
              </h3>
              <DefaultTabContent tab={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-3 inline-block rounded-full bg-brand-navy/10 px-3 py-1 font-mono text-xs font-medium tracking-wide text-brand-navy uppercase">
        Phần II · Vấn đề Tôn giáo
      </div>
      <h2 className="font-display mb-4 text-3xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl">
        Lý luận về tôn giáo và chính sách của Đảng
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
        Bản chất – nguồn gốc – tính chất của tôn giáo, 4 nguyên tắc giải quyết
        vấn đề tôn giáo theo chủ nghĩa Mác-Lênin, 5 đặc điểm tôn giáo ở Việt
        Nam và chính sách tôn giáo của Đảng, Nhà nước.
      </p>
    </div>
  )
}

function DefaultTabContent({ tab }: { tab: TheoryTab }) {
  return (
    <div className="space-y-5 md:space-y-6">
      {tab.content.map((block, i) => (
        <BlockRender key={i} block={block} />
      ))}
    </div>
  )
}

function readActiveFromUrl(validIds: string[]): string | null {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const raw = params.get(QUERY_KEY)
  if (!raw) return null
  const idx = parseInt(raw, 10) - 1
  if (Number.isNaN(idx) || idx < 0 || idx >= validIds.length) return null
  return validIds[idx]
}
