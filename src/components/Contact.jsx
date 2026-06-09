import React from 'react';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__inner contact-grid">
        <div>
          <p className="section-label reveal">05 — Contact</p>

          <h2 className="contact-title reveal">
            Let’s build something useful.
          </h2>

          <p className="contact-copy reveal">
            I am open to internships, collaborations, and software engineering
            opportunities. Reach out through email, LinkedIn, or GitHub.
          </p>

          <div className="contact-links reveal">
            <a href="mailto:nethindu359@gmail.com">
              <span className="contact-main">
                <i className="devicon-google-plain colored" aria-hidden="true"></i>
                <strong>nethindu359@gmail.com</strong>
              </span>
              <span>Email</span>
            </a>

            <a href="tel:+94717135852">
              <span className="contact-main">
                <i className="devicon-android-plain colored" aria-hidden="true"></i>
                <strong>+94 71 713 5852</strong>
              </span>
              <span>Phone</span>
            </a>

            <a href="https://github.com/nethindu-2003" target="_blank" rel="noopener noreferrer">
              <span className="contact-main">
                <i className="devicon-github-original colored" aria-hidden="true"></i>
                <strong>github.com/nethindu-2003</strong>
              </span>
              <span>GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/nethindu-chandula-50020a337" target="_blank" rel="noopener noreferrer">
              <span className="contact-main">
                <i className="devicon-linkedin-plain colored" aria-hidden="true"></i>
                <strong>linkedin.com/in/nethindu-chandula-50020a337</strong>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <aside className="info-list reveal" aria-label="Personal information">
          <div className="info-item">
            <small>Location</small>
            <strong>Colombo, Sri Lanka</strong>
          </div>

          <div className="info-item">
            <small>Languages</small>
            <strong>English · Sinhala</strong>
          </div>

          <div className="info-item">
            <small>Status</small>
            <strong>Open to opportunities</strong>
          </div>

          <div className="info-item">
            <small>Focus</small>
            <strong>Full-Stack · DevOps &amp; Cloud · Scalable Systems</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
