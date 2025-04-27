import React from 'react';
import './NoiseReduction.css';

const NoiseReduction = () => {
  return (
    <div className="noise-reduction">
      <h2>How to Reduce Noise Pollution</h2>
      
      <div className="overview-section">
        <p className="main-intro">
          Reducing noise pollution is an essential step in protecting public health and the environment.
          Here are key strategies that communities, governments, and individuals can implement:
        </p>
        
        <div className="strategy-cards">
          <div className="strategy-card">
            <h4>Traffic Management</h4>
            <p>Implementation of traffic calming measures, low-noise pavements, and strategic placement of noise barriers along busy roads to reduce urban noise levels.</p>
          </div>
          
          <div className="strategy-card">
            <h4>Machinery & Equipment Control</h4>
            <p>Using low-noise models, enclosing equipment in soundproof rooms, and utilizing noise-absorbing materials to minimize industrial and construction noise.</p>
          </div>
          
          <div className="strategy-card">
            <h4>Urban Planning</h4>
            <p>Strategic placement of residential areas away from noisy zones, proper building insulation, and creation of quiet zones through thoughtful city design.</p>
          </div>
          
          <div className="strategy-card">
            <h4>Noise Regulations</h4>
            <p>Establishment and enforcement of noise standards for various sources including construction sites, airports, and public events.</p>
          </div>
          
          <div className="strategy-card">
            <h4>Personal Responsibility</h4>
            <p>Individual actions like using headphones, avoiding loud gatherings, and choosing quieter equipment for personal use.</p>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      <p className="intro">
        Below are specific actions you can take in different settings to help reduce noise pollution:
      </p>

      <div className="solutions-grid">
        <div className="solution-card home">
          <div className="solution-icon">🏠</div>
          <h3>At Home</h3>
          <div className="tips-list">
            <div className="tip">
              <h4>Soundproofing</h4>
              <ul>
                <li>Install double-pane windows</li>
                <li>Use weather stripping around doors and windows</li>
                <li>Add heavy curtains or drapes</li>
                <li>Place bookshelves against walls</li>
              </ul>
            </div>
            <div className="tip">
              <h4>Quiet Equipment</h4>
              <ul>
                <li>Use quiet appliances</li>
                <li>Maintain equipment regularly</li>
                <li>Add rubber pads under appliances</li>
                <li>Replace old, noisy machines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="solution-card community">
          <div className="solution-icon">🏘️</div>
          <h3>In Your Community</h3>
          <div className="tips-list">
            <div className="tip">
              <h4>Noise Barriers</h4>
              <ul>
                <li>Plant trees and shrubs</li>
                <li>Support noise barrier installation</li>
                <li>Create green buffer zones</li>
                <li>Maintain existing barriers</li>
              </ul>
            </div>
            <div className="tip">
              <h4>Community Action</h4>
              <ul>
                <li>Report excessive noise</li>
                <li>Support noise ordinances</li>
                <li>Join community initiatives</li>
                <li>Educate neighbors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="solution-card transport">
          <div className="solution-icon">🚗</div>
          <h3>Transportation</h3>
          <div className="tips-list">
            <div className="tip">
              <h4>Vehicle Noise</h4>
              <ul>
                <li>Maintain your vehicle</li>
                <li>Use quiet tires</li>
                <li>Avoid unnecessary honking</li>
                <li>Drive at moderate speeds</li>
              </ul>
            </div>
            <div className="tip">
              <h4>Alternative Transport</h4>
              <ul>
                <li>Use public transportation</li>
                <li>Walk or cycle when possible</li>
                <li>Carpool to reduce traffic</li>
                <li>Support electric vehicles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="solution-card workplace">
          <div className="solution-icon">💼</div>
          <h3>At Work</h3>
          <div className="tips-list">
            <div className="tip">
              <h4>Office Environment</h4>
              <ul>
                <li>Use sound-absorbing materials</li>
                <li>Create quiet zones</li>
                <li>Install acoustic panels</li>
                <li>Organize quiet hours</li>
              </ul>
            </div>
            <div className="tip">
              <h4>Equipment Management</h4>
              <ul>
                <li>Use noise-reducing equipment</li>
                <li>Regular maintenance</li>
                <li>Proper insulation</li>
                <li>Time noisy activities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <h3>Take Action Today</h3>
        <p>
          Every small step towards reducing noise pollution counts. Start with simple changes 
          in your daily life and gradually implement more comprehensive solutions.
        </p>
      </div>
    </div>
  );
};

export default NoiseReduction; 