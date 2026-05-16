interface SourceLink {
  label: string
  href: string
}

const TEAM = [
  { role: 'Thực hiện', name: 'Nhóm 5 — Lớp MLN131' },
  { role: 'Giảng viên hướng dẫn', name: 'Thầy/Cô bộ môn CNXHKH' },
]

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-neutral-800 bg-bg-dark px-6 pt-16 pb-8 text-neutral-300"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <section aria-labelledby="footer-about">
            <h2
              id="footer-about"
              className="font-display mb-3 text-lg font-semibold text-white"
            >
              VietMap Chronicle
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-neutral-400">
              Sản phẩm tương tác môn{' '}
              <span className="text-neutral-200">
                Chủ nghĩa Xã hội Khoa học
              </span>{' '}
              — Chương 6: Vấn đề Dân tộc và Tôn giáo trong Thời kỳ Quá độ lên
              Chủ nghĩa Xã hội. Trình bày 54 dân tộc, 16 tôn giáo qua bản đồ
              3D, timeline 6 thời kỳ và quiz 15 câu.
            </p>
          </section>

          <section aria-labelledby="footer-team">
            <h2
              id="footer-team"
              className="mb-3 font-mono text-xs font-semibold tracking-wider text-brand-yellow uppercase"
            >
              Đội ngũ
            </h2>
            <ul className="space-y-3 text-sm">
              {TEAM.map((t) => (
                <li key={t.role}>
                  <div className="text-xs tracking-wide text-neutral-500 uppercase">
                    {t.role}
                  </div>
                  <div className="font-display text-base font-semibold text-white">
                    {t.name}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 border-t border-neutral-800 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} VietMap Chronicle · Phi lợi nhuận, mục
            đích giáo dục.
          </p>
          <p>
            Built with React · TypeScript · Three.js ·{' '}
            <a
              href="#hero"
              className="underline-offset-4 hover:text-brand-yellow hover:underline"
            >
              Về đầu trang
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
