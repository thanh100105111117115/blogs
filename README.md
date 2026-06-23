# 📝 MyBlog Auto - Hệ thống Blog Tự Động với React & Markdown

Chào mừng bạn đến với dự án **MyBlog Auto**. Đây là một ứng dụng Single Page Application (SPA) được xây dựng để viết blog cá nhân nhanh chóng.

Điểm đặc biệt của dự án này là tính năng **"Zero-Config Content"**: Bạn chỉ cần viết file Markdown (.md), hệ thống sẽ tự động quét, lấy dữ liệu và hiển thị lên website mà không cần sửa code hay khai báo Database.

---

## 🛠 Công nghệ sử dụng (Tech Stack)

Dự án sử dụng các công nghệ hiện đại và tối ưu hiệu suất:

- **Core:** [ReactJS](https://react.dev/) (Library xây dựng giao diện).
- **Build Tool:** [Vite](https://vitejs.dev/) (Tốc độ khởi động siêu nhanh).
- **Routing:** [React Router DOM](https://reactrouter.com/) (Điều hướng trang không cần load lại).
- **Content:** [React Markdown](https://github.com/remarkjs/react-markdown) (Chuyển đổi file .md thành HTML).
- **Data Parsing:** [Front-matter](https://github.com/jxson/front-matter) (Đọc thông tin meta như tiêu đề, ngày tháng từ file .md).
- **Icons:** [Lucide React](https://lucide.dev/) (Bộ icon nhẹ và đẹp).

---

## 📂 Cấu trúc thư mục (Project Structure)

Đây là bản đồ của dự án. Hãy đọc kỹ để biết file nào nằm ở đâu:

```text
MY-BLOG-PROJECT/
├── node_modules/          # ⛔ KHÔNG ĐỤNG VÀO: Chứa hàng ngàn thư viện đã cài đặt (npm install).
├── public/                # Chứa các file tĩnh không qua xử lý (favicon, robots.txt...).
├── src/                   # 🧠 SOURCE CODE CHÍNH (Nơi bạn làm việc 99%)
│   ├── posts/             # 📝 KHO BÀI VIẾT: Nơi chứa toàn bộ file .md.
│   │   ├── bai-viet-1.md
│   │   └── bai-viet-2.md
│   ├── App.jsx            # ⚙️ LOGIC TRUNG TÂM: Chứa Header, Router và logic đọc file tự động.
│   ├── main.jsx           # Điểm khởi đầu của ứng dụng React (mount vào DOM).
│   └── index.css          # File CSS toàn cục (Global styles).
├── .gitignore             # Danh sách các file bị Git bỏ qua (ví dụ: node_modules).
├── index.html             # File HTML chính, nơi React sẽ "chui" vào thẻ <div id="root">.
├── package.json           # 📜 HỘ CHIẾU DỰ ÁN: Chứa tên dự án, phiên bản và danh sách thư viện.
├── vite.config.js         # Cấu hình cho công cụ Vite.
└── README.md              # File hướng dẫn mà bạn đang đọc.