import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { caseStudies } from '@/data'
import type { CaseStudy } from '@/data/types'
import { cn } from '@/lib/utils'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

const STEPS: ReadonlyArray<{
  key: keyof Pick<CaseStudy, 'background' | 'events' | 'nature' | 'resolution' | 'lesson'>
  label: string
  tone: 'context' | 'events' | 'nature' | 'resolve' | 'lesson'
}> = [
  { key: 'background', label: 'Bối cảnh', tone: 'context' },
  { key: 'events', label: 'Diễn biến', tone: 'events' },
  { key: 'nature', label: 'Bản chất', tone: 'nature' },
  { key: 'resolution', label: 'Xử lý', tone: 'resolve' },
  { key: 'lesson', label: 'Bài học', tone: 'lesson' },
]

const TONE_CLASSES: Record<(typeof STEPS)[number]['tone'], string> = {
  context: 'bg-neutral-500',
  events: 'bg-amber-500',
  nature: 'bg-brand-red',
  resolve: 'bg-brand-navy',
  lesson: 'bg-emerald-600',
}

export function CaseStudies() {
  const [openId, setOpenId] = useState<string | null>(caseStudies[0]?.id ?? null)

  return (
    <section
      id="cases"
      className="relative border-t border-neutral-200/70 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 font-mono text-xs font-medium tracking-wide text-amber-800 uppercase">
            <WarningIcon />
            Section 5 · Cảnh giác diễn biến hòa bình
          </div>
          <h2 className="font-display mb-3 text-3xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl">
            4 case study âm mưu chia rẽ
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            Bốn sự kiện thực tế cho thấy các thế lực thù địch đã lợi dụng vấn đề
            dân tộc và tôn giáo ra sao — và nhân dân Việt Nam đã ứng phó như thế
            nào.
          </p>
        </header>

        <div className="grid gap-5 md:gap-6">
          {caseStudies.map((c, idx) => (
            <CaseCard
              key={c.id}
              caseStudy={c}
              index={idx + 1}
              open={openId === c.id}
              onToggle={() =>
                setOpenId((prev) => (prev === c.id ? null : c.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CaseCardProps {
  caseStudy: CaseStudy
  index: number
  open: boolean
  onToggle: () => void
}

function CaseCard({ caseStudy, index, open, onToggle }: CaseCardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      className={cn(
        'overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors',
        open ? 'border-amber-300' : 'border-neutral-200',
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`case-${caseStudy.id}-body`}
        className="flex w-full cursor-pointer items-start gap-4 px-5 py-5 text-left md:px-7 md:py-6"
      >
        <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 font-mono text-sm font-bold text-brand-red md:h-12 md:w-12 md:text-base">
          0{index}
        </span>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider text-amber-800 uppercase">
              <WarningIcon />
              Cảnh giác
            </span>
            <span className="font-mono text-[11px] tracking-wider text-neutral-500 uppercase">
              {caseStudy.year} · {caseStudy.location}
            </span>
          </div>
          <h3 className="font-display text-xl leading-tight font-bold text-neutral-900 md:text-2xl">
            {caseStudy.title}
          </h3>
        </div>
        <span
          aria-hidden
          className={cn(
            'ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-transform',
            open && 'rotate-180 border-brand-red bg-brand-red/5 text-brand-red',
          )}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`case-${caseStudy.id}-body`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="overflow-hidden"
          >
            <div className="border-t border-neutral-200 px-5 pt-6 pb-7 md:px-7 md:pt-8 md:pb-9">
              <ol className="relative space-y-6 md:space-y-7">
                <div
                  aria-hidden
                  className="absolute top-2 bottom-2 left-[15px] w-px bg-neutral-200"
                />
                {STEPS.map((step) => (
                  <li
                    key={step.key}
                    className="relative grid grid-cols-[32px_1fr] gap-4 md:grid-cols-[40px_1fr] md:gap-5"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        'relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-sm ring-4 ring-white md:h-10 md:w-10',
                        TONE_CLASSES[step.tone],
                      )}
                    >
                      <StepIcon tone={step.tone} />
                    </span>
                    <div className="min-w-0 pt-1">
                      <h4 className="mb-1 font-mono text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
                        {step.label}
                      </h4>
                      <p className="text-sm leading-relaxed text-neutral-800 md:text-base">
                        {caseStudy[step.key]}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

function WarningIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className="-mt-px"
    >
      <path
        d="M6 1.2 11 10.5H1L6 1.2Zm0 3v3m0 1.6v.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function StepIcon({ tone }: { tone: (typeof STEPS)[number]['tone'] }) {
  switch (tone) {
    case 'context':
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <circle cx="7" cy="7" r="5.2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M7 4.5v3M7 9.3v.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'events':
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M7 1.6 8.6 5l3.4.4-2.5 2.4.7 3.4L7 9.6l-3.2 1.6.7-3.4L2 5.4l3.4-.4L7 1.6Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'nature':
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M2.5 7c0-2.5 2-4.5 4.5-4.5S11.5 4.5 11.5 7 9.5 11.5 7 11.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7 11.5 5 9.5M7 11.5l-2 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'resolve':
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="m3 7.3 2.7 2.7L11 4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'lesson':
    default:
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M7 2.3v3.4m0 0 3 1.8M7 5.7l-3 1.8m3 3v1.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
  }
}
