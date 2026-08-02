import React, { useRef, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import IntroOverlay from './components/IntroOverlay';
import { useNavTheme } from './hooks/useNavTheme';
import './index.css';

function App() {
  const heroRef = useRef(null);
  const stage2Ref = useRef(null);
  const stage6Ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroReveal, setHeroReveal] = useState(0);
  const { mode, theme } = useNavTheme({ hero: heroRef, stage6: stage6Ref });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(nextProgress);

      const hero = heroRef.current;
      const stage2 = stage2Ref.current;
      if (!hero || !stage2) {
        setHeroReveal(0);
        return;
      }

      const heroRect = hero.getBoundingClientRect();
      const stage2Rect = stage2.getBoundingClientRect();
      const stage2Starts = stage2Rect.top <= window.innerHeight * 0.95;

      setHeroReveal(stage2Starts ? 1 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleNavigation = (path, hash) => {
    if (path) {
      navigate(path);
    }

    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const cloudState = scrollProgress < 0.3 ? 'hero' : scrollProgress < 0.7 ? 'canvas' : 'contact';

  return (
    <>
      <IntroOverlay />
      <Navigation
        navMode={mode}
        theme={theme}
        route="/"
        heroReveal={heroReveal}
        onNavigate={handleNavigation}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage heroRef={heroRef} stage2Ref={stage2Ref} stage6Ref={stage6Ref} cloudState={cloudState} heroReveal={heroReveal} />
          }
        />
        <Route
          path="/about"
          element={<AboutPage stage6Ref={stage6Ref} />}
        />
      </Routes>
    </>
  );
}

export default App;
