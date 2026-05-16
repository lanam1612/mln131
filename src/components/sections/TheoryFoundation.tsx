import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Tabs, type TabItem } from '@/components/ui/Tabs'
import { theoryTabs } from '@/data'
import type { TheoryTab } from '@/data/types'
import { cn } from '@/lib/utils'
import { BlockRender } from './_shared/theoryBlocks'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function TheoryFoundation() {
  const items: TabItem[] = useMemo(
    () =>
      theoryTabs.map((t) => ({
        id: t.id,
        label: t.title,
        shortLabel: t.shortTitle,
      })),
    [],
  )
  const validIds = useMemo(() => items.map((i) => i.id), [items])

  const [activeId, setActiveId] = useState<string>(
    () => readActiveFromUrl(validIds) ?? theoryTabs[0].id,
  )

  // Sync URL ?tab=<1-based index> on change, preserving hash.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const idx = theoryTabs.findIndex((t) => t.id === activeId)
    if (idx === -1) return
    const url = new URL(window.location.href)
    const desired = String(idx + 1)
    if (url.searchParams.get('tab') === desired) return
    url.searchParams.set('tab', desired)
    window.history.replaceState({}, '', url)
  }, [activeId])

  // Sync from browser back/forward.
  useEffect(() => {
    const onPop = () => {
      const id = readActiveFromUrl(validIds)
      if (id) setActiveId(id)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [validIds])

  const active = theoryTabs.find((t) => t.id === activeId) ?? theoryTabs[0]

  return (
    <section
      id="theory"
      className="relative border-t border-neutral-200/70 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader />
        <Tabs
          items={items}
          activeId={activeId}
          onChange={setActiveId}
          ariaLabel="Bốn tab nền tảng lý luận"
          idPrefix="theory-tab"
          className="mb-10 md:mb-14"
        />
        <div
          role="tabpanel"
          id={`theory-tab-panel-${active.id}`}
          aria-labelledby={`theory-tab-${active.id}`}
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
              {active.id === 'cuong-linh-dan-toc' ? (
                <Tab3Visualization tab={active} />
              ) : (
                <DefaultTabContent tab={active} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section header
// ---------------------------------------------------------------------------

function SectionHeader() {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-3 inline-block rounded-full bg-brand-navy/10 px-3 py-1 font-mono text-xs font-medium tracking-wide text-brand-navy uppercase">
        Phần I · Vấn đề Dân tộc
      </div>
      <h2 className="font-display mb-4 text-3xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl">
        Lý luận về dân tộc và chính sách của Đảng
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
        Khái niệm, hai xu hướng phát triển, Cương lĩnh dân tộc của Lênin — và
        cách Đảng, Nhà nước Việt Nam cụ thể hóa thành 6 đặc điểm dân tộc Việt
        Nam cùng chính sách trên 5 lĩnh vực.
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Default renderer for tabs 1, 2, 4
// ---------------------------------------------------------------------------

function DefaultTabContent({ tab }: { tab: TheoryTab }) {
  return (
    <div className="space-y-5 md:space-y-6">
      {tab.content.map((block, i) => (
        <BlockRender key={i} block={block} />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Tab 3 — Special 3-pillar visualization for Cương lĩnh dân tộc
// ---------------------------------------------------------------------------

interface Pillar {
  icon: string
  title: string
  isCore: boolean
  bullets: string[]
  highlight?: string
}

function parsePillars(tab: TheoryTab): {
  intro: string | null
  pillars: Pillar[]
} {
  let intro: string | null = null
  const pillars: Pillar[] = []
  let current: Pillar | null = null

  for (const block of tab.content) {
    if (block.type === 'paragraph' && pillars.length === 0 && !current) {
      intro = block.text
      continue
    }
    if (block.type === 'heading' && block.level === 2) {
      const isCore = block.text.includes('⭐')
      const cleaned = block.text.replace(/\s*⭐\s*$/, '')
      const match = cleaned.match(/^(\S+)\s+(.*)$/)
      const icon = match ? match[1] : ''
      const title = match ? match[2] : cleaned
      current = { icon, title, isCore, bullets: [] }
      pillars.push(current)
      continue
    }
    if (!current) continue
    if (block.type === 'list') {
      current.bullets.push(...block.items)
    } else if (block.type === 'highlight') {
      current.highlight = block.text
    }
  }

  return { intro, pillars }
}

function Tab3Visualization({ tab }: { tab: TheoryTab }) {
  const reduced = useReducedMotion()
  const { intro, pillars } = useMemo(() => parsePillars(tab), [tab])

  return (
    <div>
      {intro && (
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
          {intro}
        </p>
      )}
      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {pillars.map((p, i) => (
          <PillarCard
            key={i}
            pillar={p}
            index={i}
            reduced={reduced ?? false}
          />
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-neutral-500 md:text-base">
        Ba nội dung có quan hệ biện chứng với nhau; trong đó{' '}
        <strong className="font-semibold text-brand-red">
          liên hiệp công nhân tất cả các dân tộc
        </strong>{' '}
        là tư tưởng cơ bản — có vai trò quyết định việc thực hiện hai nội dung
        còn lại.
      </p>
    </div>
  )
}

function PillarCard({
  pillar,
  index,
  reduced,
}: {
  pillar: Pillar
  index: number
  reduced: boolean
}) {
  return (
    <motion.article
      initial={reduced ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: EASE_OUT_EXPO,
      }}
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 md:p-7',
        pillar.isCore
          ? 'border-brand-red/40 bg-gradient-to-br from-brand-red/5 to-brand-yellow/5 shadow-md'
          : 'border-neutral-200 bg-white shadow-sm',
      )}
    >
      {pillar.isCore && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-brand-red px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-white uppercase">
          Tư tưởng cơ bản
        </span>
      )}

      <div className="mb-4 flex items-baseline gap-3">
        <span
          className="text-3xl leading-none md:text-4xl"
          aria-hidden
        >
          {pillar.icon}
        </span>
        <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
          Nội dung {index + 1}
        </span>
      </div>

      <h3
        className={cn(
          'font-display mb-4 text-lg leading-snug font-bold tracking-tight md:text-xl',
          pillar.isCore ? 'text-brand-red' : 'text-neutral-900',
        )}
      >
        {pillar.title}
      </h3>

      {pillar.highlight && (
        <p
          className={cn(
            'mb-4 rounded-md border-l-2 px-3 py-2 text-sm leading-relaxed italic',
            pillar.isCore
              ? 'border-brand-red/60 bg-white/60 text-neutral-800'
              : 'border-brand-navy/40 bg-brand-navy/5 text-brand-navy',
          )}
        >
          {pillar.highlight}
        </p>
      )}

      <ul className="space-y-2 text-sm leading-relaxed text-neutral-700 md:text-[15px]">
        {pillar.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span
              className={cn(
                'mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full',
                pillar.isCore ? 'bg-brand-red' : 'bg-brand-navy/60',
              )}
              aria-hidden
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readActiveFromUrl(validIds: string[]): string | null {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const raw = params.get('tab')
  if (!raw) return null
  const idx = parseInt(raw, 10) - 1
  if (Number.isNaN(idx) || idx < 0 || idx >= validIds.length) return null
  return validIds[idx]
}
