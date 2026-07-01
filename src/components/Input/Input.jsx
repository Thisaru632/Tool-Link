import React from 'react';
import './Input.css';

const Input = ({ 
  label, 
  error, 
  icon: Icon,
  className = '', 
  ...props 
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {Icon && <span className="input-icon"><Icon size={18} /></span>}
        <input 
          className={`input-field ${Icon ? 'has-icon' : ''} ${error ? 'has-error' : ''}`}
          {...props} 
        />
      </div>
      {error && <span className="input-error-msg">{error}</span>}
    </div>
  );
};

export default Input;
