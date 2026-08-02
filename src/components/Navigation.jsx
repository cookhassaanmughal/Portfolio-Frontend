import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { applySlashRule, applyGlyphInversion } from '../utils/textUtils';
import './Navigation.css';

const NavLink = ({ href, label, onClick }) => (
  <Link
    to={href}
    className="nav-link"
    onClick={(event) => {
      if (onClick) {
        event.preventDefault();
        onClick();
      }
    }}
  >
    {applySlashRule(label)}
  </Link>
);

const Navigation = ({ navMode = 'spread', theme = 'dark', route = '/', heroReveal = 0, onNavigate = () => {} }) => {
  const location = useLocation();
  const isAbout = location.pathname === '/about';
  const isHome = route === '/';
  const isHeroCollapsed = isHome && heroReveal > 0.05;
  const handleNavigate = (path, hash) => () => onNavigate(path, hash);

  if (isAbout) {
    // Always use a dark semi-opaque background on the About page so that the
    // white nav-link text stays readable over every section (including the
    // light-background Stage3Bio rows). The scroll-driven `theme` from
    // useNavTheme is homepage-specific and stays 'dark' (transparent) here.
    return (
      <nav className="navigation navigation--about navigation--branded" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
        <div className="navigation__inner navigation__inner--branded about-nav-inner">
          <div className="nav-slot nav-slot--start about-nav-group">
            <NavLink href="/" label="HASSAAN" onClick={handleNavigate('/', '#hero')} />
          </div>
          <div className="nav-slot nav-slot--end about-nav-group">
            <NavLink href="/" label="PROJECTS" onClick={handleNavigate('/', '#projects')} />
            <NavLink href="/about" label="CONTACT" onClick={handleNavigate('/about', '#about-hero')} />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`navigation navigation--spread${isAbout ? ' navigation--about' : ''}${isHeroCollapsed ? ' navigation--hero-collapsed' : ''}`}>
      <div className="navigation__inner navigation__inner--spread">
        <div className="nav-slot nav-slot--start">
          <NavLink href="/about" label="ABOUT ME" onClick={handleNavigate('/about')} />
        </div>
        <div className="nav-slot nav-slot--center">
          <NavLink href="/" label="ALL PROJECTS" onClick={handleNavigate('/', '#projects')} />
        </div>
        <div className="nav-slot nav-slot--end">
          <NavLink href="/about" label="CONTACT" onClick={handleNavigate('/about', '#about-hero')} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
