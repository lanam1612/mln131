# VietMap Chronicle

> Hành trình Dân tộc &amp; Tôn giáo Việt Nam qua thời gian và không gian.
> Sản phẩm sáng tạo môn **Chủ nghĩa Xã hội Khoa học** (Chương 6: Vấn đề Dân tộc và Tôn giáo).

Website single-page tương tác gồm 6 section:

1. **Hero** — Tiêu đề, 3 con số nổi bật (54 dân tộc, 16 tôn giáo, ~26.5 triệu tín đồ), bản đồ teaser với 4 vùng + Hoàng Sa / Trường Sa.
2. **Nền tảng lý luận** — 4 tab kiến thức cốt lõi (khái niệm dân tộc, hai xu hướng phát triển, cương lĩnh dân tộc Lênin, nguyên tắc giải quyết tôn giáo).
3. **Bản đồ 3D tương tác** ⭐ — Việt Nam dựng 3D từ GeoJSON, click 4 hotspot mở modal chi tiết, có view so sánh 4 vùng, fallback 2D cho thiết bị không hỗ trợ WebGL.
4. **Timeline 6 thời kỳ** — Từ tiền sử đến Đổi mới, có progress rail sticky và mini-map cho thời kỳ Đổi mới.
5. **4 case study cảnh giác** — Tây Nguyên 2001/2004, Mường Nhé 2011, Hội thánh Đức Chúa Trời Mẹ, Chùa Ba Vàng — mỗi vụ có flow 5 bước.
6. **Quiz 15 câu** — Trắc nghiệm có giải thích từng câu, chấm điểm + lưu kết quả vào `localStorage`, có thể chia sẻ kết quả.

---

## Tech stack

- **Vite** + **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** (config bằng `@theme` trong CSS)
- **Framer Motion** — animation 2D
- **three.js** + **@react-three/fiber** + **@react-three/drei** — bản đồ 3D
- **d3-geo** — chuyển GeoJSON Mercator sang Three.js geometry + SVG path
- ESLint + Prettier

## Cài đặt và chạy local

```bash
npm install
npm run dev      # http://localhost:5173 (hoặc cổng kế tiếp nếu bị chiếm)
```

Scripts khác:

```bash
npm run build    # type-check (tsc -b) + build production sang dist/
npm run lint     # chạy ESLint
npm run preview  # serve thư mục dist/ để kiểm tra bản production
```

## Cấu trúc thư mục

```
src/
├── components/
│   ├── layout/                # Navigation, Footer
│   ├── sections/              # 6 section chính
│   │   ├── HeroSection.tsx
│   │   ├── TheoryFoundation.tsx
│   │   ├── InteractiveMap/    # bản đồ 3D + modal + view so sánh
│   │   ├── TimelineHistory/   # 6 era + progress rail + mini-map
│   │   ├── CaseStudies.tsx
│   │   └── QuizSection/       # state machine + question + result
│   └── ui/                    # Button, Modal, Tabs, AnimatedNumber, …
├── data/                      # ⭐ TẤT CẢ nội dung text + TypeScript types
│   ├── regions.ts             # 4 vùng
│   ├── timeline.ts            # 6 thời kỳ
│   ├── theoryContent.ts       # 4 tab lý luận
│   ├── caseStudies.ts         # 4 case
│   ├── quizQuestions.ts       # 15 câu quiz
│   └── types.ts
├── hooks/                     # useActiveSection, useMediaQuery, …
├── lib/                       # cn() helper, geo helpers, baked silhouette
└── index.css                  # Tailwind v4 @theme + base
public/
├── assets/
│   ├── images/regions/        # ảnh 4 vùng
│   ├── images/cases/          # (optional) ảnh case study
│   └── models/vietnam.geojson # ranh giới Việt Nam dùng cho 3D + hero
├── og-image.svg               # ảnh chia sẻ social
└── favicon.svg
scripts/
└── bake-hero-silhouette.mjs   # tạo lại src/lib/vietnamSilhouette.ts từ GeoJSON
```

## Nội dung học thuật

Tất cả text trên UI lấy từ [`vietmap-content-blueprint.md`](./vietmap-content-blueprint.md) — không nội dung nào được AI sáng tác mới. Hướng dẫn vận hành: [`CLAUDE.md`](./CLAUDE.md).

Nguồn tài liệu chính thống đã trích dẫn:

- Giáo trình Chủ nghĩa Xã hội Khoa học (Bộ Giáo dục &amp; Đào tạo, 2021)
- Luật Tín ngưỡng, Tôn giáo 2016
- Văn kiện Đại hội Đảng XIII
- Báo Nhân Dân, Tạp chí Cộng sản
- Ban Tôn giáo Chính phủ

## Khả năng truy cập (a11y) &amp; hiệu năng

- Skip-link tới `#main` xuất hiện khi focus bàn phím
- `prefers-reduced-motion` được tôn trọng toàn site (CSS + Framer Motion `useReducedMotion`)
- Section 3 (bản đồ 3D) được code-split bằng `React.lazy` để không chặn first paint
- Bản đồ tự fallback 2D khi WebGL không khả dụng
- Ảnh trong modal vùng đều có `loading="lazy"`
- Đường viền Việt Nam trên hero teaser dùng path SVG đã bake sẵn (`scripts/bake-hero-silhouette.mjs`) để tránh tải GeoJSON 1.6 MB ở section đầu

## Trạng thái phase

- ✅ Phase 0 — Setup &amp; Foundation
- ✅ Phase 1 — Data Layer
- ✅ Phase 2 — Hero + Navigation
- ✅ Phase 3 — Theory Foundation
- ✅ Phase 4 — Interactive 3D Map
- ✅ Phase 5 — Timeline 6 thời kỳ
- ✅ Phase 6 — Case Studies + Quiz
- ✅ Phase 7 — Polish (Footer 3 cột, SEO meta, skip-link, README) — *chưa deploy*

## Deploy (chưa thực hiện)

Cấu hình Vercel sẵn trong [`vercel.json`](./vercel.json). Khi muốn deploy:

```bash
npm i -g vercel
vercel
```

Hoặc Netlify với [`netlify.toml`](./netlify.toml) tương đương.

## Credits

Sản phẩm thực hiện bởi **Nhóm 5 — Lớp MLN131**, dưới sự hướng dẫn của giảng viên bộ môn CNXHKH. Phi lợi nhuận, mục đích giáo dục.
