import type { HistoricalEra } from './types'

// =============================================================================
// 6 thời kỳ lịch sử — nội dung lấy nguyên văn từ vietmap-content-blueprint.md §5
// =============================================================================

export const timeline: HistoricalEra[] = [
  {
    id: 'tien-su-dung-nuoc',
    order: 1,
    title: 'Tiền sử & Dựng nước',
    period: 'Thiên niên kỷ III TCN – 938 SCN',
    context:
      'Đây là giai đoạn hình thành các cộng đồng tộc người Việt cổ trên đất Việt Nam ngày nay. Trải qua các nền văn hóa khảo cổ Phùng Nguyên → Đồng Đậu → Gò Mun → Đông Sơn (đỉnh cao), người Việt cổ đã có một nền văn minh nông nghiệp lúa nước phát triển.',
    ethnicityState:
      'Hình thành 3 cộng đồng lớn: Việt cổ (đồng bằng Bắc Bộ), Champa (miền Trung), Phù Nam (Nam Bộ). Lạc Việt (tổ tiên người Kinh) là trung tâm; xung quanh có nhiều tộc Bách Việt. Năm 1000 năm Bắc thuộc (179 TCN – 938): vẫn giữ được bản sắc tộc người mặc dù chính sách đồng hóa của các triều đại Trung Hoa.',
    religionState:
      'Tín ngưỡng nguyên thủy: thờ thần tự nhiên (mặt trời, sông, núi), tô-tem (rồng, tiên), thờ Mẫu, thờ tổ tiên. Phật giáo du nhập từ Ấn Độ (đường biển) và Trung Quốc (đường bộ) khoảng thế kỷ II SCN – Luy Lâu (Bắc Ninh) là trung tâm Phật giáo sớm. Nho giáo, Đạo giáo du nhập từ Trung Quốc cùng thời Bắc thuộc.',
    keyEvents: [
      {
        year: '2879 TCN',
        description: '(truyền thuyết) Vua Hùng dựng nước Văn Lang.',
      },
      {
        year: '~179 TCN',
        description: 'Triệu Đà thôn tính Âu Lạc → bắt đầu Bắc thuộc.',
      },
      { year: '40–43', description: 'Khởi nghĩa Hai Bà Trưng.' },
      { year: '248', description: 'Khởi nghĩa Bà Triệu.' },
      {
        year: '938',
        description: 'Ngô Quyền đánh bại quân Nam Hán → kết thúc Bắc thuộc.',
      },
    ],
    theoryConnection:
      'Sự hình thành cộng đồng dân tộc Việt diễn ra qua tiến trình lịch sử lâu dài, đầy thử thách. Đây là minh chứng cho luận điểm dân tộc là sản phẩm của lịch sử, có quá trình hình thành – phát triển khách quan.',
  },

  {
    id: 'phong-kien-doc-lap',
    order: 2,
    title: 'Phong kiến độc lập',
    period: '938 – 1858',
    context:
      'Sau chiến thắng 938, Việt Nam bước vào thời kỳ phong kiến độc lập gần 1000 năm, trải qua các triều đại Ngô – Đinh – Tiền Lê – Lý – Trần – Hồ – Hậu Lê – Mạc – Trịnh/Nguyễn – Tây Sơn – Nguyễn.',
    ethnicityState:
      'Nam tiến: Từ thế kỷ XI đến XVIII, Việt Nam mở rộng lãnh thổ từ Đèo Ngang xuống mũi Cà Mau qua nhiều cuộc chiến và di dân. Sáp nhập đất Champa (1471 – Lê Thánh Tông), đất Phù Nam/Khmer (XVII-XVIII – chúa Nguyễn). Quá trình giao thoa văn hóa Việt – Chăm – Khmer hình thành bản sắc 3 miền.',
    religionState:
      'Lý – Trần (XI-XIV): Phật giáo cực thịnh, là quốc giáo; Trần Nhân Tông sáng lập Thiền phái Trúc Lâm Yên Tử. Hậu Lê – Nguyễn (XV-XIX): Nho giáo lên ngôi, trở thành hệ tư tưởng chính thống; Phật giáo lui về dân gian. Tam giáo đồng nguyên: Phật-Nho-Đạo hòa quyện trong đời sống tinh thần. Công giáo du nhập (thế kỷ XVI): các giáo sĩ Bồ Đào Nha, Tây Ban Nha, Pháp truyền đạo; Alexandre de Rhodes (1591–1660) soạn từ điển Việt – Bồ – La, đặt nền móng cho chữ Quốc ngữ. Tín ngưỡng dân gian vẫn phát triển: thờ Thành hoàng làng, thờ Mẫu (Tứ phủ).',
    keyEvents: [
      { year: '1010', description: 'Lý Công Uẩn dời đô Thăng Long.' },
      { year: '1075', description: 'Khoa thi đầu tiên (mở đường Nho giáo).' },
      {
        year: '1226',
        description: 'Nhà Trần thành lập, 3 lần đánh bại quân Mông Nguyên.',
      },
      { year: '1471', description: 'Lê Thánh Tông chinh phục Champa.' },
      {
        year: '~1533',
        description: 'Công giáo bắt đầu được truyền vào Việt Nam.',
      },
      { year: '1788', description: 'Quang Trung đại phá quân Thanh.' },
      {
        year: '1802',
        description: 'Nguyễn Ánh lập triều Nguyễn, thống nhất đất nước.',
      },
    ],
    theoryConnection:
      'Quá trình "Nam tiến" thể hiện xu hướng liên hiệp các tộc người trong một quốc gia thống nhất. Sự đa dạng Việt – Chăm – Khmer – Hoa hình thành nên cộng đồng dân tộc Việt Nam đa sắc tộc nhưng thống nhất – đặc trưng quan trọng của dân tộc theo nghĩa quốc gia.',
  },

  {
    id: 'phap-thuoc',
    order: 3,
    title: 'Pháp thuộc',
    period: '1858 – 1945',
    context:
      'Năm 1858, Pháp nổ súng tấn công Đà Nẵng, mở đầu gần 100 năm đô hộ. Việt Nam mất chủ quyền, bị chia thành 3 kỳ (Bắc, Trung, Nam) với chế độ cai trị khác nhau.',
    ethnicityState:
      'Chính sách "chia để trị": Pháp chia 3 kỳ, kích động chia rẽ giữa các vùng, các tộc người. Tạo "Xứ Thượng tự trị" ở Tây Nguyên, "Khu tự trị Mèo" ở Tây Bắc để tách rời với chính quốc. Chính sách ngu dân: mở nhà tù nhiều hơn trường học, dùng rượu cồn và thuốc phiện. Hồ Chí Minh tố cáo trong "Bản án chế độ thực dân Pháp" (1925).',
    religionState:
      'Công giáo được Pháp hậu thuẫn, phát triển mạnh – nhưng nhiều giáo dân vẫn yêu nước (cha Cương, cha Lực). Phật giáo chấn hưng từ thập niên 1920–1930 với các vị Khánh Hòa, Thiện Chiếu. Cao Đài ra đời 1926 tại Tây Ninh – tôn giáo nội sinh đầu tiên kết hợp nhiều tôn giáo. Phật giáo Hòa Hảo ra đời 1939 tại An Giang (Huỳnh Phú Sổ). Các tôn giáo nội sinh có yếu tố yêu nước, chống Pháp.',
    keyEvents: [
      { year: '1858', description: 'Pháp tấn công Đà Nẵng.' },
      {
        year: '1884',
        description: 'Hiệp ước Patenotre – VN chính thức là thuộc địa Pháp.',
      },
      {
        year: '1925',
        description:
          'Hồ Chí Minh xuất bản "Bản án chế độ thực dân Pháp".',
      },
      { year: '1926', description: 'Đạo Cao Đài ra đời.' },
      { year: '1930', description: 'Đảng Cộng sản Việt Nam thành lập.' },
      { year: '1939', description: 'Đạo Hòa Hảo ra đời.' },
      {
        year: '1945',
        description: 'Cách mạng Tháng Tám thành công, lập VNDCCH.',
      },
    ],
    theoryConnection:
      'Đây là minh chứng rõ nhất cho luận điểm Mác – Ăngghen: "Hãy xóa bỏ nạn người áp bức bóc lột người thì sẽ xóa bỏ được nạn dân tộc này áp bức nô dịch dân tộc khác." Pháp dùng tôn giáo (Công giáo) làm công cụ thống trị – đúng như tính chất chính trị của tôn giáo trong xã hội có giai cấp đối kháng.',
  },

  {
    id: 'khang-chien-thong-nhat',
    order: 4,
    title: 'Kháng chiến & Thống nhất',
    period: '1945 – 1975',
    context:
      'Việt Nam trải qua 2 cuộc kháng chiến chống Pháp (1946–1954) và chống Mỹ (1954–1975), kết thúc với chiến thắng 30/4/1975 thống nhất đất nước.',
    ethnicityState:
      'Chính sách đại đoàn kết dân tộc của Hồ Chí Minh: "Đoàn kết, đoàn kết, đại đoàn kết". Các dân tộc thiểu số tham gia kháng chiến: Bộ đội Cụ Hồ người Tày, Thái, H\'mông; Anh hùng Núp (Ba Na); Đinh Núp; A Sanh… 1954–1975: ở miền Nam, chính quyền VNCH lợi dụng các dân tộc thiểu số (lập FULRO).',
    religionState:
      'Miền Bắc (sau 1954): chính sách tự do tín ngưỡng, nhiều giáo dân tham gia kháng chiến (Phật giáo, Công giáo yêu nước). Miền Nam: Mỹ-ngụy lợi dụng tôn giáo. Phong trào Phật giáo 1963 chống Ngô Đình Diệm (đỉnh điểm: Hòa thượng Thích Quảng Đức tự thiêu 11/6/1963). Lợi dụng Công giáo, Hòa Hảo, Cao Đài để chống Cách mạng. Tuy vậy, đa số tín đồ tôn giáo đều tham gia hoặc ủng hộ Cách mạng.',
    keyEvents: [
      { year: '1946', description: 'Toàn quốc kháng chiến.' },
      {
        year: '1954',
        description:
          'Chiến thắng Điện Biên Phủ – Hiệp định Geneva chia 2 miền.',
      },
      {
        year: '1963',
        description: 'Phong trào Phật giáo chống chính quyền Ngô Đình Diệm.',
      },
      { year: '1968', description: 'Tổng tiến công Tết Mậu Thân.' },
      {
        year: '30/4/1975',
        description: 'Giải phóng miền Nam, thống nhất đất nước.',
      },
    ],
    theoryConnection:
      'Cách mạng Việt Nam đã thực hiện đúng cương lĩnh Lênin: đoàn kết các dân tộc, đoàn kết giai cấp công nhân với nông dân và các tầng lớp lao động trong cuộc đấu tranh giải phóng. Đoàn kết tôn giáo dưới ngọn cờ Mặt trận Tổ quốc là chìa khóa thắng lợi.',
  },

  {
    id: 'hau-chien-tien-doi-moi',
    order: 5,
    title: 'Hậu chiến & Tiền Đổi mới',
    period: '1975 – 1986',
    context:
      'Thống nhất đất nước nhưng đối mặt vô vàn khó khăn: khủng hoảng kinh tế, cấm vận, chiến tranh biên giới Tây Nam (1978–1989) và biên giới phía Bắc (1979), tàn dư FULRO ở Tây Nguyên.',
    ethnicityState:
      'Xác định 54 dân tộc anh em (công bố chính thức 1979). Vấn đề người Hoa và sự kiện "thuyền nhân" 1978–1980. Tiếp tục xử lý tổ chức FULRO ở Tây Nguyên (đến 1992 mới tan rã). Di dân kinh tế mới: người Kinh từ đồng bằng lên Tây Nguyên, Tây Bắc.',
    religionState:
      'Giáo hội Phật giáo Việt Nam thống nhất (1981) – sự kiện lịch sử. Nhiều tôn giáo gặp khó khăn do hoàn cảnh hậu chiến + nhận thức chưa đầy đủ. Một số phần tử cực đoan Hòa Hảo, Cao Đài bỏ ra nước ngoài hoạt động chống phá.',
    keyEvents: [
      { year: '1976', description: 'Thống nhất nhà nước (CHXHCN Việt Nam).' },
      {
        year: '1979',
        description: 'Chiến tranh biên giới phía Bắc + công bố 54 dân tộc.',
      },
      { year: '1981', description: 'Giáo hội Phật giáo VN thành lập.' },
      { year: '1986', description: 'Đại hội Đảng VI – mở đầu Đổi mới.' },
    ],
  },

  {
    id: 'doi-moi-hoi-nhap',
    order: 6,
    title: 'Đổi mới & Hội nhập',
    period: '1986 – nay (2026)',
    context:
      'Đường lối Đổi mới (1986) mở ra giai đoạn phát triển toàn diện. Việt Nam hội nhập khu vực (ASEAN 1995, WTO 2007, CPTPP 2018). Vấn đề dân tộc – tôn giáo bước vào giai đoạn mới với cả thuận lợi (đời sống nâng cao) và thách thức (các thế lực thù địch lợi dụng).',
    ethnicityState:
      'Đảng xác định: vấn đề dân tộc là vấn đề chiến lược, cơ bản, lâu dài, đồng thời cấp bách. Hàng loạt chương trình phát triển vùng dân tộc thiểu số: 134, 135, 30a, 1719 (giai đoạn 2021–2030). Nhưng vẫn còn khoảng cách phát triển lớn giữa các dân tộc.',
    religionState:
      'Luật Tín ngưỡng, Tôn giáo 2016 – văn bản pháp lý cao nhất. Hiện có 16 tôn giáo, 43 tổ chức tôn giáo được công nhận. ~26.5 triệu tín đồ (chiếm ~27% dân số). Các tôn giáo "đồng hành cùng dân tộc". Thách thức: các sự kiện phức tạp (Tây Nguyên 2001, 2004; Mường Nhé 2011; Hội thánh Đức Chúa Trời Mẹ 2018; Chùa Ba Vàng 2019; Cư Kuin 2023). Hiện tượng tôn giáo mới, tà đạo lan truyền qua mạng xã hội. Mâu thuẫn về đất đai một số cơ sở tôn giáo.',
    keyEvents: [
      { year: '1986', description: 'Đổi mới.' },
      { year: '1990', description: 'Pháp lệnh về tôn giáo (lần đầu tiên).' },
      { year: '1999', description: 'Công nhận Phật giáo Hòa Hảo.' },
      { year: '2001, 2004', description: 'Sự kiện Tây Nguyên.' },
      { year: '2011', description: 'Sự kiện Mường Nhé.' },
      { year: '2016', description: 'Luật Tín ngưỡng, Tôn giáo.' },
      { year: '2018', description: 'Vụ Hội thánh Đức Chúa Trời Mẹ.' },
      { year: '2023', description: 'Vụ tấn công Cư Kuin.' },
      {
        year: '2024',
        description:
          'Nghị quyết 41-NQ/TW về xây dựng đội ngũ doanh nhân, trong đó có dân tộc thiểu số.',
      },
    ],
    theoryConnection:
      'Việt Nam đang thực hiện cả 3 nội dung cương lĩnh dân tộc của Lênin: (1) bình đẳng giữa các dân tộc – thể hiện trong Hiến pháp + thực tế; (2) tự quyết dân tộc – Việt Nam độc lập, các dân tộc tự lựa chọn con đường phát triển; (3) liên hiệp công nhân – đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng.',
  },
]
