import React from 'react';
import { Outlet } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = () => {
  return (
    <div className="auth-layout dark-theme">
      <div className="auth-container">
        <div className="auth-header">
          <div className="logo-icon">T</div>
          <h2>ToolLink</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
