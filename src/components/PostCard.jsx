// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none', color: 'white' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', cursor: 'pointer' }}>
        {/* Thumbnail: Tỷ lệ 16:9, bo góc */}
        <div style={{ 
          width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', 
          background: '#333', position: 'relative' 
        }}>
          <img 
            src={post.thumbnail} 
            alt={post.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => e.target.src = 'https://placehold.co/600x400/222/white?text=No+Image'} 
          />
          {/* Thời lượng video giả lập */}
          <div style={{ 
            position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.8)', 
            padding: '2px 4px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' 
          }}>
            12:45
          </div>
        </div>

        {/* Thông tin bài viết */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {/* Avatar tác giả */}
          <div style={{ 
            width: '36px', height: '36px', borderRadius: '50%', background: '#555', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' 
          }}>
            {post.author ? post.author[0] : 'A'}
          </div>

          <div>
            <h3 style={{ 
              margin: 0, fontSize: '16px', fontWeight: 'bold', lineHeight: '1.4',
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
            }}>
              {post.title}
            </h3>
            <div style={{ fontSize: '14px', color: '#aaa', marginTop: '4px' }}>
              {post.author}
              <br/>
              {post.views || '0'} lượt xem • {post.date}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}