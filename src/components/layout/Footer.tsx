interface SourceLink {
  label: string
  href: string
}

const SOURCES: SourceLink[] = [
  {
    label: 'Giáo trình CN Mác-Lênin (Bộ GDĐT, 2021)',
    href: 'https://moet.gov.vn/',
  },
  {
    label: 'Luật Tín ngưỡng, Tôn giáo 2016',
    href: 'https://thuvienphapluat.vn/van-ban/Van-hoa-Xa-hoi/Luat-tin-nguong-ton-giao-2016-322934.aspx',
  },
  {
    label: 'Văn kiện Đại hội Đảng XIII',
    href: 'https://tulieuvankien.dangcongsan.vn/',
  },
  {
    label: 'Báo Nhân Dân — Chuyên đề dân tộc tôn giáo',
    href: 'https://nhandan.vn/dan-toc-ton-giao',
  },
  {
    label: 'Tạp chí Cộng sản',
    href: 'https://tapchicongsan.org.vn/',
  },
  {
    label: 'Ban Tôn giáo Chính phủ',
    href: 'https://btgcp.gov.vn/',
  },
]

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
              — Chương 6: Vấn đề Dân tộc và Tôn giáo. Trình bày 54 dân tộc, 16
              tôn giáo qua bản đồ 3D, timeline 6 thời kỳ và quiz 15 câu.
            </p>
            <p className="text-xs text-neutral-500">
              Tất cả nội dung học thuật được trích từ giáo trình chính thống và
              Văn kiện Đảng. Không nội dung nào được AI sáng tác mới.
            </p>
          </section>

          <section aria-labelledby="footer-sources">
            <h2
              id="footer-sources"
              className="mb-3 font-mono text-xs font-semibold tracking-wider text-brand-yellow uppercase"
            >
              Nguồn tài liệu
            </h2>
            <ul className="space-y-2 text-sm">
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline gap-1 text-neutral-300 underline-offset-4 transition-colors hover:text-brand-yellow hover:underline"
                  >
                    {s.label}
                    <span aria-hidden className="text-xs text-neutral-500">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
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
            <p className="mt-4 text-xs text-neutral-500">
              Liên hệ qua giảng viên phụ trách lớp để góp ý nội dung.
            </p>
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
