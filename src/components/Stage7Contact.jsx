import React from 'react';
import { applySlashRule, applyGlyphInversion } from '../utils/textUtils';
import StructuralNode from './StructuralNode';
import './Stage7Contact.css';

const CONTACT_URL = import.meta.env.VITE_CONTACT_URL || '#';
const SOCIAL = {
  github: 'https://github.com/cookhassaanmughal',
  linkedin: 'https://www.linkedin.com/in/hassaan-mughal-605603249/',
};

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Stage7Contact = () => {
  return (
    <section className="stage-7-contact section-transition-contrast" id="contact">
      <div className="contact-tier safe-area">
        <span className="contact-end mono-label">[END]</span>
        <h2 className="contact-statement title-text">
          Have a project in mind?<br />
          Let&apos;s build something remarkable together.
        </h2>
        <a href={CONTACT_URL} className="contact-cta mono-label" target="_blank" rel="noopener noreferrer">
          LET&apos;S CHAT
        </a>
        <StructuralNode size={14} color="#fff" className="contact-node" />
      </div>

      <div className="social-tier">
        <span className="social-label mono-label">DOWNLOAD RESUME</span>
        <a href="/Muhammad_Hassaan_Mughal_Resume.pdf" className="social-link mono-label" target="_blank" rel="noopener noreferrer" aria-label="Resume">
          <img src="/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg" alt="Resume" className="social-icon" />
        </a>
        <span className="social-label mono-label">MORE ABOUT ME?</span>
        <div className="social-row">
          <a href={SOCIAL.github} className="social-link mono-label" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="/icons/github-logo.svg" alt="GitHub" className="social-icon" />
          </a>
          <a href={SOCIAL.linkedin} className="social-link mono-label" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:hassaanm980@gmail.com" className="social-link mono-label" aria-label="Email">
            <img src="/mail-svgrepo-com.svg" alt="Email" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-fluid">
        <div className="footer-three-point safe-area">
          <span className="footer-copy mono-label">
            ©2026 {applyGlyphInversion('HASSAAN')}
          </span>
          <nav className="footer-nav">
            <a href="#about" className="footer-nav-link mono-label">
              [ {applySlashRule('ABOUT ME')} ]
            </a>
            <a href="#projects" className="footer-nav-link mono-label">
              [ {applySlashRule('ALL PROJECTS')} ]
            </a>
            <a href={CONTACT_URL} className="footer-nav-link mono-label" target="_blank" rel="noopener noreferrer">
              [ LET&apos;S CONNECT ]
            </a>
          </nav>
          <button type="button" className="footer-top mono-label" onClick={scrollToTop}>
            BACK TO TOP
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stage7Contact;
