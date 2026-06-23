import { Home, Compass, Clock, Bookmark, Flame, Lightbulb, BookOpen, Briefcase } from 'lucide-react';

export const sidebarItems = [
  {
    section: "Chính",
    items: [
      { icon: Home, label: "Trang chủ", active: true },
      { icon: Compass, label: "Khám phá" },
      { icon: Clock, label: "Đọc gần đây" },
      { icon: Briefcase, label: "Portfolio", active: false,path: "/portfolio"},
    ]
  },
  {
    section: "Chủ đề Blog",
    items: [
      { icon: Flame, label: "Hack Đại Học" }, // Giống ảnh mẫu của bạn
      { icon: Lightbulb, label: "Kỹ năng sống" },
      { icon: BookOpen, label: "Review Sách" },
      { icon: Bookmark, label: "Công nghệ" },
    ]
  }
];