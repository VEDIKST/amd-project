import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-view">
        <header className="pricing-header">
          <button className="icon-btn back-btn white-btn">❮</button>
          <h2>Get Unlimited<br/>Access</h2>
        </header>

        <div className="pricing-tiers">
          <div className="tier-card lime-tier">
            <div className="tier-info">
              <small>Weekly</small>
              <h3>$2.99</h3>
            </div>
            <button className="btn-choose white-btn">Choose</button>
          </div>
          <div className="tier-card white-tier">
            <div className="tier-info">
              <small>Monthly</small>
              <h3>$7.99</h3>
            </div>
            <button className="btn-choose outline-btn">Choose</button>
          </div>
          <div className="tier-card dark-tier">
            <div className="tier-info">
              <small>Yearly</small>
              <h3>$49.99</h3>
              <span className="save-badge">Save 48%</span>
            </div>
            <div className="tier-btn-row">
              <button className="btn-choose lime-btn">Choose</button>
            </div>
            
            <ul className="feature-list">
              <li><span className="check lime-text">✓</span> Unlimited scans</li>
              <li><span className="check lime-text">✓</span> Pantry access and saved history</li>
              <li><span className="check lime-text">✓</span> Full Clean Score & flagged breakdown</li>
              <li><span className="check lime-text">✓</span> Personalized diet compatibility</li>
              <li><span className="check lime-text">✓</span> Unlimited label/ingredient questions</li>
              <li><span className="check lime-text">✓</span> Gamification features unlocked</li>
              <li><span className="check lime-text">✓</span> Priority support</li>
            </ul>
          </div>
        </div>
        
        <div className="trial-toggle">
          <span>Start 7-day free trial</span>
          <div className="toggle-switch active"></div>
        </div>

        <button className="btn-guest">Continue as Guest</button>
      </div>

      <div className="insight-preview hidden-mobile">
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1570197781417-0a5237720234?w=400&q=80" alt="Gelatelli Sorbet" className="product-img" />
          <div className="product-info-dark">
            <h3>Gelatelli Sorbet, Apple</h3>
            <p>Light and refreshing frozen dessert with natural apple flavor.</p>
          </div>
        </div>

        <div className="pie-chart-card">
          <svg viewBox="0 0 32 32" className="macros-pie">
            <circle r="16" cx="16" cy="16" className="pie-bg" />
            <circle r="16" cx="16" cy="16" className="pie-proteins" />
            <circle r="16" cx="16" cy="16" className="pie-carbs" />
            <circle r="16" cx="16" cy="16" className="pie-fats" />
          </svg>
          <div className="pie-overlay">Water & <br/>other</div>
          
          <div className="pie-labels">
            <span><div className="dot dot-lime"></div> Proteins</span>
            <span><div className="dot dot-yellow"></div> Carbs</span>
            <span><div className="dot dot-dark"></div> Fats</span>
            <span><div className="dot dot-white"></div> Water</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
