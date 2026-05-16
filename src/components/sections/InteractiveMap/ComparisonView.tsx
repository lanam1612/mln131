import { Modal } from '@/components/ui/Modal'
import { regions } from '@/data'

interface ComparisonViewProps {
  open: boolean
  onClose: () => void
}

interface ComparisonRow {
  label: string
  get: (regionIndex: number) => string
}

const ROWS: ComparisonRow[] = [
  {
    label: 'Phạm vi',
    get: (i) => regions[i].scope,
  },
  {
    label: 'Số dân tộc tiêu biểu',
    get: (i) => `${regions[i].ethnicities.length} dân tộc`,
  },
  {
    label: 'Tôn giáo nổi bật',
    get: (i) => regions[i].religions.map((r) => r.name).join(', '),
  },
  {
    label: 'Vấn đề an ninh nóng',
    get: (i) => {
      const modern = regions[i].securityIssues.filter((s) => s.era === 'modern')
      return modern.length > 0
        ? modern.map((s) => s.title.split(/[–—]/)[0].trim()).join(' · ')
        : '—'
    },
  },
  {
    label: 'Chính sách trọng tâm',
    get: (i) => regions[i].policies[0] ?? '—',
  },
]

export function ComparisonView({ open, onClose }: ComparisonViewProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      variant="center"
      title="So sánh 4 vùng trọng điểm"
      labelledBy="comparison-title"
    >
      <div className="px-4 py-6 md:px-8 md:py-8">
        <p className="mb-6 max-w-2xl text-sm text-neutral-600 md:text-base">
          Bảng đối chiếu tóm tắt giúp nhận diện đặc trưng riêng và điểm chung
          giữa 4 vùng — cơ sở để hiểu vì sao mỗi vùng cần chính sách phù hợp
          thay vì áp dụng máy móc.
        </p>

        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full min-w-[720px] text-left text-sm md:text-base">
            <thead className="bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-neutral-50 px-4 py-3 font-semibold whitespace-nowrap text-neutral-800"
                >
                  Tiêu chí
                </th>
                {regions.map((r) => (
                  <th
                    key={r.id}
                    scope="col"
                    className="px-4 py-3 text-left font-semibold whitespace-nowrap text-neutral-800"
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: r.color }}
                        aria-hidden
                      />
                      {r.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {ROWS.map((row) => (
                <tr key={row.label} className="hover:bg-neutral-50/70">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-white px-4 py-3 text-left align-top font-mono text-xs font-semibold tracking-wide text-neutral-500 uppercase"
                  >
                    {row.label}
                  </th>
                  {regions.map((_, i) => (
                    <td
                      key={i}
                      className="px-4 py-3 align-top text-neutral-700"
                    >
                      {row.get(i)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-neutral-500 md:text-sm">
          ✱ Bảng tóm tắt — chi tiết đầy đủ xem trong panel chi tiết của từng
          vùng.
        </p>
      </div>
    </Modal>
  )
}
