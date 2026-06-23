import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function PostDetail({ posts }) {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]); // Cuộn lên đầu khi chuyển bài

  if (!post) return <div style={{ color: 'white', padding: 20 }}>Không tìm thấy bài viết!</div>;

  return (
    <div style={{ display: 'flex', gap: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* CỘT TRÁI: Nội dung chính (Giả lập Video Player) */}
      <div style={{ flex: 1 }}>
        {/* Khung giả lập Player */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: 'black', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
           <img src={post.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{post.title}</h1>

        {/* Info bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid #333' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'purple', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{post.author[0]}</div>
              <div>
                <div style={{ fontWeight: 'bold' }}>{post.author}</div>
                <div style={{ fontSize: '12px', color: '#aaa' }}>1.2N người đăng ký</div>
              </div>
              <button style={{ background: 'white', color: 'black', border: 'none', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', marginLeft: '20px' }}>Đăng ký</button>
           </div>
        </div>

        {/* Nội dung Markdown */}
        <div style={{ background: '#222', padding: '20px', borderRadius: '12px', marginTop: '16px', lineHeight: '1.6', fontSize: '15px' }}>
           <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </div>

      {/* CỘT PHẢI: List bài liên quan (Sidebar phải) */}
      <div style={{ width: '350px', display: 'none' }} className="lg-show">
        {posts.filter(p => p.slug !== slug).map(p => (
           <a key={p.slug} href={`/post/${p.slug}`} style={{ display: 'flex', gap: '8px', marginBottom: '12px', textDecoration: 'none', color: 'white' }}>
              <img src={p.thumbnail} style={{ width: '168px', height: '94px', borderRadius: '8px', objectFit: 'cover' }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '4px' }}>{p.title}</div>
                <div style={{ fontSize: '12px', color: '#aaa' }}>{p.author}</div>
              </div>
           </a>
        ))}
      </div>

       {/* Hack CSS nhỏ để hiện cột phải trên màn to */}
       <style>{`@media (min-width: 1024px) { .lg-show { display: block !important; } }`}</style>
    </div>
  );
}