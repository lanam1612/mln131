import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { timeline } from '@/data'
import { cn } from '@/lib/utils'
import { TimelineEra } from './TimelineEra'

export function TimelineHistory() {
  const [activeOrder, setActiveOrder] = useState<number>(timeline[0].order)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const reduced = useReducedMotion()

  // Track which era is closest to the viewport center, so the side rail can
  // highlight it. Using a manual scroll listener (not IntersectionObserver)
  // keeps the rule simple: pick whichever card's center is nearest to the
  // viewport's vertical midpoint.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>('[data-era-order]'),
    )
    if (cards.length === 0) return

    let raf = 0
    const update = () => {
      raf = 0
      const viewportMid = window.innerHeight / 2
      let bestOrder = timeline[0].order
      let bestDist = Number.POSITIVE_INFINITY
      for (const el of cards) {
        const r = el.getBoundingClientRect()
        const mid = r.top + r.height / 2
        const dist = Math.abs(mid - viewportMid)
        if (dist < bestDist) {
          bestDist = dist
          bestOrder = Number(el.dataset.eraOrder) || bestOrder
        }
      }
      setActiveOrder(bestOrder)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const handleJump = useCallback(
    (order: number) => {
      const el = document.getElementById(`era-${order}`)
      if (!el) return
      el.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'center',
      })
    },
    [reduced],
  )

  const progress = (activeOrder - 1) / (timeline.length - 1)

  return (
    <section
      id="timeline"
      className="relative border-t border-neutral-200/70 bg-bg-cream/40 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 md:mb-16 md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <div className="mb-3 inline-block rounded-full bg-brand-red/10 px-3 py-1 font-mono text-xs font-medium tracking-wide text-brand-red uppercase">
              Phần V · Hành trình lịch sử
            </div>
            <h2 className="font-display mb-3 text-3xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl">
              6 thời kỳ định hình Việt Nam
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Từ tiền sử dựng nước đến Đổi mới hội nhập — vấn đề dân tộc và tôn
              giáo diễn biến ra sao qua từng giai đoạn lịch sử.
            </p>
          </div>
        </header>

        <div className="md:grid md:grid-cols-[1fr_220px] md:gap-10 lg:gap-16">
          <div
            ref={rootRef}
            className="relative"
            aria-label="Trục thời gian 6 thời kỳ lịch sử Việt Nam"
          >
            {/* Vertical rail */}
            <div
              aria-hidden
              className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-brand-red/40 via-neutral-300 to-brand-red/40 md:left-1/2 md:-translate-x-1/2"
            />
            <div className="space-y-16 md:space-y-24">
              {timeline.map((era, idx) => (
                <TimelineEra
                  key={era.id}
                  era={era}
                  side={idx % 2 === 0 ? 'left' : 'right'}
                  onActivate={() => setActiveOrder(era.order)}
                />
              ))}
            </div>
          </div>

          <ProgressRail
            activeOrder={activeOrder}
            progress={progress}
            onJump={handleJump}
          />
        </div>
      </div>
    </section>
  )
}

interface ProgressRailProps {
  activeOrder: number
  progress: number
  onJump: (order: number) => void
}

function ProgressRail({ activeOrder, progress, onJump }: ProgressRailProps) {
  return (
    <aside
      aria-label="Chỉ báo tiến độ trục thời gian"
      className="sticky top-24 hidden h-fit md:block"
    >
      <div className="mb-4 font-mono text-[11px] tracking-widest text-neutral-500 uppercase">
        Thời kỳ {activeOrder} / {timeline.length}
      </div>
      <ol className="relative pl-6">
        <div
          aria-hidden
          className="absolute top-1.5 bottom-1.5 left-[7px] w-px bg-neutral-200"
        />
        <motion.div
          aria-hidden
          className="absolute top-1.5 left-[7px] w-px bg-brand-red"
          initial={false}
          animate={{ height: `calc(${progress * 100}% - ${progress * 3}px)` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: `${progress * 100}%` }}
        />
        {timeline.map((era) => {
          const active = era.order === activeOrder
          return (
            <li key={era.id} className="relative mb-4 last:mb-0">
              <button
                type="button"
                onClick={() => onJump(era.order)}
                className={cn(
                  'group flex w-full cursor-pointer items-start gap-3 rounded-md py-1 pr-2 text-left transition-colors',
                  active && 'text-neutral-900',
                )}
                aria-current={active ? 'true' : undefined}
              >
                <span
                  aria-hidden
                  className={cn(
                    'absolute top-2 left-[-22px] flex h-4 w-4 items-center justify-center',
                  )}
                >
                  <span
                    className={cn(
                      'h-2 w-2 rounded-full ring-2 ring-bg-cream transition-all',
                      active
                        ? 'scale-150 bg-brand-red'
                        : 'bg-neutral-300 group-hover:bg-brand-red/70',
                    )}
                  />
                </span>
                <span>
                  <span
                    className={cn(
                      'block font-mono text-[10px] tracking-wider uppercase',
                      active ? 'text-brand-red' : 'text-neutral-500',
                    )}
                  >
                    {era.period}
                  </span>
                  <span
                    className={cn(
                      'font-display block text-sm font-semibold leading-snug',
                      active ? 'text-neutral-900' : 'text-neutral-600',
                    )}
                  >
                    {era.title}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}
