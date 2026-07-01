import React from 'react';
import { Users, Package, ShoppingCart, Truck, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import Card, { CardHeader, CardBody } from '../../components/Card/Card';
import './AdminDashboard.css';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, colorClass }) => (
  <Card hoverable className={`stat-card ${colorClass}`}>
    <CardBody className="stat-card-body">
      <div className="stat-icon-wrapper">
        <Icon size={24} />
      </div>
      <div className="stat-info">
        <h3 className="stat-value">{value}</h3>
        <p className="stat-title">{title}</p>
      </div>
      <div className={`stat-trend ${trend === 'up' ? 'trend-up' : 'trend-down'}`}>
        {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span>{trendValue}</span>
      </div>
    </CardBody>
  </Card>
);

const AdminDashboard = () => {
  return (
    <div className="dashboard-container animate-fade-in">
      {/* Stats Row */}
      <div className="stats-grid">
        <StatCard 
          title="Total Users" 
          value="23" 
          icon={Users} 
          trend="up" 
          trendValue="22 Active"
          colorClass="bg-blue"
        />
        <StatCard 
          title="Inventory Items" 
          value="28" 
          icon={Activity} 
          trend="down" 
          trendValue="6 Low Stock"
          colorClass="bg-green"
        />
        <StatCard 
          title="Total Orders" 
          value="36" 
          icon={ShoppingCart} 
          trend="up" 
          trendValue="6 Pending"
          colorClass="bg-orange"
        />
        <StatCard 
          title="Deliveries" 
          value="36" 
          icon={Truck} 
          trend="up" 
          trendValue="8 Delivered"
          colorClass="bg-purple"
        />
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-main-grid">
        {/* User Analytics (Mocked Chart Area) */}
        <Card className="chart-card">
          <CardHeader title="User Analytics" subtitle="Real-time user management" />
          <CardBody>
            <div className="mock-chart-container">
              <div className="chart-stats">
                <div className="chart-stat-item">
                  <span className="stat-label">Total Users</span>
                  <span className="stat-num text-blue">23</span>
                </div>
                <div className="chart-stat-item">
                  <span className="stat-label">Active</span>
                  <span className="stat-num text-green">22</span>
                </div>
                <div className="chart-stat-item">
                  <span className="stat-label">Pending</span>
                  <span className="stat-num text-orange">1</span>
                </div>
                <div className="chart-stat-item">
                  <span className="stat-label">Inactive</span>
                  <span className="stat-num text-red">1</span>
                </div>
              </div>
              
              <div className="role-distribution">
                <h4>Role Distribution</h4>
                <div className="role-icons">
                  <div className="role-icon bg-purple"><Users size={20} /></div>
                  <div className="role-icon bg-green"><Truck size={20} /></div>
                  <div className="role-icon bg-blue"><User size={20} /></div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Recent Activity */}
        <Card className="activity-card">
          <CardHeader title="Recent Activity" subtitle="Latest system events" />
          <CardBody>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon bg-green-light text-green">
                  <Activity size={16} />
                </div>
                <div className="activity-content">
                  <p className="activity-text"><strong>New customer registered:</strong> david@example.com</p>
                  <span className="activity-time">17h ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon bg-green-light text-green">
                  <Activity size={16} />
                </div>
                <div className="activity-content">
                  <p className="activity-text"><strong>New customer registered:</strong> john@example.com</p>
                  <span className="activity-time">17h ago</span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

// Dummy component for User icon in distribution
const User = ({size}) => <Users size={size} />;

export default AdminDashboard;
