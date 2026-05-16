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
  // TAB 4 — NGUYÊN TẮC GIẢI QUYẾT VẤN ĐỀ TÔN GIÁO
  // ---------------------------------------------------------------------------
  {
    id: 'nguyen-tac-ton-giao',
    title: 'Nguyên tắc giải quyết vấn đề tôn giáo',
    shortTitle: 'Nguyên tắc tôn giáo',
    content: [
      {
        type: 'highlight',
        variant: 'warning',
        text: 'Lưu ý quan trọng: Chủ nghĩa Mác-Lênin và chủ nghĩa xã hội KHÔNG có mục tiêu "tiêu diệt tôn giáo" — đây là xuyên tạc của các thế lực phản động. 4 nguyên tắc sau thể hiện bản chất NHÂN VĂN của chủ nghĩa xã hội.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Nguyên tắc 1: Tôn trọng quyền tự do tín ngưỡng',
      },
      {
        type: 'paragraph',
        text: 'Tôn trọng và bảo đảm quyền tự do tín ngưỡng VÀ không tín ngưỡng của nhân dân (với tôn giáo chân chính, hợp pháp).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Nguyên tắc 2: Khắc phục dần ảnh hưởng tiêu cực',
      },
      {
        type: 'paragraph',
        text: 'Khắc phục thông qua quá trình cải tạo xã hội cũ, xây dựng xã hội mới – tức xây dựng "thiên đường trên mặt đất" (chủ nghĩa xã hội) thì con người sẽ không cần đi tìm thiên đường ở thế giới hư ảo.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Nguyên tắc 3: Phân biệt 2 mặt của tôn giáo',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Mặt tư tưởng: nhu cầu tín ngưỡng hợp pháp → tôn trọng.',
          'Mặt chính trị: sự lợi dụng của thế lực phản động → kiên quyết đấu tranh.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Nguyên tắc 4: Quan điểm lịch sử – cụ thể',
      },
      {
        type: 'paragraph',
        text: 'Mỗi tôn giáo có hoàn cảnh ra đời, vai trò khác nhau ở mỗi thời kỳ → không áp dụng máy móc, cứng nhắc.',
      },
    ],
  },
]
