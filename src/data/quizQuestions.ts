import type { QuizQuestion } from './types'

// =============================================================================
// 15 câu trắc nghiệm — nội dung lấy nguyên văn từ
// vietmap-content-blueprint.md §7.
// Mỗi câu 10 điểm, tối đa 150 điểm.
// =============================================================================

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Khái niệm "dân tộc" theo nghĩa rộng dùng để chỉ:',
    options: [
      'Cộng đồng tộc người',
      'Quốc gia dân tộc',
      'Cộng đồng làng xã',
      'Hình thức tổ chức tiền dân tộc',
    ],
    correctIndex: 1,
    explanation:
      'Dân tộc nghĩa rộng = quốc gia dân tộc (VN, Pháp…). Nghĩa hẹp = tộc người (Kinh, Tày, Thái…).',
  },
  {
    id: 2,
    question: 'Đặc trưng QUAN TRỌNG NHẤT của dân tộc theo nghĩa quốc gia là:',
    options: [
      'Lãnh thổ chung',
      'Ngôn ngữ chung',
      'Phương thức sinh hoạt kinh tế chung',
      'Nhà nước chung',
    ],
    correctIndex: 2,
    explanation:
      'Kinh tế là cơ sở gắn kết các thành viên, tạo nên ổn định bền vững của dân tộc.',
  },
  {
    id: 3,
    question: 'Dân tộc theo nghĩa "tộc người" có bao nhiêu đặc trưng cơ bản?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    explanation: '3 đặc trưng: ngôn ngữ, văn hóa, ý thức tự giác tộc người.',
  },
  {
    id: 4,
    question:
      'Ai là người phát hiện ra hai xu hướng khách quan của sự phát triển dân tộc?',
    options: ['Karl Marx', 'Friedrich Engels', 'V.I. Lênin', 'Hồ Chí Minh'],
    correctIndex: 2,
    explanation:
      'Lênin – trên cơ sở nghiên cứu phong trào dân tộc trong CNTB – đã phát hiện 2 xu hướng: tách ra và liên hiệp lại.',
  },
  {
    id: 5,
    question:
      'Nội dung nào KHÔNG thuộc Cương lĩnh dân tộc của chủ nghĩa Mác-Lênin?',
    options: [
      'Các dân tộc hoàn toàn bình đẳng',
      'Các dân tộc được quyền tự quyết',
      'Liên hiệp tất cả các dân tộc',
      'Liên hiệp công nhân tất cả các dân tộc',
    ],
    correctIndex: 2,
    explanation:
      'Nội dung 3 là "Liên hiệp CÔNG NHÂN tất cả các dân tộc" – không phải "liên hiệp tất cả các dân tộc".',
  },
  {
    id: 6,
    question: 'Tư tưởng cơ bản trong Cương lĩnh dân tộc của Lênin là:',
    options: [
      'Bình đẳng dân tộc',
      'Quyền tự quyết',
      'Liên hiệp công nhân tất cả các dân tộc',
      'Đoàn kết quốc tế',
    ],
    correctIndex: 2,
    explanation:
      'Liên hiệp công nhân là tư tưởng cơ bản, có vai trò quyết định việc thực hiện 2 nội dung kia.',
  },
  {
    id: 7,
    question: 'Ở Việt Nam hiện nay có bao nhiêu dân tộc?',
    options: ['53', '54', '55', '56'],
    correctIndex: 1,
    explanation: 'VN có 54 dân tộc anh em (công bố chính thức 1979).',
  },
  {
    id: 8,
    question:
      'Ở phương Tây, sự hình thành dân tộc gắn liền với sự ra đời của:',
    options: [
      'Chế độ phong kiến',
      'Chủ nghĩa tư bản',
      'Chế độ chiếm hữu nô lệ',
      'Chủ nghĩa xã hội',
    ],
    correctIndex: 1,
    explanation: 'Dân tộc phương Tây gắn với CNTB → gọi là "dân tộc tư sản".',
  },
  {
    id: 9,
    question: 'Theo CN Mác-Lênin, tôn giáo về bản chất là:',
    options: [
      'Lực lượng siêu nhiên sáng tạo thế giới',
      'Sự phản ánh hư ảo hiện thực khách quan',
      'Một hình thái kinh tế',
      'Một học thuyết khoa học',
    ],
    correctIndex: 1,
    explanation:
      'Theo lập trường duy vật, tôn giáo là hình thái ý thức xã hội, phản ánh hư ảo hiện thực.',
  },
  {
    id: 10,
    question: 'Tôn giáo có bao nhiêu nguồn gốc cơ bản?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    explanation: '3 nguồn gốc: kinh tế-xã hội, nhận thức, tâm lý.',
  },
  {
    id: 11,
    question: 'Tính chất nào KHÔNG thuộc về tôn giáo?',
    options: [
      'Tính lịch sử',
      'Tính quần chúng',
      'Tính chính trị',
      'Tính giai cấp tuyệt đối',
    ],
    correctIndex: 3,
    explanation:
      '3 tính chất của tôn giáo: lịch sử, quần chúng, chính trị (gắn với xã hội có giai cấp đối kháng).',
  },
  {
    id: 12,
    question: 'Đâu là dấu hiệu để phân biệt tín ngưỡng với mê tín dị đoan?',
    options: [
      'Có thờ cúng hay không',
      'Có lễ nghi hay không',
      'Có gây tổn hại đến cá nhân và cộng đồng hay không',
      'Có niềm tin hay không',
    ],
    correctIndex: 2,
    explanation:
      'Mê tín dị đoan là niềm tin mê muội, cực đoan, gây tổn hại – khác với tín ngưỡng lành mạnh.',
  },
  {
    id: 13,
    question:
      'Nguyên tắc nào KHÔNG phải nguyên tắc giải quyết vấn đề tôn giáo theo CN Mác-Lênin?',
    options: [
      'Tôn trọng quyền tự do tín ngưỡng',
      'Phân biệt hai mặt chính trị và tư tưởng',
      'Quan điểm lịch sử – cụ thể',
      'Tiêu diệt mọi tôn giáo bằng biện pháp hành chính',
    ],
    correctIndex: 3,
    explanation:
      'CN Mác-Lênin KHÔNG chủ trương tiêu diệt tôn giáo – đây là xuyên tạc của thế lực phản động.',
  },
  {
    id: 14,
    question:
      'Sự kiện nào sau đây là âm mưu lợi dụng vấn đề dân tộc – tôn giáo để chia rẽ ở Tây Nguyên?',
    options: [
      'Sự kiện Mường Nhé 2011',
      'Vụ Tây Nguyên 2001 & 2004 – "Nhà nước Đề-ga"',
      'Vụ Hội thánh Đức Chúa Trời 2018',
      'Vụ chùa Ba Vàng 2019',
    ],
    correctIndex: 1,
    explanation:
      'Vụ Tây Nguyên 2001 & 2004 do tổ chức Ksor Kok ở Mỹ kích động, lợi dụng "Tin Lành Đề-ga".',
  },
  {
    id: 15,
    question:
      'Văn bản pháp lý cao nhất hiện nay điều chỉnh vấn đề tôn giáo ở Việt Nam là:',
    options: [
      'Pháp lệnh Tín ngưỡng, Tôn giáo 2004',
      'Luật Tín ngưỡng, Tôn giáo 2016',
      'Nghị định 162/2017/NĐ-CP',
      'Hiến pháp 2013',
    ],
    correctIndex: 1,
    explanation:
      'Luật Tín ngưỡng, Tôn giáo được Quốc hội thông qua 2016, hiệu lực từ 2018.',
  },
]
