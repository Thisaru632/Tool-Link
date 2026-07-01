import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = ({ menuItems, role }) => {
  const location = useLocation();
  
  // Find current page title based on active route
  const currentItem = menuItems.find(item => item.path === location.pathname);
  const pageTitle = currentItem ? currentItem.label : 'Dashboard';

  return (
    <div className="app-container dark-theme">
      <Sidebar menuItems={menuItems} role={role} />
      <div className="main-content">
        <Navbar pageTitle={pageTitle} userName="Demo User" />
        <main className="page-container">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
