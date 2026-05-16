import { AnimatePresence, motion } from 'framer-motion'
import type { QuizQuestion as QuizQuestionType } from '@/data/types'
import { cn } from '@/lib/utils'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

interface QuizQuestionProps {
  question: QuizQuestionType
  index: number
  total: number
  selected: number | null
  revealed: boolean
  onAnswer: (choice: number) => void
  onNext: () => void
}

export function QuizQuestion({
  question,
  index,
  total,
  selected,
  revealed,
  onAnswer,
  onNext,
}: QuizQuestionProps) {
  const isLast = index === total - 1

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
          Câu {index + 1} / {total}
        </span>
        <ProgressBar value={(index + (revealed ? 1 : 0)) / total} />
      </div>

      <h3 className="font-display mb-6 text-xl leading-snug font-semibold text-neutral-900 md:text-2xl">
        {question.question}
      </h3>

      <ul className="mb-6 grid gap-2.5" role="radiogroup">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctIndex
          const isSelected = selected === i
          const showCorrect = revealed && isCorrect
          const showWrong = revealed && isSelected && !isCorrect

          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => onAnswer(i)}
                disabled={revealed}
                role="radio"
                aria-checked={isSelected}
                className={cn(
                  'flex w-full cursor-pointer items-start gap-3 rounded-xl border-2 px-4 py-3.5 text-left text-sm transition-all md:text-base',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40',
                  !revealed &&
                    'border-neutral-200 bg-white hover:border-brand-navy/40 hover:bg-brand-navy/5',
                  showCorrect &&
                    'border-emerald-500 bg-emerald-50 text-emerald-900',
                  showWrong && 'border-brand-red bg-brand-red/5 text-brand-red',
                  revealed && !isCorrect && !isSelected && 'opacity-60',
                  revealed && 'cursor-default',
                )}
              >
                <span
                  className={cn(
                    'font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold',
                    showCorrect && 'bg-emerald-500 text-white',
                    showWrong && 'bg-brand-red text-white',
                    !showCorrect &&
                      !showWrong &&
                      'bg-neutral-100 text-neutral-600',
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 leading-relaxed">{opt}</span>
                {showCorrect && <CheckIcon />}
                {showWrong && <XIcon />}
              </button>
            </li>
          )
        })}
      </ul>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            className={cn(
              'mb-6 rounded-xl border-l-4 px-4 py-3',
              selected === question.correctIndex
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-brand-red bg-brand-red/5',
            )}
          >
            <div className="mb-1 font-mono text-[11px] font-semibold tracking-wider uppercase">
              {selected === question.correctIndex ? (
                <span className="text-emerald-700">Chính xác</span>
              ) : (
                <span className="text-brand-red">Chưa đúng</span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-neutral-800">
              {question.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {revealed && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onNext}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-red px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-red/90"
          >
            {isLast ? 'Xem kết quả' : 'Câu tiếp theo'}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M3 7h8m0 0-3-3m3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </motion.div>
  )
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-32 overflow-hidden rounded-full bg-neutral-200">
      <motion.div
        className="h-full rounded-full bg-brand-red"
        initial={false}
        animate={{ width: `${Math.min(100, Math.max(0, value * 100))}%` }}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      />
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="m4 9.4 3.2 3.2L14 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M5 5l8 8m0-8-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
