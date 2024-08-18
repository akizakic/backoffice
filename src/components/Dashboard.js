import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleProductRegistration = () => {
    navigate('/register-product');
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2>상품관리</h2>
        <ul>
          <li>상품목록</li>
          <li>카테고리</li>
          <li>주문관리</li>
          <li>회원관리</li>
        </ul>
      </aside>
      <main className="dashboard-content">
        <h2>상품 목록</h2>
        <button onClick={handleProductRegistration}>상품 등록하기</button>
        <table className="product-table">
          <thead>
            <tr>
              <th>이미지</th>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>할인율</th>
              <th>오토스케일링 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="empty-row">상품이 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Dashboard;
