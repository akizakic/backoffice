import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProductRegistration from './components/ProductRegistration';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);  // 상품 목록 상태

  // 상품을 등록하는 함수
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  // 상품을 업데이트하는 함수
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  return (
    <Router basename="/user">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard products={products} updateProduct={updateProduct} />}  // Dashboard에 상품 목록과 업데이트 함수 전달
        />
        <Route 
          path="/register-product" 
          element={<ProductRegistration addProduct={addProduct} />}  // ProductRegistration에 등록 함수 전달
        />
      </Routes>
    </Router>
  );
}

export default App;
