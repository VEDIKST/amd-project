import React from 'react';
import './Navigation.css';

const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: '🏠' },
    { id: 'meals', label: 'Meals', icon: '🥗' },
    { id: 'goals', label: 'Goals', icon: '🎯' },
    { id: 'pricing', label: 'Pro', icon: '✨' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand hidden-mobile">
        <h2>NutriSense</h2>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li 
            key={item.id} 
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="nav-profile hidden-mobile">
        <div className="avatar">JD</div>
        <div className="profile-info">
          <span className="name">John Doe</span>
          <span className="plan">Free Plan</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
