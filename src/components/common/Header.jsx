import { Menu, Search, Bell, Video } from 'lucide-react';

// QUAN TRỌNG: Nhớ cái { onMenuClick } này nhé!
export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-14 bg-white text-black border-b border-gray-200 shadow-sm">
      
      <div className="flex items-center gap-4">
        {/* Nút này gọi onMenuClick, nếu bên trên không khai báo thì dòng này sẽ gây lỗi */}
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-yt-gray rounded-full transition active:scale-90"
        >
          <Menu size={24} />
        </button>
        
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="bg-yt-red text-white p-1 rounded-lg">
            <Video size={20} fill="white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">YouBlog</span>
        </div>
      </div>

      {/* Phần tìm kiếm */}
      <div className="hidden md:flex items-center flex-1 max-w-[600px] ml-10">
        <div className="flex w-full">
          <input 
            type="text" 
            placeholder="Tìm kiếm bài viết..." 
            className="w-full bg-[#121212] border border-[#303030] text-white px-4 py-2 rounded-l-full focus:outline-none focus:border-blue-500 placeholder-gray-500"
          />
          <button className="bg-[#222222] border border-l-0 border-[#303030] px-5 py-2 rounded-r-full hover:bg-[#303030] transition">
            <Search size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Phần Icon bên phải */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:block p-2 hover:bg-yt-gray rounded-full transition">
          <Video size={24} />
        </button>
        <button className="p-2 hover:bg-yt-gray rounded-full transition relative">
          <Bell size={24} />
          <span className="absolute top-1 right-1 bg-yt-red text-xs w-4 h-4 rounded-full flex items-center justify-center border-2 border-yt-black">
            3
          </span>
        </button>
        <button className="ml-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
          D
        </button>
      </div>

    </header>
  );
}