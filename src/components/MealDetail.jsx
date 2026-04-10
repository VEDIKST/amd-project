import React from 'react';
import { ChevronLeft, Heart, Clock, Flame } from 'lucide-react';
import './MealDetail.css';

const MealDetail = ({ meal, onBack, onNotify }) => {
  return (
    <div className="meal-detail-page">
      <div className="detail-header-image">
        <img src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=800&auto=format&fit=crop" alt="Avocado Toast" />
        <div className="header-overlay">
          <button className="header-btn no-bg white-icon" onClick={onBack}>
            <ChevronLeft size={24} />
          </button>
          <button className="header-btn no-bg white-icon" onClick={() => onNotify("Added to Favorites!")}>
            <Heart size={24} />
          </button>
        </div>
      </div>

      <div className="detail-content-wrapper">
        <div className="macro-pills">
          <div className="macro-pill purple">
            <div className="pill-circle"></div>
            <div className="pill-info">
              <span className="pill-label">Kcal</span>
              <span className="pill-value">317</span>
            </div>
          </div>
          <div className="macro-pill green">
            <div className="pill-circle"></div>
            <div className="pill-info">
              <span className="pill-label">Protein</span>
              <span className="pill-value">12g</span>
            </div>
          </div>
          <div className="macro-pill blue">
            <div className="pill-circle"></div>
            <div className="pill-info">
              <span className="pill-label">Fat</span>
              <span className="pill-value">18g</span>
            </div>
          </div>
          <div className="macro-pill orange">
            <div className="pill-circle"></div>
            <div className="pill-info">
              <span className="pill-label">Carbs</span>
              <span className="pill-value">27g</span>
            </div>
          </div>
        </div>

        <div className="detail-title-section">
          <h2>Avocado Toast</h2>
          <div className="detail-stats">
            <div className="stat-item"><Flame size={14} color="#EF4444" /> 97 Kcal</div>
            <div className="stat-item"><Clock size={14} color="var(--text-muted)" /> 10 Min</div>
          </div>
        </div>

        <div className="tags-row">
          <span className="tag">Lactose free</span>
          <span className="tag">Dairy free</span>
          <span className="tag">Quick & Easy</span>
        </div>

        <div className="ingredients-section">
          <h3>Ingredients</h3>
          <div className="ingredient-list">
            <div className="ingredient-item">
              <span className="ing-name">Whole - wheat bread</span>
              <span className="ing-qty">1 slice</span>
            </div>
            <div className="ingredient-item">
              <span className="ing-name">Avocado</span>
              <span className="ing-qty">0.5 whole</span>
            </div>
          </div>
        </div>
        
        {/* Safe area for button */}
        <div style={{ height: '80px' }}></div>
      </div>

      <div className="fixed-bottom-action">
        <button className="btn-primary-dark" onClick={() => onNotify("Meal Plan Activated!")}>Get Meal Plan</button>
      </div>
    </div>
  );
};

export default MealDetail;
