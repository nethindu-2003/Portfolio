import React from 'react';

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <p className="section-label reveal">02 — Work Experience</p>
        <h2 className="section-title reveal">Current professional experience.</h2>

        <div className="timeline reveal">
          <article className="timeline-item">
            <div>
              <h3>Software Engineer Intern</h3>
              <p>TechSoul Cloud (PVT) LTD</p>
              <p>
                Studying the Odoo platform and developing Odoo customizations for
                companies that want tailored business workflows.
              </p>
            </div>
            <time>June 15, 2026 — Present</time>
          </article>
        </div>
      </div>
    </section>
  );
}