import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutDashboard, Users, ShoppingCart, Package, Truck, Settings } from 'lucide-react';

import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Auth/Login';
import AdminDashboard from './pages/Admin/AdminDashboard';
import './App.css';

function App() {
  const adminMenuItems = [
    { label: 'Admin Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'User Management', path: '/admin/users', icon: Users },
    { label: 'Orders', path: '/admin/orders', icon: ShoppingCart },
    { label: 'Inventory', path: '/admin/inventory', icon: Package },
    { label: 'Deliveries', path: '/admin/deliveries', icon: Truck },
    { label: 'System Settings', path: '/admin/settings', icon: Settings }
  ];

  const warehouseMenuItems = [
    { label: 'Warehouse Dashboard', path: '/warehouse/dashboard', icon: LayoutDashboard },
    { label: 'Stock Alerts', path: '/warehouse/alerts', icon: Package },
    { label: 'Delivery Tasks', path: '/warehouse/tasks', icon: Truck }
  ];

  const customerMenuItems = [
    { label: 'Customer Dashboard', path: '/customer/dashboard', icon: LayoutDashboard },
    { label: 'Track Order', path: '/customer/track', icon: Truck }
  ];

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<MainLayout menuItems={adminMenuItems} role="Admin" />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<div>User Management Content</div>} />
          <Route path="orders" element={<div>Order Management Content</div>} />
          <Route path="inventory" element={<div>Inventory Management Content</div>} />
          <Route path="deliveries" element={<div>Deliveries Content</div>} />
          <Route path="settings" element={<div>System Settings Content</div>} />
        </Route>

        {/* Warehouse Routes */}
        <Route path="/warehouse" element={<MainLayout menuItems={warehouseMenuItems} role="Warehouse Manager" />}>
          <Route path="dashboard" element={<div>Warehouse Dashboard Content</div>} />
          <Route path="alerts" element={<div>Stock Alerts Content</div>} />
          <Route path="tasks" element={<div>Delivery Tasks Content</div>} />
        </Route>

        {/* Customer Routes */}
        <Route path="/customer" element={<MainLayout menuItems={customerMenuItems} role="Customer" />}>
          <Route path="dashboard" element={<div>Customer Dashboard Content</div>} />
          <Route path="track" element={<div>Track Order Content</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
