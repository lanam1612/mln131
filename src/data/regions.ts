import type { Region } from './types'

// =============================================================================
// 4 vùng trọng điểm — nội dung lấy nguyên văn từ vietmap-content-blueprint.md §4
// Tọa độ [lng, lat] dùng cho bản đồ Section 3.
// =============================================================================

export const regions: Region[] = [
  // ---------------------------------------------------------------------------
  // VÙNG 1 — TÂY BẮC
  // ---------------------------------------------------------------------------
  {
    id: 'taybac',
    name: 'Tây Bắc',
    scope: 'Điện Biên, Lai Châu, Sơn La, Hòa Bình, Lào Cai, Yên Bái',
    coordinates: [104, 22],
    color: '#E63946',
    overview:
      'Vùng núi cao biên giới phía Tây Bắc Việt Nam, giáp Lào và Trung Quốc. Địa hình hiểm trở, dân cư thưa thớt, đa số là đồng bào dân tộc thiểu số. Là vùng có vị trí chiến lược đặc biệt quan trọng về quốc phòng – an ninh.',
    ethnicities: [
      {
        name: 'Thái',
        population: '~1.8 triệu',
        characteristics:
          'Sống ở thung lũng, văn hóa lúa nước; lễ hội Xòe (di sản UNESCO 2021).',
      },
      {
        name: "H'mông",
        population: '~1.4 triệu',
        characteristics:
          'Sống ở vùng cao 1000m+; chợ phiên Bắc Hà, Sapa nổi tiếng.',
      },
      {
        name: 'Tày',
        population: '~1.9 triệu',
        characteristics:
          'Đông nhất trong các dân tộc thiểu số; lễ hội Lồng Tồng.',
      },
      {
        name: 'Dao',
        population: '~900 nghìn',
        characteristics: 'Trang phục đỏ rực rỡ; tục cấp sắc đặc trưng.',
      },
      {
        name: 'Mường',
        population: '~1.5 triệu',
        characteristics: 'Văn hóa cồng chiêng; gần gũi văn hóa Việt cổ.',
      },
    ],
    religions: [
      {
        name: 'Tín ngưỡng truyền thống',
        description:
          'Vẫn chiếm chủ đạo: thờ tổ tiên, thờ ma, thờ thần núi/thần rừng.',
      },
      {
        name: 'Đạo Tin Lành',
        description:
          "Phát triển mạnh trong cộng đồng H'mông từ thập niên 1980, có nhiều biến tướng.",
      },
      {
        name: 'Phật giáo, Công giáo',
        description: 'Có mặt nhưng số lượng tín đồ ít hơn.',
      },
    ],
    securityIssues: [
      {
        era: 'historical',
        title: 'Thực dân Pháp lợi dụng dân tộc thiểu số',
        description:
          'Thực dân Pháp lợi dụng các dân tộc thiểu số chống lại cách mạng (chiến dịch Điện Biên Phủ 1954). Sau 1975: vấn đề "vượt biên" sang Lào, Trung Quốc.',
      },
      {
        era: 'modern',
        title: 'Sự kiện Mường Nhé 2011 (Điện Biên)',
        description:
          "Hàng nghìn người H'mông bị kích động tụ tập đòi lập \"Vương quốc Mông\", được tổ chức phản động ở nước ngoài chỉ đạo qua Tin Lành biến tướng.",
      },
      {
        era: 'modern',
        title: 'Di cư tự do và an ninh biên giới',
        description:
          'Tình trạng di cư tự do, đốt rừng làm rẫy. Các thế lực thù địch lợi dụng đói nghèo + tôn giáo để kích động ly khai.',
      },
    ],
    policies: [
      'Chương trình 135 (từ 1998): phát triển kinh tế-xã hội xã đặc biệt khó khăn.',
      'Nghị quyết 30a (2008): giảm nghèo bền vững 64 huyện nghèo nhất.',
      'Đầu tư hạ tầng: thủy điện Sơn La, Lai Châu; đường cao tốc Nội Bài – Lào Cai.',
      'Trường nội trú dân tộc; cộng điểm tuyển sinh; bác sĩ về làng.',
      'Bộ đội biên phòng làm "cầu nối" với dân.',
    ],
    images: [
      {
        src: '/assets/images/regions/taybac-ruong-bac-thang.jpg',
        alt: 'Ruộng bậc thang Mù Cang Chải (Yên Bái)',
        source: 'Wikipedia Commons',
      },
      {
        src: '/assets/images/regions/taybac-le-hoi-xoe.jpg',
        alt: 'Lễ hội Xòe Thái',
        source: 'Bộ Văn hóa, Thể thao và Du lịch',
      },
      {
        src: '/assets/images/regions/taybac-cho-bac-ha.jpg',
        alt: 'Chợ phiên Bắc Hà',
        source: 'Vietnamtourism',
      },
      {
        src: '/assets/images/regions/taybac-bien-phong.jpg',
        alt: 'Bộ đội biên phòng cõng dân vượt lũ',
        source: 'Báo Quân đội Nhân dân',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // VÙNG 2 — TÂY NGUYÊN
  // ---------------------------------------------------------------------------
  {
    id: 'taynguyen',
    name: 'Tây Nguyên',
    scope: 'Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng',
    coordinates: [108, 13],
    color: '#F4A261',
    overview:
      'Cao nguyên đất đỏ bazan, độ cao 500–1500m. Là vùng đất văn hóa cồng chiêng (UNESCO 2005), nhà rông, nhà dài, sử thi Tây Nguyên. Vị trí chiến lược kép: vừa là "mái nhà Đông Dương" về địa lý, vừa là vùng kinh tế cà phê – cao su quan trọng.',
    ethnicities: [
      {
        name: 'Gia Rai',
        population: '~530 nghìn',
        characteristics:
          'Theo chế độ mẫu hệ; nổi tiếng nghệ thuật điêu khắc nhà mồ.',
      },
      {
        name: 'Ê-đê',
        population: '~400 nghìn',
        characteristics: 'Mẫu hệ; nhà dài đặc trưng có thể dài 50–100m.',
      },
      {
        name: 'Ba Na',
        population: '~290 nghìn',
        characteristics: 'Phụ hệ; sử thi Bahnar.',
      },
      {
        name: 'Mơ Nông',
        population: '~130 nghìn',
        characteristics: 'Săn voi, thuần dưỡng voi (Buôn Đôn).',
      },
      {
        name: 'Xơ Đăng',
        population: '~220 nghìn',
        characteristics: 'Sống vùng cao Kon Tum.',
      },
      {
        name: 'Kinh, Tày, Nùng',
        population: 'Đa số hiện nay',
        characteristics: 'Di cư đến Tây Nguyên sau 1975.',
      },
    ],
    religions: [
      {
        name: 'Tín ngưỡng đa thần truyền thống',
        description: 'Thờ Yang (thần) – Yang Lúa, Yang Núi, Yang Sông…',
      },
      {
        name: 'Công giáo',
        description:
          'Du nhập từ thế kỷ XIX qua các nhà truyền giáo Pháp; nhiều giáo phận lớn.',
      },
      {
        name: 'Tin Lành',
        description:
          'Phát triển mạnh từ sau 1975, đặc biệt trong người dân tộc thiểu số.',
      },
      {
        name: 'Phật giáo',
        description: 'Chủ yếu trong cộng đồng người Kinh.',
      },
    ],
    securityIssues: [
      {
        era: 'historical',
        title: 'Pháp lập "Xứ Thượng tự trị" và tổ chức FULRO',
        description:
          'Thời Pháp thuộc: lập "Xứ Thượng tự trị" (Pays Montagnard du Sud) để chia rẽ. Thời chiến: tổ chức FULRO (Mặt trận Thống nhất Đấu tranh của các Sắc tộc bị Áp bức) chống cả Việt Nam Cộng hòa lẫn Cách mạng. 1975–1992: FULRO tiếp tục hoạt động vũ trang, đến 1992 mới tan rã hoàn toàn.',
      },
      {
        era: 'modern',
        title: 'Tháng 2/2001 — biểu tình do "Ksor Kok" kích động',
        description:
          'Hàng nghìn người dân tộc thiểu số tại Gia Lai, Đắk Lắk biểu tình, phá hoại tài sản – do tổ chức "Ksor Kok" ở Mỹ kích động qua Tin Lành biến tướng.',
      },
      {
        era: 'modern',
        title: 'Tháng 4/2004 — đòi lập "Nhà nước Đề-ga Tự trị"',
        description:
          'Biểu tình tương tự, đòi lập "Nhà nước Đề-ga Tự trị" lấy "Tin Lành Đề-ga" làm quốc giáo.',
      },
      {
        era: 'modern',
        title: 'Tháng 6/2023 — vụ tấn công Cư Kuin',
        description:
          'Vụ tấn công 2 trụ sở UBND xã ở Cư Kuin (Đắk Lắk), bắn chết 9 người – âm mưu khủng bố mang màu sắc ly khai. Bản chất: lợi dụng chiêu bài "dân tộc tự quyết", "tự do tôn giáo" để chia rẽ, ly khai.',
      },
    ],
    policies: [
      'Nghị quyết 10-NQ/TW (2002) và Nghị quyết 23-NQ/TW (2022) về phát triển Tây Nguyên.',
      'Đầu tư mạnh hạ tầng: đường Hồ Chí Minh, sân bay Buôn Ma Thuột, Pleiku.',
      'Bảo tồn văn hóa cồng chiêng (UNESCO).',
      'Tuyên truyền phân biệt "Tin Lành thuần túy" với "Tin Lành Đề-ga" – cái sau bị cấm.',
      'Xử lý nghiêm minh nhưng nhân văn các đối tượng vi phạm.',
    ],
    images: [
      {
        src: '/assets/images/regions/taynguyen-cong-chieng.jpg',
        alt: 'Cồng chiêng Tây Nguyên',
        source: 'UNESCO',
      },
      {
        src: '/assets/images/regions/taynguyen-nha-dai.jpg',
        alt: 'Nhà dài Ê-đê',
        source: 'Bảo tàng Dân tộc học',
      },
      {
        src: '/assets/images/regions/taynguyen-le-bo-ma.jpg',
        alt: 'Lễ đâm trâu, lễ bỏ mả',
        source: 'Tư liệu báo chí',
      },
      {
        src: '/assets/images/regions/taynguyen-cu-kuin.jpg',
        alt: 'Phiên tòa xét xử vụ Cư Kuin',
        source: 'Báo Nhân Dân',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // VÙNG 3 — TÂY NAM BỘ
  // ---------------------------------------------------------------------------
  {
    id: 'taynambo',
    name: 'Tây Nam Bộ',
    scope:
      '13 tỉnh ĐBSCL — nổi bật là An Giang, Sóc Trăng, Trà Vinh, Kiên Giang, Tây Ninh',
    coordinates: [105.5, 10],
    color: '#2A9D8F',
    overview:
      'Đồng bằng phù sa do sông Mekong bồi đắp. Là vùng giao thoa văn hóa Việt – Khmer – Hoa – Chăm đặc sắc. Đặc biệt: vùng có nhiều tôn giáo nội sinh Việt Nam nhất – Phật giáo Hòa Hảo, Cao Đài, Bửu Sơn Kỳ Hương, Tứ Ân Hiếu Nghĩa.',
    ethnicities: [
      {
        name: 'Kinh',
        population: '~16 triệu',
        characteristics: 'Toàn vùng (đa số).',
      },
      {
        name: 'Khmer',
        population: '~1.3 triệu',
        characteristics: 'Trà Vinh, Sóc Trăng, Kiên Giang.',
      },
      {
        name: 'Hoa',
        population: '~700 nghìn',
        characteristics: 'Đô thị, thương mại.',
      },
      {
        name: 'Chăm (Islam)',
        population: '~14 nghìn',
        characteristics: 'Châu Đốc (An Giang).',
      },
    ],
    religions: [
      {
        name: 'Phật giáo Nam tông Khmer',
        description:
          'Hơn 450 chùa, gắn bó với người Khmer; mỗi nam Khmer đều xuất gia ít nhất 1 lần.',
      },
      {
        name: 'Phật giáo Hòa Hảo',
        description:
          'Sáng lập 1939 bởi Huỳnh Phú Sổ tại làng Hòa Hảo (An Giang); ~1.5 triệu tín đồ.',
      },
      {
        name: 'Đạo Cao Đài',
        description:
          'Sáng lập 1926 tại Tây Ninh; Tòa Thánh Tây Ninh là công trình tâm linh đặc sắc; ~1.1 triệu tín đồ.',
      },
      {
        name: 'Hồi giáo Chăm',
        description: 'Cộng đồng Chăm Islam ở An Giang.',
      },
      {
        name: 'Bửu Sơn Kỳ Hương, Tứ Ân Hiếu Nghĩa',
        description: 'Các tôn giáo nội sinh nhỏ hơn.',
      },
    ],
    securityIssues: [
      {
        era: 'modern',
        title: 'Vấn đề Khmer Krom',
        description:
          'Một số tổ chức Khmer Krom lưu vong (KKF – Khmers Kampuchea-Krom Federation) ở Mỹ, Campuchia kích động đòi "phục hồi lãnh thổ". Lợi dụng vấn đề đất đai của chùa Khmer để gây mâu thuẫn.',
      },
      {
        era: 'historical',
        title: 'Phật giáo Hòa Hảo trước và sau 1975',
        description:
          'Trước 1975: bị lợi dụng chống cách mạng (các phần tử cực đoan). Sau 1975: phần lớn đã đồng hành cùng dân tộc, được Nhà nước công nhận năm 1999. Vẫn còn một số nhóm "Hòa Hảo thuần túy" bất hợp pháp ở An Giang chống đối.',
      },
      {
        era: 'modern',
        title: 'Vấn đề Cao Đài',
        description:
          'Chính danh Cao Đài Tây Ninh được công nhận, một số chi phái nhỏ bị lợi dụng.',
      },
    ],
    policies: [
      'Hỗ trợ chùa Khmer trùng tu; giáo dục song ngữ Việt – Khmer.',
      'Đào tạo sư sãi Phật giáo Nam tông tại Học viện PG Nam tông Khmer Cần Thơ.',
      'Công nhận tư cách pháp nhân các tôn giáo lớn (Cao Đài 1997, Hòa Hảo 1999).',
      'Phát triển kinh tế ĐBSCL: cầu Cần Thơ, cao tốc Trung Lương – Mỹ Thuận.',
    ],
    images: [
      {
        src: '/assets/images/regions/taynambo-toa-thanh-tay-ninh.jpg',
        alt: 'Tòa Thánh Tây Ninh',
        source: 'Wikipedia Commons',
      },
      {
        src: '/assets/images/regions/taynambo-chua-khmer.jpg',
        alt: 'Chùa Khmer (Chùa Dơi – Sóc Trăng)',
        source: 'Vietnamtourism',
      },
      {
        src: '/assets/images/regions/taynambo-ok-om-bok.jpg',
        alt: 'Lễ Ok Om Bok của người Khmer',
      },
      {
        src: '/assets/images/regions/taynambo-thanh-duong-mubarak.jpg',
        alt: 'Thánh đường Hồi giáo Mubarak (Châu Đốc)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // VÙNG 4 — DUYÊN HẢI NAM TRUNG BỘ
  // ---------------------------------------------------------------------------
  {
    id: 'namtrungbo',
    name: 'Duyên hải Nam Trung Bộ',
    scope: 'Ninh Thuận, Bình Thuận (vùng tập trung người Chăm)',
    coordinates: [108.5, 11.5],
    color: '#264653',
    overview:
      'Vùng đất từng là trung tâm Vương quốc Champa cổ (thế kỷ II–XV). Đây là nơi lưu giữ di sản văn hóa Chăm đặc sắc nhất Việt Nam – với hệ thống tháp Chăm, lễ hội Katê (di sản phi vật thể quốc gia), nghề dệt thổ cẩm Mỹ Nghiệp, gốm Bàu Trúc.',
    ethnicities: [
      {
        name: 'Chăm',
        population: '~180 nghìn',
        characteristics: 'Phân hóa thành Chăm Bà-la-môn và Chăm Bà-ni/Islam.',
      },
      {
        name: 'Raglai',
        population: '~145 nghìn',
        characteristics:
          'Cư trú vùng núi Ninh Thuận; có liên hệ văn hóa với Chăm.',
      },
      {
        name: 'Cơ Ho',
        population: '~200 nghìn',
        characteristics: 'Vùng cao nguyên Lâm Đồng (giáp ranh).',
      },
    ],
    religions: [
      {
        name: 'Chăm Bà-la-môn (Ahier)',
        description:
          '~70 nghìn – giữ tín ngưỡng Ấn Độ giáo cổ, thờ thần Shiva, có hệ thống chức sắc Bà-cả-sư.',
      },
      {
        name: 'Chăm Bà-ni (Awal)',
        description:
          '~40 nghìn – Hồi giáo bản địa hóa, kết hợp với tín ngưỡng cổ.',
      },
      {
        name: 'Chăm Islam',
        description:
          '~25 nghìn – Hồi giáo chính thống (chủ yếu ở An Giang, một phần Ninh Thuận).',
      },
    ],
    securityIssues: [
      {
        era: 'modern',
        title: 'Champa lưu vong tuyên truyền "phục hồi vương quốc"',
        description:
          'Một số tổ chức cực đoan lưu vong (Champa lưu vong ở Mỹ, Pháp, Campuchia) tuyên truyền "phục hồi vương quốc Champa". Mạng xã hội: các trang ảo kích động ly khai Chăm.',
      },
      {
        era: 'modern',
        title: 'Bảo tồn di sản và tranh chấp',
        description:
          'Vấn đề bảo tồn di sản – có tranh chấp xung quanh dự án điện hạt nhân Ninh Thuận (đã dừng), du lịch tâm linh. Nhìn chung, cộng đồng Chăm ở VN hiện nay đoàn kết, gắn bó với dân tộc – nhiều nghệ nhân, trí thức Chăm là người tiêu biểu trong sự nghiệp xây dựng đất nước.',
      },
    ],
    policies: [
      'Bảo tồn cụm tháp Chăm (Po Klong Garai, Po Rome, Hòa Lai).',
      'Hỗ trợ lễ hội Katê (di sản phi vật thể quốc gia 2017).',
      'Phát triển nghề truyền thống: gốm Bàu Trúc (di sản UNESCO 2022), dệt Mỹ Nghiệp.',
      'Đào tạo nhân lực người Chăm: trường nội trú, cử tuyển.',
    ],
    images: [
      {
        src: '/assets/images/regions/namtrungbo-po-klong-garai.jpg',
        alt: 'Tháp Po Klong Garai (Ninh Thuận)',
      },
      {
        src: '/assets/images/regions/namtrungbo-le-hoi-kate.jpg',
        alt: 'Lễ hội Katê',
        source: 'Sở VHTTDL Ninh Thuận',
      },
      {
        src: '/assets/images/regions/namtrungbo-gom-bau-truc.jpg',
        alt: 'Nghệ nhân gốm Bàu Trúc',
      },
      {
        src: '/assets/images/regions/namtrungbo-trang-phuc-cham.jpg',
        alt: 'Trang phục truyền thống Chăm',
      },
    ],
  },
]
