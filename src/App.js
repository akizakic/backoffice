import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';  // Dashboard 컴포넌트 추가
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard 경로 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
