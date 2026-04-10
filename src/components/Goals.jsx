import React, { useState } from 'react';
import './Goals.css';

const Goals = () => {
  const [calorieGoal, setCalorieGoal] = useState(2500);

  return (
    <div className="goals-view">
      <header className="goals-header">
        <button className="icon-btn back-btn">❮</button>
        <h2>Calorie Goal</h2>
        <button className="icon-btn">⚙️</button>
      </header>

      <div className="goal-display">
        <div className="flame-icon">🔥</div>
        <h1>{calorieGoal}</h1>
        <p>Kilo calories</p>
      </div>

      <div className="slider-container">
        <input 
          type="range" 
          min="1500" 
          max="4000" 
          step="50"
          value={calorieGoal} 
          onChange={(e) => setCalorieGoal(e.target.value)}
          className="calorie-slider"
        />
      </div>

      <div className="macro-targets">
        <div className="macro-card">
          <h3>140g</h3>
          <p>Protein</p>
          <div className="dot dot-lime"></div>
        </div>
        <div className="macro-card">
          <h3>60g</h3>
          <p>Carbs</p>
          <div className="dot dot-white"></div>
        </div>
        <div className="macro-card">
          <h3>8g</h3>
          <p>Nutrients</p>
          <div className="dot dot-dark"></div>
        </div>
      </div>

      <div className="track-status">
        <span className="check-icon">✓</span> You are on track! 🎯
      </div>

      <button className="btn-set-goal">Set Calorie Goals</button>
    </div>
  );
};

export default Goals;
