import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { HistoricalEra } from '@/data/types'
import { cn } from '@/lib/utils'
import { EraMiniMap } from './EraMiniMap'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

interface TimelineEraProps {
  era: HistoricalEra
  side: 'left' | 'right'
  onActivate?: () => void
}

export function TimelineEra({ era, side, onActivate }: TimelineEraProps) {
  const reduced = useReducedMotion()
  const [expanded, setExpanded] = useState(false)

  const fromX = reduced ? 0 : side === 'left' ? -48 : 48

  return (
    <article
      id={`era-${era.order}`}
      data-era-order={era.order}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={cn(
        'relative md:grid md:grid-cols-[1fr_64px_1fr] md:gap-0',
        'pl-14 md:pl-0',
      )}
    >
      {/* Center dot — sits on the timeline rail */}
      <div
        aria-hidden
        className="absolute top-7 left-3 md:top-9 md:left-1/2 md:-translate-x-1/2"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-brand-red/15" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-brand-red ring-4 ring-bg-cream" />
        </span>
      </div>

      {/* Empty column for desktop alternating layout */}
      {side === 'right' && <div className="hidden md:block" />}
      {/* Center spacer column */}
      <div className="hidden md:block" />

      <motion.div
        initial={{ opacity: 0, x: fromX, y: 24 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        onViewportEnter={onActivate}
        className={cn(
          'relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-7',
          side === 'left' ? 'md:col-start-1 md:text-right' : 'md:col-start-3',
        )}
      >
        {/* Connector arrow from card edge to center dot (desktop only) */}
        <div
          aria-hidden
          className={cn(
            'absolute top-9 hidden h-px w-8 bg-neutral-200 md:block',
            side === 'left' ? 'right-[-32px]' : 'left-[-32px]',
          )}
        />

        <div
          className={cn(
            'mb-3 flex items-baseline gap-3',
            side === 'left' ? 'md:justify-end' : 'md:justify-start',
          )}
        >
          <span className="font-display inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-brand-red px-2 font-mono text-xs font-bold text-white">
            {era.order}
          </span>
          <span className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
            {era.period}
          </span>
        </div>

        <h3 className="font-display mb-3 text-2xl leading-tight font-bold text-neutral-900 md:text-3xl">
          {era.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-neutral-700 md:text-base">
          {era.context}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={`era-${era.order}-details`}
          className={cn(
            'inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-brand-navy/20 bg-brand-navy/5 px-3 py-1.5 font-mono text-xs font-medium text-brand-navy transition-colors hover:bg-brand-navy hover:text-white',
            side === 'left' && 'md:ml-auto md:flex',
          )}
        >
          {expanded ? 'Thu gọn' : 'Xem chi tiết'}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
            className={cn(
              'transition-transform duration-200',
              expanded && 'rotate-180',
            )}
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`era-${era.order}-details`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              className={cn(
                'overflow-hidden md:text-left',
                side === 'left' && 'md:text-left',
              )}
            >
              <div className="mt-5 space-y-5 border-t border-neutral-200 pt-5 text-left">
                <DetailBlock label="Tình hình dân tộc" text={era.ethnicityState} />
                <DetailBlock label="Tình hình tôn giáo" text={era.religionState} />

                <div>
                  <h4 className="mb-2 font-mono text-[11px] font-semibold tracking-wider text-brand-red uppercase">
                    Sự kiện chính
                  </h4>
                  <ul className="space-y-2">
                    {era.keyEvents.map((ev, i) => (
                      <li
                        key={`${era.id}-ev-${i}`}
                        className="flex gap-3 text-sm leading-relaxed text-neutral-700"
                      >
                        <span className="font-display shrink-0 font-bold text-brand-navy">
                          {ev.year}
                        </span>
                        <span>{ev.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {era.theoryConnection && (
                  <div className="rounded-lg border-l-4 border-brand-red bg-brand-red/5 px-4 py-3">
                    <div className="mb-1 font-mono text-[10px] font-semibold tracking-wider text-brand-red uppercase">
                      Liên hệ lý luận
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-800">
                      {era.theoryConnection}
                    </p>
                  </div>
                )}

                {era.order === 6 && <EraMiniMap />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </article>
  )
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="mb-1.5 font-mono text-[11px] font-semibold tracking-wider text-brand-navy uppercase">
        {label}
      </h4>
      <p className="text-sm leading-relaxed text-neutral-700">{text}</p>
    </div>
  )
}
