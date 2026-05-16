# VIETMAP CHRONICLE
## Content Blueprint – Sản phẩm sáng tạo Chương 6 CNXHKH
### "Vấn đề Dân tộc và Tôn giáo trong Thời kỳ Quá độ lên CNXH"

> **Định dạng sản phẩm:** Website React tương tác, deploy được, ~6 trang/section
> **Nhóm:** 4–6 người
> **Mục đích tài liệu:** Single source of truth – tất cả nội dung text, dữ liệu, câu chữ trên website đều lấy từ file này. Dev không cần tự sáng tác nội dung.

---

## MỤC LỤC

1. [Phân chia công việc cho nhóm](#1-phân-chia-công-việc)
2. [Section 1 – Hero/Landing](#2-section-1--herolanding)
3. [Section 2 – Nền tảng lý luận](#3-section-2--nền-tảng-lý-luận)
4. [Section 3 – Bản đồ tương tác: 4 vùng trọng điểm](#4-section-3--bản-đồ-tương-tác-4-vùng-trọng-điểm)
5. [Section 4 – Timeline lịch sử: 6 thời kỳ](#5-section-4--timeline-lịch-sử-6-thời-kỳ)
6. [Section 5 – Cảnh giác "Diễn biến hòa bình"](#6-section-5--cảnh-giác-diễn-biến-hòa-bình)
7. [Section 6 – Quiz tương tác (15 câu)](#7-section-6--quiz-tương-tác-15-câu)
8. [Phụ lục: Nguồn tài liệu & Hình ảnh](#8-phụ-lục-nguồn-tài-liệu--hình-ảnh)

---

## 1. PHÂN CHIA CÔNG VIỆC

### Phương án 5 người (đề xuất tối ưu)

| Vai trò | Người | Trách nhiệm chính |
|---------|-------|-------------------|
| **Leader / PM** | 1 người | Điều phối tiến độ, viết slide thuyết trình, ráp content cuối, kiểm tra chính tả/dẫn chứng |
| **Content Writer** | 1 người | Sửa, mở rộng, viết lại nội dung trong blueprint này cho phù hợp giọng văn; tìm hình ảnh, số liệu mới nhất |
| **UI/UX Designer** | 1 người | Vẽ wireframe Figma, chọn màu sắc, font, icon; thiết kế bản đồ SVG 4 vùng |
| **Frontend Dev 1** | 1 người | Setup React + Tailwind, code Section 1, 2, 5, 6 (các trang đơn giản hơn) |
| **Frontend Dev 2** | 1 người | Code Section 3 (bản đồ tương tác) và Section 4 (timeline) – 2 trang phức tạp nhất |

### Phương án 6 người (nếu nhóm có 6)

Tách Content thành 2: một người phụ trách phần lý luận + lịch sử, một người phụ trách phần vùng + case study + quiz.

### Timeline đề xuất (2.5–3 tuần)

| Tuần | PM | Content | Designer | Dev 1 | Dev 2 |
|------|-----|---------|----------|-------|-------|
| **Tuần 1** | Họp kickoff, chia task | Hoàn thiện nội dung từ blueprint | Wireframe + moodboard | Setup project, Section 1 | Nghiên cứu lib bản đồ |
| **Tuần 2** | Giám sát, làm slide | Hỗ trợ tìm ảnh | Design hoàn chỉnh | Section 2, 5, 6 | Section 3 (bản đồ) |
| **Tuần 3** | Tổng hợp, demo thử | Soát lỗi | Polish UI | Quiz logic | Section 4 (timeline) + Deploy |

---

## 2. SECTION 1 – HERO/LANDING

### Mục đích
Gây ấn tượng đầu, giới thiệu sản phẩm trong 5 giây đầu.

### Nội dung text

**Tiêu đề lớn (H1):**
> VietMap Chronicle

**Phụ đề (H2):**
> Hành trình Dân tộc – Tôn giáo Việt Nam qua Thời gian và Không gian

**Tagline (đoạn mô tả):**
> Khám phá bức tranh sống động về 54 dân tộc anh em và 16 tôn giáo đang chung sống hòa bình trên dải đất hình chữ S. Cùng đi qua hơn 2000 năm lịch sử và 4 vùng đất chiến lược để hiểu vì sao **đoàn kết là sức mạnh của Việt Nam**.

**Số liệu nổi bật (3 con số lớn animated):**
- **54** dân tộc anh em
- **16** tôn giáo được công nhận
- **26.5 triệu** tín đồ tôn giáo (chiếm ~27% dân số)

**CTA Button:**
- "Bắt đầu hành trình →" (cuộn xuống Section 2)
- "Xem bản đồ tương tác" (nhảy thẳng đến Section 3)

### Gợi ý visual
- Background: bản đồ Việt Nam dạng outline mảnh, với các điểm sáng (dots) nhấp nháy tại 4 vùng trọng điểm
- Hoặc: video loop ngắn về các lễ hội/trang phục truyền thống các dân tộc (lấy từ kho video Bộ Văn hóa)

---

## 3. SECTION 2 – NỀN TẢNG LÝ LUẬN

### Mục đích
Cung cấp khung lý luận của CN Mác-Lênin về dân tộc và tôn giáo. Đây là phần "học thuật" nhưng cần trình bày trực quan, không nhồi nhét chữ.

### Cấu trúc đề xuất: 4 tab/accordion

#### Tab 1: KHÁI NIỆM DÂN TỘC

**Nội dung:**

Khái niệm "dân tộc" được dùng theo **hai nghĩa**:

**A. Dân tộc theo nghĩa rộng – Quốc gia Dân tộc**

Là cộng đồng người ổn định hợp thành nhân dân của một nước, có lãnh thổ riêng, nền kinh tế thống nhất, ngôn ngữ chung và có ý thức về sự thống nhất của mình.

*Ví dụ: Dân tộc Việt Nam, dân tộc Trung Hoa, dân tộc Pháp...*

**5 đặc trưng cơ bản:**

| # | Đặc trưng | Giải thích |
|---|-----------|-----------|
| 1 | Chung lãnh thổ ổn định | Vùng đất thiêng liêng, gắn với khái niệm "Tổ quốc" |
| 2 | **Chung phương thức sinh hoạt kinh tế** ⭐ | Đặc trưng quan trọng nhất – cơ sở gắn kết các thành viên |
| 3 | Chung ngôn ngữ làm công cụ giao tiếp | Quốc ngữ (VN: tiếng Việt) |
| 4 | Chung nền văn hóa và tâm lý | Phong tục, lối sống, bản sắc dân tộc |
| 5 | Chung một nhà nước | Đặc trưng phân biệt với dân tộc – tộc người |

**B. Dân tộc theo nghĩa hẹp – Tộc người**

Là cộng đồng tộc người được hình thành trong lịch sử, có mối liên hệ chặt chẽ và bền vững.

*Ví dụ: Dân tộc Kinh, Tày, Thái, Khmer, Chăm, Ê-đê...*

**3 đặc trưng cơ bản:**

| # | Đặc trưng | Giải thích |
|---|-----------|-----------|
| 1 | Cộng đồng về ngôn ngữ | Tiêu chí cơ bản để phân biệt các tộc người |
| 2 | Cộng đồng về văn hóa | Truyền thống, phong tục, tín ngưỡng riêng |
| 3 | **Ý thức tự giác tộc người** ⭐ | Tiêu chí quan trọng nhất – tự khẳng định nguồn gốc, bản sắc |

#### Tab 2: HAI XU HƯỚNG PHÁT TRIỂN DÂN TỘC

V.I. Lênin – trên cơ sở nghiên cứu phong trào dân tộc trong điều kiện CNTB – đã phát hiện **hai xu hướng khách quan**:

**Xu hướng 1: TÁCH RA**
> Các cộng đồng dân cư muốn tách ra để hình thành quốc gia dân tộc độc lập.

**Xu hướng 2: LIÊN HIỆP LẠI**
> Các dân tộc trong từng quốc gia (hoặc nhiều quốc gia) muốn liên hiệp lại với nhau.

*Gợi ý visual:* 2 mũi tên ngược chiều, một mũi tên tách ra (←→), một mũi tên hướng vào (→←).

#### Tab 3: CƯƠNG LĨNH DÂN TỘC CỦA LÊNIN

3 nội dung cốt lõi (vẽ thành 3 cột song song):

**🌍 Nội dung 1: Các dân tộc hoàn toàn BÌNH ĐẲNG**
- Là quyền thiêng liêng của các dân tộc
- Không phân biệt số dân, trình độ phát triển
- Phải được bảo đảm bằng pháp luật **VÀ** thực hiện trong đời sống
- Phải đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa bá quyền nước lớn

**⚖️ Nội dung 2: Các dân tộc được quyền TỰ QUYẾT**
- Quyền làm chủ về con đường phát triển kinh tế, chính trị, xã hội
- Bao gồm: (a) quyền tách ra lập quốc gia độc lập, (b) quyền liên hiệp tự nguyện
- Phải xuất phát từ lợi ích của chính dân tộc đó, không phải của phần tử cực đoan
- Phải đứng trên lập trường giai cấp công nhân

**🤝 Nội dung 3: LIÊN HIỆP công nhân tất cả các dân tộc** ⭐
- Đây là **tư tưởng cơ bản** của cương lĩnh
- Thể hiện bản chất quốc tế của giai cấp công nhân
- Có vai trò quyết định việc thực hiện 2 quyền trên

#### Tab 4: NGUYÊN TẮC GIẢI QUYẾT VẤN ĐỀ TÔN GIÁO

> ⚠️ **Lưu ý quan trọng:** CN Mác-Lênin và CNXH KHÔNG có mục tiêu "tiêu diệt tôn giáo" – đây là xuyên tạc của các thế lực phản động. 4 nguyên tắc sau thể hiện bản chất NHÂN VĂN của CNXH.

**Nguyên tắc 1: Tôn trọng quyền tự do tín ngưỡng**
Tôn trọng và bảo đảm quyền tự do tín ngưỡng VÀ không tín ngưỡng của nhân dân (với tôn giáo chân chính, hợp pháp).

**Nguyên tắc 2: Khắc phục dần ảnh hưởng tiêu cực**
Khắc phục thông qua quá trình cải tạo xã hội cũ, xây dựng xã hội mới – tức xây dựng "thiên đường trên mặt đất" (CNXH) thì con người sẽ không cần đi tìm thiên đường ở thế giới hư ảo.

**Nguyên tắc 3: Phân biệt 2 mặt của tôn giáo**
- *Mặt tư tưởng:* nhu cầu tín ngưỡng hợp pháp → tôn trọng
- *Mặt chính trị:* sự lợi dụng của thế lực phản động → kiên quyết đấu tranh

**Nguyên tắc 4: Quan điểm lịch sử – cụ thể**
Mỗi tôn giáo có hoàn cảnh ra đời, vai trò khác nhau ở mỗi thời kỳ → không áp dụng máy móc, cứng nhắc.

---

## 4. SECTION 3 – BẢN ĐỒ TƯƠNG TÁC: 4 VÙNG TRỌNG ĐIỂM

### Mục đích & Cách hoạt động
Đây là **trái tim** của sản phẩm – điểm nhấn sáng tạo. Người dùng nhìn thấy bản đồ Việt Nam dạng SVG, có 4 hotspot tại 4 vùng. Hover để xem tên vùng, click để mở **modal/side panel** hiện chi tiết đầy đủ.

### Tương tác chi tiết
- Bản đồ mặc định ở trạng thái "calm": màu xám nhạt, 4 hotspot nhấp nháy nhẹ (pulse animation)
- Hover hotspot: hotspot phóng to + tên vùng hiện ra
- Click: side panel trượt từ phải sang, chiếm 50% màn hình, hiện 5 mục con (tab)
- Có nút "So sánh các vùng" mở bảng tổng hợp 4 vùng cạnh nhau

---

### 🏔️ VÙNG 1: TÂY BẮC

**Tọa độ trên bản đồ:** ~22°N, 104°E (vùng cực Bắc)
**Phạm vi:** Điện Biên, Lai Châu, Sơn La, Hòa Bình, Lào Cai, Yên Bái

#### Tab 1 – Tổng quan
Vùng núi cao biên giới phía Tây Bắc Việt Nam, giáp Lào và Trung Quốc. Địa hình hiểm trở, dân cư thưa thớt, đa số là đồng bào dân tộc thiểu số. Là **vùng có vị trí chiến lược đặc biệt quan trọng** về quốc phòng – an ninh.

#### Tab 2 – Dân tộc chính
Hơn **30 dân tộc** cùng sinh sống, lớn nhất là:

| Dân tộc | Số dân (~) | Đặc trưng |
|---------|-----------|-----------|
| **Thái** | 1.8 triệu | Sống ở thung lũng, văn hóa lúa nước; lễ hội Xòe (di sản UNESCO 2021) |
| **H'mông** | 1.4 triệu | Sống ở vùng cao 1000m+; chợ phiên Bắc Hà, Sapa nổi tiếng |
| **Tày** | 1.9 triệu | Đông nhất trong các dân tộc thiểu số; lễ hội Lồng Tồng |
| **Dao** | 900 nghìn | Trang phục đỏ rực rỡ; tục cấp sắc đặc trưng |
| **Mường** | 1.5 triệu | Văn hóa cồng chiêng; gần gũi văn hóa Việt cổ |

#### Tab 3 – Tôn giáo & Tín ngưỡng
- **Tín ngưỡng truyền thống** vẫn chiếm chủ đạo: thờ tổ tiên, thờ ma, thờ thần núi/thần rừng
- **Đạo Tin Lành** phát triển mạnh trong cộng đồng H'mông từ thập niên 1980, có nhiều biến tướng
- **Phật giáo, Công giáo** có mặt nhưng số lượng tín đồ ít hơn

#### Tab 4 – Vấn đề an ninh – chính trị ⚠️
**Lịch sử:**
- Thực dân Pháp lợi dụng các dân tộc thiểu số chống lại cách mạng (chiến dịch Điện Biên Phủ 1954)
- Sau 1975: vấn đề "vượt biên" sang Lào, Trung Quốc

**Hiện đại:**
- **Sự kiện Mường Nhé 2011 (Điện Biên):** Hàng nghìn người H'mông bị kích động tụ tập đòi lập "Vương quốc Mông", được tổ chức phản động ở nước ngoài chỉ đạo qua Tin Lành biến tướng
- Tình trạng di cư tự do, đốt rừng làm rẫy
- Các thế lực thù địch lợi dụng đói nghèo + tôn giáo để kích động ly khai

#### Tab 5 – Chính sách Đảng – Nhà nước
- **Chương trình 135** (từ 1998): Phát triển kinh tế-xã hội xã đặc biệt khó khăn
- **Nghị quyết 30a** (2008): Giảm nghèo bền vững 64 huyện nghèo nhất
- Đầu tư hạ tầng: thủy điện Sơn La, Lai Châu, đường cao tốc Nội Bài – Lào Cai
- Trường nội trú dân tộc; cộng điểm tuyển sinh; bác sĩ về làng
- Bộ đội biên phòng làm "cầu nối" với dân

#### Hình ảnh đề xuất
1. Ruộng bậc thang Mù Cang Chải (Yên Bái) – Wikipedia Commons
2. Lễ hội Xòe Thái – Trang Bộ VH
3. Chợ phiên Bắc Hà – Vietnamtourism
4. Bộ đội biên phòng cõng dân vượt lũ – Báo Quân đội Nhân dân

---

### 🏞️ VÙNG 2: TÂY NGUYÊN

**Tọa độ trên bản đồ:** ~13°N, 108°E (vùng giữa cao nguyên)
**Phạm vi:** Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng

#### Tab 1 – Tổng quan
Cao nguyên đất đỏ bazan, độ cao 500–1500m. Là vùng đất văn hóa cồng chiêng (UNESCO 2005), nhà rông, nhà dài, sử thi Tây Nguyên. **Vị trí chiến lược kép:** vừa là "mái nhà Đông Dương" về địa lý, vừa là vùng kinh tế cà phê – cao su quan trọng.

#### Tab 2 – Dân tộc chính
Khoảng **47 dân tộc** sinh sống, trong đó các dân tộc bản địa lớn:

| Dân tộc | Số dân (~) | Đặc trưng |
|---------|-----------|-----------|
| **Gia Rai** | 530 nghìn | Theo chế độ mẫu hệ; nổi tiếng nghệ thuật điêu khắc nhà mồ |
| **Ê-đê** | 400 nghìn | Mẫu hệ; nhà dài đặc trưng có thể dài 50–100m |
| **Ba Na** | 290 nghìn | Phụ hệ; sử thi Bahnar |
| **Mơ Nông** | 130 nghìn | Săn voi, thuần dưỡng voi (Buôn Đôn) |
| **Xơ Đăng** | 220 nghìn | Sống vùng cao Kon Tum |

Ngoài ra còn người **Kinh, Tày, Nùng** di cư đến sau 1975 (chiếm đa số hiện nay).

#### Tab 3 – Tôn giáo & Tín ngưỡng
- **Tín ngưỡng đa thần truyền thống:** thờ Yang (thần) – Yang Lúa, Yang Núi, Yang Sông...
- **Công giáo:** du nhập từ thế kỷ XIX qua các nhà truyền giáo Pháp; nhiều giáo phận lớn
- **Tin Lành:** phát triển mạnh từ sau 1975, đặc biệt trong người dân tộc thiểu số
- **Phật giáo:** chủ yếu trong cộng đồng người Kinh

#### Tab 4 – Vấn đề an ninh – chính trị ⚠️
**Đây là vùng phức tạp nhất về vấn đề dân tộc – tôn giáo của VN hiện đại.**

**Lịch sử:**
- Thời Pháp thuộc: lập "Xứ Thượng tự trị" (Pays Montagnard du Sud) để chia rẽ
- Thời chiến: tổ chức **FULRO** (Mặt trận Thống nhất Đấu tranh của các Sắc tộc bị Áp bức) chống cả Việt Nam Cộng hòa lẫn Cách mạng
- 1975–1992: FULRO tiếp tục hoạt động vũ trang, đến 1992 mới tan rã hoàn toàn

**Sự kiện chấn động:**
- 🚨 **Tháng 2/2001:** Hàng nghìn người dân tộc thiểu số tại Gia Lai, Đắk Lắk biểu tình, phá hoại tài sản – do tổ chức "Ksor Kok" ở Mỹ kích động qua Tin Lành biến tướng
- 🚨 **Tháng 4/2004:** Biểu tình tương tự, đòi lập **"Nhà nước Đề-ga Tự trị"** lấy "Tin Lành Đề-ga" làm quốc giáo
- 🚨 **Tháng 6/2023:** Vụ tấn công 2 trụ sở UBND xã ở Cư Kuin (Đắk Lắk), bắn chết 9 người – âm mưu khủng bố mang màu sắc ly khai

**Bản chất:** Lợi dụng chiêu bài "dân tộc tự quyết", "tự do tôn giáo" để chia rẽ, ly khai.

#### Tab 5 – Chính sách Đảng – Nhà nước
- **Nghị quyết 10-NQ/TW (2002)** và **Nghị quyết 23-NQ/TW (2022)** về phát triển Tây Nguyên
- Đầu tư mạnh hạ tầng: đường Hồ Chí Minh, sân bay Buôn Ma Thuột, Pleiku
- Bảo tồn văn hóa cồng chiêng (UNESCO)
- Tuyên truyền phân biệt "Tin Lành thuần túy" với "Tin Lành Đề-ga" – cái sau bị cấm
- Xử lý nghiêm minh nhưng nhân văn các đối tượng vi phạm

#### Hình ảnh đề xuất
1. Cồng chiêng Tây Nguyên – nguồn UNESCO
2. Nhà dài Ê-đê – Bảo tàng Dân tộc học
3. Lễ hội đâm trâu, lễ bỏ mả – tư liệu báo chí
4. Ảnh phiên tòa xét xử vụ Cư Kuin – Báo Nhân Dân

---

### 🌾 VÙNG 3: TÂY NAM BỘ (Đồng bằng Sông Cửu Long)

**Tọa độ trên bản đồ:** ~10°N, 105.5°E (cực Nam)
**Phạm vi:** 13 tỉnh ĐBSCL – nổi bật là An Giang, Sóc Trăng, Trà Vinh, Kiên Giang, Tây Ninh

#### Tab 1 – Tổng quan
Đồng bằng phù sa do sông Mekong bồi đắp. Là vùng giao thoa văn hóa **Việt – Khmer – Hoa – Chăm** đặc sắc. Đặc biệt: **vùng có nhiều tôn giáo nội sinh Việt Nam nhất** – Phật giáo Hòa Hảo, Cao Đài, Bửu Sơn Kỳ Hương, Tứ Ân Hiếu Nghĩa.

#### Tab 2 – Dân tộc chính

| Dân tộc | Số dân (~) | Phân bố chính |
|---------|-----------|---------------|
| **Kinh** | ~16 triệu | Toàn vùng (đa số) |
| **Khmer** | 1.3 triệu | Trà Vinh, Sóc Trăng, Kiên Giang |
| **Hoa** | 700 nghìn | Đô thị, thương mại |
| **Chăm (Islam)** | 14 nghìn | Châu Đốc (An Giang) |

#### Tab 3 – Tôn giáo & Tín ngưỡng
**Vùng "thánh địa" tôn giáo của Việt Nam:**
- **Phật giáo Nam tông Khmer:** Hơn 450 chùa, gắn bó với người Khmer; mỗi nam Khmer đều xuất gia ít nhất 1 lần
- **Phật giáo Hòa Hảo:** Sáng lập 1939 bởi **Huỳnh Phú Sổ** tại làng Hòa Hảo (An Giang); ~1.5 triệu tín đồ
- **Đạo Cao Đài:** Sáng lập 1926 tại Tây Ninh; Tòa Thánh Tây Ninh là công trình tâm linh đặc sắc; ~1.1 triệu tín đồ
- **Hồi giáo Chăm:** Cộng đồng Chăm Islam ở An Giang
- **Bửu Sơn Kỳ Hương, Tứ Ân Hiếu Nghĩa:** Các tôn giáo nội sinh nhỏ hơn

#### Tab 4 – Vấn đề an ninh – chính trị ⚠️
**Đây là vùng "ổn định nhưng nhạy cảm":**

**Vấn đề Khmer Krom:**
- Một số tổ chức Khmer Krom lưu vong (KKF – Khmers Kampuchea-Krom Federation) ở Mỹ, Campuchia kích động đòi "phục hồi lãnh thổ"
- Lợi dụng vấn đề đất đai của chùa Khmer để gây mâu thuẫn

**Vấn đề Phật giáo Hòa Hảo:**
- Trước 1975: bị lợi dụng chống cách mạng (các phần tử cực đoan)
- Sau 1975: phần lớn đã đồng hành cùng dân tộc, được Nhà nước công nhận năm 1999
- Vẫn còn một số nhóm "Hòa Hảo thuần túy" bất hợp pháp ở An Giang chống đối

**Vấn đề Cao Đài:**
- Tương tự: chính danh Cao Đài Tây Ninh được công nhận, một số chi phái nhỏ bị lợi dụng

#### Tab 5 – Chính sách Đảng – Nhà nước
- Hỗ trợ chùa Khmer trùng tu; giáo dục song ngữ Việt – Khmer
- Đào tạo sư sãi Phật giáo Nam tông tại Học viện PG Nam tông Khmer Cần Thơ
- Công nhận tư cách pháp nhân các tôn giáo lớn (Cao Đài 1997, Hòa Hảo 1999)
- Phát triển kinh tế ĐBSCL: cầu Cần Thơ, cao tốc Trung Lương – Mỹ Thuận

#### Hình ảnh đề xuất
1. Tòa Thánh Tây Ninh – Wikipedia Commons
2. Chùa Khmer (Chùa Dơi – Sóc Trăng, Chùa Vàm Rây) – Vietnamtourism
3. Lễ Ok Om Bok của người Khmer
4. Thánh đường Hồi giáo Mubarak (Châu Đốc)

---

### 🏛️ VÙNG 4: DUYÊN HẢI NAM TRUNG BỘ

**Tọa độ trên bản đồ:** ~11.5°N, 108.5°E (ven biển Nam Trung Bộ)
**Phạm vi:** Ninh Thuận, Bình Thuận (vùng tập trung người Chăm)

#### Tab 1 – Tổng quan
Vùng đất từng là trung tâm **Vương quốc Champa cổ** (thế kỷ II–XV). Đây là nơi lưu giữ di sản văn hóa Chăm đặc sắc nhất Việt Nam – với hệ thống tháp Chăm, lễ hội Katê (di sản phi vật thể quốc gia), nghề dệt thổ cẩm Mỹ Nghiệp, gốm Bàu Trúc.

#### Tab 2 – Dân tộc chính

| Dân tộc | Số dân (~) | Đặc trưng |
|---------|-----------|-----------|
| **Chăm** | 180 nghìn | Phân hóa thành Chăm Bà-la-môn và Chăm Bà-ni/Islam |
| **Raglai** | 145 nghìn | Cư trú vùng núi Ninh Thuận; có liên hệ văn hóa với Chăm |
| **Cơ Ho** | 200 nghìn | Vùng cao nguyên Lâm Đồng (giáp ranh) |

#### Tab 3 – Tôn giáo & Tín ngưỡng
**Cộng đồng Chăm phân hóa tôn giáo rõ rệt:**

- **Chăm Bà-la-môn (Ahier):** ~70 nghìn – giữ tín ngưỡng Ấn Độ giáo cổ, thờ thần Shiva, có hệ thống chức sắc Bà-cả-sư
- **Chăm Bà-ni (Awal):** ~40 nghìn – Hồi giáo bản địa hóa, kết hợp với tín ngưỡng cổ
- **Chăm Islam:** ~25 nghìn – Hồi giáo chính thống (chủ yếu ở An Giang, một phần Ninh Thuận)

#### Tab 4 – Vấn đề an ninh – chính trị ⚠️
**Vấn đề chủ yếu mang tính lịch sử & mạng:**
- Một số tổ chức cực đoan lưu vong (Champa lưu vong ở Mỹ, Pháp, Campuchia) tuyên truyền "phục hồi vương quốc Champa"
- Mạng xã hội: các trang ảo kích động ly khai Chăm
- Vấn đề bảo tồn di sản – có tranh chấp xung quanh dự án điện hạt nhân Ninh Thuận (đã dừng), du lịch tâm linh

**Nhìn chung,** cộng đồng Chăm ở VN hiện nay đoàn kết, gắn bó với dân tộc – nhiều nghệ nhân, trí thức Chăm là người tiêu biểu trong sự nghiệp xây dựng đất nước.

#### Tab 5 – Chính sách Đảng – Nhà nước
- Bảo tồn cụm tháp Chăm (Po Klong Garai, Po Rome, Hòa Lai)
- Hỗ trợ lễ hội Katê (di sản phi vật thể quốc gia 2017)
- Phát triển nghề truyền thống: gốm Bàu Trúc (di sản UNESCO 2022), dệt Mỹ Nghiệp
- Đào tạo nhân lực người Chăm: trường nội trú, cử tuyển

#### Hình ảnh đề xuất
1. Tháp Po Klong Garai (Ninh Thuận)
2. Lễ hội Katê – Trang Sở VHTTDL Ninh Thuận
3. Nghệ nhân gốm Bàu Trúc
4. Trang phục truyền thống Chăm

---

### 🔄 So sánh tổng quan 4 vùng (bảng)

| Tiêu chí | Tây Bắc | Tây Nguyên | Tây Nam Bộ | Nam Trung Bộ |
|----------|---------|------------|------------|--------------|
| **Số dân tộc** | 30+ | 47+ | 5 chính | 3 chính |
| **Đặc trưng địa hình** | Núi cao biên giới | Cao nguyên đất đỏ | Đồng bằng phù sa | Ven biển + núi |
| **Tôn giáo nổi bật** | Tín ngưỡng cổ, Tin Lành H'mông | Tín ngưỡng Yang, Công giáo, Tin Lành | Hòa Hảo, Cao Đài, PG Nam tông | Bà-la-môn, Hồi giáo Chăm |
| **Vấn đề nóng** | "Vương quốc Mông" | "Nhà nước Đề-ga" | Khmer Krom | Champa lưu vong |
| **Mức độ phức tạp** | 🔴🔴🔴 | 🔴🔴🔴🔴 | 🔴🔴 | 🔴 |


---

## 5. SECTION 4 – TIMELINE LỊCH SỬ: 6 THỜI KỲ

### Mục đích & Cách hoạt động
Người dùng cuộn dọc – timeline xuất hiện như một dòng chảy lịch sử. Mỗi thời kỳ là một "block" có ảnh + text + các sự kiện chốt. Có thể click vào sự kiện để xem mô tả chi tiết hơn.

**Tương tác nâng cao (nếu có thời gian):**
- Khi đang ở một thời kỳ, **mini-map** bên cạnh sẽ highlight các vùng địa lý liên quan đến giai đoạn đó
- Auto-scroll mode: nhấn "Play" để website tự cuộn qua các thời kỳ kèm narration

---

### ⏳ THỜI KỲ 1: TIỀN SỬ & DỰNG NƯỚC
**Mốc thời gian:** Thiên niên kỷ III TCN – 938 SCN

**Bối cảnh:**
Đây là giai đoạn hình thành các cộng đồng tộc người Việt cổ trên đất Việt Nam ngày nay. Trải qua các nền văn hóa khảo cổ Phùng Nguyên → Đồng Đậu → Gò Mun → **Đông Sơn** (đỉnh cao), người Việt cổ đã có một nền văn minh nông nghiệp lúa nước phát triển.

**Tình hình dân tộc:**
- Hình thành 3 cộng đồng lớn: **Việt cổ** (đồng bằng Bắc Bộ), **Champa** (miền Trung), **Phù Nam** (Nam Bộ)
- Lạc Việt (tổ tiên người Kinh) là trung tâm; xung quanh có nhiều tộc Bách Việt
- Năm 1000 năm Bắc thuộc (179 TCN – 938): vẫn giữ được bản sắc tộc người mặc dù chính sách đồng hóa của các triều đại Trung Hoa

**Tình hình tôn giáo:**
- **Tín ngưỡng nguyên thủy:** thờ thần tự nhiên (mặt trời, sông, núi), tô-tem (rồng, tiên), thờ Mẫu, thờ tổ tiên
- **Phật giáo** du nhập từ Ấn Độ (đường biển) và Trung Quốc (đường bộ) khoảng thế kỷ II SCN – Luy Lâu (Bắc Ninh) là trung tâm Phật giáo sớm
- **Nho giáo, Đạo giáo** du nhập từ Trung Quốc cùng thời Bắc thuộc

**Sự kiện chốt:**
- 2879 TCN (truyền thuyết): Vua Hùng dựng nước Văn Lang
- ~179 TCN: Triệu Đà thôn tính Âu Lạc → bắt đầu Bắc thuộc
- 40–43: Khởi nghĩa Hai Bà Trưng
- 248: Khởi nghĩa Bà Triệu
- 938: Ngô Quyền đánh bại quân Nam Hán → kết thúc Bắc thuộc

**Liên hệ lý luận:**
> Sự hình thành cộng đồng dân tộc Việt diễn ra qua tiến trình lịch sử lâu dài, đầy thử thách. Đây là minh chứng cho luận điểm **dân tộc là sản phẩm của lịch sử**, có quá trình hình thành – phát triển khách quan.

---

### ⏳ THỜI KỲ 2: PHONG KIẾN ĐỘC LẬP
**Mốc thời gian:** 938 – 1858

**Bối cảnh:**
Sau chiến thắng 938, Việt Nam bước vào thời kỳ phong kiến độc lập gần 1000 năm, trải qua các triều đại Ngô – Đinh – Tiền Lê – Lý – Trần – Hồ – Hậu Lê – Mạc – Trịnh/Nguyễn – Tây Sơn – Nguyễn.

**Tình hình dân tộc:**
- **Nam tiến:** Từ thế kỷ XI đến XVIII, Việt Nam mở rộng lãnh thổ từ Đèo Ngang xuống mũi Cà Mau qua nhiều cuộc chiến và di dân
- Sáp nhập đất Champa (1471 – Lê Thánh Tông), đất Phù Nam/Khmer (XVII-XVIII – chúa Nguyễn)
- Quá trình **giao thoa văn hóa Việt – Chăm – Khmer** hình thành bản sắc 3 miền

**Tình hình tôn giáo:**
- **Lý – Trần (XI-XIV):** Phật giáo cực thịnh, là **quốc giáo**; Trần Nhân Tông sáng lập Thiền phái Trúc Lâm Yên Tử
- **Hậu Lê – Nguyễn (XV-XIX):** **Nho giáo lên ngôi**, trở thành hệ tư tưởng chính thống; Phật giáo lui về dân gian
- **Tam giáo đồng nguyên:** Phật-Nho-Đạo hòa quyện trong đời sống tinh thần
- **Công giáo du nhập (thế kỷ XVI):** Các giáo sĩ Bồ Đào Nha, Tây Ban Nha, Pháp truyền đạo; **Alexandre de Rhodes** (1591–1660) soạn từ điển Việt – Bồ – La, đặt nền móng cho chữ Quốc ngữ
- **Tín ngưỡng dân gian** vẫn phát triển: thờ Thành hoàng làng, thờ Mẫu (Tứ phủ)

**Sự kiện chốt:**
- 1010: Lý Công Uẩn dời đô Thăng Long
- 1075: Khoa thi đầu tiên (mở đường Nho giáo)
- 1226: Nhà Trần thành lập, 3 lần đánh bại quân Mông Nguyên
- 1471: Lê Thánh Tông chinh phục Champa
- ~1533: Công giáo bắt đầu được truyền vào Việt Nam
- 1788: Quang Trung đại phá quân Thanh
- 1802: Nguyễn Ánh lập triều Nguyễn, thống nhất đất nước

**Liên hệ lý luận:**
> Quá trình "Nam tiến" thể hiện **xu hướng liên hiệp các tộc người trong một quốc gia thống nhất**. Sự đa dạng Việt – Chăm – Khmer – Hoa hình thành nên cộng đồng dân tộc Việt Nam đa sắc tộc nhưng thống nhất – đặc trưng quan trọng của dân tộc theo nghĩa quốc gia.

---

### ⏳ THỜI KỲ 3: PHÁP THUỘC
**Mốc thời gian:** 1858 – 1945

**Bối cảnh:**
Năm 1858, Pháp nổ súng tấn công Đà Nẵng, mở đầu gần 100 năm đô hộ. Việt Nam mất chủ quyền, bị chia thành 3 kỳ (Bắc, Trung, Nam) với chế độ cai trị khác nhau.

**Tình hình dân tộc:**
- **Chính sách "chia để trị":** Pháp chia 3 kỳ, kích động chia rẽ giữa các vùng, các tộc người
- Tạo "Xứ Thượng tự trị" ở Tây Nguyên, "Khu tự trị Mèo" ở Tây Bắc để tách rời với chính quốc
- **Chính sách ngu dân:** Mở nhà tù nhiều hơn trường học, dùng rượu cồn và thuốc phiện
- Hồ Chí Minh tố cáo trong *Bản án chế độ thực dân Pháp* (1925)

**Tình hình tôn giáo:**
- **Công giáo được Pháp hậu thuẫn**, phát triển mạnh – nhưng nhiều giáo dân vẫn yêu nước (cha Cương, cha Lực)
- **Phật giáo** chấn hưng từ thập niên 1920–1930 với các vị Khánh Hòa, Thiện Chiếu
- **Cao Đài** ra đời 1926 tại Tây Ninh – tôn giáo nội sinh đầu tiên kết hợp nhiều tôn giáo
- **Phật giáo Hòa Hảo** ra đời 1939 tại An Giang (Huỳnh Phú Sổ)
- Các tôn giáo nội sinh có yếu tố yêu nước, chống Pháp

**Sự kiện chốt:**
- 1858: Pháp tấn công Đà Nẵng
- 1884: Hiệp ước Patenotre – VN chính thức là thuộc địa Pháp
- 1925: Hồ Chí Minh xuất bản "Bản án chế độ thực dân Pháp"
- 1926: Đạo Cao Đài ra đời
- 1930: Đảng Cộng sản Việt Nam thành lập
- 1939: Đạo Hòa Hảo ra đời
- 1945: Cách mạng Tháng Tám thành công, lập VNDCCH

**Liên hệ lý luận:**
> Đây là **minh chứng rõ nhất** cho luận điểm Mác – Ăngghen: *"Hãy xóa bỏ nạn người áp bức bóc lột người thì sẽ xóa bỏ được nạn dân tộc này áp bức nô dịch dân tộc khác."* Pháp dùng tôn giáo (Công giáo) làm công cụ thống trị – đúng như tính chất chính trị của tôn giáo trong xã hội có giai cấp đối kháng.

---

### ⏳ THỜI KỲ 4: KHÁNG CHIẾN & THỐNG NHẤT
**Mốc thời gian:** 1945 – 1975

**Bối cảnh:**
Việt Nam trải qua 2 cuộc kháng chiến chống Pháp (1946–1954) và chống Mỹ (1954–1975), kết thúc với chiến thắng 30/4/1975 thống nhất đất nước.

**Tình hình dân tộc:**
- Chính sách **đại đoàn kết dân tộc** của Hồ Chí Minh: "Đoàn kết, đoàn kết, đại đoàn kết"
- Các dân tộc thiểu số tham gia kháng chiến: Bộ đội Cụ Hồ người Tày, Thái, H'mông; Anh hùng Núp (Ba Na); Đinh Núp; A Sanh...
- 1954–1975: ở miền Nam, chính quyền VNCH lợi dụng các dân tộc thiểu số (lập FULRO)

**Tình hình tôn giáo:**
- **Miền Bắc (sau 1954):** Chính sách tự do tín ngưỡng, nhiều giáo dân tham gia kháng chiến (Phật giáo, Công giáo yêu nước)
- **Miền Nam:** Mỹ-ngụy lợi dụng tôn giáo
  - Phong trào Phật giáo 1963 chống Ngô Đình Diệm (đỉnh điểm: Hòa thượng Thích Quảng Đức tự thiêu 11/6/1963)
  - Lợi dụng Công giáo, Hòa Hảo, Cao Đài để chống Cách mạng
- Tuy vậy, đa số tín đồ tôn giáo đều tham gia hoặc ủng hộ Cách mạng

**Sự kiện chốt:**
- 1946: Toàn quốc kháng chiến
- 1954: Chiến thắng Điện Biên Phủ – Hiệp định Geneva chia 2 miền
- 1963: Phong trào Phật giáo chống chính quyền Ngô Đình Diệm
- 1968: Tổng tiến công Tết Mậu Thân
- 30/4/1975: Giải phóng miền Nam, thống nhất đất nước

**Liên hệ lý luận:**
> Cách mạng Việt Nam đã thực hiện đúng cương lĩnh Lênin: **đoàn kết các dân tộc, đoàn kết giai cấp công nhân với nông dân và các tầng lớp lao động** trong cuộc đấu tranh giải phóng. Đoàn kết tôn giáo dưới ngọn cờ Mặt trận Tổ quốc là chìa khóa thắng lợi.

---

### ⏳ THỜI KỲ 5: HẬU CHIẾN & TIỀN ĐỔI MỚI
**Mốc thời gian:** 1975 – 1986

**Bối cảnh:**
Thống nhất đất nước nhưng đối mặt vô vàn khó khăn: khủng hoảng kinh tế, cấm vận, chiến tranh biên giới Tây Nam (1978–1989) và biên giới phía Bắc (1979), tàn dư FULRO ở Tây Nguyên.

**Tình hình dân tộc:**
- Xác định **54 dân tộc anh em** (công bố chính thức 1979)
- Vấn đề người Hoa và sự kiện "thuyền nhân" 1978–1980
- Tiếp tục xử lý tổ chức FULRO ở Tây Nguyên (đến 1992 mới tan rã)
- Di dân kinh tế mới: người Kinh từ đồng bằng lên Tây Nguyên, Tây Bắc

**Tình hình tôn giáo:**
- Giáo hội Phật giáo Việt Nam thống nhất (1981) – sự kiện lịch sử
- Nhiều tôn giáo gặp khó khăn do hoàn cảnh hậu chiến + nhận thức chưa đầy đủ
- Một số phần tử cực đoan Hòa Hảo, Cao Đài bỏ ra nước ngoài hoạt động chống phá

**Sự kiện chốt:**
- 1976: Thống nhất nhà nước (CHXHCN Việt Nam)
- 1979: Chiến tranh biên giới phía Bắc + công bố 54 dân tộc
- 1981: Giáo hội Phật giáo VN thành lập
- 1986: Đại hội Đảng VI – mở đầu Đổi mới

---

### ⏳ THỜI KỲ 6: ĐỔI MỚI & HỘI NHẬP
**Mốc thời gian:** 1986 – nay (2026)

**Bối cảnh:**
Đường lối Đổi mới (1986) mở ra giai đoạn phát triển toàn diện. Việt Nam hội nhập khu vực (ASEAN 1995, WTO 2007, CPTPP 2018). Vấn đề dân tộc – tôn giáo bước vào giai đoạn mới với cả thuận lợi (đời sống nâng cao) và thách thức (các thế lực thù địch lợi dụng).

**Tình hình dân tộc:**
- Đảng xác định: **vấn đề dân tộc là vấn đề chiến lược, cơ bản, lâu dài, đồng thời cấp bách**
- Hàng loạt chương trình phát triển vùng dân tộc thiểu số: 134, 135, 30a, 1719 (giai đoạn 2021–2030)
- Nhưng vẫn còn khoảng cách phát triển lớn giữa các dân tộc

**Tình hình tôn giáo:**
- **Luật Tín ngưỡng, Tôn giáo 2016** – văn bản pháp lý cao nhất
- Hiện có **16 tôn giáo, 43 tổ chức tôn giáo** được công nhận
- ~26.5 triệu tín đồ (chiếm ~27% dân số)
- Các tôn giáo "đồng hành cùng dân tộc"

**Thách thức:**
- Các sự kiện phức tạp: **Tây Nguyên 2001, 2004**; **Mường Nhé 2011**; **Hội thánh Đức Chúa Trời Mẹ 2018**; **Chùa Ba Vàng 2019**; **Cư Kuin 2023**
- Hiện tượng tôn giáo mới, tà đạo lan truyền qua mạng xã hội
- Mâu thuẫn về đất đai một số cơ sở tôn giáo

**Sự kiện chốt:**
- 1986: Đổi mới
- 1990: Pháp lệnh về tôn giáo (lần đầu tiên)
- 1999: Công nhận Phật giáo Hòa Hảo
- 2001, 2004: Sự kiện Tây Nguyên
- 2011: Sự kiện Mường Nhé
- 2016: Luật Tín ngưỡng, Tôn giáo
- 2018: Vụ Hội thánh Đức Chúa Trời Mẹ
- 2023: Vụ tấn công Cư Kuin
- 2024: Nghị quyết 41-NQ/TW về xây dựng đội ngũ doanh nhân, trong đó có dân tộc thiểu số

**Liên hệ lý luận:**
> Việt Nam đang thực hiện **cả 3 nội dung cương lĩnh dân tộc của Lênin**: (1) bình đẳng giữa các dân tộc – thể hiện trong Hiến pháp + thực tế; (2) tự quyết dân tộc – Việt Nam độc lập, các dân tộc tự lựa chọn con đường phát triển; (3) liên hiệp công nhân – đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng.

---

## 6. SECTION 5 – CẢNH GIÁC "DIỄN BIẾN HÒA BÌNH"

### Mục đích
Đây là phần thực tiễn nhất – giúp người xem nhận diện âm mưu chia rẽ. **Quan trọng:** Tránh giọng tuyên truyền cứng nhắc, hãy trình bày dưới dạng **case study phân tích**.

### Cấu trúc mỗi case: Bối cảnh → Diễn biến → Bản chất → Xử lý → Bài học

---

### 📌 CASE 1: SỰ KIỆN TÂY NGUYÊN 2001 & 2004

**Bối cảnh:**
Sau 1975, tổ chức FULRO tan rã nhưng các tổ chức phản động lưu vong ở Mỹ (đứng đầu là **Ksor Kok – "Tổng thống Nhà nước Đề-ga"**) tiếp tục hoạt động chống phá, đặc biệt lợi dụng tôn giáo Tin Lành.

**Diễn biến:**
- **Tháng 2/2001:** Hàng nghìn người dân tộc thiểu số tại Gia Lai, Đắk Lắk được kích động, kéo về thành phố biểu tình, phá hoại
- **Tháng 4/2004:** Sự kiện tái diễn quy mô lớn hơn ở 4 tỉnh Tây Nguyên
- Khẩu hiệu: "Nhà nước Đề-ga độc lập", "Tin Lành Đề-ga là quốc giáo"

**Bản chất:**
- Lợi dụng quyền **dân tộc tự quyết** sai lệch → đòi ly khai
- Lợi dụng **tự do tôn giáo** → biến Tin Lành thành công cụ chính trị (gọi là "Tin Lành Đề-ga" để phân biệt với Tin Lành thuần túy)
- Mưu đồ cuối cùng: tách Tây Nguyên khỏi Việt Nam, lập "nhà nước riêng"

**Xử lý:**
- Lực lượng vũ trang khoanh vùng, dập tắt bạo loạn nhanh chóng
- Tăng cường công tác tuyên truyền, phân biệt rõ Tin Lành thuần túy ≠ Tin Lành Đề-ga
- Bắt giữ, xử lý các đối tượng cầm đầu trong nước
- Đẩy mạnh đầu tư phát triển Tây Nguyên (Nghị quyết 10/2002)

**Bài học:**
> Vấn đề dân tộc – tôn giáo có thể bị lợi dụng cho mục đích chính trị, đặc biệt ở các vùng dân tộc thiểu số có trình độ phát triển còn thấp. **Phòng ngừa là phải nâng cao đời sống vật chất – tinh thần, đồng thời cảnh giác tỉnh táo với các âm mưu đội lốt tôn giáo.**

---

### 📌 CASE 2: SỰ KIỆN MƯỜNG NHÉ 2011

**Bối cảnh:**
Mường Nhé là huyện vùng cao biên giới của Điện Biên, giáp Lào và Trung Quốc, có đông đồng bào H'mông.

**Diễn biến:**
- Tháng 5/2011: Khoảng 7000 người H'mông từ nhiều tỉnh tụ tập tại bản Huổi Khon, xã Nậm Kè
- Khẩu hiệu: chờ "Vua Mèo" xuống, lập "Vương quốc Mông"
- Được dẫn dắt bởi các nhóm "Tin Lành thuần túy biến tướng" (Đản Mễ, hệ phái Vàng Chứ)

**Bản chất:**
- Lợi dụng tôn giáo biến tướng + niềm tin truyền thống về "Vua Mèo" (Vua Mèo Vương Chính Đức ở Hà Giang đã chết từ 1947)
- Âm mưu ly khai khu vực biên giới chiến lược

**Xử lý:**
- Lực lượng vũ trang vận động, giải tán mà không có thương vong lớn
- Bắt giữ, xử lý đối tượng cầm đầu
- Đầu tư hạ tầng, an sinh xã hội cho Mường Nhé
- Phối hợp với các chức sắc Tin Lành chính thống tuyên truyền

**Bài học:**
> Niềm tin tôn giáo dễ bị lợi dụng khi gắn với mong ước cải thiện cuộc sống ở vùng khó khăn. **Bài học là phải kết hợp phát triển kinh tế + giáo dục + quản lý chặt chẽ hoạt động tôn giáo.**

---

### 📌 CASE 3: HỘI THÁNH ĐỨC CHÚA TRỜI MẸ (2018)

**Bối cảnh:**
"Hội thánh Đức Chúa Trời Mẹ" (World Mission Society Church of God) là tổ chức nguồn gốc Hàn Quốc, lan vào Việt Nam khoảng 2010, bùng phát mạnh năm 2018.

**Diễn biến:**
- Lôi kéo nhiều sinh viên, người trẻ
- Tổ chức "lễ rửa tội" lập dị
- Yêu cầu tín đồ đập bàn thờ tổ tiên, từ bỏ gia đình
- Đóng góp tiền bạc lớn cho "hội thánh"

**Bản chất:**
- **Tà đạo, không phải tôn giáo chân chính** – không được công nhận tại VN
- Đi ngược lại giá trị văn hóa Việt (thờ cúng tổ tiên), phá hoại gia đình
- Mang yếu tố lừa đảo tài chính

**Xử lý:**
- Bộ Công an, các địa phương ngăn chặn, giải tán hoạt động trái phép
- Tuyên truyền cho sinh viên nhận diện
- Phối hợp Hàn Quốc xử lý tổ chức gốc

**Bài học:**
> Trong thời đại mạng xã hội, **tà đạo lan truyền rất nhanh, đặc biệt với người trẻ**. Cần nâng cao **thế giới quan khoa học** (chính là CN Mác-Lênin!) để miễn nhiễm với mê tín, tà đạo.

---

### 📌 CASE 4: CHÙA BA VÀNG (2019)

**Bối cảnh:**
Chùa Ba Vàng (Quảng Ninh) là cơ sở Phật giáo lớn, nhưng năm 2019 bùng nổ scandal "thỉnh vong giải nghiệp".

**Diễn biến:**
- Báo chí phát hiện chùa tổ chức "thỉnh oan gia trái chủ" thu tiền hàng tỷ đồng
- "Cô Yến" – phật tử chùa – có những phát ngôn phản cảm về nạn nhân cô gái giao gà ở Điện Biên (vụ án rúng động)
- Trụ trì Thích Trúc Thái Minh bị xử lý kỷ luật

**Bản chất:**
- **Mê tín dị đoan** núp bóng tôn giáo chính thống
- Trục lợi tinh thần và tài chính của tín đồ
- Đi ngược lại giáo lý Phật giáo (tin tự lực, không tin số mệnh)

**Xử lý:**
- Giáo hội Phật giáo VN kỷ luật, buộc sám hối
- Cơ quan chức năng vào cuộc điều tra
- Tuyên truyền phân biệt sinh hoạt Phật giáo chân chính với mê tín

**Bài học:**
> Ngay trong tôn giáo chính thống cũng có thể len lỏi mê tín dị đoan – phản giá trị, gây tổn hại. **Phân biệt rõ tín ngưỡng/tôn giáo lành mạnh với mê tín dị đoan là yêu cầu của xây dựng xã hội văn minh.**

---

## 7. SECTION 6 – QUIZ TƯƠNG TÁC (15 CÂU)

### Mục đích
Củng cố kiến thức, tăng engagement. Có chấm điểm + giải thích đáp án sau mỗi câu.

### Luật chơi đề xuất
- 15 câu trắc nghiệm 4 đáp án
- Mỗi câu 10 điểm, tối đa 150 điểm
- Có timer 30s/câu (tùy chọn)
- Cuối cùng hiện điểm + xếp hạng: <90: cần ôn lại; 90-120: tốt; >120: xuất sắc

### Bộ 15 câu

**Câu 1:** Khái niệm "dân tộc" theo nghĩa rộng dùng để chỉ:
- A. Cộng đồng tộc người
- ✅ **B. Quốc gia dân tộc**
- C. Cộng đồng làng xã
- D. Hình thức tổ chức tiền dân tộc
*Giải thích: Dân tộc nghĩa rộng = quốc gia dân tộc (VN, Pháp...). Nghĩa hẹp = tộc người (Kinh, Tày, Thái...).*

**Câu 2:** Đặc trưng QUAN TRỌNG NHẤT của dân tộc theo nghĩa quốc gia là:
- A. Lãnh thổ chung
- B. Ngôn ngữ chung
- ✅ **C. Phương thức sinh hoạt kinh tế chung**
- D. Nhà nước chung
*Giải thích: Kinh tế là cơ sở gắn kết các thành viên, tạo nên ổn định bền vững của dân tộc.*

**Câu 3:** Dân tộc theo nghĩa "tộc người" có bao nhiêu đặc trưng cơ bản?
- A. 2
- ✅ **B. 3**
- C. 4
- D. 5
*Giải thích: 3 đặc trưng: ngôn ngữ, văn hóa, ý thức tự giác tộc người.*

**Câu 4:** Ai là người phát hiện ra hai xu hướng khách quan của sự phát triển dân tộc?
- A. Karl Marx
- B. Friedrich Engels
- ✅ **C. V.I. Lênin**
- D. Hồ Chí Minh
*Giải thích: Lênin – trên cơ sở nghiên cứu phong trào dân tộc trong CNTB – đã phát hiện 2 xu hướng: tách ra và liên hiệp lại.*

**Câu 5:** Nội dung nào KHÔNG thuộc Cương lĩnh dân tộc của chủ nghĩa Mác-Lênin?
- A. Các dân tộc hoàn toàn bình đẳng
- B. Các dân tộc được quyền tự quyết
- ✅ **C. Liên hiệp tất cả các dân tộc**
- D. Liên hiệp công nhân tất cả các dân tộc
*Giải thích: Nội dung 3 là "Liên hiệp CÔNG NHÂN tất cả các dân tộc" – không phải "liên hiệp tất cả các dân tộc".*

**Câu 6:** Tư tưởng cơ bản trong Cương lĩnh dân tộc của Lênin là:
- A. Bình đẳng dân tộc
- B. Quyền tự quyết
- ✅ **C. Liên hiệp công nhân tất cả các dân tộc**
- D. Đoàn kết quốc tế
*Giải thích: Liên hiệp công nhân là tư tưởng cơ bản, có vai trò quyết định việc thực hiện 2 nội dung kia.*

**Câu 7:** Ở Việt Nam hiện nay có bao nhiêu dân tộc?
- A. 53
- ✅ **B. 54**
- C. 55
- D. 56
*Giải thích: VN có 54 dân tộc anh em (công bố chính thức 1979).*

**Câu 8:** Ở phương Tây, sự hình thành dân tộc gắn liền với sự ra đời của:
- A. Chế độ phong kiến
- ✅ **B. Chủ nghĩa tư bản**
- C. Chế độ chiếm hữu nô lệ
- D. Chủ nghĩa xã hội
*Giải thích: Dân tộc phương Tây gắn với CNTB → gọi là "dân tộc tư sản".*

**Câu 9:** Theo CN Mác-Lênin, tôn giáo về bản chất là:
- A. Lực lượng siêu nhiên sáng tạo thế giới
- ✅ **B. Sự phản ánh hư ảo hiện thực khách quan**
- C. Một hình thái kinh tế
- D. Một học thuyết khoa học
*Giải thích: Theo lập trường duy vật, tôn giáo là hình thái ý thức xã hội, phản ánh hư ảo hiện thực.*

**Câu 10:** Tôn giáo có bao nhiêu nguồn gốc cơ bản?
- A. 2
- ✅ **B. 3**
- C. 4
- D. 5
*Giải thích: 3 nguồn gốc: kinh tế-xã hội, nhận thức, tâm lý.*

**Câu 11:** Tính chất nào KHÔNG thuộc về tôn giáo?
- A. Tính lịch sử
- B. Tính quần chúng
- C. Tính chính trị
- ✅ **D. Tính giai cấp tuyệt đối**
*Giải thích: 3 tính chất của tôn giáo: lịch sử, quần chúng, chính trị (gắn với xã hội có giai cấp đối kháng).*

**Câu 12:** Đâu là dấu hiệu để phân biệt tín ngưỡng với mê tín dị đoan?
- A. Có thờ cúng hay không
- B. Có lễ nghi hay không
- ✅ **C. Có gây tổn hại đến cá nhân và cộng đồng hay không**
- D. Có niềm tin hay không
*Giải thích: Mê tín dị đoan là niềm tin mê muội, cực đoan, gây tổn hại – khác với tín ngưỡng lành mạnh.*

**Câu 13:** Nguyên tắc nào KHÔNG phải nguyên tắc giải quyết vấn đề tôn giáo theo CN Mác-Lênin?
- A. Tôn trọng quyền tự do tín ngưỡng
- B. Phân biệt hai mặt chính trị và tư tưởng
- C. Quan điểm lịch sử – cụ thể
- ✅ **D. Tiêu diệt mọi tôn giáo bằng biện pháp hành chính**
*Giải thích: CN Mác-Lênin KHÔNG chủ trương tiêu diệt tôn giáo – đây là xuyên tạc của thế lực phản động.*

**Câu 14:** Sự kiện nào sau đây là âm mưu lợi dụng vấn đề dân tộc – tôn giáo để chia rẽ ở Tây Nguyên?
- A. Sự kiện Mường Nhé 2011
- ✅ **B. Vụ Tây Nguyên 2001 & 2004 – "Nhà nước Đề-ga"**
- C. Vụ Hội thánh Đức Chúa Trời 2018
- D. Vụ chùa Ba Vàng 2019
*Giải thích: Vụ Tây Nguyên 2001 & 2004 do tổ chức Ksor Kok ở Mỹ kích động, lợi dụng "Tin Lành Đề-ga".*

**Câu 15:** Văn bản pháp lý cao nhất hiện nay điều chỉnh vấn đề tôn giáo ở Việt Nam là:
- A. Pháp lệnh Tín ngưỡng, Tôn giáo 2004
- ✅ **B. Luật Tín ngưỡng, Tôn giáo 2016**
- C. Nghị định 162/2017/NĐ-CP
- D. Hiến pháp 2013
*Giải thích: Luật Tín ngưỡng, Tôn giáo được Quốc hội thông qua 2016, hiệu lực từ 2018.*

---

## 8. PHỤ LỤC: NGUỒN TÀI LIỆU & HÌNH ẢNH

### Nguồn tài liệu chính (cite trong website ở footer)
1. **Giáo trình Chủ nghĩa Xã hội Khoa học** – Bộ Giáo dục và Đào tạo, NXB Chính trị Quốc gia, 2021
2. **Luật Tín ngưỡng, Tôn giáo 2016** – Quốc hội VN
3. **Văn kiện Đại hội Đảng XIII** (2021), phần về dân tộc và tôn giáo
4. **Nghị quyết 24-NQ/TW (2003)** về công tác dân tộc
5. **Nghị quyết 25-NQ/TW (2003)** về công tác tôn giáo
6. Báo Nhân Dân, Tạp chí Cộng sản (các bài về dân tộc – tôn giáo)
7. **"Bản án chế độ thực dân Pháp"** – Nguyễn Ái Quốc, 1925

### Nguồn hình ảnh miễn phí
- **Wikimedia Commons:** commons.wikimedia.org – ảnh public domain
- **Trang Bộ Văn hóa, Thể thao và Du lịch:** bvhttdl.gov.vn
- **Vietnamtourism.com** – ảnh du lịch
- **Báo Nhân Dân, VTV, TTXVN** – ảnh sự kiện (cite rõ)
- **Bảo tàng Dân tộc học Việt Nam:** vme.org.vn

### Font chữ đề xuất
- **Heading:** Be Vietnam Pro (Google Fonts) hoặc Inter
- **Body:** Inter hoặc Source Sans Pro
- Có dấu tiếng Việt đầy đủ, đọc tốt trên cả mobile

### Palette màu đề xuất
| Vai trò | Mã màu | Ghi chú |
|---------|--------|---------|
| Primary | `#DA251D` | Đỏ cờ Việt Nam |
| Secondary | `#FFCD00` | Vàng sao |
| Accent | `#0F4C75` | Xanh hải quân |
| Background | `#F8F5F0` | Be nhạt – ấm áp |
| Text | `#1A1A1A` | Đen mềm |

---

## ✅ CHECKLIST HOÀN THIỆN SẢN PHẨM

- [ ] Section 1: Hero + 3 con số nổi bật
- [ ] Section 2: 4 tab lý luận
- [ ] Section 3: Bản đồ SVG + 4 hotspot + 4 modal chi tiết
- [ ] Section 4: Timeline 6 thời kỳ scroll
- [ ] Section 5: 4 case study
- [ ] Section 6: Quiz 15 câu có chấm điểm
- [ ] Responsive mobile
- [ ] Deploy lên Vercel/Netlify
- [ ] Footer có ghi nguồn tài liệu
- [ ] Slide PowerPoint thuyết trình (kèm sản phẩm)

---

*— End of Content Blueprint —*
*Mọi thắc mắc/sửa đổi: cập nhật trong file này, đẩy lên Git/Google Drive để cả nhóm cùng theo dõi.*
