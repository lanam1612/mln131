// =============================================================================
// Domain types for VietMap Chronicle
// All UI content originates from these typed data files.
// =============================================================================

// ----- REGIONS (Section 3 — Interactive Map) ---------------------------------

export type RegionId = 'taybac' | 'taynguyen' | 'taynambo' | 'namtrungbo'

export interface Region {
  id: RegionId
  name: string
  scope: string
  coordinates: [number, number]
  color: string
  overview: string
  ethnicities: Ethnicity[]
  religions: Religion[]
  securityIssues: SecurityIssue[]
  policies: string[]
  images: ImageRef[]
}

export interface Ethnicity {
  name: string
  population: string
  characteristics: string
}

export interface Religion {
  name: string
  description: string
}

export interface SecurityIssue {
  era: 'historical' | 'modern'
  title: string
  description: string
}

export interface ImageRef {
  src: string
  alt: string
  caption?: string
  source?: string
}

// ----- TIMELINE (Section 4) --------------------------------------------------

export interface HistoricalEra {
  id: string
  order: number
  title: string
  period: string
  context: string
  ethnicityState: string
  religionState: string
  keyEvents: KeyEvent[]
  theoryConnection?: string
}

export interface KeyEvent {
  year: string
  description: string
}

// ----- THEORY (Section 2) ----------------------------------------------------

export interface TheoryTab {
  id: string
  title: string
  shortTitle?: string
  content: TheoryBlock[]
}

export type TheoryBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'highlight'; text: string; variant: 'info' | 'warning' }
  | { type: 'list'; ordered: boolean; items: string[] }

// ----- CASE STUDIES (Section 5) ---------------------------------------------

export interface CaseStudy {
  id: string
  title: string
  year: string
  location: string
  background: string
  events: string
  nature: string
  resolution: string
  lesson: string
}

// ----- QUIZ (Section 6) ------------------------------------------------------

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type QuizState =
  | { status: 'idle' }
  | { status: 'playing'; currentIndex: number; answers: (number | null)[] }
  | { status: 'finished'; answers: (number | null)[]; score: number }
