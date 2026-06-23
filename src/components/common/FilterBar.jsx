const filters = ["Tất cả", "Công nghệ", "Review Sách", "Vlog Đời Sống", "Podcast", "Âm nhạc", "Lập trình", "Du lịch", "Ẩm thực"];

export default function FilterBar() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide sticky top-0 bg-yt-black z-10 w-full">
      {filters.map((item, index) => (
        <button 
          key={index}
          className={`
            px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
            ${index === 0 
              ? "bg-white text-black hover:bg-gray-200" // Nút đầu tiên (Active)
              : "bg-[#272727] text-white hover:bg-[#3f3f3f]" // Các nút còn lại
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}