import { lazy, Suspense } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TheoryFoundation } from '@/components/sections/TheoryFoundation'
import { TimelineHistory } from '@/components/sections/TimelineHistory'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { QuizSection } from '@/components/sections/QuizSection'

const InteractiveMap = lazy(() =>
  import('@/components/sections/InteractiveMap').then((m) => ({
    default: m.InteractiveMap,
  })),
)

function App() {
  return (
    <div className="min-h-screen bg-bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <TheoryFoundation />
        <Suspense fallback={<MapSectionSkeleton />}>
          <InteractiveMap />
        </Suspense>
        <TimelineHistory />
        <CaseStudies />
        <QuizSection />
      </main>
      <Footer />
    </div>
  )
}

function MapSectionSkeleton() {
  return (
    <section
      id="map"
      className="border-t border-neutral-200/70 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-14">
          <div className="mb-3 h-6 w-40 animate-pulse rounded-full bg-brand-red/10" />
          <div className="mb-3 h-10 w-80 animate-pulse rounded bg-neutral-200" />
          <div className="h-5 w-full max-w-xl animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="h-[80vh] min-h-[600px] animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100 md:h-[88vh] md:min-h-[720px]" />
      </div>
    </section>
  )
}

export default App
