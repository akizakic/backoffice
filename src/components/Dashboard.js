import React from 'react';
import '../styles/Dashboard.css';  // 스타일 파일을 임포트

function Dashboard() {
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
        <table className="product-table">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {/* 목록이 비어있음 */}
            <tr>
              <td colSpan="4" className="empty-row">상품이 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Dashboard;
