import type { TheoryTab } from './types'

// =============================================================================
// 4 tab lý luận tôn giáo — bổ sung Phần II của Chương 6 CNXHKH:
// "Vấn đề Tôn giáo trong Thời kỳ Quá độ lên CNXH".
// =============================================================================

export const theologyTabs: TheoryTab[] = [
  // ---------------------------------------------------------------------------
  // TAB 1 — BẢN CHẤT, NGUỒN GỐC, TÍNH CHẤT CỦA TÔN GIÁO
  // ---------------------------------------------------------------------------
  {
    id: 'ban-chat-ton-giao',
    title: 'Bản chất, nguồn gốc, tính chất của tôn giáo',
    shortTitle: 'Bản chất',
    content: [
      {
        type: 'paragraph',
        text: 'Theo chủ nghĩa Mác-Lênin, tôn giáo là một hình thái ý thức xã hội phản ánh một cách hư ảo hiện thực khách quan — đồng thời là một thực thể xã hội với hệ thống yếu tố cấu thành.',
      },

      { type: 'heading', level: 2, text: 'A. Khái niệm và bản chất' },
      {
        type: 'paragraph',
        text: 'Tôn giáo là hiện tượng xã hội – văn hóa do con người sáng tạo ra (kế thừa Feuerbach: con người sáng tạo tôn giáo, không phải ngược lại). Tuy nhiên, khi đã sáng tạo, con người lại lệ thuộc, tuyệt đối hóa và phục tùng nó.',
      },
      { type: 'heading', level: 3, text: '5 yếu tố thực thể xã hội của tôn giáo' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Niềm tin sâu sắc vào đấng tối cao / lực lượng siêu nhiên (không cần lý tính chứng minh).',
          'Hệ thống giáo lý, giáo luật.',
          'Hệ thống cơ sở thờ tự.',
          'Tổ chức nhân sự quản lý.',
          'Hệ thống tín đồ.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Phân biệt tôn giáo – tín ngưỡng – mê tín dị đoan',
      },
      {
        type: 'table',
        headers: ['Khái niệm', 'Đặc điểm', 'Ví dụ'],
        rows: [
          [
            'Tôn giáo',
            'Niềm tin + đối tượng tôn thờ + giáo lý + giáo luật + lễ nghi + tổ chức (đầy đủ 5 yếu tố).',
            'Phật giáo, Công giáo, Tin Lành, Hồi giáo, Cao Đài…',
          ],
          [
            'Tín ngưỡng',
            'Niềm tin gắn lễ nghi, phong tục, truyền thống; không nhất thiết có đầy đủ các yếu tố của tôn giáo.',
            'Thờ cúng tổ tiên, thờ anh hùng dân tộc, thờ Mẫu.',
          ],
          [
            'Mê tín dị đoan',
            'Niềm tin mê muội, viển vông, không có cơ sở khoa học, mang tính cực đoan, phản văn hóa, gây tổn hại.',
            'Bói toán mê tín, đốt vàng mã quá độ, "phán mạng" lừa đảo.',
          ],
        ],
      },
      {
        type: 'highlight',
        variant: 'info',
        text: 'Dấu hiệu phân biệt cốt lõi giữa tín ngưỡng và mê tín dị đoan: có gây tổn hại đến cá nhân và cộng đồng hay không.',
      },

      { type: 'heading', level: 2, text: 'B. 3 nguồn gốc của tôn giáo' },
      {
        type: 'table',
        headers: ['#', 'Nguồn gốc', 'Nội dung'],
        rows: [
          [
            '1',
            'Tự nhiên – kinh tế – xã hội',
            'Sự bất lực của con người trước lực lượng tự phát của tự nhiên và xã hội (áp bức bóc lột giai cấp).',
          ],
          [
            '2',
            'Nhận thức',
            'Khoảng cách giữa "cái đã biết" và "cái chưa biết" luôn tồn tại; trình độ dân trí thấp là mảnh đất để tôn giáo tồn tại.',
          ],
          [
            '3',
            'Tâm lý',
            'Sự sợ hãi trước lực lượng tự phát của tự nhiên và xã hội → con người nhờ cậy vào lực lượng siêu nhiên.',
          ],
        ],
      },

      { type: 'heading', level: 2, text: 'C. 3 tính chất của tôn giáo' },
      {
        type: 'table',
        headers: ['Tính chất', 'Nội dung'],
        rows: [
          [
            'Tính lịch sử',
            'Tôn giáo có hình thành, tồn tại, phát triển; có khả năng biến đổi thích nghi — nhưng chậm, là hình thái ý thức xã hội bảo thủ nhất.',
          ],
          [
            'Tính quần chúng',
            'Hiện tượng phổ biến ở mọi dân tộc; chiếm khoảng 4/5 dân số thế giới; là nơi sinh hoạt văn hóa tinh thần của một bộ phận nhân dân.',
          ],
          [
            'Tính chính trị',
            'Xuất hiện khi xã hội phân chia giai cấp đối kháng; giai cấp thống trị từng sử dụng tôn giáo như công cụ áp bức tinh thần ("đêm trường trung cổ" châu Âu).',
          ],
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TAB 2 — NGUYÊN TẮC GIẢI QUYẾT VẤN ĐỀ TÔN GIÁO (4 nguyên tắc)
  // (Chuyển từ TheoryFoundation cũ — giữ nguyên nội dung)
  // ---------------------------------------------------------------------------
  {
    id: 'nguyen-tac-ton-giao',
    title: 'Nguyên tắc giải quyết vấn đề tôn giáo',
    shortTitle: 'Nguyên tắc',
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
        text: 'Khắc phục thông qua quá trình cải tạo xã hội cũ, xây dựng xã hội mới — tức xây dựng "thiên đường trên mặt đất" (chủ nghĩa xã hội). Khi đó con người không cần đi tìm thiên đường ở thế giới hư ảo.',
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
          'Mặt tư tưởng: nhu cầu tín ngưỡng hợp pháp, không phản ánh mâu thuẫn đối kháng → tôn trọng.',
          'Mặt chính trị: sự lợi dụng tôn giáo của các thế lực phản động → kiên quyết đấu tranh.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Nguyên tắc 4: Quan điểm lịch sử – cụ thể',
      },
      {
        type: 'paragraph',
        text: 'Mỗi tôn giáo có hoàn cảnh ra đời, vai trò, mức ảnh hưởng khác nhau ở mỗi thời kỳ → không áp dụng máy móc, cứng nhắc.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TAB 3 — 5 ĐẶC ĐIỂM TÔN GIÁO Ở VIỆT NAM
  // ---------------------------------------------------------------------------
  {
    id: 'dac-diem-ton-giao-vn',
    title: 'Đặc điểm tôn giáo ở Việt Nam',
    shortTitle: 'VN — 5 đặc điểm',
    content: [
      {
        type: 'highlight',
        variant: 'info',
        text: 'Việt Nam là quốc gia đa tôn giáo với 16 tôn giáo được công nhận và khoảng 26.5 triệu tín đồ (~27% dân số). Sau đây là 5 đặc điểm cơ bản.',
      },
      {
        type: 'table',
        headers: ['#', 'Đặc điểm', 'Diễn giải'],
        rows: [
          [
            '1',
            'Quốc gia có nhiều tôn giáo',
            'Các tôn giáo lớn chủ yếu du nhập từ bên ngoài (Phật giáo, Công giáo, Tin Lành, Hồi giáo). Đồng thời có tôn giáo nội sinh: Cao Đài, Phật giáo Hòa Hảo, Bửu Sơn Kỳ Hương…',
          ],
          [
            '2',
            'Đa dạng, đan xen, chung sống hòa bình',
            'Không có xung đột, chiến tranh tôn giáo. Tinh thần khoan dung tôn giáo là truyền thống của dân tộc VN.',
          ],
          [
            '3',
            'Tín đồ phần lớn là nhân dân lao động yêu nước',
            'Có tinh thần dân tộc, gắn bó với cộng đồng, đồng hành cùng dân tộc trong sự nghiệp xây dựng và bảo vệ Tổ quốc.',
          ],
          [
            '4',
            'Hàng ngũ chức sắc có vai trò quan trọng',
            'Chức sắc có uy tín, ảnh hưởng lớn với tín đồ. Vận động chức sắc là trọng tâm của công tác tôn giáo.',
          ],
          [
            '5',
            'Có quan hệ với tôn giáo nước ngoài',
            'Tổ chức / cá nhân tôn giáo trong nước đều có liên hệ với nước ngoài (Vatican với Công giáo, Liên hội Phật giáo quốc tế, các giáo hội Tin Lành quốc tế…).',
          ],
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TAB 4 — CHÍNH SÁCH TÔN GIÁO CỦA ĐẢNG VÀ NHÀ NƯỚC (5 nội dung)
  // ---------------------------------------------------------------------------
  {
    id: 'chinh-sach-ton-giao',
    title: 'Chính sách tôn giáo của Đảng và Nhà nước',
    shortTitle: 'Chính sách',
    content: [
      {
        type: 'paragraph',
        text: 'Chính sách tôn giáo của Đảng và Nhà nước Việt Nam thể hiện trên 5 nội dung cốt lõi.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Tín ngưỡng tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân, tồn tại cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội ở nước ta.',
          'Thực hiện nhất quán chính sách đại đoàn kết dân tộc — không phân biệt người có hay không có tín ngưỡng tôn giáo.',
          'Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng — chăm lo đời sống vật chất và tinh thần của tín đồ.',
          'Công tác tôn giáo là trách nhiệm của cả hệ thống chính trị, dưới sự lãnh đạo của Đảng.',
          'Vấn đề theo đạo và truyền đạo phải tuân thủ Hiến pháp và pháp luật.',
        ],
      },
      {
        type: 'highlight',
        variant: 'info',
        text: 'Cơ sở pháp lý cao nhất: Hiến pháp 2013, Luật Tín ngưỡng – Tôn giáo 2016 (hiệu lực 01/01/2018) và Nghị định 162/2017/NĐ-CP hướng dẫn thi hành.',
      },
    ],
  },
]
