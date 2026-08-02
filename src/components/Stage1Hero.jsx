import React from 'react';
import { applyGlyphInversion } from '../utils/textUtils';
import './Stage1Hero.css';

const Stage1Hero = ({ heroReveal = 0 }) => {
  return (
    <section className="stage-1-hero">
      <div className="hero-content">
        <h1 className={`hero-name${heroReveal > 0.01 ? ' hero-name--collapsed' : ''}`}>
          <span className="text-line">{applyGlyphInversion('HASSAAN')}</span>
        </h1>
        
      </div>
    </section>
  );
};

export default Stage1Hero;
