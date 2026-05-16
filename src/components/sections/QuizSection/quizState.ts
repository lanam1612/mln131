import type { QuizQuestion } from '@/data/types'

export type QuizPhase = 'idle' | 'playing' | 'finished'

export interface QuizState {
  phase: QuizPhase
  currentIndex: number
  answers: (number | null)[]
  revealed: boolean
}

export type QuizAction =
  | { type: 'start' }
  | { type: 'answer'; choice: number }
  | { type: 'next' }
  | { type: 'finish' }
  | { type: 'reset' }
  | { type: 'restore'; state: QuizState }

export const POINTS_PER_QUESTION = 10

export function makeInitialState(total: number): QuizState {
  return {
    phase: 'idle',
    currentIndex: 0,
    answers: Array<number | null>(total).fill(null),
    revealed: false,
  }
}

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'start':
      return {
        phase: 'playing',
        currentIndex: 0,
        answers: state.answers.map(() => null),
        revealed: false,
      }
    case 'answer': {
      if (state.phase !== 'playing' || state.revealed) return state
      const answers = state.answers.slice()
      answers[state.currentIndex] = action.choice
      return { ...state, answers, revealed: true }
    }
    case 'next': {
      if (state.phase !== 'playing' || !state.revealed) return state
      const next = state.currentIndex + 1
      if (next >= state.answers.length) {
        return { ...state, phase: 'finished' }
      }
      return { ...state, currentIndex: next, revealed: false }
    }
    case 'finish':
      return { ...state, phase: 'finished' }
    case 'reset':
      return makeInitialState(state.answers.length)
    case 'restore':
      return action.state
    default:
      return state
  }
}

export function computeScore(
  answers: (number | null)[],
  questions: QuizQuestion[],
): number {
  let score = 0
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].correctIndex) score += POINTS_PER_QUESTION
  }
  return score
}

export interface ScoreVerdict {
  label: string
  tone: 'low' | 'mid' | 'high'
  blurb: string
}

export function verdictFor(scored: number, total: number): ScoreVerdict {
  const ratio = total === 0 ? 0 : scored / total
  if (ratio >= 0.85) {
    return {
      label: 'Xuất sắc',
      tone: 'high',
      blurb:
        'Bạn nắm rất vững cương lĩnh dân tộc và 5 nguyên tắc tôn giáo. Tiếp tục phát huy!',
    }
  }
  if (ratio >= 0.6) {
    return {
      label: 'Tốt',
      tone: 'mid',
      blurb:
        'Nền tảng đã chắc — hãy ôn lại phần lý luận và 4 case study để củng cố.',
    }
  }
  return {
    label: 'Cần ôn lại',
    tone: 'low',
    blurb:
      'Đừng nản — quay lại Section 2 (lý luận) và Section 5 (case study) rồi thử lại.',
  }
}
