import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // 🌟 1. Thêm dòng này
import App from './App';
import './index.css'; // File css của bạn nếu có

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* 🌟 2. Bọc Router ở đây để toàn bộ App bên trong đều dùng được useLocation */}
      <App />
    </Router>
  </React.StrictMode>
);