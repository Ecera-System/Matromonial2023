import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Profile from '../components/Profile';
import AdminDashboard from '../components/AdminDashboard';
import RequireAdmin from '../pages/RequireAdmin';



const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admindashboard" element={
        <RequireAdmin>
          < AdminDashboard />
        </RequireAdmin>
      } />



    </Routes>
  );
};

export default AppRoutes;
