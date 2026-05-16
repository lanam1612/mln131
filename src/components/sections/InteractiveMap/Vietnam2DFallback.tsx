import { regions } from '@/data'
import type { RegionId } from '@/data/types'

const VN_OUTLINE =
  'M 105 12 C 78 22, 58 55, 65 95 C 70 130, 92 150, 88 180 C 82 215, 65 240, 80 270 C 95 295, 120 305, 130 330 C 138 355, 128 380, 105 392 C 80 402, 50 395, 42 372 C 36 350, 48 330, 65 318 C 90 300, 95 275, 82 250 C 70 220, 75 190, 90 165 C 102 140, 95 110, 90 80 C 88 50, 95 25, 105 12 Z'

const REGION_DOTS: Record<RegionId, { cx: number; cy: number }> = {
  taybac: { cx: 78, cy: 75 },
  taynguyen: { cx: 110, cy: 270 },
  taynambo: { cx: 65, cy: 360 },
  namtrungbo: { cx: 128, cy: 305 },
}

interface Vietnam2DFallbackProps {
  activeRegionId: RegionId | null
  onSelectRegion: (id: RegionId) => void
}

export function Vietnam2DFallback({
  activeRegionId,
  onSelectRegion,
}: Vietnam2DFallbackProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 max-w-md text-center text-sm text-neutral-500">
        Trình duyệt của bạn chưa hỗ trợ WebGL — hiển thị phiên bản 2D đơn giản.
      </p>
      <svg
        viewBox="0 0 220 440"
        role="img"
        aria-label="Bản đồ 2D Việt Nam với 4 vùng trọng điểm"
        className="h-auto w-full max-w-md"
      >
        <defs>
          <linearGradient id="fallback-vn-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCE4E2" />
            <stop offset="100%" stopColor="#F8DEDC" />
          </linearGradient>
        </defs>
        <path
          d={VN_OUTLINE}
          fill="url(#fallback-vn-fill)"
          stroke="#DA251D"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {regions.map((r) => {
          const dot = REGION_DOTS[r.id]
          const isActive = activeRegionId === r.id
          return (
            <g key={r.id}>
              <circle
                cx={dot.cx}
                cy={dot.cy}
                r={isActive ? 8 : 6}
                fill={r.color}
                stroke="white"
                strokeWidth="1.5"
                className="cursor-pointer transition-all"
                onClick={() => onSelectRegion(r.id)}
              />
              <text
                x={dot.cx + 12}
                y={dot.cy + 4}
                className="cursor-pointer font-display"
                fontSize="12"
                fontWeight="600"
                fill="#0F4C75"
                onClick={() => onSelectRegion(r.id)}
              >
                {r.name}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
