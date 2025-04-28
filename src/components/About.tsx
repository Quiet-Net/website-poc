import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Quiet Net</h2>
      <div className="about-content">
        <div className="creator-intro">
          <div className="creator-icon">👋</div>
          <h3>Hi, I'm Quiet</h3>
          <p className="creator-role">Creator of Quiet Net</p>
        </div>
        
        <div className="story">
          <p>
            I got inspired because there was a lot of noise around my house, so I thought I needed to do something about it. That's why I made Quiet Net.
          </p>
          <p>
            I was 11 years old when I made it. It was for my footprints in grade 5 green school.
          </p>
          <p className="closing">
            I hope you like this. Bye, have a great time. Bye bye.
          </p>
        </div>
      </div>
      <div className="technologies-section">
        <h2>Technologies in my project</h2>
        <div className="technologies-logos">
          <img src="/github-logo.png" alt="GitHub" height="60" />
          <img src="/google-logo.png" alt="Google" height="60" />
          <img src="/netlify-logo.png" alt="Netlify" height="60" />
          <img src="/cursor-logo.png" alt="Cursor" height="60" />
          <img src="/react-logo.png" alt="React" height="60" />
          <img src="/html-css-logo.png" alt="HTML & CSS" height="60" />
          <img src="/chat-gpt-logo.png" alt="ChatGPT" height="60" />
        </div>
      </div>
    </div>
  );
};

export default About; 