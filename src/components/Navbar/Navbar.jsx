import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ pageTitle = 'Dashboard', userName = 'User' }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1 className="page-title">{pageTitle}</h1>
      </div>
      
      <div className="navbar-right">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        
        <button className="nav-icon-btn position-relative">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <span className="user-name">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
