import type { TheoryTab } from './types'

// =============================================================================
// 4 tab nền tảng lý luận — nội dung lấy nguyên văn từ
// vietmap-content-blueprint.md §3.
// =============================================================================

export const theoryTabs: TheoryTab[] = [
  // ---------------------------------------------------------------------------
  // TAB 1 — KHÁI NIỆM DÂN TỘC
  // ---------------------------------------------------------------------------
  {
    id: 'khai-niem-dan-toc',
    title: 'Khái niệm dân tộc',
    shortTitle: 'Khái niệm',
    content: [
      {
        type: 'paragraph',
        text: 'Khái niệm "dân tộc" được dùng theo hai nghĩa.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'A. Dân tộc theo nghĩa rộng – Quốc gia Dân tộc',
      },
      {
        type: 'paragraph',
        text: 'Là cộng đồng người ổn định hợp thành nhân dân của một nước, có lãnh thổ riêng, nền kinh tế thống nhất, ngôn ngữ chung và có ý thức về sự thống nhất của mình.',
      },
      {
        type: 'paragraph',
        text: 'Ví dụ: Dân tộc Việt Nam, dân tộc Trung Hoa, dân tộc Pháp…',
      },
      { type: 'heading', level: 3, text: '5 đặc trưng cơ bản' },
      {
        type: 'table',
        headers: ['#', 'Đặc trưng', 'Giải thích'],
        rows: [
          [
            '1',
            'Chung lãnh thổ ổn định',
            'Vùng đất thiêng liêng, gắn với khái niệm "Tổ quốc".',
          ],
          [
            '2',
            'Chung phương thức sinh hoạt kinh tế ⭐',
            'Đặc trưng quan trọng nhất – cơ sở gắn kết các thành viên.',
          ],
          [
            '3',
            'Chung ngôn ngữ làm công cụ giao tiếp',
            'Quốc ngữ (VN: tiếng Việt).',
          ],
          [
            '4',
            'Chung nền văn hóa và tâm lý',
            'Phong tục, lối sống, bản sắc dân tộc.',
          ],
          [
            '5',
            'Chung một nhà nước',
            'Đặc trưng phân biệt với dân tộc – tộc người.',
          ],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'B. Dân tộc theo nghĩa hẹp – Tộc người',
      },
      {
        type: 'paragraph',
        text: 'Là cộng đồng tộc người được hình thành trong lịch sử, có mối liên hệ chặt chẽ và bền vững.',
      },
      {
        type: 'paragraph',
        text: 'Ví dụ: Dân tộc Kinh, Tày, Thái, Khmer, Chăm, Ê-đê…',
      },
      { type: 'heading', level: 3, text: '3 đặc trưng cơ bản' },
      {
        type: 'table',
        headers: ['#', 'Đặc trưng', 'Giải thích'],
        rows: [
          [
            '1',
            'Cộng đồng về ngôn ngữ',
            'Tiêu chí cơ bản để phân biệt các tộc người.',
          ],
          [
            '2',
            'Cộng đồng về văn hóa',
            'Truyền thống, phong tục, tín ngưỡng riêng.',
          ],
          [
            '3',
            'Ý thức tự giác tộc người ⭐',
            'Tiêu chí quan trọng nhất – tự khẳng định nguồn gốc, bản sắc.',
          ],
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TAB 2 — HAI XU HƯỚNG PHÁT TRIỂN DÂN TỘC
  // ---------------------------------------------------------------------------
  {
    id: 'hai-xu-huong',
    title: 'Hai xu hướng phát triển dân tộc',
    shortTitle: 'Hai xu hướng',
    content: [
      {
        type: 'paragraph',
        text: 'V.I. Lênin – trên cơ sở nghiên cứu phong trào dân tộc trong điều kiện chủ nghĩa tư bản – đã phát hiện hai xu hướng khách quan.',
      },
      { type: 'heading', level: 2, text: 'Xu hướng 1: TÁCH RA' },
      {
        type: 'highlight',
        variant: 'info',
        text: 'Các cộng đồng dân cư muốn tách ra để hình thành quốc gia dân tộc độc lập.',
      },
      { type: 'heading', level: 2, text: 'Xu hướng 2: LIÊN HIỆP LẠI' },
      {
        type: 'highlight',
        variant: 'info',
        text: 'Các dân tộc trong từng quốc gia (hoặc nhiều quốc gia) muốn liên hiệp lại với nhau.',
      },
      {
        type: 'paragraph',
        text: 'Hai xu hướng này là khách quan, biểu hiện ở mọi giai đoạn lịch sử và phản ánh quy luật phát triển của dân tộc dưới tác động của các điều kiện kinh tế – chính trị – xã hội.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TAB 3 — CƯƠNG LĨNH DÂN TỘC CỦA LÊNIN
  // ---------------------------------------------------------------------------
  {
    id: 'cuong-linh-dan-toc',
    title: 'Cương lĩnh dân tộc của Lênin',
    shortTitle: 'Cương lĩnh Lênin',
    content: [
      {
        type: 'paragraph',
        text: 'Cương lĩnh dân tộc của V.I. Lênin gồm 3 nội dung cốt lõi, có quan hệ biện chứng với nhau.',
      },
      {
        type: 'heading',
        level: 2,
        text: '🌍 Nội dung 1: Các dân tộc hoàn toàn BÌNH ĐẲNG',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Là quyền thiêng liêng của các dân tộc.',
          'Không phân biệt số dân, trình độ phát triển.',
          'Phải được bảo đảm bằng pháp luật VÀ thực hiện trong đời sống.',
          'Phải đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa bá quyền nước lớn.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '⚖️ Nội dung 2: Các dân tộc được quyền TỰ QUYẾT',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Quyền làm chủ về con đường phát triển kinh tế, chính trị, xã hội.',
          'Bao gồm: (a) quyền tách ra lập quốc gia độc lập, (b) quyền liên hiệp tự nguyện.',
          'Phải xuất phát từ lợi ích của chính dân tộc đó, không phải của phần tử cực đoan.',
          'Phải đứng trên lập trường giai cấp công nhân.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '🤝 Nội dung 3: LIÊN HIỆP công nhân tất cả các dân tộc ⭐',
      },
      {
        type: 'highlight',
        variant: 'info',
        text: 'Đây là tư tưởng cơ bản của cương lĩnh — có vai trò quyết định việc thực hiện hai quyền bình đẳng và tự quyết.',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Thể hiện bản chất quốc tế của giai cấp công nhân.',
          'Có vai trò quyết định việc thực hiện 2 quyền trên.',
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TAB 4 — ĐẶC ĐIỂM DÂN TỘC VIỆT NAM (6 đặc điểm)
  // ---------------------------------------------------------------------------
  {
    id: 'dac-diem-dan-toc-vn',
    title: 'Đặc điểm dân tộc Việt Nam',
    shortTitle: 'VN — 6 đặc điểm',
    content: [
      {
        type: 'highlight',
        variant: 'info',
        text: 'Việt Nam là quốc gia đa dân tộc với 54 dân tộc anh em. Dân tộc Việt Nam có 6 đặc điểm cơ bản.',
      },
      {
        type: 'table',
        headers: ['#', 'Đặc điểm', 'Diễn giải'],
        rows: [
          [
            '1',
            'Chênh lệch lớn về số dân',
            'Dân tộc Kinh ~85,3% dân số; một số tộc người chỉ vài trăm – vài nghìn người (Brâu, Ơ Đu, Rơ Măm…).',
          ],
          [
            '2',
            'Cư trú xen kẽ',
            'Không có lãnh thổ riêng cho từng tộc người; các dân tộc cư trú xen kẽ là chủ yếu.',
          ],
          [
            '3',
            'Cư trú ở địa bàn chiến lược',
            'Các dân tộc thiểu số phân bố chủ yếu ở vùng núi, biên giới — vị trí trọng yếu về kinh tế, chính trị, an ninh quốc phòng.',
          ],
          [
            '4',
            'Trình độ phát triển không đồng đều',
            'Khoảng cách về kinh tế, giáo dục, y tế giữa miền xuôi và miền núi, giữa các tộc người còn lớn.',
          ],
          [
            '5',
            'Truyền thống đoàn kết gắn bó lâu đời',
            'Hình thành trong quá trình dựng nước và giữ nước — đặc trưng riêng của cộng đồng dân tộc Việt Nam thống nhất.',
          ],
          [
            '6',
            'Mỗi dân tộc có bản sắc riêng',
            'Tạo nên nền văn hóa Việt Nam "đa dạng trong thống nhất".',
          ],
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TAB 5 — QUAN ĐIỂM & CHÍNH SÁCH DÂN TỘC CỦA ĐẢNG VÀ NHÀ NƯỚC
  // ---------------------------------------------------------------------------
  {
    id: 'chinh-sach-dan-toc',
    title: 'Quan điểm và chính sách dân tộc của Đảng và Nhà nước',
    shortTitle: 'Chính sách',
    content: [
      { type: 'heading', level: 2, text: 'Quan điểm của Đảng' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Vấn đề dân tộc và đoàn kết dân tộc là vấn đề chiến lược cơ bản, lâu dài, đồng thời là vấn đề cấp bách.',
          'Các dân tộc bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển.',
          'Phát triển toàn diện: chính trị – kinh tế – văn hóa – xã hội – quốc phòng an ninh.',
          'Công tác dân tộc là nhiệm vụ của toàn Đảng, toàn dân, toàn quân, cả hệ thống chính trị.',
          'Phát huy sức mạnh đại đoàn kết dân tộc trong cộng đồng quốc gia dân tộc thống nhất.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Chính sách thể hiện trên 5 lĩnh vực',
      },
      {
        type: 'table',
        headers: ['Lĩnh vực', 'Nội dung trọng tâm'],
        rows: [
          [
            'Chính trị',
            'Bình đẳng giữa các dân tộc; bảo đảm địa vị chính trị và quyền tham gia quản lý nhà nước của các dân tộc thiểu số.',
          ],
          [
            'Kinh tế',
            'Đầu tư phát triển vùng đồng bào dân tộc thiểu số (Chương trình 135, 134, Nông thôn mới, Chương trình Mục tiêu Quốc gia 1719…).',
          ],
          [
            'Văn hóa',
            'Bảo tồn và phát huy bản sắc văn hóa truyền thống; tôn trọng văn hóa các dân tộc thiểu số.',
          ],
          [
            'Xã hội',
            'Phát triển giáo dục, y tế, đào tạo cán bộ người dân tộc thiểu số; thực hiện chính sách bảo trợ xã hội.',
          ],
          [
            'Quốc phòng – An ninh',
            'Bảo đảm an ninh chính trị, trật tự an toàn xã hội ở vùng đồng bào dân tộc thiểu số; xây dựng thế trận quốc phòng toàn dân.',
          ],
        ],
      },
    ],
  },
]
