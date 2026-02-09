import { sidebarItems } from "@/utils/menuData";

// 1. Nhận props isOpen từ MainLayout
export default function Sidebar({ isOpen }) {
  return (
    <aside 
      className={`
        hidden md:block sticky top-14 h-[calc(100vh-56px)] 
        overflow-y-auto bg-white text-yt-text pb-10 scrollbar-hide 
        transition-all duration-200 ease-in-out border-r border-[#303030]
        ${isOpen ? "w-[240px] p-3" : "w-[72px] p-1 items-center"} 
      `}
    >
      {/* Logic: Nếu isOpen = true thì rộng 240px, nếu false thì 72px */}

      {sidebarItems.map((group, index) => (
        <div key={index} className={`mb-4 ${isOpen ? "border-b border-[#303030] pb-4" : ""} last:border-none`}>
          
          {/* Ẩn tiêu đề nhóm khi đóng */}
          {isOpen && group.section !== "Chính" && (
            <h3 className="px-3 py-2 text-sm font-bold text-yt-textGray uppercase tracking-wider">
              {group.section}
            </h3>
          )}

          <div className="flex flex-col gap-1">
            {group.items.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <div 
                  key={itemIndex}
                  className={`
                    flex items-center rounded-lg cursor-pointer transition-all duration-200
                    ${isOpen ? "gap-5 px-3 py-3" : "flex-col justify-center gap-1 py-4 px-0"} 
                    ${item.active 
                      ? "bg-[#272727] font-medium text-white" 
                      : "hover:bg-[#272727] text-yt-textGray hover:text-white"
                    }
                  `}
                >
                  <Icon size={24} strokeWidth={item.active ? 2.5 : 2} />
                  
                  {/* Logic ẩn/hiện chữ */}
                  <span className={`${isOpen ? "text-sm truncate" : "text-[10px] truncate max-w-[60px]"}`}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      
      {isOpen && (
        <div className="px-3 text-xs text-yt-textGray mt-4">
          <p>© 2024 YouBlog</p>
        </div>
      )}
    </aside>
  );
}