import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    function updateHeroParallax() {
      const shift = Math.min(window.scrollY * 0.18, 140);
      document.documentElement.style.setProperty("--hero-shift", shift + "px");
    }

    window.addEventListener('scroll', updateHeroParallax, { passive: true });
    // Initial run on mount
    updateHeroParallax();

    return () => {
      window.removeEventListener('scroll', updateHeroParallax);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__grid" aria-hidden="true"></div>

      <div className="hero__inner">
        <p className="hero__kicker reveal">BSc Hons. in Information Technology (Undergraduate)</p>

        <h1 className="reveal">
          Nethindu
          <span>Chandula</span>
        </h1>

        <div className="hero__bottom reveal">
          <p className="hero__role">
            BSc Hons. in Information Technology student at the University of Kelaniya.
            Passionate about software engineering, full-stack application development,
            DevOps practices, and building scalable, efficient systems.
          </p>

          <p className="hero__availability">
            <span className="status-dot" aria-hidden="true"></span>
            Available
          </p>
        </div>
      </div>
    </section>
  );
}
