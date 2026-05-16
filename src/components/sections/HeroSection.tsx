import { motion, useReducedMotion } from 'framer-motion'
import { LinkButton } from '@/components/ui/Button'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { regions } from '@/data'

// Stylized SVG silhouette (viewBox 0 0 290 440) — artistic, not a literal
// projection. The mid-section bulge to the right approximates the Phú Yên /
// Khánh Hòa coast so the Nam Trung Bộ marker lands on an actual coastline.
// The full GeoJSON map ships in Phase 4.
const VN_OUTLINE =
  'M 105 12 ' +
  'C 78 22, 58 55, 65 95 ' +
  'C 70 130, 92 150, 88 180 ' +
  'C 95 200, 125 215, 130 245 ' +
  'C 132 260, 115 270, 110 275 ' +
  'C 100 290, 110 305, 130 330 ' +
  'C 138 355, 128 380, 105 392 ' +
  'C 80 402, 50 395, 42 372 ' +
  'C 36 350, 48 330, 65 318 ' +
  'C 80 300, 95 290, 95 265 ' +
  'C 92 240, 85 215, 90 175 ' +
  'C 95 145, 95 115, 88 80 ' +
  'C 88 50, 95 25, 105 12 Z'

const STATS = [
  { value: 54, label: 'dân tộc anh em', suffix: '' },
  { value: 16, label: 'tôn giáo được công nhận', suffix: '' },
  { value: 26.5, label: 'triệu tín đồ (~27% dân số)', decimals: 1, suffix: '' },
] as const

// Approximate dot positions for the 4 regions inside the SVG viewBox.
// Coordinates roughly track latitude (cy) and east/west (cx); Nam Trung Bộ
// sits on the mid-east bulge, north of Tây Nguyên.
const REGION_DOTS: Record<
  'taybac' | 'taynguyen' | 'taynambo' | 'namtrungbo',
  { cx: number; cy: number; delay: number }
> = {
  taybac: { cx: 78, cy: 75, delay: 0 },
  namtrungbo: { cx: 122, cy: 248, delay: 0.4 },
  taynguyen: { cx: 90, cy: 285, delay: 0.8 },
  taynambo: { cx: 65, cy: 365, delay: 1.2 },
}

// Hoàng Sa & Trường Sa archipelago marker clusters (stylized cluster of
// small dots in the East Sea, east of the mainland silhouette).
const HOANG_SA_DOTS: ReadonlyArray<{ cx: number; cy: number; r: number }> = [
  { cx: 198, cy: 180, r: 2 },
  { cx: 204, cy: 186, r: 1.8 },
  { cx: 194, cy: 190, r: 1.6 },
  { cx: 208, cy: 194, r: 1.6 },
]
const TRUONG_SA_DOTS: ReadonlyArray<{ cx: number; cy: number; r: number }> = [
  { cx: 222, cy: 348, r: 2 },
  { cx: 230, cy: 354, r: 1.8 },
  { cx: 216, cy: 358, r: 1.7 },
  { cx: 236, cy: 362, r: 1.6 },
  { cx: 225, cy: 366, r: 1.5 },
  { cx: 244, cy: 370, r: 1.5 },
  { cx: 220, cy: 374, r: 1.4 },
]

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:pt-32"
    >
      <SubtleGrain />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3 py-1 font-mono text-xs tracking-wide text-brand-red uppercase"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-red" />
            Chương 6 · CNXHKH
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display mb-4 text-4xl leading-[1.05] font-bold tracking-tight text-neutral-900 md:text-6xl"
          >
            Hành trình{' '}
            <span className="text-brand-red">Dân tộc &amp; Tôn giáo</span>{' '}
            Việt Nam
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-10 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            Khám phá bức tranh sống động về{' '}
            <strong className="text-neutral-900">54 dân tộc anh em</strong> và{' '}
            <strong className="text-neutral-900">16 tôn giáo</strong> đang chung
            sống hòa bình trên dải đất hình chữ S. Cùng đi qua hơn 2000 năm
            lịch sử và 4 vùng đất chiến lược để hiểu vì sao{' '}
            <strong className="text-brand-red">
              đoàn kết là sức mạnh của Việt Nam
            </strong>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-10 grid grid-cols-3 gap-4 md:gap-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="font-display text-3xl leading-none font-bold tracking-tight text-brand-navy md:text-5xl">
                  <AnimatedNumber
                    value={stat.value}
                    decimals={'decimals' in stat ? stat.decimals : 0}
                  />
                </div>
                <div className="mt-2 text-xs text-neutral-600 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-wrap items-center gap-3"
          >
            <LinkButton href="#theory" size="lg">
              Bắt đầu hành trình
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 8h10m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </LinkButton>
            <LinkButton href="#map" variant="secondary" size="lg">
              Xem bản đồ tương tác
            </LinkButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <VietnamTeaserMap reduced={reduced ?? false} />
          <div className="mt-3 text-center font-mono text-[11px] tracking-wider text-neutral-500 uppercase">
            4 vùng trọng điểm · Click bản đồ ở Section 3 để khám phá
          </div>
        </motion.div>
      </div>

      <ScrollHint />
    </section>
  )
}

function VietnamTeaserMap({ reduced }: { reduced: boolean }) {
  return (
    <svg
      viewBox="0 0 290 440"
      role="img"
      aria-label="Bản đồ Việt Nam stylized với 4 hotspot vùng trọng điểm và quần đảo Hoàng Sa, Trường Sa"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="vn-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCE4E2" />
          <stop offset="100%" stopColor="#F8DEDC" />
        </linearGradient>
      </defs>

      <path
        d={VN_OUTLINE}
        fill="url(#vn-fill)"
        stroke="#DA251D"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.92"
      />

      {/* Hoàng Sa archipelago */}
      <g>
        {HOANG_SA_DOTS.map((d, i) => (
          <circle
            key={`hs-${i}`}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill="#DA251D"
          />
        ))}
        <text
          x={195}
          y={170}
          className="font-display"
          fontSize="10"
          fontWeight="600"
          fill="#DA251D"
        >
          Hoàng Sa
        </text>
      </g>

      {/* Trường Sa archipelago */}
      <g>
        {TRUONG_SA_DOTS.map((d, i) => (
          <circle
            key={`ts-${i}`}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill="#DA251D"
          />
        ))}
        <text
          x={216}
          y={340}
          className="font-display"
          fontSize="10"
          fontWeight="600"
          fill="#DA251D"
        >
          Trường Sa
        </text>
      </g>

      {regions.map((r) => {
        const dot = REGION_DOTS[r.id]
        return (
          <g key={r.id}>
            {!reduced && (
              <motion.circle
                cx={dot.cx}
                cy={dot.cy}
                r="6"
                fill={r.color}
                fillOpacity="0.5"
                initial={{ scale: 0.8, opacity: 0.6 }}
                animate={{ scale: [0.8, 2.5, 0.8], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: dot.delay,
                }}
                style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
              />
            )}
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r="5.5"
              fill={r.color}
              stroke="white"
              strokeWidth="1.5"
            />
            <text
              x={dot.cx + 10}
              y={dot.cy + 4}
              className="font-display"
              fontSize="11"
              fontWeight="600"
              fill="#0F4C75"
            >
              {r.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function SubtleGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 80% -10%, #DA251D 0%, transparent 50%), radial-gradient(ellipse at 0% 100%, #0F4C75 0%, transparent 45%)',
      }}
    />
  )
}

function ScrollHint() {
  const reduced = useReducedMotion()
  return (
    <div
      aria-hidden
      className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-neutral-400 md:flex"
    >
      <span className="font-mono text-[10px] tracking-widest uppercase">
        Cuộn xuống
      </span>
      <motion.div
        animate={reduced ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="h-5 w-[1px] bg-neutral-400"
      />
    </div>
  )
}
