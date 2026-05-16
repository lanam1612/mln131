import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TheoryFoundation } from '@/components/sections/TheoryFoundation'

const PLACEHOLDER_SECTIONS = [
  {
    id: 'map',
    phase: 4,
    title: 'Bản đồ tương tác 4 vùng',
    hint: 'Bản đồ 3D Việt Nam, 4 hotspot, modal chi tiết. Điểm nhấn sáng tạo.',
  },
  {
    id: 'timeline',
    phase: 5,
    title: 'Timeline 6 thời kỳ',
    hint: 'Tiền sử → Đổi mới với scroll-triggered animation.',
  },
  {
    id: 'cases',
    phase: 6,
    title: 'Cảnh giác diễn biến hòa bình',
    hint: '4 case study: Tây Nguyên · Mường Nhé · Hội thánh Đức Chúa Trời · Ba Vàng.',
  },
  {
    id: 'quiz',
    phase: 6,
    title: 'Quiz 15 câu',
    hint: 'Trắc nghiệm có chấm điểm và giải thích.',
  },
] as const

function App() {
  return (
    <div className="min-h-screen bg-bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <TheoryFoundation />
        {PLACEHOLDER_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border-t border-neutral-200/70 px-6 py-24"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-3 inline-block rounded-full bg-brand-red/10 px-3 py-1 font-mono text-xs font-medium tracking-wide text-brand-red uppercase">
                Phase {section.phase}
              </div>
              <h2 className="font-display mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">
                {section.title}
              </h2>
              <p className="max-w-2xl text-base text-neutral-600 md:text-lg">
                {section.hint}
              </p>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App
