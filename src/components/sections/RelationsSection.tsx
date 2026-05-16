import { motion, useReducedMotion } from 'framer-motion'
import { relationsIntro, relationsPanels } from '@/data'
import { cn } from '@/lib/utils'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function RelationsSection() {
  const reduced = useReducedMotion()

  return (
    <section
      id="relations"
      className="relative border-t border-neutral-200/70 bg-gradient-to-b from-bg-cream to-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14">
          <div className="mb-3 inline-block rounded-full bg-brand-red/10 px-3 py-1 font-mono text-xs font-medium tracking-wide text-brand-red uppercase">
            Phần III · Quan hệ Dân tộc – Tôn giáo
          </div>
          <h2 className="font-display mb-4 text-3xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl">
            Quan hệ Dân tộc – Tôn giáo ở Việt Nam
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {relationsIntro}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {relationsPanels.map((panel, panelIdx) => (
            <motion.article
              key={panel.id}
              initial={reduced ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: panelIdx * 0.15,
                ease: EASE_OUT_EXPO,
              }}
              className={cn(
                'flex flex-col rounded-2xl border p-6 md:p-8',
                panel.id === 'features'
                  ? 'border-brand-navy/30 bg-white shadow-sm'
                  : 'border-brand-red/30 bg-gradient-to-br from-brand-red/5 to-brand-yellow/5 shadow-md',
              )}
            >
              <div
                className={cn(
                  'mb-2 inline-block w-fit rounded-full px-3 py-1 font-mono text-[11px] font-semibold tracking-wider uppercase',
                  panel.id === 'features'
                    ? 'bg-brand-navy/10 text-brand-navy'
                    : 'bg-brand-red/15 text-brand-red',
                )}
              >
                {panel.eyebrow}
              </div>
              <h3
                className={cn(
                  'font-display mb-6 text-xl leading-snug font-bold tracking-tight md:text-2xl',
                  panel.id === 'features'
                    ? 'text-neutral-900'
                    : 'text-brand-red',
                )}
              >
                {panel.title}
              </h3>

              <ol className="space-y-5">
                {panel.items.map((item, i) => (
                  <li key={item.heading} className="flex gap-4">
                    <span
                      className={cn(
                        'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold',
                        panel.id === 'features'
                          ? 'bg-brand-navy/10 text-brand-navy'
                          : 'bg-brand-red text-white',
                      )}
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-display mb-1 text-base font-semibold text-neutral-900 md:text-lg">
                        {item.heading}
                      </h4>
                      <p className="text-sm leading-relaxed text-neutral-700 md:text-[15px]">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-neutral-500 md:text-base">
          Giải quyết tốt mối quan hệ dân tộc – tôn giáo là cơ sở để{' '}
          <strong className="font-semibold text-brand-red">
            củng cố khối đại đoàn kết toàn dân tộc
          </strong>
          , bảo đảm ổn định chính trị – xã hội và phát triển bền vững đất nước.
        </p>
      </div>
    </section>
  )
}
