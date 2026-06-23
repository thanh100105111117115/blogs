// src/layouts/MainLayout.jsx
import React from 'react';
import { Menu, Search, Bell, Video, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- HEADER COMPONENT (Nằm trong Layout luôn cho gọn) ---
const Header = () => (
  <div style={{ 
    height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
    padding: '0 16px', background: '#0f0f0f', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    borderBottom: '1px solid #272727' // Đường kẻ mờ
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Menu color="white" />
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <div style={{ background: 'red', borderRadius: '4px', padding: '0 4px', fontSize: '10px' }}>▶</div> MyTube
      </Link>
    </div>
    
    <div style={{ flex: 1, maxWidth: '600px', display: 'flex', alignItems: 'center' }}>
      <input 
        placeholder="Tìm kiếm" 
        style={{ 
          width: '100%', background: '#121212', border: '1px solid #303030', color: 'white', 
          padding: '8px 16px', borderRadius: '40px 0 0 40px', outline: 'none' 
        }} 
      />
      <button style={{ 
        background: '#222', border: '1px solid #303030', borderLeft: 'none', 
        padding: '8px 20px', borderRadius: '0 40px 40px 0', cursor: 'pointer' 
      }}>
        <Search color="#888" size={18} />
      </button>
    </div>

    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Video color="white" size={24} />
      <Bell color="white" size={24} />
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'purple', textAlign: 'center', lineHeight: '32px', fontWeight: 'bold' }}>T</div>
    </div>
  </div>
);

// --- SIDEBAR COMPONENT ---
const SidebarItem = ({ icon, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px 12px', borderRadius: '10px', cursor: 'pointer', color: 'white' }} 
       onMouseOver={(e) => e.currentTarget.style.background = '#272727'}
       onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
    {icon}
    <span style={{ fontSize: '14px' }}>{label}</span>
  </div>
);

const Sidebar = () => (
  <div style={{ width: '240px', background: '#0f0f0f', height: '100vh', padding: '12px', overflowY: 'auto', position: 'fixed', top: '56px', left: 0 }}>
    <SidebarItem icon={<div style={{ fontSize: 20 }}>🏠</div>} label="Trang chủ" />
    <SidebarItem icon={<div style={{ fontSize: 20 }}>🔥</div>} label="Thịnh hành" />
    <SidebarItem icon={<div style={{ fontSize: 20 }}>🎬</div>} label="Kênh đăng ký" />
    <hr style={{ borderColor: '#272727', margin: '10px 0' }}/>
    <h4 style={{ margin: '10px 12px', fontSize: '16px' }}>Bạn</h4>
    <SidebarItem icon={<div style={{ fontSize: 20 }}>🕒</div>} label="Video đã xem" />
    <SidebarItem icon={<div style={{ fontSize: 20 }}>💾</div>} label="Xem sau" />
  </div>
);

// --- MAIN LAYOUT ---
export default function MainLayout({ children }) {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', color: 'white', fontFamily: 'Roboto, Arial, sans-serif' }}>
      <Header />
      <div style={{ paddingTop: '56px', display: 'flex' }}>
        {/* Sidebar ẩn trên màn hình nhỏ (CSS cơ bản) */}
        <div className="sidebar-wrapper"> 
           <Sidebar />
        </div>
        
        {/* Nội dung chính */}
        <main style={{ flex: 1, marginLeft: '240px', padding: '24px' }}>
          {children}
        </main>
      </div>

      {/* Style CSS nhỏ để ẩn hiện sidebar responsive */}
      <style>{`
        @media (max-width: 768px) {
          .sidebar-wrapper { display: none; }
          main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}