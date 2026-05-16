import type { CaseStudy } from './types'

// =============================================================================
// 4 case study cảnh giác — nội dung lấy nguyên văn từ
// vietmap-content-blueprint.md §6.
// Cấu trúc: Bối cảnh → Diễn biến → Bản chất → Xử lý → Bài học.
// =============================================================================

export const caseStudies: CaseStudy[] = [
  {
    id: 'tay-nguyen-2001-2004',
    title: 'Sự kiện Tây Nguyên 2001 & 2004',
    year: '2001, 2004',
    location: 'Gia Lai, Đắk Lắk và 4 tỉnh Tây Nguyên',
    background:
      'Sau 1975, tổ chức FULRO tan rã nhưng các tổ chức phản động lưu vong ở Mỹ (đứng đầu là Ksor Kok – "Tổng thống Nhà nước Đề-ga") tiếp tục hoạt động chống phá, đặc biệt lợi dụng tôn giáo Tin Lành.',
    events:
      'Tháng 2/2001: hàng nghìn người dân tộc thiểu số tại Gia Lai, Đắk Lắk được kích động, kéo về thành phố biểu tình, phá hoại. Tháng 4/2004: sự kiện tái diễn quy mô lớn hơn ở 4 tỉnh Tây Nguyên. Khẩu hiệu: "Nhà nước Đề-ga độc lập", "Tin Lành Đề-ga là quốc giáo".',
    nature:
      'Lợi dụng quyền dân tộc tự quyết sai lệch → đòi ly khai. Lợi dụng tự do tôn giáo → biến Tin Lành thành công cụ chính trị (gọi là "Tin Lành Đề-ga" để phân biệt với Tin Lành thuần túy). Mưu đồ cuối cùng: tách Tây Nguyên khỏi Việt Nam, lập "nhà nước riêng".',
    resolution:
      'Lực lượng vũ trang khoanh vùng, dập tắt bạo loạn nhanh chóng. Tăng cường công tác tuyên truyền, phân biệt rõ Tin Lành thuần túy ≠ Tin Lành Đề-ga. Bắt giữ, xử lý các đối tượng cầm đầu trong nước. Đẩy mạnh đầu tư phát triển Tây Nguyên (Nghị quyết 10/2002).',
    lesson:
      'Vấn đề dân tộc – tôn giáo có thể bị lợi dụng cho mục đích chính trị, đặc biệt ở các vùng dân tộc thiểu số có trình độ phát triển còn thấp. Phòng ngừa là phải nâng cao đời sống vật chất – tinh thần, đồng thời cảnh giác tỉnh táo với các âm mưu đội lốt tôn giáo.',
  },

  {
    id: 'muong-nhe-2011',
    title: 'Sự kiện Mường Nhé 2011',
    year: '2011',
    location: 'Mường Nhé, Điện Biên',
    background:
      'Mường Nhé là huyện vùng cao biên giới của Điện Biên, giáp Lào và Trung Quốc, có đông đồng bào H\'mông.',
    events:
      'Tháng 5/2011: khoảng 7000 người H\'mông từ nhiều tỉnh tụ tập tại bản Huổi Khon, xã Nậm Kè. Khẩu hiệu: chờ "Vua Mèo" xuống, lập "Vương quốc Mông". Được dẫn dắt bởi các nhóm "Tin Lành thuần túy biến tướng" (Đản Mễ, hệ phái Vàng Chứ).',
    nature:
      'Lợi dụng tôn giáo biến tướng + niềm tin truyền thống về "Vua Mèo" (Vua Mèo Vương Chính Đức ở Hà Giang đã chết từ 1947). Âm mưu ly khai khu vực biên giới chiến lược.',
    resolution:
      'Lực lượng vũ trang vận động, giải tán mà không có thương vong lớn. Bắt giữ, xử lý đối tượng cầm đầu. Đầu tư hạ tầng, an sinh xã hội cho Mường Nhé. Phối hợp với các chức sắc Tin Lành chính thống tuyên truyền.',
    lesson:
      'Niềm tin tôn giáo dễ bị lợi dụng khi gắn với mong ước cải thiện cuộc sống ở vùng khó khăn. Bài học là phải kết hợp phát triển kinh tế + giáo dục + quản lý chặt chẽ hoạt động tôn giáo.',
  },

  {
    id: 'hoi-thanh-duc-chua-troi-me-2018',
    title: 'Hội thánh Đức Chúa Trời Mẹ',
    year: '2018',
    location: 'Lan rộng tại nhiều tỉnh thành',
    background:
      '"Hội thánh Đức Chúa Trời Mẹ" (World Mission Society Church of God) là tổ chức nguồn gốc Hàn Quốc, lan vào Việt Nam khoảng 2010, bùng phát mạnh năm 2018.',
    events:
      'Lôi kéo nhiều sinh viên, người trẻ. Tổ chức "lễ rửa tội" lập dị. Yêu cầu tín đồ đập bàn thờ tổ tiên, từ bỏ gia đình. Đóng góp tiền bạc lớn cho "hội thánh".',
    nature:
      'Tà đạo, không phải tôn giáo chân chính – không được công nhận tại VN. Đi ngược lại giá trị văn hóa Việt (thờ cúng tổ tiên), phá hoại gia đình. Mang yếu tố lừa đảo tài chính.',
    resolution:
      'Bộ Công an, các địa phương ngăn chặn, giải tán hoạt động trái phép. Tuyên truyền cho sinh viên nhận diện. Phối hợp Hàn Quốc xử lý tổ chức gốc.',
    lesson:
      'Trong thời đại mạng xã hội, tà đạo lan truyền rất nhanh, đặc biệt với người trẻ. Cần nâng cao thế giới quan khoa học (chính là CN Mác-Lênin!) để miễn nhiễm với mê tín, tà đạo.',
  },

  {
    id: 'chua-ba-vang-2019',
    title: 'Chùa Ba Vàng — "thỉnh vong giải nghiệp"',
    year: '2019',
    location: 'Chùa Ba Vàng, Quảng Ninh',
    background:
      'Chùa Ba Vàng (Quảng Ninh) là cơ sở Phật giáo lớn, nhưng năm 2019 bùng nổ scandal "thỉnh vong giải nghiệp".',
    events:
      'Báo chí phát hiện chùa tổ chức "thỉnh oan gia trái chủ" thu tiền hàng tỷ đồng. "Cô Yến" – phật tử chùa – có những phát ngôn phản cảm về nạn nhân cô gái giao gà ở Điện Biên (vụ án rúng động). Trụ trì Thích Trúc Thái Minh bị xử lý kỷ luật.',
    nature:
      'Mê tín dị đoan núp bóng tôn giáo chính thống. Trục lợi tinh thần và tài chính của tín đồ. Đi ngược lại giáo lý Phật giáo (tin tự lực, không tin số mệnh).',
    resolution:
      'Giáo hội Phật giáo Việt Nam kỷ luật, buộc sám hối. Cơ quan chức năng vào cuộc điều tra. Tuyên truyền phân biệt sinh hoạt Phật giáo chân chính với mê tín.',
    lesson:
      'Ngay trong tôn giáo chính thống cũng có thể len lỏi mê tín dị đoan – phản giá trị, gây tổn hại. Phân biệt rõ tín ngưỡng/tôn giáo lành mạnh với mê tín dị đoan là yêu cầu của xây dựng xã hội văn minh.',
  },
]
