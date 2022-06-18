import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeProvider from './store/EmployeeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <EmployeeProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/detail/:id" element={<EmployeeDetail />} />
          <Route path="/employee/edit/:id" element={<EmployeeEdit />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}
