import { useState } from 'react'
import { motion } from 'framer-motion'
import type { QuizQuestion } from '@/data/types'
import { cn } from '@/lib/utils'
import { POINTS_PER_QUESTION, verdictFor } from './quizState'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

interface QuizResultProps {
  questions: QuizQuestion[]
  answers: (number | null)[]
  score: number
  onRestart: () => void
}

const TONE_BADGE: Record<'low' | 'mid' | 'high', string> = {
  low: 'bg-brand-red/10 text-brand-red',
  mid: 'bg-amber-100 text-amber-800',
  high: 'bg-emerald-100 text-emerald-800',
}

export function QuizResult({
  questions,
  answers,
  score,
  onRestart,
}: QuizResultProps) {
  const [reviewOpen, setReviewOpen] = useState(false)
  const total = questions.length * POINTS_PER_QUESTION
  const verdict = verdictFor(score, total)
  const correctCount = answers.filter(
    (a, i) => a === questions[i].correctIndex,
  ).length

  const handleShare = async () => {
    const url = new URL(window.location.href)
    url.hash = '#quiz'
    url.searchParams.set('score', String(score))
    const text = `Tôi đạt ${score}/${total} điểm trong quiz Dân tộc & Tôn giáo Việt Nam. ${url.toString()}`
    if (navigator.share) {
      try {
        await navigator.share({ title: 'VietMap Chronicle Quiz', text, url: url.toString() })
        return
      } catch {
        // user cancelled — fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(text)
      alert('Đã sao chép kết quả vào clipboard.')
    } catch {
      window.prompt('Sao chép link kết quả:', url.toString())
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      className="space-y-8"
    >
      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-bg-cream to-white p-6 text-center md:p-10">
        <div
          className={cn(
            'mb-4 inline-block rounded-full px-3 py-1 font-mono text-xs font-medium tracking-wider uppercase',
            TONE_BADGE[verdict.tone],
          )}
        >
          {verdict.label}
        </div>
        <div className="font-display mb-2 flex items-baseline justify-center gap-2 leading-none">
          <span className="text-6xl font-bold text-brand-navy md:text-7xl">
            {score}
          </span>
          <span className="text-2xl font-semibold text-neutral-400 md:text-3xl">
            / {total}
          </span>
        </div>
        <p className="mb-1 text-sm text-neutral-600">
          Đúng {correctCount}/{questions.length} câu
        </p>
        <p className="mx-auto max-w-md text-base leading-relaxed text-neutral-700">
          {verdict.blurb}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-red/90"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M11 3.5a4.5 4.5 0 1 1-4.5-1.5M11 2v2H9"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Làm lại
          </button>
          <button
            type="button"
            onClick={() => setReviewOpen((v) => !v)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-brand-navy px-6 py-2.5 text-sm font-medium text-brand-navy transition-all hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white"
          >
            {reviewOpen ? 'Ẩn review' : 'Xem lại câu sai'}
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:-translate-y-0.5 hover:text-brand-red"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M9.5 5V3l4 3.5-4 3.5V8c-4 0-6 1.5-6 4 0-3 2-7 6-7Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Chia sẻ kết quả
          </button>
        </div>
      </div>

      {reviewOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <h3 className="font-display text-xl font-bold text-neutral-900">
            Review từng câu
          </h3>
          <ol className="space-y-3">
            {questions.map((q, i) => {
              const userChoice = answers[i]
              const isCorrect = userChoice === q.correctIndex
              return (
                <li
                  key={q.id}
                  className={cn(
                    'rounded-xl border bg-white p-4 md:p-5',
                    isCorrect
                      ? 'border-emerald-200'
                      : 'border-brand-red/30 bg-brand-red/[0.03]',
                  )}
                >
                  <div className="mb-2 flex items-baseline gap-3">
                    <span
                      className={cn(
                        'font-mono text-[11px] font-semibold tracking-wider uppercase',
                        isCorrect ? 'text-emerald-700' : 'text-brand-red',
                      )}
                    >
                      Câu {i + 1} · {isCorrect ? 'Đúng' : 'Sai'}
                    </span>
                  </div>
                  <p className="mb-3 text-sm font-medium text-neutral-900 md:text-base">
                    {q.question}
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="text-neutral-700">
                      <span className="font-mono text-xs text-neutral-500">
                        Đáp án bạn chọn:{' '}
                      </span>
                      {userChoice === null
                        ? 'Bỏ qua'
                        : q.options[userChoice]}
                    </div>
                    {!isCorrect && (
                      <div className="text-emerald-700">
                        <span className="font-mono text-xs text-emerald-600">
                          Đáp án đúng:{' '}
                        </span>
                        {q.options[q.correctIndex]}
                      </div>
                    )}
                  </div>
                  <p className="mt-3 border-t border-neutral-200/70 pt-3 text-sm leading-relaxed text-neutral-700">
                    {q.explanation}
                  </p>
                </li>
              )
            })}
          </ol>
        </motion.div>
      )}
    </motion.div>
  )
}
