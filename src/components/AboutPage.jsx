import React from 'react';
import Stage4About from './Stage4About';
import Stage3Bio from './Stage3Bio';
import Stage6Capabilities from './Stage6Capabilities';

const AboutPage = ({ stage6Ref }) => {
  return (
    <div className="app-container wave-container" data-cloud-state="hero">
      <div className="hero-glow-mask" aria-hidden="true">
        <div className="hero-glow">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>
      </div>
      <main>
        <Stage4About />
        <Stage3Bio />
        <div ref={stage6Ref}>
          <Stage6Capabilities />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
