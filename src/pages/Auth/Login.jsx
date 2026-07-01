import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic based on email
    if (email.includes('admin')) {
      navigate('/admin/dashboard');
    } else if (email.includes('warehouse')) {
      navigate('/warehouse/dashboard');
    } else {
      navigate('/customer/dashboard');
    }
  };

  return (
    <div className="login-form-container animate-fade-in">
      <p className="login-subtitle">Sign in to your account</p>
      
      <form onSubmit={handleLogin}>
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="Enter your email" 
          icon={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter your password" 
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <div className="login-options">
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Remember me
          </label>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>
        
        <Button type="submit" variant="primary" fullWidth size="lg">
          Sign In
        </Button>
      </form>
      
      <div className="login-footer">
        <p>Don't have an account? <a href="#">Sign up here</a></p>
        <div className="demo-credentials">
          <small>Demo Credentials:</small>
          <small>Admin: admin@toollink.com / admin123</small>
        </div>
      </div>
    </div>
  );
};

export default Login;
