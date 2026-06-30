import React from 'react';

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="section__inner">
        <p className="section-label reveal">05 — Education</p>
        <h2 className="section-title reveal">Academic path.</h2>

        <div className="timeline reveal">
          <article className="timeline-item">
            <div>
              <h3>BSc Hons. in Information Technology</h3>
              <p>University of Kelaniya, Sri Lanka</p>
            </div>
            <time>2024 — Present</time>
          </article>

          <article className="timeline-item">
            <div>
              <h3>Diploma in Information Technology</h3>
              <p>ESOFT Metro Campus — Matara</p>
            </div>
            <time>2023 — 2024</time>
          </article>

          <article className="timeline-item">
            <div>
              <h3>G.C.E. Advanced Level (Maths)</h3>
              <p>Rahula College — Matara</p>
            </div>
            <time>2022 — 2023</time>
          </article>
        </div>
      </div>
    </section>
  );
}
