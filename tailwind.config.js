/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Dòng này QUAN TRỌNG: Nó bảo Tailwind quét tất cả các file trong thư mục src
  ],
  theme: {
    extend: {
      // ... giữ nguyên phần theme cũ của bạn
    },
  },
  plugins: [],
}