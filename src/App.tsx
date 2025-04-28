import React, { useState } from 'react';
import './App.css';
import HealthEffects from './components/HealthEffects';
import NoiseSources from './components/NoiseSources';
import About from './components/About';
import NoiseReduction from './components/NoiseReduction';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'health-effects':
        return <HealthEffects />;
      case 'noise-pollution':
        return <NoiseSources />;
      case 'about':
        return <About />;
      case 'noise-reduction':
        return <NoiseReduction />;
      default:
        return (
          <div className="welcome-container">
            <div className="logo-container">
              <svg className="main-logo" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="headphoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#61dafb', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#2a9fff', stopOpacity: 1}} />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#61dafb" floodOpacity="0.3"/>
                  </filter>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Headphones with 3D effect */}
                <path d="M120 40
                  C70 40, 40 80, 40 130
                  L40 160
                  C40 170, 50 180, 60 180
                  L70 180
                  L70 130
                  C70 90, 90 70, 120 70
                  C150 70, 170 90, 170 130
                  L170 180
                  L180 180
                  C190 180, 200 170, 200 160
                  L200 130
                  C200 80, 170 40, 120 40" 
                  fill="url(#headphoneGradient)"
                  filter="url(#glow)"
                  className="headphones"/>
                
                {/* Sound bars with 3D effect */}
                <g transform="translate(85, 100)" className="sound-bars">
                  <rect x="0" y="0" width="6" height="30" rx="2"/>
                  <rect x="12" y="5" width="6" height="20" rx="2"/>
                  <rect x="24" y="0" width="6" height="30" rx="2"/>
                  <rect x="36" y="10" width="6" height="10" rx="2"/>
                  <rect x="48" y="0" width="6" height="30" rx="2"/>
                  <rect x="60" y="5" width="6" height="20" rx="2"/>
                </g>
              </svg>
              <div className="logo-text">QUIET NET</div>
              <div className="logo-subtext">SINCE 2025</div>
            </div>
            <div className="decorative-line"></div>
            <h1 
              className={`welcome-text ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Welcome to Quiet net
            </h1>
            <p className="subtitle">Your peaceful corner of the internet</p>
            <div className="decorative-line"></div>
            <div className="button-container">
              <button className="action-button learn" onClick={() => setActiveSection('health-effects')}>
                Learn More
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderContent()}
      
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="menu-icon"></span>
        </button>
        <nav className="menu-content">
          <ul>
            <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')}>About</a></li>
            <li><a href="#noise-pollution" onClick={() => setActiveSection('noise-pollution')}>What Makes Noise Pollution</a></li>
            <li><a href="#health-effects" onClick={() => setActiveSection('health-effects')}>Why Is It Bad For You</a></li>
            <li><a href="#noise-reduction" onClick={() => setActiveSection('noise-reduction')}>How to Reduce Noise Pollution</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
