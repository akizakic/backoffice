import React, { useState } from 'react';
import '../styles/ProductRegistration.css'; // 별도의 스타일 파일을 생성해도 좋습니다

function ProductRegistration() {
  const [newProduct, setNewProduct] = useState({
    image: '',
    name: '',
    price: '',
    quantity: '',
    discount: '',
    autoScaling: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // 여기에 상품 등록 로직을 추가하거나, 서버로 데이터를 보낼 수 있습니다.
    alert("상품이 등록되었습니다!");
    // 폼 초기화
    setNewProduct({
      image: '',
      name: '',
      price: '',
      quantity: '',
      discount: '',
      autoScaling: false,
    });
  };

  return (
    <div className="product-registration-container">
      <h2>상품 등록</h2>
      <form className="product-form" onSubmit={handleAddProduct}>
        <label>
          상품 이미지 파일명:
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            placeholder="예: your-image.jpg"
            required
          />
        </label>
        <label>
          상품명:
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          가격:
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          수량:
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          할인율(%):
          <input
            type="number"
            name="discount"
            value={newProduct.discount}
            onChange={handleChange}
          />
        </label>
        <label>
          오토스케일링 여부:
          <input
            type="checkbox"
            name="autoScaling"
            checked={newProduct.autoScaling}
            onChange={handleChange}
          />
        </label>
        <button type="submit">상품 등록</button>
      </form>
    </div>
  );
}

export default ProductRegistration;
