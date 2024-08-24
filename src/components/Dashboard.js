import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard({ products, updateProduct }) {  // updateProduct 함수를 props로 받음
  const navigate = useNavigate();
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingProduct, setEditingProduct] = useState({});

  const handleProductRegistration = () => {
    navigate('/register-product');
  };

  const handleEditClick = (product) => {
    setEditingProductId(product.id);
    setEditingProduct({ ...product });
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
  };

  const handleSaveEdit = () => {
    updateProduct(editingProduct);
    setEditingProductId(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingProduct({
      ...editingProduct,
      [name]: type === 'checkbox' ? checked : value,
    });
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
              <th>브랜드</th>
              <th>베스트</th>
              <th>배송 정보</th>
              <th>세일 여부</th>
              <th>쿠폰 사용</th>
              <th>사은품</th>
              <th>오늘드림</th>
              <th>재고</th>
              <th>할인 가격</th>
              <th>기타 할인</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  {editingProductId === product.id ? (
                    <>
                      <td>
                        <input 
                          type="text"
                          name="imageUrl"
                          value={editingProduct.imageUrl}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text"
                          name="name"
                          value={editingProduct.name}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number"
                          name="price"
                          value={editingProduct.price}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text"
                          name="brand"
                          value={editingProduct.brand}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="checkbox"
                          name="isBest"
                          checked={editingProduct.isBest}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text"
                          name="deliveryInfo"
                          value={editingProduct.deliveryInfo}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="checkbox"
                          name="saleStatus"
                          checked={editingProduct.saleStatus}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="checkbox"
                          name="couponStatus"
                          checked={editingProduct.couponStatus}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="checkbox"
                          name="giftStatus"
                          checked={editingProduct.giftStatus}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="checkbox"
                          name="todayDreamStatus"
                          checked={editingProduct.todayDreamStatus}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number"
                          name="stock"
                          value={editingProduct.stock}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number"
                          name="discountPrice"
                          value={editingProduct.discountPrice}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="checkbox"
                          name="otherDiscount"
                          checked={editingProduct.otherDiscount}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <button onClick={handleSaveEdit}>저장</button>
                        <button onClick={handleCancelEdit}>취소</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>
                        <img src={product.imageUrl} alt={product.name} width="50" />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.brand}</td>
                      <td>{product.isBest ? '예' : '아니오'}</td>
                      <td>{product.deliveryInfo}</td>
                      <td>{product.saleStatus ? '예' : '아니오'}</td>
                      <td>{product.couponStatus ? '예' : '아니오'}</td>
                      <td>{product.giftStatus ? '예' : '아니오'}</td>
                      <td>{product.todayDreamStatus ? '예' : '아니오'}</td>
                      <td>{product.stock}</td>
                      <td>{product.discountPrice}</td>
                      <td>{product.otherDiscount ? '예' : '아니오'}</td>
                      <td>
                        <button onClick={() => handleEditClick(product)}>편집</button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14" className="empty-row">상품이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Dashboard;
