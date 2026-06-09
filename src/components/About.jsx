import React from 'react';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner about-grid">
        <div>
          <p className="section-label reveal">01 — About</p>
          <h2 className="section-title reveal">
            Building practical digital products with clean execution.
          </h2>

          <div className="stats reveal" aria-label="Portfolio statistics">
            <div className="stat">
              <strong>7</strong>
              <span>Repositories</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>Years Learning</span>
            </div>
            <div className="stat">
              <strong>4</strong>
              <span>Core Areas</span>
            </div>
          </div>
        </div>

        <div className="about-copy reveal">
          <p>
            I am <strong>Nethindu Chandula</strong>, an undergraduate student at the University of Kelaniya, Sri Lanka, pursuing a <strong>BSc Hons. in Information Technology</strong>. I am passionate about software engineering, with hands-on experience in full-stack application development, focusing on designing, building, and optimizing reliable software systems.
          </p>

          <br />

          <p>
            Currently, I am expanding my expertise in <strong>DevOps practices and cloud computing</strong>, with an interest in developing scalable, efficient, and resilient applications. I am highly motivated to continuously learn emerging technologies and stay aligned with industry trends to deliver innovative, user-centric solutions.
          </p>

          <br />

          <p>
            I am fluent in <strong>English and Sinhala</strong>, and I am open to internships, collaborations, and developer opportunities.
          </p>

          <h3 style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6d675e', marginTop: '3rem', marginBottom: '1.2rem' }}>Beyond Coding</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', fontSize: '0.95rem', lineHeight: '1.7', color: '#4f4a43' }}>
            <div>
              <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.72rem' }}>Extracurriculars</strong>
              <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'grid', gap: '0.5rem' }}>
                <li>• Vice President of the Student Association — ESOFT Metro Campus Matara</li>
                <li>• Member of the Photography Club — Rahula College Matara</li>
              </ul>
            </div>
            <div>
              <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.72rem' }}>Sports &amp; Athletics</strong>
              <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'grid', gap: '0.5rem' }}>
                <li>• Member of the University of Kelaniya Cricket Team</li>
                <li>• Rahula College Football Team (U17)</li>
                <li>• Rahula College Hockey Team (U16)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
