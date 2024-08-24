import React, { useState } from 'react';
import '../styles/ProductRegistration.css';
import { useNavigate } from 'react-router-dom';

function ProductRegistration({ addProduct }) {  // addProduct 함수를 props로 받음
  const [newProduct, setNewProduct] = useState({
    name: '',
    imageUrl: '',
    price: '',
    brand: '',
    isBest: false,
    deliveryInfo: '',
    saleStatus: false,
    couponStatus: false,
    giftStatus: false,
    todayDreamStatus: false,
    stock: '',
    discountPrice: '',
    otherDiscount: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct(newProduct);  // 등록된 상품을 부모 컴포넌트(App.js)로 전달
    alert("상품이 등록되었습니다!");
    setNewProduct({
      name: '',
      imageUrl: '',
      price: '',
      brand: '',
      isBest: false,
      deliveryInfo: '',
      saleStatus: false,
      couponStatus: false,
      giftStatus: false,
      todayDreamStatus: false,
      stock: '',
      discountPrice: '',
      otherDiscount: false,
    });
    navigate('/dashboard');  // 상품 등록 후 대시보드로 이동
  };

  return (
    <div className="product-registration-container">
      <h2>상품 등록</h2>
      <form className="product-form" onSubmit={handleAddProduct}>
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
          상품 이미지 URL:
          <input
            type="text"
            name="imageUrl"
            value={newProduct.imageUrl}
            onChange={handleChange}
            placeholder="예: ../resources/images/your-image.jpg"
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
          브랜드:
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          베스트 상품 여부:
          <input
            type="checkbox"
            name="isBest"
            checked={newProduct.isBest}
            onChange={handleChange}
          />
        </label>
        <label>
          배송 정보:
          <input
            type="text"
            name="deliveryInfo"
            value={newProduct.deliveryInfo}
            onChange={handleChange}
          />
        </label>
        <label>
          세일 여부:
          <input
            type="checkbox"
            name="saleStatus"
            checked={newProduct.saleStatus}
            onChange={handleChange}
          />
        </label>
        <label>
          쿠폰 사용 가능 여부:
          <input
            type="checkbox"
            name="couponStatus"
            checked={newProduct.couponStatus}
            onChange={handleChange}
          />
        </label>
        <label>
          사은품 증정 여부:
          <input
            type="checkbox"
            name="giftStatus"
            checked={newProduct.giftStatus}
            onChange={handleChange}
          />
        </label>
        <label>
          오늘드림 여부:
          <input
            type="checkbox"
            name="todayDreamStatus"
            checked={newProduct.todayDreamStatus}
            onChange={handleChange}
          />
        </label>
        <label>
          재고 수량:
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          할인된 가격:
          <input
            type="number"
            name="discountPrice"
            value={newProduct.discountPrice}
            onChange={handleChange}
          />
        </label>
        <label>
          기타 할인 여부:
          <input
            type="checkbox"
            name="otherDiscount"
            checked={newProduct.otherDiscount}
            onChange={handleChange}
          />
        </label>
        <button type="submit">상품 등록</button>
      </form>
    </div>
  );
}

export default ProductRegistration;
