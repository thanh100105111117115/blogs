import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowDown } from 'lucide-react';

// Import data
import { SIX_PROJECTS } from './projectsData';

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Lấy vị trí của dự án để làm số thứ tự to (01, 02...)
  const projectIndex = SIX_PROJECTS.findIndex(p => p.slug === slug);
  const project = SIX_PROJECTS[projectIndex];
  
  // Format số thứ tự: 1 thành "01", 2 thành "02"
  const projectNum = (projectIndex + 1).toString().padStart(2, '0');

  if (!project) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', fontFamily: '"Inter", sans-serif' }}>
        <h2 style={{ fontSize: '40px' }}>Không tìm thấy dự án.</h2>
        <button onClick={() => navigate('/portfolio')} style={{ marginTop: '20px', padding: '12px 24px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Quay lại Portfolio
        </button>
      </div>
    );
  }

  // Khắc phục lỗi hiển thị ảnh: Tự động lấy bannerUrl của từng bài, nếu không có sẽ lấy ảnh mặc định /1.png
  const currentBanner = project.bannerUrl || '/1.png';

  return (
    <div style={{ 
      fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif', 
      backgroundColor: '#ffffff', 
      color: '#111',
      minHeight: '100vh'
    }}>
      
      {/* 🖼️ PHẦN 1: HERO SECTION - HIỆU ỨNG LÀM MỜ NỀN VÀ TƯƠNG PHẢL CHỮ MÀU TRẮNG */}
      <div style={{
        position: 'relative',
        minHeight: '85vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 5%'
      }}>
        {/* LỚP ẢNH NỀN BỊ LÀM MỜ NẰM ẨN PHÍA SAU */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.55)), url(${currentBanner})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)', 
          transform: 'scale(1.08)', 
          zIndex: 1
        }} />

        {/* LỚP NỘI DUNG CHỮ VÀ NÚT BẤM (RÕ NÉT 100% VÀ ĐƯỢC CHUYỂN SANG MÀU TRẮNG ĐỂ TƯƠNG PHẢL) */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
          
           {/* Nút Back gọn gàng */}
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/portfolio" style={{ 
                color: '#ffffff', 
                textDecoration: 'none', display: 'flex', alignItems: 'center', 
                gap: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px',
                opacity: 0.8, transition: 'opacity 0.2s',
                fontWeight: '600'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = 1}
              onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}
              >
                <ArrowLeft size={16} /> All Projects
              </Link>
           </div>

           {/* Nội dung chính giữa nền ảnh */}
           <div style={{ margin: 'auto 0', maxWidth: '900px', paddingBottom: '5vh' }}>
              {/* Số thứ tự siêu to ẩn nhẹ tinh tế */}
              <div style={{ 
                fontSize: 'clamp(80px, 10vw, 120px)', 
                fontWeight: '800', 
                color: 'rgba(255, 255, 255, 0.15)', 
                lineHeight: '1', 
                marginBottom: '20px',
                letterSpacing: '-2px'
              }}>
                {projectNum}
              </div>

              {/* Tiêu đề dự án */}
              <h1 style={{ 
                fontSize: 'clamp(36px, 5vw, 56px)', 
                fontWeight: '700', 
                letterSpacing: '-1px', 
                marginBottom: '20px', 
                lineHeight: '1.15',
                color: '#ffffff' 
              }}>
                {project.title}
              </h1>
              
              {/* Subtitle */}
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '600px', lineHeight: '1.6', fontWeight: '400' }}>
                {project.subtitle}
              </p>

              {/* Nút Scroll Down */}
              <div style={{ 
                marginTop: '60px', display: 'inline-flex', alignItems: 'center', gap: '8px', 
                fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#ffffff', 
                borderBottom: '1px solid rgba(255,255,255,0.5)', 
                paddingBottom: '6px',
                fontWeight: '600'
              }}>
                Scroll to explore <ArrowDown size={14} />
              </div>
           </div>
        </div>
      </div>

      {/* ⬜ PHẦN 2: CONTENT SECTION - GIỮ NGUYÊN VẸN NỀN TRẮNG CHỮ ĐEN KHÔNG ĐỘNG VÀO */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 5%' }}>
         
         {/* Mục tiêu dự án */}
         {project.objective && (
           <div style={{ marginBottom: '80px' }}>
              <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', marginBottom: '24px' }}>
                Mục tiêu dự án
              </h2>
              <p style={{ fontSize: '26px', lineHeight: '1.6', fontWeight: '400', color: '#111', letterSpacing: '-0.5px' }}>
                {project.objective}
              </p>
           </div>
         )}

         {/* Quá trình thực hiện (Đọc biến body HTML cũ vô cùng an toàn) */}
         {project.body && (
           <div style={{ marginBottom: '80px' }}>
             <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
                Quá trình thực hiện
              </h2>
             <div 
               style={{ fontSize: '17px', lineHeight: '1.8', color: '#333' }} 
               dangerouslySetInnerHTML={{ __html: project.body }} 
             />
           </div>
         )}

         {/* Tổng kết & Đánh giá */}
         {project.conclusion && (
           <div style={{ marginBottom: '80px', padding: '50px 40px', backgroundColor: '#f9f9f9' }}>
              <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#111', marginBottom: '24px' }}>
                Tổng kết & Đánh giá
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', margin: 0 }}>
                {project.conclusion}
              </p>
           </div>
         )}

         {/* Khung tài liệu PDF đính kèm */}
         {project.pdfUrl && (
           <div style={{ marginTop: '100px' }}>
             <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
                Tài liệu đính kèm (PDF)
              </h2>
             <div style={{ height: '850px', width: '100%', border: '1px solid #eaeaea', backgroundColor: '#fafafa' }}>
               <iframe 
                 src={`${project.pdfUrl}#toolbar=0`} 
                 width="100%" 
                 height="100%" 
                 style={{ border: 'none' }} 
                 title="Project PDF" 
               />
             </div>
           </div>
         )}
      </div>
    </div>
  );
}

export default ProjectDetail;