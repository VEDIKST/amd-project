import React, { useState, useEffect } from 'react';
import { Home, Flame, Utensils, Timer, Grid2x2, X } from 'lucide-react';
import './App.css';

import Dashboard from './components/Dashboard';
import Meals from './components/Meals';
import MealDetail from './components/MealDetail';

// Themed Placeholders
const Placeholder = ({ title, icon: Icon }) => (
  <div className="placeholder-screen">
    <Icon size={80} strokeWidth={1} className="placeholder-icon" />
    <h2>{title}</h2>
    <p>We're building something exciting for your health journey. Stay tuned!</p>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentMeal, setCurrentMeal] = useState(null);
  const [notification, setNotification] = useState(null);

  // Global notification helper
  const notify = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const navigateToMeal = (mealId) => {
    setActiveTab('mealDetail');
    setCurrentMeal(mealId);
  };

  const handleBack = () => {
    setActiveTab('meals');
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard onNotify={notify} />;
      case 'meals': return <Meals onMealClick={navigateToMeal} onNotify={notify} />;
      case 'mealDetail': return <MealDetail meal={currentMeal} onBack={handleBack} onNotify={notify} />;
      case 'explore': return <Placeholder title="Explore" icon={Grid2x2} />;
      case 'timer': return <Placeholder title="Workout Timer" icon={Timer} />;
      case 'home': return <Placeholder title="Home Feed" icon={Home} />;
      default: return <Dashboard onNotify={notify} />;
    }
  };

  return (
    <div className="app-container">
      <div className="mobile-mockup">
        <main className="content-area">
          {renderContent()}
        </main>
        
        {/* Global Toast Notification */}
        {notification && (
          <div className="toast-notification">
            <span>{notification}</span>
            <button onClick={() => setNotification(null)} className="toast-close">
              <X size={14} />
            </button>
          </div>
        )}

        {/* Bottom Nav exists on standard tabs only */}
        {(activeTab !== 'mealDetail') && (
          <nav className="bottom-nav">
            <button className={`nav-item ${activeTab === 'explore' ? 'active' : ''}`} onClick={() => setActiveTab('explore')}>
              <Grid2x2 size={24} strokeWidth={1.5} />
            </button>
            <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
              <Flame size={24} strokeWidth={1.5} />
            </button>
            <button className={`nav-item ${activeTab === 'meals' ? 'active' : ''}`} onClick={() => setActiveTab('meals')}>
              <Utensils size={24} strokeWidth={1.5} />
            </button>
            <button className={`nav-item ${activeTab === 'timer' ? 'active' : ''}`} onClick={() => setActiveTab('timer')}>
              <Timer size={24} strokeWidth={1.5} />
            </button>
            <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
              <Home size={24} strokeWidth={1.5} />
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}

export default App;
