import React, { useEffect, useState, useRef, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import frontMatter from 'front-matter'; 
import { Menu, Search, Video, X, ChevronLeft, ThumbsUp, Moon, Sun, Bookmark, Hash, Facebook, Github, Youtube, Globe, Heart, MessageCircle, Share2, MoreHorizontal, Briefcase,Home, 
  Mail, 
  Instagram, 
  Phone,  } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// --- IMPORT FONTS (Thêm vào đầu file để load font từ Google) ---
// --- 1. CẤU HÌNH FONT CHỮ (BẠN SỬA Ở ĐÂY) ---
// --- 1. CẤU HÌNH FONT & CSS RESPONSIVE ---

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Work+Sans:wght@300;400;500;600;700&display=swap');
    
    body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; margin: 0; }
    h1, h2, h3, h4, .logo-text, .nav-item, button { font-family: 'Work Sans', sans-serif; }
    
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
    
    /* CSS CHO MOBILE & DESKTOP */
    .desktop-only { display: flex; }
    .mobile-show { display: none; }
    
    /* Khi màn hình nhỏ hơn 768px (Mobile/Tablet dọc) */
    @media (max-width: 768px) {
      .desktop-only { display: none !important; }
      .mobile-show { display: flex !important; }
      .header-padding { padding: 0 16px !important; } /* Giảm lề header */
    }
  `}</style>
);

// --- CẤU HÌNH MÀU SẮC (THEME TIM FERRISS STYLE) ---
const themes = {
  dark: {
    bg: '#111111',
    sidebarBg: '#1a1a1a',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    hover: '#333333',
    border: '#333333',
    inputBg: '#222222',
    // Header Style
    headerBg: '#0e2a47', // Xanh Navy đậm giống ảnh mẫu
    headerText: '#ffffff',
    accentBtn: '#62b5e5', // Màu xanh sáng cho nút Newsletter
    accentBtnText: '#000000',
  },
  light: {
    bg: '#f4f4f4',
    sidebarBg: '#ffffff',
    text: '#111111',
    textSecondary: '#555555',
    hover: '#f0f0f0',
    border: '#e0e0e0',
    inputBg: '#f5f5f5',
    // Header Style
    headerBg: '#0e2a47', // Vẫn giữ header tối màu cho sang
    headerText: '#ffffff',
    accentBtn: '#62b5e5',
    accentBtnText: '#000000',
  }
};

// --- HELPER ---
const calculateReadTime = (text) => {
  const words = text.trim().split(/\s+/).length;
  return `${Math.ceil(words / 200)} phút đọc`; 
};

// --- DATA LOADER ---
const mdModules = import.meta.glob('/src/posts/*.md', { as: 'raw', eager: true });
// THÊM DÒNG NÀY ĐỂ ĐỌC DỰ ÁN:
const projectModules = import.meta.glob('/src/projects/*.md', { as: 'raw', eager: true });
// --- 1. HEADER (TIM FERRISS STYLE) ---
const Header = ({ onSearch, searchTerm, toggleMenu, toggleTheme, isDarkMode, allTags, onSelectTag }) => {
  const navigate = useNavigate();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isHoveringTopic, setIsHoveringTopic] = useState(false); 
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearchInput && inputRef.current) inputRef.current.focus();
  }, [showSearchInput]);

  // Lấy theme hiện tại
  const t = isDarkMode ? themes.dark : themes.light;

  return (
    <>
    <FontStyles />
    <div style={{ 
        height: '80px', // Cao hơn một chút cho thoáng
        flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
        padding: '0 32px', 
        background: t.headerBg, // Màu xanh Navy đậm
        zIndex: 100, position: 'sticky', top: 0, 
        color: t.headerText,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    }}>
      
      {/* 1. LOGO & MENU BUTTON */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', minWidth: '240px' }}>
        <button onClick={toggleMenu} style={{ background: 'transparent', border: 'none', color: t.headerText, cursor: 'pointer', padding: '4px' }}>
            <Menu size={28} strokeWidth={1.5} />
        </button>
        
        <Link to="/" onClick={() => onSearch('')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="logo-text" style={{ 
              fontWeight: '700', 
              fontSize: '26px', 
              letterSpacing: '2px', 
              color: t.headerText, 
              textTransform: 'uppercase' 
          }}>
            TIM FERRISS <span style={{ fontWeight: '300', opacity: 0.7 }}>VN</span>
          </span>
        </Link>
      </div>
      
      {/* 2. MENU CENTER (TEXT LINKS) */}
      {!showSearchInput && (
          <div className="nav-center" style={{ display: 'flex', alignItems: 'center', gap: '32px', flex: 1, justifyContent: 'center', height: '100%' }}>
            
            {/* Mục: CHỦ ĐỀ (Dropdown) */}
            <div 
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onMouseEnter={() => setIsHoveringTopic(true)}
              onMouseLeave={() => setIsHoveringTopic(false)}
            >
                <span className="nav-item" style={{ color: t.headerText, fontWeight: '500', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Chủ đề <ChevronLeft size={14} style={{ transform: 'rotate(-90deg)' }}/>
                </span>
                
                {isHoveringTopic && (
                    <div style={{ 
                        position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', 
                        background: 'white', minWidth: '220px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', 
                        padding: '8px 0', zIndex: 200, overflow: 'hidden'
                    }}>
                        <div onClick={() => { onSelectTag('All'); navigate('/'); }}
                            style={{ padding: '12px 24px', color: '#111', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                            onMouseEnter={(e) => e.target.style.background = '#f4f4f4'}
                            onMouseLeave={(e) => e.target.style.background = 'white'}
                        >Tất cả bài viết</div>
                        <div style={{ height: 1, background: '#eee', margin: '4px 0' }}></div>
                        {allTags?.filter(t => t !== 'All').map(tag => (
                            <div key={tag} onClick={() => { onSelectTag(tag); navigate('/'); }}
                                style={{ padding: '10px 24px', color: '#333', fontSize: '15px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                                onMouseEnter={(e) => {e.target.style.background = '#f4f4f4'; e.target.style.color = '#0e2a47'}}
                                onMouseLeave={(e) => {e.target.style.background = 'white'; e.target.style.color = '#333'}}
                            >{tag}</div>
                        ))}
                    </div>
                )}
            </div>

            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="nav-item" style={{ textDecoration: 'none', color: t.headerText, fontWeight: '500', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>YouTube</a>
            <Link to="#" className="nav-item" style={{ textDecoration: 'none', color: t.headerText, fontWeight: '500', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Tài liệu</Link>
          </div>
      )}

      {/* 3. SEARCH INPUT (POPUP) */}
      <div style={{ position: showSearchInput ? 'absolute' : 'relative', left: showSearchInput ? '50%' : 'auto', transform: showSearchInput ? 'translateX(-50%)' : 'none', width: showSearchInput ? '600px' : 'auto', display: showSearchInput ? 'block' : 'none', zIndex: 10 }}>
         <div style={{ display: 'flex', alignItems: 'center', background: 'white', padding: '10px 20px', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
            <Search size={20} color="#666" />
            <input 
                ref={inputRef} value={searchTerm} onChange={(e) => { onSearch(e.target.value); navigate('/'); }}
                onKeyDown={(e) => e.key === 'Enter' && setShowSearchInput(false)}
                style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', color: '#333', fontSize: '16px', marginLeft: '12px', fontFamily: 'Inter, sans-serif' }} placeholder="Tìm kiếm bài viết..." 
            />
            <button onClick={() => setShowSearchInput(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><X size={20} color="#666"/></button>
         </div>
      </div>

      {/* 4. RIGHT ACTIONS (SEARCH + BUTTON) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', minWidth: '240px', justifyContent: 'flex-end' }}>
         {!showSearchInput && (
             <button onClick={() => setShowSearchInput(true)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: t.headerText, padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Search size={20} />
             </button>
         )}
         
         {/* NÚT BẢN TIN MIỄN PHÍ (Giống ảnh mẫu) */}
         <button style={{ 
             background: t.accentBtn, 
             color: t.accentBtnText, 
             border: 'none', 
             padding: '12px 24px', 
             borderRadius: '30px', // Bo tròn kiểu viên thuốc
             cursor: 'pointer', 
             fontWeight: '700', 
             fontSize: '13px', 
             letterSpacing: '0.5px',
             textTransform: 'uppercase',
             fontFamily: 'Inter, sans-serif',
             whiteSpace: 'nowrap',
             boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
         }}>
            Bản tin miễn phí
         </button>

         <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: t.headerText, cursor: 'pointer', opacity: 0.8 }}>
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
         </button>
      </div>
      <style>{`@media (max-width: 900px) { .nav-center { display: none !important; } }`}</style>
    </div>
    </>
  );
};

// --- 2. SIDEBAR (GIỮ NGUYÊN) ---
const Sidebar = ({ isOpen, theme, isDarkMode, toggleTheme, allTags, selectedTag, onSelectTag }) => {
  if (!isOpen) return null; 
  const navigate = useNavigate();
  const itemStyle = { display: 'flex', alignItems: 'center', gap: '20px', padding: '12px 16px', color: theme.text, textDecoration: 'none', borderRadius: '8px', marginBottom: '4px', cursor: 'pointer', fontSize: '15px', fontFamily: 'Inter, sans-serif', transition: 'background 0.2s' };
  const sectionTitleStyle = { padding: '24px 16px 12px 16px', fontSize: '13px', fontWeight: 'bold', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '1px' };
  const dividerStyle = { height: '1px', background: theme.border, margin: '16px 0' };
  const handleTagClick = (tag) => { onSelectTag(tag); navigate('/'); };

  return (
    <div style={{ width: '260px', background: theme.sidebarBg, height: '100%', overflowY: 'auto', padding: '16px', flexShrink: 0, borderRight: `1px solid ${theme.border}` }}>
      <div onClick={() => handleTagClick('All')} style={{...itemStyle, background: selectedTag === 'All' ? theme.hover : 'transparent', fontWeight: selectedTag === 'All' ? '600' : '400'}}><Home size={22}/> Trang chủ</div>
      <div style={itemStyle}><Bookmark size={22}/> Bài viết đã lưu</div>
      <div onClick={() => {navigate('/portfolio'); if(window.innerWidth <= 768) closeMenu();}} style={itemStyle}><Briefcase size={20} /> Portfolio</div>
      <div style={dividerStyle}></div>
      <div style={sectionTitleStyle}>Chủ đề</div>
      {allTags.filter(t => t !== 'All').map(tag => (
        <div key={tag} onClick={() => handleTagClick(tag)} style={{...itemStyle, background: selectedTag === tag ? theme.hover : 'transparent'}}><Hash size={18} color={theme.textSecondary} /> {tag}</div>
      ))}
      <div style={dividerStyle}></div>
      <div style={sectionTitleStyle}>Kết nối</div>
      <a href="#" target="_blank" rel="noreferrer" style={itemStyle}><Facebook size={22} color="#1877F2"/> Facebook</a>
      <a href="#" target="_blank" rel="noreferrer" style={itemStyle}><Github size={22} color={theme.text}/> GitHub</a>
      <a href="#" target="_blank" rel="noreferrer" style={itemStyle}><Youtube size={22} color="#FF0000"/> YouTube</a>
      <div style={dividerStyle}></div>
      <div onClick={toggleTheme} style={itemStyle}>{isDarkMode ? <Sun size={22} /> : <Moon size={22} />}<span>{isDarkMode ? "Giao diện Sáng" : "Giao diện Tối"}</span></div>
    </div>
  );
};

// --- 3. HOME CARD (ROUNDED CORNERS & CLEAN FONTS) ---
const HomeCard = ({ post, theme }) => (
  <div style={{ 
      display: 'flex', flexDirection: 'column', gap: '0px', 
      background: theme.sidebarBg, borderRadius: '16px', // Bo góc lớn hơn cho Card
      border: `1px solid ${theme.border}`, overflow: 'hidden',
      transition: 'transform 0.2s',
      cursor: 'pointer'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    
    {/* HEADER CARD */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to={`/author/${post.author}`}>
             <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #0e2a47, #62b5e5)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px', fontFamily: 'Oswald, sans-serif' }}>
                {post.author ? post.author[0] : '?'}
             </div>
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
             <Link to={`/author/${post.author}`} style={{ textDecoration: 'none', color: theme.text, fontWeight: '600', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
                {post.author}
             </Link>
             <span style={{ fontSize: '12px', color: theme.textSecondary }}>2 giờ trước</span>
          </div>
       </div>
       <MoreHorizontal size={20} color={theme.textSecondary} />
    </div>

    {/* IMAGE (ROUNDED INSIDE) */}
    <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '0 16px' }}>
      <div style={{ 
          width: '100%', aspectRatio: '16/9', background: theme.hover, position: 'relative',
          borderRadius: '16px', // HÌNH ẢNH BO TRÒN GÓC THEO YÊU CẦU
          overflow: 'hidden'
      }}>
        <img src={post.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.src = "https://placehold.co/600x400/222/white?text=No+Image"} />
        <div style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(0, 0, 0, 0.7)', color: 'white', fontSize: '11px', fontWeight: '600', padding: '4px 8px', borderRadius: '6px', backdropFilter: 'blur(4px)' }}>
           {calculateReadTime(post.body)}
        </div>
      </div>
    </Link>

    {/* ACTIONS */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 8px 16px' }}>
       <div style={{ display: 'flex', gap: '20px' }}>
          <Heart size={24} color={theme.text} strokeWidth={1.5} />
          <MessageCircle size={24} color={theme.text} strokeWidth={1.5} />
          <Share2 size={24} color={theme.text} strokeWidth={1.5} />
       </div>
       <Bookmark size={24} color={theme.text} strokeWidth={1.5} />
    </div>

    {/* INFO */}
    <div style={{ padding: '0 16px 20px 16px' }}>
       <div style={{ fontSize: '14px', fontWeight: '600', color: theme.text, marginBottom: '6px' }}>1,234 lượt thích</div>
       <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none', color: theme.text }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', lineHeight: '1.4', fontFamily: 'Oswald, sans-serif' }}>
             {post.title}
          </h3>
       </Link>
       <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          {post.tags?.map(tag => (
             <span key={tag} style={{ color: '#62b5e5', fontSize: '13px', cursor: 'pointer', fontWeight: '500' }}>#{tag}</span>
          ))}
       </div>
    </div>
  </div>
);

// --- 4. TRANG CHỦ (CLEAN) ---
const HomePage = ({ posts, searchTerm, theme, selectedTag }) => {
  
  const displayPosts = posts.filter(post => {
    // 1. Dùng || "" ĐỂ BẢO VỆ NGAY TỪ ĐẦU
    const safeTitle = post.title || "";
    const safeSearch = searchTerm || "";
    
    // 2. An toàn rồi mới cho chữ nhỏ lại và đem đi so sánh
    const matchesSearch = safeTitle.toLowerCase().includes(safeSearch.toLowerCase());
    
    // 3. Xử lý Tags (Đoạn này bạn không cần || "" ở cuối đâu)
    const matchesTag = selectedTag === 'All' || (post.tags && post.tags.includes(selectedTag));
    
    return matchesSearch && matchesTag;
  });
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '32px', background: theme.bg }}>
      <h2 style={{ marginBottom: '24px', color: theme.text, fontSize: '24px', fontWeight: '700', fontFamily: 'Oswald, sans-serif', borderBottom: `2px solid ${theme.border}`, paddingBottom: '12px', width: 'fit-content' }}>
        {selectedTag === 'All' ? 'BÀI VIẾT MỚI NHẤT' : `# ${selectedTag.toUpperCase()}`}
      </h2>
      <div className="youtube-grid">
        {displayPosts.map((post) => <HomeCard key={post.slug} post={post} theme={theme} />)}
      </div>
      <style>{`
        .youtube-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1200px; margin: 0 auto; }
        @media (max-width: 1100px) { .youtube-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .youtube-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
};

// --- 5. POST DETAIL (FULL WIDTH & ROUNDED) ---
const PostDetail = ({ posts, theme }) => {
  const { slug } = useParams();
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const post = posts.find(p => p.slug === slug);
  
  const relatedPosts = useMemo(() => {
     if (!post) return [];
     const others = posts.filter(p => p.slug !== slug);
     const sameTag = others.filter(p => p.tags?.some(t => post.tags?.includes(t)));
     return [...sameTag, ...others.filter(p => !sameTag.includes(p))].slice(0, 5);
  }, [post, posts]);

  useEffect(() => { 
    if (scrollRef.current) scrollRef.current.scrollTop = 0; 
    setProgress(0); 
  }, [slug]);

  const handleScroll = () => { 
    if (scrollRef.current) { 
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current; 
        setProgress((scrollTop / (scrollHeight - clientHeight)) * 100); 
    } 
  };

  if (!post) return <div style={{ padding: 40, color: theme.text }}>⚠️ Không tìm thấy bài viết!</div>;

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden', position: 'relative', background: theme.bg }}>
      <div style={{ position: 'absolute', top: 0, left: 0, height: '4px', background: '#62b5e5', zIndex: 50, width: `${progress}%`, transition: 'width 0.1s ease-out' }} />
      <div ref={scrollRef} onScroll={handleScroll} style={{ flex: 1, overflowY: 'auto', padding: '40px 24px', background: theme.bg }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}> 
          
          {/* HEADER BAI VIET */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Link to={`/author/${post.author}`}>
                <img src={`https://ui-avatars.com/api/?name=${post.author}&background=0e2a47&color=fff`} style={{ width: '56px', height: '56px', borderRadius: '50%', border: `3px solid ${theme.bg}` }} alt="Author"/>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <div style={{ fontSize: '13px', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>Tác giả</div>
                 <Link to={`/author/${post.author}`} style={{ fontWeight: '700', color: theme.text, textDecoration: 'none', fontSize: '18px', fontFamily: 'Oswald, sans-serif' }}>{post.author}</Link>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
               <button style={{ background: theme.hover, border: 'none', cursor: 'pointer', color: theme.text, padding: 10, borderRadius: '50%' }}><Facebook size={20}/></button>
               <button style={{ background: theme.hover, border: 'none', cursor: 'pointer', color: theme.text, padding: 10, borderRadius: '50%' }}><Share2 size={20}/></button>
               <button style={{ background: theme.hover, border: 'none', cursor: 'pointer', color: theme.text, padding: 10, borderRadius: '50%' }}><Bookmark size={20}/></button>
            </div>
          </div>

          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '48px', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px', color: theme.text, letterSpacing: '-1px' }}>{post.title}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>
             <span style={{ color: theme.textSecondary }}>30 Tháng 1, 2026</span>
             <span style={{ color: theme.textSecondary }}>•</span>
             <div style={{ display: 'flex', gap: '8px' }}>
                {post.tags?.map(tag => ( <span key={tag} style={{ color: '#62b5e5', fontWeight: '600', cursor: 'pointer', textTransform: 'uppercase', fontSize: '13px' }}>#{tag}</span> ))}
             </div>
          </div>

          {/* MAIN IMAGE (ROUNDED) */}
          <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
            <img src={post.thumbnail} style={{ width: '100%', height: 'auto', display: 'block' }} onError={(e) => e.target.style.display='none'} />
          </div>

          {/* CONTENT */}
          <div className="markdown-content" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.8', color: theme.text }}> 
              <ReactMarkdown components={{ 
                  h1: ({...p}) => <h2 style={{fontSize:'36px', fontFamily: 'Oswald, sans-serif', fontWeight:'700', marginTop:'50px', marginBottom:'20px', color: theme.text}} {...p} />, 
                  h2: ({...p}) => <h2 style={{fontSize:'30px', fontFamily: 'Oswald, sans-serif', fontWeight:'700', marginTop:'40px', marginBottom:'16px', color: theme.text}} {...p} />, 
                  p: ({...p}) => <p style={{marginBottom: '28px'}} {...p} />,
                  blockquote: ({...p}) => <blockquote style={{borderLeft: `4px solid #62b5e5`, paddingLeft: '24px', marginLeft: 0, fontStyle: 'italic', fontSize: '22px', color: theme.textSecondary, fontFamily: 'serif'}} {...p} />,
                  strong: ({...p}) => <strong style={{color: theme.text, fontWeight: '700'}} {...p} />,
                  code({node, inline, className, children, ...props}) { 
                    const match = /language-(\w+)/.exec(className || ''); 
                    return !inline && match 
                      ? ( <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter> ) 
                      : (<code style={{background: theme.hover, padding: '2px 6px', borderRadius: '4px', color: '#ff79c6', fontFamily: 'monospace', fontSize: '0.9em'}} {...props}>{children}</code>) 
                  } 
                }}>{post.body}</ReactMarkdown>
          </div>
        </div>
      </div>
      
      {/* RELATED SIDEBAR */}
      <div className="related-sidebar" style={{ width: '340px', borderLeft: `1px solid ${theme.border}`, overflowY: 'auto', padding: '40px 24px', background: theme.bg }}> 
        <h4 style={{ margin: '0 0 32px 0', fontSize: '16px', fontWeight: '700', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Oswald, sans-serif' }}>Bài viết nổi bật</h4>
        {relatedPosts.map(p => (
           <Link key={p.slug} to={`/post/${p.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', textDecoration: 'none', color: theme.text }}>
              <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', background: theme.hover }}>
                <img src={p.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                 <div style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.3', marginBottom: '8px', color: theme.text, fontFamily: 'Oswald, sans-serif' }}>{p.title}</div>
                 <div style={{ fontSize: '13px', color: theme.textSecondary, fontFamily: 'Inter, sans-serif' }}>{calculateReadTime(p.body)}</div>
              </div>
           </Link>
        ))}
      </div>
      <style>{`@media (max-width: 1200px) { .related-sidebar { display: none !important; } }`}</style>
    </div>
  );
};

// --- AUTHOR PAGE (GIỮ NGUYÊN) ---
const AuthorPage = ({ posts, theme }) => {
  const { authorName } = useParams();
  const authorPosts = posts.filter(p => p.author === authorName);
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '32px', background: theme.bg }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '48px', paddingBottom: '32px', borderBottom: `1px solid ${theme.border}` }}>
           <Link to="/" style={{ color: theme.text }}><ChevronLeft size={32}/></Link>
           <div style={{ width: 100, height: 100, borderRadius: '50%', background: theme.headerBg, fontSize: '40px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontFamily: 'Oswald, sans-serif' }}>{authorName[0]}</div>
           <div>
              <h1 style={{ margin: 0, fontSize: '32px', color: theme.text, fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>{authorName}</h1>
              <p style={{ color: theme.textSecondary, margin: '8px 0', fontSize: '18px', fontFamily: 'Inter, sans-serif' }}>{authorPosts.length} bài viết đã xuất bản</p>
           </div>
        </div>
        <div className="youtube-grid">{authorPosts.map((post) => <HomeCard key={post.slug} post={post} theme={theme} />)}</div>
      </div>
      <style>{`.youtube-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }`}</style>
    </div>
  )
};
// ==========================================
// GIAO DIỆN PORTFOLIO ĐỘC LẬP (HARITH MORGAN STYLE)
// ==========================================

// Component HarithPortfolio hoàn chỉnh và chuẩn chỉnh nhất

// 1. Nhớ import thêm các icon mới: Mail, Phone, Instagram

const HarithPortfolio = ({ projects }) => {
  // Styles dùng chung để code sạch hơn
  const sidebarWidth = '380px';
  
  const mainLayoutStyle = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: '"Inter", sans-serif',
  };

  const sidebarStyle = {
    width: sidebarWidth,
    minWidth: sidebarWidth,
    height: '100vh',
    backgroundImage: 'url("https://harithmorgan.com/static/images/hero_img.jpg")', // Link ảnh nền thật
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
    padding: '60px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'sticky', // Dùng sticky thay vì fixed để không bị đè
    top: 0,
    overflowY: 'auto'
  };

  const contentStyle = {
    flex: 1, // Tự động chiếm hết phần còn lại bên phải
    padding: '80px 60px',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  };

  const titleStyle = {
    fontSize: '22px',
    color: '#999',
    fontWeight: '400',
    marginBottom: '40px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  };

  return (
    <div style={mainLayoutStyle}>
      {/* Anchor point cho icon nhà */}
      <div id="top"></div>

      {/* CỘT TRÁI: GIỚI THIỆU */}
      <div style={sidebarStyle}>
        {/* Lớp mờ nền ảnh */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(26, 26, 26, 0.8)' }}></div>
        
        {/* Nội dung sidebar */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '140px', height: '140px', borderRadius: '50%', backgroundColor: '#333', marginBottom: '30px', overflow: 'hidden', border: '2px solid #444' }}>
              <img 
                src="https://harithmorgan.com/static/images/harith_pfp.png" // Link ảnh thật của bạn
                alt="Avatar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <h1 style={{ fontSize: '26px', fontWeight: '600', marginBottom: '20px', lineHeight: '1.2' }}>
              Hi, my name is Harith
            </h1>
            
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: '1.7', marginBottom: '40px', textAlign: 'justify' }}>
              I was born and raised in Brooklyn, NY. I studied Mechanical Engineering at MIT. Now I'm pursuing a Masters at Purdue. I am interested in Environmental sustainability, Product Design, and Mechatronics. Ultimately, I am searching for ways to positively impact the world.
            </p>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '20px', paddingTop: '20px' }}>
              {/* Icon nhà trỏ lên đầu trang portfolio (#top) */}
              <a href="#top" style={{ color: '#fff' }} title="Lên đầu trang"><Home size={22} /></a>
              <a href="mailto:harithmorgan123@gmail.com" style={{ color: '#fff' }}><Mail size={22} /></a>
              <a href="https://www.instagram.com/harith_morgan" style={{ color: '#fff' }}><Instagram size={22} /></a>
            </div>
        </div>
      </div>

      {/* CỘT PHẢI: NỘI DUNG */}
      <div style={contentStyle}>
        {/* Phần Labs */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={titleStyle}>Labs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px' }}>
             {/* Box mẫu cho Labs */}
             <div style={{ padding: '30px', border: '1px solid #f0f0f0', borderRadius: '4px', textAlign: 'center', color: '#ccc' }}>Logo Lab 1</div>
             <div style={{ padding: '30px', border: '1px solid #f0f0f0', borderRadius: '4px', textAlign: 'center', color: '#ccc' }}>Logo Lab 2</div>
          </div>
        </section>

        {/* Phần Projects */}
        <section>
          <h2 style={titleStyle}>Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {projects.map(p => (
              <Link to={`/portfolio/${p.slug}`} key={p.slug} style={{ textDecoration: 'none', color: 'inherit', group: 'true' }}>
                <div style={{ width: '100%', aspectRatio: '16/10', backgroundColor: '#f5f5f5', borderRadius: '8px', overflow: 'hidden', marginBottom: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <img 
                    src={p.thumbnail} 
                    alt={p.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    onError={(e) => { e.target.src = "https://via.placeholder.com/800x500?text=Project+Image"; }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', margin: 0 }}>{p.title}</h3>
                  <span style={{ fontSize: '14px', color: '#aaa' }}>{p.date || '2026'}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Đường kẻ ngang ngăn cách */}
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '60px 0' }} />

        {/* Phần Get In Touch */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '24px', color: '#333', fontWeight: '400', marginBottom: '25px' }}>
            Get In Touch
          </h2>
          
          <p style={{ color: '#666', fontSize: '15px', marginBottom: '30px', lineHeight: '1.6' }}>
            I'm still building my portfolio but if there's anything that catches your interest here please let me know.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Địa chỉ với icon nhà trang trí */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <Home size={20} color="#999" style={{ marginTop: '3px' }} />
              <div style={{ color: '#888', fontSize: '14px', lineHeight: '1.8' }}>
                1200 Happy<br />
                Hollow Road<br />
                West Lafayette,<br />
                IN 47906<br />
                United States
              </div>
            </div>

            {/* Số điện thoại */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '20px', display: 'flex', justifyContent: 'center' }}>
                <Phone size={20} color="#999" />
              </div>
              <span style={{ color: '#888', fontSize: '14px' }}>347-336-5953</span>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '20px', display: 'flex', justifyContent: 'center' }}>
                <Mail size={20} color="#999" />
              </div>
              <a href="mailto:harithmorgan123@gmail.com" style={{ color: '#888', fontSize: '14px', textDecoration: 'none', borderBottom: '1px dashed #ccc' }}>
                harithmorgan123@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};
const HarithProjectDetail = ({ projects }) => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <div style={{ padding: 40, fontFamily: 'sans-serif' }}>Project not found.</div>;

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', padding: '60px 5%', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <Link to="/portfolio" style={{ textDecoration: 'none', color: '#666', fontSize: '14px', borderBottom: '1px solid #ccc', paddingBottom: '2px' }}>
            ← Back to Portfolio
          </Link>
        </div>
        
        <h1 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '12px', letterSpacing: '-0.5px' }}>{project.title}</h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px', lineHeight: '1.5' }}>{project.description}</p>
        
        <div style={{ width: '100%', marginBottom: '40px', backgroundColor: '#f5f5f5' }}>
           <img src={project.thumbnail} style={{ width: '100%', height: 'auto', display: 'block' }} alt="Cover" />
        </div>

        <div className="markdown-content" style={{ fontSize: '16px', lineHeight: '1.8', color: '#222' }}> 
          <ReactMarkdown>{project.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
// --- APP COMPONENT ---

function App() {
  // Lấy đường dẫn hiện tại
  const location = useLocation();
  const isPortfolioPage = location.pathname.startsWith('/portfolio');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 768);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTag, setSelectedTag] = useState('All');

  const currentTheme = isDarkMode ? themes.dark : themes.light;
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => setIsMenuOpen(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Xử lý Bài viết Blog
  const posts = useMemo(() => {
    const loadedPosts = [];
    for (const path in mdModules) {
      const { attributes, body } = frontMatter(mdModules[path]);
      loadedPosts.push({ slug: path.split('/').pop().replace('.md', ''), ...attributes, body });
    }
    return loadedPosts;
  }, []);

  // Xử lý Dự án Portfolio (MỚI THÊM)
  const projects = useMemo(() => {
    const loadedProjects = [];
    for (const path in projectModules) {
      const { attributes, body } = frontMatter(projectModules[path]);
      loadedProjects.push({ slug: path.split('/').pop().replace('.md', ''), ...attributes, body });
    }
    return loadedProjects.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set(['All']);
    posts.forEach(post => post.tags?.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, [posts]);

  // 1. NẾU LÀ TRANG PORTFOLIO -> CHỈ HIỂN THỊ GIAO DIỆN TRẮNG TINH
// --- NẾU LÀ TRANG PORTFOLIO (TRẮNG TINH KHÔI) ---
  if (isPortfolioPage) {
    return (
      <Routes>
        <Route path="/portfolio" element={<HarithPortfolio projects={projects} />} />
        <Route path="/portfolio/:slug" element={<HarithProjectDetail projects={projects} />} />
      </Routes>
    );
  }

  // --- NẾU LÀ TRANG BLOG BÌNH THƯỜNG ---
 // --- NẾU LÀ TRANG BLOG BÌNH THƯỜNG ---
  return (
    // BẮT ĐẦU CÁI HỘP LỚN NHẤT GÓI TẤT CẢ LẠI
    <div style={{ background: currentTheme?.bg, height: '100vh', display: 'flex', flexDirection: 'column', color: currentTheme?.text }}>
      
      {/* 1. THANH HEADER: Đã nối lại đúng mạch điện */}
      <Header 
        onSearch={setSearchTerm} 
        searchTerm={searchTerm} 
        toggleMenu={() => setIsSidebarOpen(!isSidebarOpen)} 
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        allTags={allTags}
        onSelectTag={setSelectedTag}
      />

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        
        {/* 2. THANH SIDEBAR: Đã cấp đủ dữ liệu chủ đề */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          theme={currentTheme} 
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          allTags={allTags}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
        
        {/* 3. Phần nội dung chính (GIỮ NGUYÊN KHÔNG ĐỔI) */}
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={ <HomePage posts={posts} searchTerm={searchTerm} theme={currentTheme} selectedTag={selectedTag} /> } /> 
            <Route path="/post/:slug" element={<PostDetail posts={posts} theme={currentTheme} />} />
          </Routes>
        </main>
      </div>

    </div> 
  );
}

export default function Root() {
  return <BrowserRouter><App /></BrowserRouter>
}

