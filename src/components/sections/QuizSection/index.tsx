import { useEffect, useReducer, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { quizQuestions } from '@/data'
import {
  computeScore,
  makeInitialState,
  POINTS_PER_QUESTION,
  quizReducer,
} from './quizState'
import { QuizQuestion } from './QuizQuestion'
import { QuizResult } from './QuizResult'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
const STORAGE_KEY = 'vietmap.quiz.lastResult.v1'

interface StoredResult {
  answers: (number | null)[]
  score: number
  savedAt: string
}

export function QuizSection() {
  const [state, dispatch] = useReducer(
    quizReducer,
    quizQuestions.length,
    makeInitialState,
  )

  // Restore the most recent finished result on mount so users can re-open the
  // page and still see their score.
  const hydrated = useRef(false)
  useEffect(() => {
    if (hydrated.current) return
    hydrated.current = true
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as StoredResult
      if (
        Array.isArray(parsed.answers) &&
        parsed.answers.length === quizQuestions.length
      ) {
        dispatch({
          type: 'restore',
          state: {
            phase: 'finished',
            currentIndex: quizQuestions.length - 1,
            answers: parsed.answers,
            revealed: true,
          },
        })
      }
    } catch {
      // ignore corrupt entries
    }
  }, [])

  // Persist when transitioning into the finished phase.
  useEffect(() => {
    if (state.phase !== 'finished') return
    const score = computeScore(state.answers, quizQuestions)
    const payload: StoredResult = {
      answers: state.answers,
      score,
      savedAt: new Date().toISOString(),
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    } catch {
      // localStorage may be disabled — silently drop persistence
    }
  }, [state.phase, state.answers])

  const score = computeScore(state.answers, quizQuestions)
  const totalScore = quizQuestions.length * POINTS_PER_QUESTION

  return (
    <section
      id="quiz"
      className="relative border-t border-neutral-200/70 bg-bg-cream/40 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 md:mb-12">
          <div className="mb-3 inline-block rounded-full bg-brand-red/10 px-3 py-1 font-mono text-xs font-medium tracking-wide text-brand-red uppercase">
            Phần VII · Trắc nghiệm
          </div>
          <h2 className="font-display mb-3 text-3xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl">
            Quiz 15 câu — ôn nhanh chương 6
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            Mỗi câu 10 điểm, tối đa 150. Đáp án và giải thích hiện ra ngay sau
            mỗi lựa chọn — cách ôn nhanh nhất trước kỳ thi.
          </p>
        </header>

        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm md:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {state.phase === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="py-6 text-center md:py-10"
              >
                <h3 className="font-display mb-3 text-2xl font-bold text-neutral-900 md:text-3xl">
                  Sẵn sàng?
                </h3>
                <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
                  Bài quiz gồm {quizQuestions.length} câu hỏi trắc nghiệm 4 lựa
                  chọn. Tổng thời gian khoảng 5–8 phút.
                </p>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'start' })}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-base font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-red/90"
                >
                  Bắt đầu làm quiz
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8h10m0 0-4-4m4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </motion.div>
            )}

            {state.phase === 'playing' && (
              <motion.div
                key={`q-${state.currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <QuizQuestion
                  question={quizQuestions[state.currentIndex]}
                  index={state.currentIndex}
                  total={quizQuestions.length}
                  selected={state.answers[state.currentIndex]}
                  revealed={state.revealed}
                  onAnswer={(choice) => dispatch({ type: 'answer', choice })}
                  onNext={() => dispatch({ type: 'next' })}
                />
              </motion.div>
            )}

            {state.phase === 'finished' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              >
                <QuizResult
                  questions={quizQuestions}
                  answers={state.answers}
                  score={score}
                  onRestart={() => dispatch({ type: 'start' })}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {state.phase === 'playing' && (
          <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-neutral-400 uppercase">
            Tiến độ {score}/{totalScore} điểm tạm tính
          </p>
        )}
      </div>
    </section>
  )
}
