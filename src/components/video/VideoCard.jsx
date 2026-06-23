import { CheckCircle } from 'lucide-react';

export default function VideoCard({ video }) {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer h-full border border-gray-200 w-full overflow-hidden">
      
      {/* 1. KHUNG ẢNH (Có chứa badge thời gian) */}
      <div className="relative w-full aspect-video bg-gray-200">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover"
        />
        {/* Badge thời gian: Tuyệt đối nằm góc dưới phải */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
          {video.duration}
        </div>
      </div>

      {/* 2. THÔNG TIN (Avatar + Chữ) */}
      <div className="flex px-3 pb-3 gap-3 mt-1">
        
        {/* AVATAR: Dùng style cứng để ép size, bất chấp lỗi Tailwind */}
        <img 
          src={video.avatar} 
          alt={video.author} 
          style={{ width: '36px', height: '36px', minWidth: '36px', borderRadius: '50%' }}
          className="object-cover border border-gray-200"
        />
        
        <div className="flex flex-col overflow-hidden">
          {/* Tiêu đề */}
          <h3 className="text-gray-900 font-bold text-sm leading-tight line-clamp-2 mb-1" title={video.title}>
            {video.title}
          </h3>
          
          {/* Tên tác giả & View */}
          <div className="text-gray-500 text-xs flex flex-col gap-0.5">
            <div className="flex items-center gap-1 hover:text-gray-800">
              <span className="font-medium">{video.author}</span>
              <CheckCircle size={12} className="fill-gray-500 text-white" />
            </div>
            <div>
              <span>{video.views}</span> • <span>{video.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}