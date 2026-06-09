import React, { useEffect, useState } from 'react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["about", "skills", "projects", "education", "contact"]
      .map(id => document.getElementById(id))
      .filter(Boolean);

    function handleScroll() {
      // Toggle scrolled class
      setIsScrolled(window.scrollY > 24);

      // Track active section based on scroll offset
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 160) {
          current = section.id;
        }
      });
      setActiveSection(current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'is-scrolled' : ''}`} id="nav" aria-label="Main navigation">
        <a className="nav__brand" href="#hero" aria-label="Go to top" onClick={closeMenu}>
          NC <span className="nav__dot" aria-hidden="true"></span>
        </a>

        <div className="nav__links" id="navLinks">
          <a href="#about" data-section="about" className={activeSection === 'about' ? 'is-active' : ''}>About</a>
          <a href="#skills" data-section="skills" className={activeSection === 'skills' ? 'is-active' : ''}>Skills</a>
          <a href="#projects" data-section="projects" className={activeSection === 'projects' ? 'is-active' : ''}>Projects</a>
          <a href="#education" data-section="education" className={activeSection === 'education' ? 'is-active' : ''}>Education</a>
          <a href="#contact" data-section="contact" className={activeSection === 'contact' ? 'is-active' : ''}>Contact</a>
        </div>

        <div className="nav__status">
          <span className="status-dot" aria-hidden="true"></span>
          Open to opportunities
        </div>

        <button
          className={`burger ${isMenuOpen ? 'is-open' : ''}`}
          id="burger"
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobileMenu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        id="mobileMenu"
        aria-hidden={!isMenuOpen}
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
