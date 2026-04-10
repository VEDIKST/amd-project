import React from 'react';
import { Heart, Plus, Clock, Flame } from 'lucide-react';
import './Meals.css';

const Meals = ({ onMealClick, onNotify }) => {
  const handleAdd = (e, mealName) => {
    e.stopPropagation(); // Don't navigate to detail
    onNotify(`${mealName} added to your plan!`);
  };

  return (
    <div className="meals-page">
      <div className="header-image-container">
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" alt="Traditional Meal" />
      </div>

      <div className="meals-content-wrapper">
        <div className="plan-header">
          <h2>Traditional</h2>
          <div className="calories-subtitle">
            <Heart size={16} color="var(--text-muted)" />
            <span>1,200 Daily Calories</span>
          </div>
        </div>

        <div className="day-header">
          <h3>Abs and obliques Day</h3>
          <span className="day-badge">Day 1</span>
        </div>

        <div className="meals-list">
          <div className="meal-card" onClick={() => onMealClick('avocado-toast')}>
            <img src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=200&auto=format&fit=crop" alt="Avocado Toast" className="meal-thumb" />
            <div className="meal-info">
              <h4>Avocado Toast</h4>
              <div className="meal-meta">
                <Clock size={12} /> <span>15 Min</span>
                <Flame size={12} style={{marginLeft: '8px'}}/> <span>317 Kcal</span>
              </div>
            </div>
            <button className="add-btn" onClick={(e) => handleAdd(e, "Avocado Toast")}><Plus size={20}/></button>
          </div>

          <div className="meal-card" onClick={() => onMealClick('salmon-veggies')}>
            <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=200&auto=format&fit=crop" alt="Salmon and Veggies" className="meal-thumb" />
            <div className="meal-info">
              <h4>Salmon and veggies</h4>
              <div className="meal-meta">
                <Clock size={12} /> <span>15 Min</span>
                <Flame size={12} style={{marginLeft: '8px'}}/> <span>317 Kcal</span>
              </div>
            </div>
            <button className="add-btn" onClick={(e) => handleAdd(e, "Salmon and Veggies")}><Plus size={20}/></button>
          </div>

          <div className="meal-card" onClick={() => onMealClick('apple-peanut-butter')}>
            <img src="https://images.unsplash.com/photo-1568158814711-b83987114411?q=80&w=200&auto=format&fit=crop" alt="Apple and peanut butter" className="meal-thumb" />
            <div className="meal-info">
              <h4>Apple and peanut butter</h4>
              <div className="meal-meta">
                <Clock size={12} /> <span>5 Min</span>
                <Flame size={12} style={{marginLeft: '8px'}}/> <span>120 Kcal</span>
              </div>
            </div>
            <button className="add-btn" onClick={(e) => handleAdd(e, "Apple and peanut butter")}><Plus size={20}/></button>
          </div>
        </div>
        
        {/* Padding for fixed bottom nav */}
        <div style={{ height: '120px' }}></div>
      </div>

      <div className="fixed-bottom-action">
        <button className="btn-primary-dark" onClick={() => onNotify("Full Meal Plan generated!")}>Get Meal Plan</button>
      </div>
    </div>
  );
};

export default Meals;
