// src/utils/postLoader.js

// Dữ liệu mẫu (Hardcode) để test giao diện
// CHÚ Ý: slug KHÔNG được có đuôi .md
const posts = [
  {
    slug: "hoc-react-co-ban", // ✅ ĐÚNG
    // slug: "hoc-react-co-ban.md", // ❌ SAI (Sẽ gây lỗi mở file trực tiếp)
    title: "Học ReactJS cơ bản trong 10 phút",
    author: "Sơn Đặng",
    date: "2 giờ trước",
    thumbnail: "https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png",
    content: `
# Học ReactJS Cực Nhanh

Chào các bạn, hôm nay chúng ta tìm hiểu ReactJS.

## 1. Component là gì?
Component là các thành phần nhỏ để xây dựng giao diện...

- Dễ học
- Dễ làm
- Lương cao
    `
  },
  {
    slug: "javascript-nang-cao",
    title: "Javascript Nâng Cao: Closure và Scope",
    author: "F8 Official",
    date: "1 ngày trước",
    thumbnail: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    content: "# Javascript Nâng Cao\n\nNội dung bài viết về JS..."
  },
  {
    slug: "lo-trinh-frontend",
    title: "Lộ trình trở thành Frontend Developer 2024",
    author: "Dũng Lại",
    date: "3 ngày trước",
    thumbnail: "https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a0115ce061.png",
    content: "# Lộ trình Frontend\n\n1. HTML/CSS\n2. JS\n3. React..."
  },
  {
    slug: "bi-kip-pv",
    title: "Bí kíp phỏng vấn vào công ty Big Tech",
    author: "Hoàng Nguyễn",
    date: "1 tuần trước",
    thumbnail: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368a840c4.jpg",
    content: "# Phỏng vấn\n\nTự tin là quan trọng nhất..."
  },
  {
    slug: "review-sach",
    title: "Review sách: Clean Code - Có nên đọc?",
    author: "Team Code",
    date: "2 tuần trước",
    thumbnail: "https://files.fullstack.edu.vn/f8-prod/blog_posts/2756/6268b8d009088.jpg",
    content: "# Clean Code\n\nCuốn sách gối đầu giường..."
  }
];

// Hàm lấy tất cả bài viết
export const getAllPosts = () => {
  return posts;
};

// Hàm tìm bài viết theo slug
export const getPostBySlug = (slug) => {
  return posts.find(p => p.slug === slug);
};