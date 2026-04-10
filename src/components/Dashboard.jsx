import React, { useState, useEffect } from 'react';
import { ChevronLeft, CalendarDays, Flame, Plus } from 'lucide-react';
import './Dashboard.css';

const Dashboard = ({ onNotify }) => {
  // State for interactivity
  const [carbs, setCarbs] = useState(140);
  const [fat, setFat] = useState(90);
  const [protein, setProtein] = useState(200);

  // Dynamic Calorie Calculation
  // Approx: 1g Carbs = 4kcal, 1g Protein = 4kcal, 1g Fat = 9kcal
  const caloriesConsumed = (carbs * 4) + (protein * 4) + (fat * 9);
  const caloriesTotal = 2340;
  
  const percentage = Math.min((caloriesConsumed / caloriesTotal) * 100, 100);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const handleAddMeal = (meal) => {
    onNotify(`${meal} added to your daily log!`);
  };

  return (
    <div className="dashboard-page">
      <header className="top-header">
        <button className="header-btn no-bg" onClick={() => onNotify("Menu opened")}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="header-title">Calorie Tracker</h1>
        <button className="header-btn" onClick={() => onNotify("Calendar opened")}>
          <CalendarDays size={20} />
        </button>
      </header>

      <div className="tracker-card">
        <div className="tracker-header">
          <h2>Tracker</h2>
          <button className="edit-btn" onClick={() => onNotify("Goal editor opened")}>Edit</button>
        </div>

        <div className="circular-progress-container">
          <svg className="progress-ring" viewBox="0 0 220 220">
            {/* Background ring */}
            <circle
              cx="110"
              cy="110"
              r={radius}
              fill="transparent"
              stroke="#F3F4F6"
              strokeWidth="16"
            />
            {/* Inner hint ring */}
            <circle
              cx="110"
              cy="110"
              r={radius - 20}
              fill="transparent"
              stroke="var(--macro-green)"
              strokeWidth="16"
              strokeOpacity="0.2"
              strokeDasharray="20 10"
            />
            {/* Progress ring */}
            <circle
              cx="110"
              cy="110"
              r={radius}
              fill="transparent"
              stroke="var(--macro-purple)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 110 110)"
              className="animatable"
            />
          </svg>
          <div className="progress-content">
            <div className="flame-icon">
              <Flame fill="white" size={20} />
            </div>
            <p className="total-cal">Of {caloriesTotal.toLocaleString()} Kcal</p>
            <h2 className="consumed-cal">{caloriesConsumed.toLocaleString()}</h2>
          </div>
        </div>
      </div>

      <div className="macros-scroll-container">
        <div className="macro-card bg-green">
          <div className="macro-card-header">
            <span className="icon">🥑</span>
            <span>Carbs</span>
          </div>
          <div className="slider-area">
            <input 
              type="range" 
              min="0" max="285" 
              value={carbs} 
              onChange={(e) => setCarbs(parseInt(e.target.value))}
              className="styled-slider slide-green" 
            />
            <div className="slider-labels">
              <span>0</span>
              <span>285 g</span>
            </div>
          </div>
        </div>

        <div className="macro-card bg-blue">
          <div className="macro-card-header">
            <span className="icon">💧</span>
            <span>Fat</span>
          </div>
          <div className="slider-area">
            <input 
              type="range" 
              min="0" max="150" 
              value={fat} 
              onChange={(e) => setFat(parseInt(e.target.value))}
              className="styled-slider slide-blue" 
            />
            <div className="slider-labels">
              <span>0</span>
              <span>150 g</span>
            </div>
          </div>
        </div>

        <div className="macro-card bg-orange">
          <div className="macro-card-header">
            <span className="icon">🥩</span>
            <span>Protein</span>
          </div>
          <div className="slider-area">
            <input 
              type="range" 
              min="0" max="285" 
              value={protein} 
              onChange={(e) => setProtein(parseInt(e.target.value))}
              className="styled-slider slide-orange" 
            />
            <div className="slider-labels">
              <span>0</span>
              <span>285 g</span>
            </div>
          </div>
        </div>
      </div>

      <div className="daily-meals-section">
        <h3>Daily meals</h3>
        <div className="meal-list">
          <div className="meal-row">
            <div className="meal-icon-box bg-orange-light">
              <span>🍳</span>
            </div>
            <div className="meal-info">
              <h4>Breakfast</h4>
              <p>Breakfast fuels your body and day</p>
            </div>
            <button className="add-btn" onClick={() => handleAddMeal("Breakfast")}><Plus size={20} /></button>
          </div>

          <div className="meal-row">
            <div className="meal-icon-box bg-red-light">
              <span>🍕</span>
            </div>
            <div className="meal-info">
              <h4>Lunch</h4>
              <p>Lunch fuels your goals</p>
            </div>
            <button className="add-btn" onClick={() => handleAddMeal("Lunch")}><Plus size={20} /></button>
          </div>

          <div className="meal-row">
            <div className="meal-icon-box bg-green-light">
              <span>🥗</span>
            </div>
            <div className="meal-info">
              <h4>Dinner</h4>
              <p>Dinner supports recovery and rest</p>
            </div>
            <button className="add-btn" onClick={() => handleAddMeal("Dinner")}><Plus size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
