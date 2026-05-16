# VietMap Chronicle

> Hành trình Dân tộc – Tôn giáo Việt Nam qua thời gian và không gian.
> Sản phẩm sáng tạo môn **Chủ nghĩa Xã hội Khoa học** (Chương 6: Vấn đề Dân tộc và Tôn giáo).

Website single-page tương tác gồm 6 section: Hero, Nền tảng lý luận, Bản đồ 3D Việt Nam tương tác (4 vùng trọng điểm), Timeline 6 thời kỳ lịch sử, 4 case study cảnh giác, và Quiz 15 câu có chấm điểm.

---

## Tech stack

- **Vite** + **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** (config bằng `@theme` trong CSS)
- **Framer Motion** — animation 2D
- **three.js** + **@react-three/fiber** + **@react-three/drei** — bản đồ 3D (Phase 4)
- **d3-geo** — chuyển GeoJSON sang shape Three.js
- ESLint + Prettier

## Scripts

```bash
npm run dev      # khởi động dev server
npm run build    # type-check + build production
npm run lint     # chạy ESLint
npm run preview  # preview bản build
```

## Cấu trúc thư mục

```
src/
├── components/
│   ├── layout/      # Navigation, Footer
│   ├── sections/    # 6 section chính
│   └── ui/          # Button, Modal, Tabs, ...
├── data/            # ⭐ TẤT CẢ nội dung text + types
├── hooks/
├── lib/             # utils, geo helpers
└── styles/
public/assets/
├── images/regions/  # ảnh 4 vùng
├── images/cases/    # ảnh case study
└── models/          # vietnam.geo.json
```

## Trạng thái

- ✅ **Phase 0** — Setup & Foundation
- ⏭ Phase 1 — Data Layer (4 vùng, 6 thời kỳ, 4 tab lý luận, 4 case, 15 quiz)
- ⏭ Phase 2 — Hero + Navigation
- ⏭ Phase 3 — Theory Foundation
- ⏭ Phase 4 — Interactive 3D Map
- ⏭ Phase 5 — Timeline History
- ⏭ Phase 6 — Case Studies + Quiz
- ⏭ Phase 7 — Polish, A11y, Deploy

## Nguồn nội dung

Toàn bộ nội dung text được lấy từ [`vietmap-content-blueprint.md`](./vietmap-content-blueprint.md). Hướng dẫn vận hành cho Claude Code: [`CLAUDE.md`](./CLAUDE.md).

## Credits

Sản phẩm nhóm (4–6 sinh viên). Tài liệu tham khảo chính: Giáo trình CNXHKH (Bộ GD&ĐT), Luật Tín ngưỡng – Tôn giáo 2016, Văn kiện Đại hội Đảng XIII.
