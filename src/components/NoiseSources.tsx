import React from 'react';
import './NoiseSources.css';

const NoiseSources = () => {
  return (
    <div className="noise-sources">
      <h2>What Makes Noise Pollution?</h2>
      <p className="intro">
        There are many sources of noise pollution, but here are some of the main ones:
      </p>
      
      <div className="sources-grid">
        <div className="source-card traffic">
          <div className="source-icon">🚗</div>
          <h3>Traffic Noise</h3>
          <p className="source-description">
            Traffic noise accounts for most polluting noise in cities.
          </p>
          <div className="decibel-info">
            <div className="decibel-item">
              <span className="item-name">Car horn</span>
              <span className="decibel-value">90 dB</span>
            </div>
            <div className="decibel-item">
              <span className="item-name">Bus</span>
              <span className="decibel-value">100 dB</span>
            </div>
          </div>
        </div>

        <div className="source-card air-traffic">
          <div className="source-icon">✈️</div>
          <h3>Air Traffic Noise</h3>
          <p className="source-description">
            There are fewer aircraft flying over cities than there are cars on the roads, but the impact is greater.
          </p>
          <div className="decibel-info">
            <div className="decibel-item">
              <span className="item-name">Single aircraft</span>
              <span className="decibel-value">130 dB</span>
            </div>
          </div>
        </div>

        <div className="source-card construction">
          <div className="source-icon">🏗️</div>
          <h3>Construction Sites</h3>
          <p className="source-description">
            Building and car park construction and road and pavement resurfacing works are very noisy.
          </p>
          <div className="decibel-info">
            <div className="decibel-item">
              <span className="item-name">Pneumatic drill</span>
              <span className="decibel-value">110 dB</span>
            </div>
          </div>
        </div>

        <div className="source-card nightlife">
          <div className="source-icon">🍽️</div>
          <h3>Catering and Nightlife</h3>
          <p className="source-description">
            Bars, restaurants and terraces that spill outside when the weather is good can produce more than 100 dB. This includes noise from pubs and clubs.
          </p>
        </div>

        <div className="source-card animals">
          <div className="source-icon">🐕</div>
          <h3>Animals</h3>
          <p className="source-description">
            Noise made by animals can go unnoticed, but a howling or barking dog, for example, can produce around 60-80 dB.
          </p>
          <div className="decibel-info">
            <div className="decibel-item">
              <span className="item-name">Barking dog</span>
              <span className="decibel-value">60-80 dB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoiseSources; 