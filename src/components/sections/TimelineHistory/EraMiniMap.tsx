import {
  VIETNAM_OUTLINE_PATH,
  REGION_PROJECTED,
} from '@/lib/vietnamSilhouette'

// Mường Nhé sits in Điện Biên (lon ≈ 102.5, lat ≈ 22.2) — projected approximately
// by interpolating off Tây Bắc's known centroid (lon 104, lat 22). With Mercator
// extent [[15,15],[275,425]] and source viewBox 290x440, dx per degree lon ≈ 12.5,
// dy per degree lat ≈ -10. So Mường Nhé ≈ (taybac.cx - 18, taybac.cy + 2).
const MUONG_NHE = {
  cx: REGION_PROJECTED.taybac.cx - 18,
  cy: REGION_PROJECTED.taybac.cy + 2,
}

const HOTSPOTS = [
  {
    id: 'taynguyen',
    label: 'Tây Nguyên (2001, 2004)',
    ...REGION_PROJECTED.taynguyen,
  },
  { id: 'muongnhe', label: 'Mường Nhé (2011)', ...MUONG_NHE },
] as const

export function EraMiniMap() {
  return (
    <div className="rounded-lg border border-neutral-200 bg-bg-cream p-4">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <div>
          <h4 className="mb-0.5 font-mono text-[11px] font-semibold tracking-wider text-brand-red uppercase">
            Điểm nóng giai đoạn Đổi mới
          </h4>
          <p className="text-xs text-neutral-600">
            Các vùng ghi nhận sự kiện phức tạp về dân tộc – tôn giáo.
          </p>
        </div>
        <a
          href="#map"
          className="font-mono text-[11px] font-medium tracking-wide whitespace-nowrap text-brand-red underline-offset-2 hover:underline"
        >
          Mở bản đồ →
        </a>
      </div>

      <svg
        viewBox="0 0 290 440"
        role="img"
        aria-label="Mini-map Việt Nam đánh dấu các điểm nóng dân tộc – tôn giáo: Tây Nguyên và Mường Nhé."
        className="mx-auto h-auto w-full max-w-[200px]"
      >
        <path
          d={VIETNAM_OUTLINE_PATH}
          fill="#F4ECDC"
          stroke="#DA251D"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.9"
        />
        {HOTSPOTS.map((h) => (
          <g key={h.id}>
            <circle
              cx={h.cx}
              cy={h.cy}
              r="10"
              fill="#DA251D"
              fillOpacity="0.18"
            />
            <circle
              cx={h.cx}
              cy={h.cy}
              r="4.5"
              fill="#DA251D"
              stroke="white"
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>

      <ul className="mt-3 space-y-1.5">
        {HOTSPOTS.map((h) => (
          <li
            key={h.id}
            className="flex items-center gap-2 text-xs text-neutral-700"
          >
            <span
              aria-hidden
              className="inline-block h-2 w-2 shrink-0 rounded-full bg-brand-red"
            />
            {h.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
