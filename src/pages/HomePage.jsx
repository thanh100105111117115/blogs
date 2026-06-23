import React from 'react';
import PostCard from '../components/PostCard';

export default function HomePage({ posts }) {
  return (
    <div>
      {/* Filter Tags (Giống YouTube trên cùng) */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '10px' }}>
        {['Tất cả', 'Lập trình', 'ReactJS', 'Cuộc sống', 'Âm nhạc'].map((tag, idx) => (
          <button key={idx} style={{ 
            background: idx === 0 ? 'white' : '#272727', 
            color: idx === 0 ? 'black' : 'white',
            border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', whiteSpace: 'nowrap'
          }}>
            {tag}
          </button>
        ))}
      </div>

      {/* Grid Layout: Tự động chia cột */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Mỗi ô tối thiểu 300px
        gap: '40px 16px' 
      }}>
        {posts.map(post => <PostCard key={post.slug} post={post} />)}
      </div>
    </div>
  );
}