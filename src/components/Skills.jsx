import React from 'react';

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <p className="section-label reveal">02 — Capabilities</p>
        <h2 className="section-title reveal">Core stack and technical focus.</h2>

        <div className="skills-grid reveal">
          <article className="skill-card">
            <span className="skill-card__num">01</span>
            <h3>Frontend</h3>
            <ul>
              <li><i className="devicon-html5-plain colored" aria-hidden="true"></i>HTML5 / CSS3</li>
              <li><i className="devicon-javascript-plain colored" aria-hidden="true"></i>JavaScript</li>
              <li><i className="devicon-react-original colored" aria-hidden="true"></i>React</li>
              <li><i className="devicon-tailwindcss-plain colored" aria-hidden="true"></i>Tailwind CSS</li>
              <li><i className="devicon-materialui-plain colored" aria-hidden="true"></i>Material UI</li>
            </ul>
          </article>

          <article className="skill-card">
            <span className="skill-card__num">02</span>
            <h3>Backend</h3>
            <ul>
              <li><i className="devicon-java-plain colored" aria-hidden="true"></i>Java</li>
              <li><i className="devicon-spring-original colored" aria-hidden="true"></i>Spring Boot</li>
              <li><i className="devicon-nodejs-plain colored" aria-hidden="true"></i>Node.js / Express</li>
              <li><i className="devicon-csharp-plain colored" aria-hidden="true"></i>C#</li>
              <li><i className="devicon-cplusplus-plain colored" aria-hidden="true"></i>C++</li>
            </ul>
          </article>

          <article className="skill-card">
            <span className="skill-card__num">03</span>
            <h3>Databases</h3>
            <ul>
              <li><i className="devicon-mysql-plain colored" aria-hidden="true"></i>MySQL</li>
              <li><i className="devicon-mongodb-plain colored" aria-hidden="true"></i>MongoDB</li>
              <li><i className="devicon-redis-plain colored" aria-hidden="true"></i>Redis</li>
            </ul>
          </article>

          <article className="skill-card">
            <span className="skill-card__num">04</span>
            <h3>DevOps &amp; Tools</h3>
            <ul>
              <li><i className="devicon-git-plain colored" aria-hidden="true"></i>Git / GitHub</li>
              <li><i className="devicon-docker-plain colored" aria-hidden="true"></i>Docker</li>
              <li><i className="devicon-nginx-original colored" aria-hidden="true"></i>Nginx</li>
              <li><i className="devicon-vscode-plain colored" aria-hidden="true"></i>VS Code</li>
            </ul>
          </article>

          <article className="skill-card">
            <span className="skill-card__num">05</span>
            <h3>Soft Skills</h3>
            <ul>
              <li><i className="devicon-chrome-plain colored" aria-hidden="true"></i>Leadership</li>
              <li><i className="devicon-figma-plain colored" aria-hidden="true"></i>Collaboration</li>
              <li><i className="devicon-css3-plain colored" aria-hidden="true"></i>Time Management</li>
              <li><i className="devicon-chrome-plain colored" aria-hidden="true"></i>Event Planning</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
