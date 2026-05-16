// =============================================================================
// PHẦN III — QUAN HỆ DÂN TỘC VÀ TÔN GIÁO Ở VIỆT NAM
// =============================================================================

export interface RelationsPanel {
  id: 'features' | 'directions'
  eyebrow: string
  title: string
  items: RelationsItem[]
}

export interface RelationsItem {
  heading: string
  body: string
}

export const relationsIntro =
  'Việt Nam là quốc gia vừa đa dân tộc vừa đa tôn giáo. Mối quan hệ giữa hai vấn đề này có tính đặc thù, đòi hỏi cách tiếp cận lịch sử – cụ thể, đặt trong cộng đồng quốc gia dân tộc thống nhất theo định hướng xã hội chủ nghĩa.'

export const relationsPanels: RelationsPanel[] = [
  {
    id: 'features',
    eyebrow: 'III.1 · Đặc điểm',
    title: '3 đặc điểm của quan hệ Dân tộc – Tôn giáo ở Việt Nam',
    items: [
      {
        heading: 'Đặt trên nền tảng quốc gia – dân tộc thống nhất',
        body: 'Việt Nam là quốc gia đa dân tộc, đa tôn giáo. Quan hệ dân tộc – tôn giáo được thiết lập và củng cố trên cơ sở cộng đồng quốc gia dân tộc thống nhất.',
      },
      {
        heading: 'Chịu chi phối mạnh bởi tín ngưỡng truyền thống',
        body: 'Tín ngưỡng dân gian (thờ cúng tổ tiên, thờ anh hùng dân tộc, thờ Mẫu…) đan xen sâu với mọi tôn giáo, tạo nên bản sắc tâm linh đặc trưng của người Việt.',
      },
      {
        heading: 'Hiện tượng tôn giáo mới phát triển mạnh',
        body: 'Một số hiện tượng tôn giáo mới có xu hướng phát triển nhanh, tác động đến đời sống cộng đồng và khối đại đoàn kết (ví dụ: "Hội thánh Đức Chúa Trời Mẹ" — đã bị xử lý theo pháp luật).',
      },
    ],
  },
  {
    id: 'directions',
    eyebrow: 'III.2 · Định hướng giải quyết',
    title: '3 định hướng giải quyết của Đảng và Nhà nước',
    items: [
      {
        heading: 'Củng cố khối đại đoàn kết',
        body: 'Tăng cường mối quan hệ tốt đẹp giữa dân tộc và tôn giáo, củng cố khối đại đoàn kết toàn dân — coi đây là vấn đề chiến lược cơ bản, lâu dài và cấp bách.',
      },
      {
        heading: 'Đặt trong cộng đồng quốc gia thống nhất',
        body: 'Giải quyết vấn đề dân tộc – tôn giáo phải đặt trong cộng đồng quốc gia dân tộc thống nhất, theo định hướng xã hội chủ nghĩa.',
      },
      {
        heading: 'Bảo đảm quyền — kiên quyết chống lợi dụng',
        body: 'Bảo đảm quyền tự do tín ngưỡng tôn giáo và quyền của dân tộc thiểu số. Đồng thời, kiên quyết đấu tranh chống mọi âm mưu lợi dụng vấn đề dân tộc – tôn giáo vào mục đích chính trị, chia rẽ đại đoàn kết.',
      },
    ],
  },
]
