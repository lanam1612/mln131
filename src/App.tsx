import './index.css'

const sections: { id: string; phase: number; title: string; hint: string }[] = [
  {
    id: 'hero',
    phase: 2,
    title: 'Hero — VietMap Chronicle',
    hint: 'Tiêu đề lớn, 3 con số nổi bật, bản đồ teaser. Triển khai ở Phase 2.',
  },
  {
    id: 'theory',
    phase: 3,
    title: 'Nền tảng lý luận',
    hint: '4 tab: Khái niệm dân tộc · 2 xu hướng · Cương lĩnh Lênin · Nguyên tắc tôn giáo. Phase 3.',
  },
  {
    id: 'map',
    phase: 4,
    title: 'Bản đồ tương tác 4 vùng',
    hint: 'Bản đồ 3D Việt Nam, 4 hotspot, modal chi tiết. Phase 4 (điểm nhấn).',
  },
  {
    id: 'timeline',
    phase: 5,
    title: 'Timeline 6 thời kỳ',
    hint: 'Tiền sử → Đổi mới. Scroll-triggered animation. Phase 5.',
  },
  {
    id: 'cases',
    phase: 6,
    title: 'Cảnh giác diễn biến hòa bình',
    hint: '4 case study: Tây Nguyên · Mường Nhé · Hội thánh Đức Chúa Trời · Ba Vàng. Phase 6.',
  },
  {
    id: 'quiz',
    phase: 6,
    title: 'Quiz 15 câu',
    hint: 'Trắc nghiệm có chấm điểm và giải thích. Phase 6.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-bg-cream">
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="font-display text-lg font-bold text-brand-red"
          >
            VietMap Chronicle
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-neutral-600 transition hover:text-brand-red"
              >
                {s.title.split(' — ')[0]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border-b border-neutral-200/70 px-6 py-24"
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

      <footer className="bg-bg-dark px-6 py-12 text-neutral-300">
        <div className="mx-auto max-w-7xl text-center text-sm">
          <p className="mb-2">
            VietMap Chronicle · Sản phẩm môn Chủ nghĩa Xã hội Khoa học · Chương
            6
          </p>
          <p className="text-neutral-500">Phase 0 — Foundation scaffold</p>
        </div>
      </footer>
    </div>
  )
}

export default App
