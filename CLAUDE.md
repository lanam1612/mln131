# 🚀 CLAUDE CODE MASTER PROMPT
## Project: VietMap Chronicle – Interactive 3D Vietnam Map for Ethnicity & Religion

> **Cách dùng file này:**
> 1. Đặt file này ở **root của project folder** với tên `CLAUDE.md`
> 2. Đặt file `content-blueprint.md` (nội dung gốc) trong cùng folder
> 3. Mở terminal trong folder đó, chạy: `claude`
> 4. Gõ lệnh đầu tiên: *"Đọc kỹ CLAUDE.md và content-blueprint.md, sau đó bắt đầu Phase 0. Sau mỗi phase hãy dừng lại để tôi kiểm tra trước khi sang phase tiếp theo."*

---

## 0. ⚠️ CRITICAL RULES – ĐỌC TRƯỚC TIÊN

1. **Tất cả text trên UI phải là TIẾNG VIỆT.** Code, comment, biến: tiếng Anh.
2. **Nội dung text lấy từ `content-blueprint.md`.** KHÔNG được tự sáng tác/sửa nội dung lịch sử, số liệu, sự kiện. Nếu thấy cần bổ sung, hỏi user.
3. **Stop sau mỗi phase** để user kiểm tra. KHÔNG được chạy thẳng từ Phase 0 đến Phase 7.
4. **Commit Git sau mỗi phase** với message rõ ràng (`feat(phaseN): ...`).
5. **Tuyệt đối không hardcode nội dung text vào component.** Tất cả text → file `src/data/*.ts`.
6. **Mọi animation phải có `prefers-reduced-motion` fallback** (accessibility).
7. **Mobile-first responsive.** Test ở 375px (iPhone SE) → 1920px (desktop).

---

## 1. 🎯 PROJECT MISSION

Đây là **sản phẩm sáng tạo môn học Chủ nghĩa Xã hội Khoa học (Chương 6: Vấn đề Dân tộc và Tôn giáo)** dành cho sinh viên Việt Nam, làm bởi nhóm 4–6 sinh viên đại học.

**Đối tượng người dùng:** Sinh viên + giảng viên Việt Nam. Họ sẽ truy cập trong 5–10 phút để học/ôn tập chương 6.

**Sản phẩm là 1 website single-page** gồm 6 section cuộn dọc:
1. **Hero** – ấn tượng đầu, 3 con số nổi bật, bản đồ animated
2. **Nền tảng lý luận** – 4 tab kiến thức cốt lõi
3. **Bản đồ 3D tương tác Việt Nam** ⭐ (điểm nhấn) – click 4 vùng → modal chi tiết
4. **Timeline 6 thời kỳ lịch sử** – cuộn dọc với animation
5. **4 case study cảnh giác** – cảnh báo âm mưu chia rẽ
6. **Quiz 15 câu** – có chấm điểm

**Tiêu chí thành công:**
- Giảng viên xem 30 giây đầu phải **"wow"** (do bản đồ 3D)
- Sinh viên ôn xong làm quiz được ≥12/15 câu
- Website load < 3 giây, hoạt động mượt trên Chrome + Safari + Firefox
- Code đẹp, deploy được Vercel/Netlify trong 5 phút

---

## 2. 🛠️ TECH STACK (NON-NEGOTIABLE)

### Core
- **Build tool:** Vite 5+
- **Framework:** React 18.3+ với TypeScript 5+
- **Package manager:** pnpm (nếu không có thì npm, KHÔNG dùng yarn)
- **Node version:** 18+ (LTS)

### Styling
- **Tailwind CSS 3.4+** với custom config (xem Design System)
- **clsx + tailwind-merge** cho conditional classes
- KHÔNG dùng CSS-in-JS (styled-components, emotion). Chỉ Tailwind + một số CSS file riêng cho 3D scene.

### 3D & Animation
- **three.js 0.160+** – 3D engine
- **@react-three/fiber 8.15+** – React renderer cho three.js
- **@react-three/drei 9.92+** – helpers (OrbitControls, Html, useGLTF, etc.)
- **framer-motion 11+** – 2D animations
- **gsap 3.12+** (optional) – chỉ dùng nếu cần scroll-triggered animation phức tạp

### Data & Map
- **GeoJSON Vietnam:** User sẽ cung cấp file `vietnam.geo.json` (xem Section 7 – Assets)
- **d3-geo** – để convert GeoJSON sang shapes cho three.js
- Có thể dùng **react-simple-maps** làm fallback 2D nếu Three.js gặp vấn đề

### Quality
- **ESLint** + **Prettier** với config strict
- **TypeScript strict mode**
- **Husky + lint-staged** cho pre-commit hooks (optional, nếu có thời gian)

### Deploy
- **Vercel** (default) hoặc **Netlify**. Cấu hình sẵn `vercel.json`.

---

## 3. 📁 PROJECT STRUCTURE

```
vietmap-chronicle/
├── public/
│   ├── assets/
│   │   ├── images/          # ảnh các vùng, lễ hội, dân tộc
│   │   ├── models/          # vietnam.geo.json + (optional) .glb models
│   │   └── audio/           # narration (optional)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx    # nav cố định trên cùng
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TheoryFoundation.tsx
│   │   │   ├── InteractiveMap/   # FOLDER – section bản đồ phức tạp
│   │   │   │   ├── index.tsx
│   │   │   │   ├── VietnamMap3D.tsx
│   │   │   │   ├── RegionHotspot.tsx
│   │   │   │   ├── RegionDetailModal.tsx
│   │   │   │   └── useMapInteraction.ts
│   │   │   ├── TimelineHistory/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── TimelineEra.tsx
│   │   │   │   └── EraDetailCard.tsx
│   │   │   ├── CaseStudies.tsx
│   │   │   └── QuizSection/
│   │   │       ├── index.tsx
│   │   │       ├── QuizQuestion.tsx
│   │   │       └── QuizResult.tsx
│   │   └── ui/                   # primitives tái sử dụng
│   │       ├── Button.tsx
│   │       ├── Modal.tsx
│   │       ├── Tabs.tsx
│   │       ├── AnimatedNumber.tsx
│   │       └── Card.tsx
│   ├── data/                     # ⭐ TẤT CẢ NỘI DUNG Ở ĐÂY
│   │   ├── regions.ts            # 4 vùng (Tây Bắc, Tây Nguyên...)
│   │   ├── timeline.ts           # 6 thời kỳ
│   │   ├── theoryContent.ts      # 4 tab lý luận
│   │   ├── caseStudies.ts        # 4 case study
│   │   ├── quizQuestions.ts      # 15 câu quiz
│   │   └── types.ts              # TypeScript types
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   ├── useReducedMotion.ts
│   │   └── useMediaQuery.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── map-scene.css
│   ├── lib/
│   │   ├── utils.ts              # cn() helper, clsx wrapper
│   │   └── geo.ts                # GeoJSON → Three.js geometry
│   ├── App.tsx
│   └── main.tsx
├── content-blueprint.md          # ⭐ NGUỒN NỘI DUNG GỐC
├── CLAUDE.md                     # ⭐ FILE NÀY
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
├── .eslintrc.cjs
├── .prettierrc
├── vercel.json
└── README.md
```

**Nguyên tắc đặt tên:**
- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utils/data: `camelCase.ts`
- Types: định nghĩa trong `types.ts`, export named

---

## 4. 🎨 DESIGN SYSTEM

### Color Palette
Tailwind config phải có:

```ts
colors: {
  brand: {
    red: '#DA251D',      // primary - đỏ cờ VN
    yellow: '#FFCD00',   // accent - vàng sao
    navy: '#0F4C75',     // secondary - xanh hải quân
  },
  bg: {
    cream: '#F8F5F0',    // background ấm
    dark: '#0A0E1A',     // dark mode bg
    paper: '#FFFFFF',
  },
  region: {                          // màu riêng cho 4 vùng
    taybac: '#E63946',
    taynguyen: '#F4A261',
    taynambo: '#2A9D8F',
    namtrungbo: '#264653',
  }
}
```

### Typography

```ts
fontFamily: {
  display: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
  body: ['Inter', 'Be Vietnam Pro', 'sans-serif'],
}
```

Load từ Google Fonts trong `index.html`. **Bắt buộc có dấu tiếng Việt đầy đủ.**

### Spacing scale
Dùng default Tailwind. Container max-width: `max-w-7xl` (1280px).

### Animation tokens
- Easing chuẩn: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) cho enter
- Duration: 200ms (micro), 400ms (medium), 800ms (large reveals)
- Respect `prefers-reduced-motion`: skip animations, dùng instant transitions

### Style cảm hứng
- **Phong cách:** Editorial + scientific (think *NYT Interactive*, *Pudding.cool*)
- **KHÔNG dùng:** gradient lòe loẹt, drop shadow nặng, neumorphism, glassmorphism quá đà
- **Có thể dùng:** subtle grain texture, sharp borders, generous whitespace
- **Lấy cảm hứng:** [pudding.cool/2018/11/birthday-paradox/](https://pudding.cool/2018/11/birthday-paradox/), [nytimes.com - The Conversation We're Not Having](https://www.nytimes.com)

---

## 5. 📋 WORKFLOW – 7 PHASES

> **Sau mỗi phase: DỪNG LẠI**, in ra console message:
> `✅ Phase N hoàn tất. Vui lòng kiểm tra & cho phép tiến hành Phase N+1.`
>
> Đồng thời commit Git: `git add -A && git commit -m "feat(phaseN): <summary>"`

### PHASE 0 – Setup & Foundation (~30 phút)

**Mục tiêu:** Project chạy được với "Hello World" trên localhost.

**Tasks:**
1. Init Vite + React + TypeScript: `pnpm create vite@latest . --template react-ts`
2. Install dependencies (xem Tech Stack)
3. Setup Tailwind config với colors + fonts ở trên
4. Setup ESLint + Prettier
5. Tạo folder structure đầy đủ như Section 3
6. Tạo file `src/data/types.ts` với tất cả TypeScript interfaces (xem PHASE 1)
7. Tạo `App.tsx` placeholder với 6 sections rỗng (chỉ heading)
8. Setup `vercel.json` để deploy
9. Init Git repo, commit lần đầu

**Acceptance:**
- `pnpm dev` chạy được, không lỗi console
- Trang index hiện đủ 6 section headers
- TypeScript strict mode bật, không lỗi

---

### PHASE 1 – Data Layer (~45 phút)

**Mục tiêu:** Convert tất cả nội dung từ `content-blueprint.md` thành TypeScript data files.

**Tasks:**

1. Tạo `src/data/types.ts`:
```ts
export interface Region {
  id: 'taybac' | 'taynguyen' | 'taynambo' | 'namtrungbo';
  name: string;           // 'Tây Bắc'
  coordinates: [number, number];  // [lng, lat] trên bản đồ
  color: string;
  overview: string;
  ethnicities: Ethnicity[];
  religions: Religion[];
  securityIssues: SecurityIssue[];
  policies: string[];
  images: ImageRef[];
}

export interface Ethnicity {
  name: string;
  population: string;
  characteristics: string;
}

export interface Religion {
  name: string;
  description: string;
}

export interface SecurityIssue {
  era: 'historical' | 'modern';
  title: string;
  description: string;
}

export interface ImageRef {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
}

export interface HistoricalEra {
  id: string;
  order: number;
  title: string;
  period: string;
  context: string;
  ethnicityState: string;
  religionState: string;
  keyEvents: { year: string; description: string }[];
  theoryConnection: string;
}

export interface TheoryTab {
  id: string;
  title: string;
  content: TheoryBlock[];
}

export type TheoryBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'highlight'; text: string; variant: 'info' | 'warning' };

export interface CaseStudy {
  id: string;
  title: string;
  year: string;
  location: string;
  background: string;
  events: string;
  nature: string;
  resolution: string;
  lesson: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
```

2. Tạo `src/data/regions.ts` – 4 vùng đầy đủ chi tiết, **lấy từ Section 4 của content-blueprint.md**.

3. Tạo `src/data/timeline.ts` – 6 thời kỳ, **lấy từ Section 5 của content-blueprint.md**.

4. Tạo `src/data/theoryContent.ts` – 4 tab, **lấy từ Section 3 của content-blueprint.md**.

5. Tạo `src/data/caseStudies.ts` – 4 case study, **lấy từ Section 6**.

6. Tạo `src/data/quizQuestions.ts` – 15 câu, **lấy từ Section 7**.

**Acceptance:**
- Tất cả file data có type-check chặt, không lỗi TypeScript
- Console.log từng file để verify số lượng entries đúng (4 vùng, 6 thời kỳ, 4 case, 15 quiz)

---

### PHASE 2 – Hero Section + Navigation (~1h)

**Mục tiêu:** Section 1 hoàn chỉnh, navigation cuộn mượt.

**Tasks:**

1. `Navigation.tsx`:
   - Sticky top, blur backdrop khi cuộn
   - 6 link anchor cuộn smooth đến từng section
   - Mobile: hamburger menu (Framer Motion drawer)
   - Active section highlight (dùng IntersectionObserver)

2. `HeroSection.tsx`:
   - Full viewport height
   - Bên trái: title + tagline + 3 stats animated (dùng `AnimatedNumber.tsx` count-up khi vào view)
   - Bên phải: **SVG bản đồ Việt Nam** với 4 dots pulse tại 4 vùng (đây là teaser cho Section 3)
   - 2 CTA buttons: "Bắt đầu hành trình" + "Xem bản đồ tương tác"
   - Subtle parallax effect khi scroll

3. `AnimatedNumber.tsx` component:
```tsx
// count from 0 → target khi inView
// dùng framer-motion's useMotionValue + animate
```

**Acceptance:**
- Hero load trong 1 giây
- Stats animate count-up khi vào view
- Nav smooth scroll hoạt động
- Mobile menu hoạt động

---

### PHASE 3 – Theory Foundation Section (~1.5h)

**Mục tiêu:** Section 2 với 4 tab kiến thức lý luận.

**Tasks:**

1. `TheoryFoundation.tsx`:
   - Tabs UI: 4 tab horizontal trên desktop, vertical/dropdown trên mobile
   - Tab content render từ `theoryContent.ts`
   - Mỗi block (paragraph, heading, table, highlight) có component riêng

2. `Tabs.tsx` (reusable UI):
   - Accessible (ARIA roles, keyboard nav: arrow keys, Home, End)
   - Active tab có underline animation (Framer Motion `layoutId`)

3. Tab 3 (Cương lĩnh dân tộc) có **visualization đặc biệt**:
   - 3 cột song song với 3 icon (🌍 ⚖️ 🤝)
   - Cột thứ 3 (Liên hiệp công nhân) có highlight đặc biệt vì là "tư tưởng cơ bản"
   - Khi inView, 3 cột animate từ dưới lên với stagger 200ms

4. Tab 4 (Nguyên tắc tôn giáo) có **warning callout** ở đầu (CN Mác-Lênin KHÔNG tiêu diệt tôn giáo)

**Acceptance:**
- 4 tab switch mượt, có deep link `?tab=N`
- Tables responsive, mobile scroll ngang được
- Tab 3 visualization wow

---

### PHASE 4 – Interactive 3D Map ⭐ (~3h, PHASE KHÓ NHẤT)

**Mục tiêu:** Section 3 – Bản đồ Việt Nam 3D click được, 4 hotspot, modal chi tiết.

**Đây là phần WOW của sản phẩm. Đầu tư thời gian xứng đáng.**

#### Approach kỹ thuật: react-three-fiber + extruded GeoJSON

**Tasks:**

1. **Setup 3D scene** (`VietnamMap3D.tsx`):
```tsx
<Canvas camera={{ position: [0, 5, 8], fov: 45 }}>
  <ambientLight intensity={0.5} />
  <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
  <Suspense fallback={<LoadingPlaceholder />}>
    <VietnamMesh />
    {regions.map(r => <RegionHotspot key={r.id} region={r} />)}
  </Suspense>
  <OrbitControls
    enablePan={false}
    minPolarAngle={Math.PI / 4}
    maxPolarAngle={Math.PI / 2.2}
    minDistance={5}
    maxDistance={15}
  />
</Canvas>
```

2. **`lib/geo.ts`** – convert GeoJSON to extruded geometry:
```ts
import * as THREE from 'three';
import { geoMercator } from 'd3-geo';

export function geoJsonToExtrudedShapes(geojson: GeoJSON.FeatureCollection, height = 0.3) {
  const projection = geoMercator().fitSize([10, 10], geojson);
  // For each feature.geometry.coordinates (Polygon/MultiPolygon):
  //   - Create THREE.Shape from projected points
  //   - ExtrudeGeometry with depth = height
  //   - Return array of geometries
  // ... full implementation
}
```

3. **`VietnamMesh.tsx`** – render mesh from GeoJSON:
   - Material: `MeshStandardMaterial` với roughness 0.7, metalness 0.1
   - Color: bg-cream tone
   - Edges: subtle outline với `Edges` from drei
   - Hover effect: tăng emissive khi hover

4. **`RegionHotspot.tsx`** – 4 markers tại 4 vùng:
```tsx
<group position={[x, y, z]}>
  <mesh>
    <sphereGeometry args={[0.15, 32, 32]} />
    <meshStandardMaterial color={region.color} emissive={region.color} emissiveIntensity={0.5} />
  </mesh>
  {/* Pulse ring animation */}
  <mesh rotation={[-Math.PI/2, 0, 0]}>
    <ringGeometry args={[0.2, 0.3, 32]} />
    <meshBasicMaterial color={region.color} transparent opacity={pulseOpacity} />
  </mesh>
  <Html position={[0, 0.4, 0]} center>
    <div className="region-label">{region.name}</div>
  </Html>
</group>
```

5. **Interaction:**
   - Hover hotspot: scale lên 1.3x, hiện label
   - Click hotspot: trigger modal `RegionDetailModal`
   - Cursor: pointer khi hover hotspot

6. **`RegionDetailModal.tsx`** – modal side panel:
   - Slide từ phải sang, 50% width trên desktop, full width mobile
   - 5 tab: Tổng quan / Dân tộc / Tôn giáo / Vấn đề an ninh / Chính sách
   - Có image gallery (carousel) ở mỗi tab
   - Có nút "So sánh với vùng khác" mở comparison table

7. **`ComparisonView.tsx`** – bảng so sánh 4 vùng (lấy từ cuối Section 4 blueprint)

8. **Loading state:**
   - Khi GeoJSON đang load: hiện loading spinner + text "Đang tải bản đồ..."
   - Fallback nếu WebGL không support: render `Vietnam2DFallback.tsx` (dùng react-simple-maps)

9. **Performance:**
   - Lazy load section này với `React.lazy`
   - Suspense boundary
   - Cleanup three.js resources khi unmount

**Acceptance:**
- Bản đồ render < 2s
- Hover hotspot có feedback rõ
- Click mở modal mượt
- Hoạt động trên Chrome, Safari, Firefox
- Fallback 2D hoạt động khi không có WebGL
- Mobile: bản đồ tự xoay nhẹ (auto-rotate) thay vì cho user kéo (vì kéo trên mobile hỏng UX)

---

### PHASE 5 – Timeline History (~2h)

**Mục tiêu:** Section 4 – Timeline 6 thời kỳ với scroll-triggered animation.

**Tasks:**

1. `TimelineHistory/index.tsx`:
   - Vertical timeline với line ở giữa (hoặc bên trái trên mobile)
   - 6 `TimelineEra` cards alternating trái/phải trên desktop
   - Mỗi card scroll vào view: fade + slide từ ngoài vào (Framer Motion `whileInView`)

2. `TimelineEra.tsx`:
   - Card có: era number, period, title, context paragraph, expandable key events list, theory connection callout
   - Click "Xem chi tiết" mở `EraDetailCard` modal hoặc expand inline

3. **Sticky progress indicator:**
   - Bên cạnh timeline có thanh progress dọc
   - Khi cuộn, dot di chuyển + label thời kỳ hiện tại
   - Click vào era number → scroll smooth đến era đó

4. **Special: Era 6 (Đổi mới đến nay)** có **mini-map** highlight các vùng có sự kiện nóng (Tây Nguyên, Mường Nhé) → liên kết sang Section 3.

**Acceptance:**
- Mượt khi scroll, không jank
- Progress indicator chính xác
- Mobile: timeline thành single column

---

### PHASE 6 – Case Studies + Quiz (~2h)

**Mục tiêu:** Section 5 và 6.

#### Case Studies (Section 5)

1. `CaseStudies.tsx`:
   - 4 case study dạng accordion hoặc 4 cards có thể flip/expand
   - Mỗi case có 5 mục: Bối cảnh → Diễn biến → Bản chất → Xử lý → Bài học
   - Visual: từng mục là 1 step có icon + connector line giữa các step (như timeline mini)
   - Có warning icon + badge "Cảnh giác"

#### Quiz (Section 6)

1. `QuizSection/index.tsx`:
   - State machine: idle → playing → showing-result → finished
   - Mỗi câu: hiện question + 4 options
   - Click option → highlight đúng/sai → hiện explanation → nút "Câu tiếp theo"
   - Progress bar: 1/15, 2/15...
   - Timer 30s/câu (optional, có toggle)

2. `QuizResult.tsx`:
   - Hiện điểm tổng (0-150)
   - Phân loại: "Cần ôn lại" / "Tốt" / "Xuất sắc"
   - Bảng review: từng câu, đáp án user vs đúng, explanation
   - Nút "Làm lại" / "Chia sẻ kết quả"

3. **Lưu kết quả vào localStorage** để user có thể xem lại lần cuối.

4. (Optional) **Share kết quả qua URL** với query string: `?score=120&date=...`

**Acceptance:**
- Quiz hoạt động end-to-end
- Score tính đúng
- Có thể restart không reload page

---

### PHASE 7 – Polish, Accessibility, Deploy (~2h)

**Mục tiêu:** Sản phẩm production-ready.

**Tasks:**

1. **Accessibility audit:**
   - Run axe DevTools, fix all serious issues
   - Keyboard navigation toàn site: Tab order, focus visible
   - ARIA labels cho tất cả interactive elements
   - Color contrast ≥ 4.5:1 cho text thường, 3:1 cho text lớn

2. **Performance:**
   - Lighthouse score ≥ 90 cho Performance, Accessibility, Best Practices, SEO
   - Lazy load images với `loading="lazy"`
   - Code split section 3 (3D map) và 4 (timeline)
   - Optimize images: convert to WebP, dùng `<picture>` cho fallback

3. **SEO:**
   - Meta tags trong `index.html`: title, description, OG image
   - Tạo `og-image.png` 1200x630 (có thể là screenshot hero)

4. **Footer:**
   - 3 cột: About (mô tả ngắn về dự án), Sources (link đến tài liệu chính thống), Team (tên 4-6 thành viên + giảng viên hướng dẫn)
   - Nguồn tài liệu lấy từ Section 9 của content-blueprint.md

5. **README.md** chi tiết:
   - Giới thiệu dự án
   - Tech stack
   - Cách chạy local
   - Cách deploy
   - Credits cả nhóm

6. **Deploy lên Vercel:**
   - Push lên GitHub
   - Connect Vercel
   - Custom domain (nếu có)
   - Test URL deployed

7. **Test cross-browser:**
   - Chrome, Edge, Safari, Firefox
   - Mobile Chrome (iOS Safari có thể có vấn đề với three.js – test kỹ)

**Acceptance:**
- Lighthouse ≥ 90 trên cả 4 tiêu chí
- Deploy URL hoạt động
- README đầy đủ

---

## 6. 📦 ASSETS USER CẦN CUNG CẤP

> **Trước khi chạy Phase 4, user phải cung cấp các file dưới đây.** Claude Code sẽ list ra và pause chờ user.

### 6.1. GeoJSON Vietnam (BẮT BUỘC)

**File:** `public/assets/models/vietnam.geo.json`

**Cách lấy:**
- Tải miễn phí tại: https://github.com/duydatpham/vietnam-geojson
- Hoặc: https://data.opendevelopmentmekong.net/dataset/a-phan-chia-cap-tinh-vietnam-administrative-boundaries
- Đảm bảo file có ranh giới các tỉnh + tên tỉnh (`properties.name`)
- Format: `FeatureCollection`, mỗi feature là 1 tỉnh

**Nếu user chưa có:** Claude Code có thể tạo file `vietnam-simple.geo.json` với chỉ ranh giới quốc gia làm tạm.

### 6.2. Hình ảnh 4 vùng (BẮT BUỘC, tối thiểu 8 ảnh)

**Folder:** `public/assets/images/regions/`

Đặt tên file dạng: `{region-id}-{topic}.jpg` ví dụ `taybac-ruong-bac-thang.jpg`.

**Cần tối thiểu mỗi vùng 2 ảnh:**

| Vùng | Ảnh đề xuất | Nguồn |
|------|-------------|-------|
| Tây Bắc | Ruộng bậc thang Mù Cang Chải, Lễ hội Xòe, Chợ Bắc Hà | Wikipedia Commons, Vietnamtourism |
| Tây Nguyên | Cồng chiêng, Nhà dài Ê-đê, Lễ bỏ mả | Bảo tàng Dân tộc học, UNESCO |
| Tây Nam Bộ | Tòa Thánh Tây Ninh, Chùa Khmer, Lễ Ok Om Bok | Wikipedia |
| Nam Trung Bộ | Tháp Po Klong Garai, Lễ hội Katê, Gốm Bàu Trúc | Wikipedia |

**Yêu cầu kỹ thuật:**
- Định dạng: JPG hoặc WebP
- Kích thước: ngắn nhất ≥ 800px
- File size: ≤ 300KB sau optimize (dùng tinypng.com hoặc squoosh.app)

### 6.3. Hình ảnh case study (TÙY CHỌN)

**Folder:** `public/assets/images/cases/`

Nếu có ảnh tư liệu báo chí về 4 sự kiện (Tây Nguyên, Mường Nhé, Hội thánh Đức Chúa Trời, Chùa Ba Vàng) thì đặt vào. Nếu không, dùng icon thay thế.

### 6.4. Logo / Branding (TÙY CHỌN)

- Logo trường (nếu muốn hiện ở footer)
- Tên các thành viên nhóm + giảng viên hướng dẫn (cho footer)

### 6.5. Audio narration (TÙY CHỌN, advanced)

Nếu muốn có chế độ "auto play" cho timeline, cần file `.mp3` narration tiếng Việt cho 6 thời kỳ. Có thể dùng ElevenLabs hoặc giọng đọc thật.

---

## 7. 📐 CODE QUALITY STANDARDS

### TypeScript
- **Strict mode bật.** Không dùng `any`. Nếu phải dùng, comment `// @ts-expect-error` với lý do.
- Discriminated unions cho state machines (vd: QuizState)
- Type all props, all hooks return values
- Export types với keyword `type` (`import type { ... }`)

### React
- **Functional components only.**
- Hooks tuân thủ Rules of Hooks
- Memoization (`useMemo`, `useCallback`) chỉ khi cần thiết – đo bằng React DevTools Profiler
- Tránh prop drilling > 2 level → dùng Context

### Tailwind
- Dùng `cn()` helper từ `lib/utils.ts` để merge classes
- Sort classes theo `prettier-plugin-tailwindcss`
- Tránh inline style trừ khi dynamic (vd: `style={{ color: region.color }}`)

### File organization
- 1 component / 1 file
- Component file ≤ 300 dòng. Nếu quá, refactor.
- Co-locate styles, types, helpers nếu chỉ dùng trong 1 component

### Git commits
Theo Conventional Commits:
- `feat(phase4): add interactive 3d vietnam map`
- `fix(quiz): correct scoring logic`
- `style(hero): adjust typography spacing`
- `refactor(data): extract types to separate file`

---

## 8. 🚀 DEPLOYMENT

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git remote add origin git@github.com:USERNAME/vietmap-chronicle.git
git push -u origin main

# 2. Vercel CLI (nhanh nhất)
npm i -g vercel
vercel
# Follow prompts, chọn Vite framework
```

`vercel.json`:
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Netlify (Alternative)

`netlify.toml`:
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 9. 🐛 TROUBLESHOOTING

### Three.js không render trên Safari
- Kiểm tra WebGL: `https://get.webgl.org/`
- Safari iOS có vấn đề với một số `MeshStandardMaterial` features. Fallback: dùng `MeshBasicMaterial` hoặc `MeshLambertMaterial`
- Tăng `gl: { antialias: false }` nếu chậm trên mobile

### GeoJSON quá chi tiết → mesh nặng
- Dùng [mapshaper.org](https://mapshaper.org) để simplify GeoJSON (giảm vertex)
- Target: file size < 500KB

### TypeScript lỗi với three.js
- Cài thêm `@types/three`
- React-three-fiber có tự type cho JSX elements (`<mesh>`, `<group>`...)

### Build size lớn
- Code split với `React.lazy` cho Section 3 (map) và Section 4 (timeline)
- Tree-shake three.js: chỉ import modules cần thiết

---

## 10. 📋 FINAL CHECKLIST (KIỂM TRA TRƯỚC KHI NỘP)

- [ ] Tất cả 6 section hoạt động
- [ ] 4 vùng trên bản đồ click được, modal chi tiết đầy đủ
- [ ] Timeline 6 thời kỳ scroll mượt
- [ ] 4 case study hiển thị đúng
- [ ] Quiz 15 câu chấm điểm đúng
- [ ] Mobile responsive (test 375px, 768px, 1280px)
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Cross-browser test (Chrome, Safari, Firefox)
- [ ] Footer có credits nhóm + nguồn tài liệu
- [ ] Deploy thành công, URL hoạt động
- [ ] README.md đầy đủ
- [ ] Git repo có ≥ 7 commits (mỗi phase 1 commit)

---

## 11. 💬 COMMUNICATION PROTOCOL

Khi Claude Code cần hỏi user:

✅ ĐÚNG:
> ❓ **[PHASE 4]** Tôi cần file `vietnam.geo.json` đặt trong `public/assets/models/`. Bạn đã có chưa? Nếu chưa, tôi sẽ tạo file mock đơn giản để tiếp tục.

❌ SAI:
> Em không thể tiếp tục vì thiếu file map.

Format khi báo cáo tiến độ:

```
═══════════════════════════════════════
✅ PHASE 3 HOÀN TẤT

Đã làm:
- TheoryFoundation.tsx với 4 tab
- Tabs.tsx component accessible
- Tab 3 visualization 3 cột animated

Files changed: 5 created, 0 modified
Git commit: feat(phase3): theory foundation section with 4 tabs

⏭️  Sẵn sàng Phase 4 (Interactive 3D Map).
⚠️  Phase 4 cần: vietnam.geo.json + ảnh 4 vùng.

Bạn muốn tiếp tục? (y/n)
═══════════════════════════════════════
```

---

## 12. 🎓 NỘI DUNG HỌC THUẬT – LƯU Ý

Đây là sản phẩm cho **môn Chủ nghĩa Xã hội Khoa học** – một môn lý luận chính trị tại các trường đại học Việt Nam. Các điểm cần lưu ý:

1. **Thuật ngữ chính trị phải chính xác** theo Văn kiện Đảng và giáo trình. Ví dụ:
   - "Chủ nghĩa Mác-Lênin" (KHÔNG viết "chủ nghĩa Marx-Lenin")
   - "Đảng Cộng sản Việt Nam" (viết hoa đủ)
   - "Cách mạng Tháng Tám" (KHÔNG "Cách mạng tháng 8")

2. **Số liệu, sự kiện lịch sử lấy từ blueprint** – không bịa, không sửa.

3. **Tránh các phát ngôn nhạy cảm chính trị.** Khi nói về các sự kiện như Tây Nguyên 2001, Mường Nhé 2011, dùng đúng câu chữ trong blueprint (đã được chuẩn hóa).

4. **Không châm biếm, đùa cợt** về tôn giáo, dân tộc, hoặc các vấn đề chính trị. Tone luôn nghiêm túc, học thuật.

5. **Tài liệu tham khảo ở footer phải chính thống:** Giáo trình Bộ GDĐT, Văn kiện Đảng, Luật Tín ngưỡng Tôn giáo 2016, Báo Nhân Dân, Tạp chí Cộng sản...

---

*— End of Master Prompt —*

**Sau khi đọc xong file này, hãy báo cáo:**
1. Đã hiểu mission & tech stack ✅
2. Cần user xác nhận: bạn đã có sẵn các assets trong Section 6 chưa?
3. Sẵn sàng bắt đầu Phase 0.
