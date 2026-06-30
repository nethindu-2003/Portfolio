import React, { useEffect, useRef } from 'react';

export default function Projects() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    let projectTravel = 0;

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function initProjectScroll() {
      const outer = outerRef.current;
      const track = trackRef.current;
      const progressSpan = progressRef.current;

      if (!outer || !track) return;

      projectTravel = Math.max(0, track.scrollWidth - window.innerWidth);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        outer.style.height = "auto";
        track.style.transform = "translateX(0)";
        if (progressSpan) progressSpan.style.width = "0%";
        return;
      }

      if (projectTravel <= 0) {
        outer.style.height = "auto";
        track.style.transform = "translateX(0)";
        if (progressSpan) progressSpan.style.width = "0%";
        return;
      }

      outer.style.height = window.innerHeight + projectTravel + "px";
      updateProjectScroll();
    }

    function updateProjectScroll() {
      const outer = outerRef.current;
      const track = trackRef.current;
      const progressSpan = progressRef.current;
      const top = topRef.current;

      if (!outer || !track || projectTravel <= 0) return;

      const outerTop = outer.getBoundingClientRect().top + window.scrollY;
      const scrolled = clamp(window.scrollY - outerTop, 0, projectTravel);
      const progress = scrolled / projectTravel;

      track.style.transform = `translateX(${-scrolled}px)`;
      if (progressSpan) progressSpan.style.width = progress * 100 + "%";

      if (top) {
        const fade = clamp(1 - progress * 1.7, 0.25, 1);
        top.style.opacity = fade;
        top.style.transform = `translateY(${-progress * 18}px)`;
      }
    }

    window.addEventListener('scroll', updateProjectScroll, { passive: true });
    window.addEventListener('resize', initProjectScroll);

    // Initial setup on mount
    initProjectScroll();

    // Use ResizeObserver to dynamically update scroll margins as layouts load
    const resizeObserver = new ResizeObserver(() => {
      initProjectScroll();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener('scroll', updateProjectScroll);
      window.removeEventListener('resize', initProjectScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects__outer" id="projectsOuter" ref={outerRef}>
        <div className="projects__sticky">
          <div className="projects__top fade-scroll" id="projectsTop" ref={topRef}>
            <div>
              <p className="section-label">04 — Projects</p>
              <h2 className="projects__title">Selected GitHub work.</h2>
            </div>
            <p className="projects__hint">Scroll down to move sideways</p>
          </div>

          <div className="projects__viewport">
            <div className="projects__track" id="projectsTrack" ref={trackRef}>
              <a className="project-card" href="https://github.com/nethindu-2003/SkyLite.git" target="_blank"
                rel="noopener noreferrer">
                <div className="project-card__meta">
                  <span>01 / 07</span>
                  <span>Spring Boot &amp; React</span>
                </div>
                <div>
                  <h3>SKYLITE Movie Booking</h3>
                  <p>Developing a scalable, full-stack movie booking platform with Spring Boot microservices backend and a React/Tailwind frontend, featuring an AI assistant powered by Ollama.</p>
                </div>
                <div className="project-card__stack">
                  <span className="chip"><i className="devicon-react-original colored" aria-hidden="true"></i>React</span>
                  <span className="chip"><i className="devicon-tailwindcss-plain colored" aria-hidden="true"></i>Tailwind</span>
                  <span className="chip"><i className="devicon-spring-original colored" aria-hidden="true"></i>Spring Boot</span>
                  <span className="chip">Ollama AI</span>
                </div>
              </a>

              <a className="project-card" href="https://github.com/nethindu-2003/doctor-c-dental-system.git" target="_blank"
                rel="noopener noreferrer">
                <div className="project-card__meta">
                  <span>02 / 07</span>
                  <span>Java &amp; React</span>
                </div>
                <div>
                  <h3>Doctor C Clinic</h3>
                  <p>A full-stack dental clinic web application using React and Material UI frontend, Spring Boot backend, and MySQL database for patient and appointment management.</p>
                </div>
                <div className="project-card__stack">
                  <span className="chip"><i className="devicon-react-original colored" aria-hidden="true"></i>React</span>
                  <span className="chip"><i className="devicon-materialui-plain colored" aria-hidden="true"></i>Material UI</span>
                  <span className="chip"><i className="devicon-spring-original colored" aria-hidden="true"></i>Spring Boot</span>
                  <span className="chip"><i className="devicon-mysql-plain colored" aria-hidden="true"></i>MySQL</span>
                </div>
              </a>

              <a className="project-card" href="https://github.com/nethindu-2003/convolink-chat-app.git" target="_blank"
                rel="noopener noreferrer">
                <div className="project-card__meta">
                  <span>03 / 07</span>
                  <span>Node.js &amp; Docker</span>
                </div>
                <div>
                  <h3>Distributed Chat App</h3>
                  <p>A containerized chat system deployed with Docker. Features Redis for message synchronization and Nginx for load balancing in a fault-tolerant architecture.</p>
                </div>
                <div className="project-card__stack">
                  <span className="chip"><i className="devicon-nodejs-plain colored" aria-hidden="true"></i>Node.js</span>
                  <span className="chip"><i className="devicon-docker-plain colored" aria-hidden="true"></i>Docker</span>
                  <span className="chip"><i className="devicon-redis-plain colored" aria-hidden="true"></i>Redis</span>
                  <span className="chip"><i className="devicon-nginx-original colored" aria-hidden="true"></i>Nginx</span>
                </div>
              </a>

              <a className="project-card" href="https://github.com/nethindu-2003/FoundMe-backend.git" target="_blank"
                rel="noopener noreferrer">
                <div className="project-card__meta">
                  <span>04 / 07</span>
                  <span>MERN Stack</span>
                </div>
                <div>
                  <h3>FoundMe Portal</h3>
                  <p>A web-based Lost &amp; Found portal developed using the MERN stack (MongoDB, Express, React, Node.js) enabling users to report and track lost items.</p>
                </div>
                <div className="project-card__stack">
                  <span className="chip"><i className="devicon-mongodb-plain colored" aria-hidden="true"></i>MongoDB</span>
                  <span className="chip"><i className="devicon-express-original colored" aria-hidden="true"></i>Express</span>
                  <span className="chip"><i className="devicon-react-original colored" aria-hidden="true"></i>React</span>
                  <span className="chip"><i className="devicon-nodejs-plain colored" aria-hidden="true"></i>Node.js</span>
                </div>
              </a>

              <a className="project-card" href="https://github.com/nethindu-2003/Tour-Management-System-Java-MySQL.git" target="_blank"
                rel="noopener noreferrer">
                <div className="project-card__meta">
                  <span>05 / 07</span>
                  <span>Java OOP</span>
                </div>
                <div>
                  <h3>Safari Booking System</h3>
                  <p>A Java-based booking application applying OOP principles for efficient reservation and customer management, backed by a MySQL database.</p>
                </div>
                <div className="project-card__stack">
                  <span className="chip"><i className="devicon-java-plain colored" aria-hidden="true"></i>Java</span>
                  <span className="chip"><i className="devicon-vscode-plain colored" aria-hidden="true"></i>NetBeans</span>
                  <span className="chip"><i className="devicon-mysql-plain colored" aria-hidden="true"></i>MySQL</span>
                  <span className="chip">OOP</span>
                </div>
              </a>

              <a className="project-card" href="https://github.com/nethindu-2003/Student-Registration-System.git" target="_blank"
                rel="noopener noreferrer">
                <div className="project-card__meta">
                  <span>06 / 07</span>
                  <span>C# &amp; SQL</span>
                </div>
                <div>
                  <h3>Student Registration</h3>
                  <p>A C#-based registration system in Visual Studio with SQL database, streamlining student enrollment and data management as a diploma final project.</p>
                </div>
                <div className="project-card__stack">
                  <span className="chip"><i className="devicon-csharp-plain colored" aria-hidden="true"></i>C#</span>
                  <span className="chip"><i className="devicon-vscode-plain colored" aria-hidden="true"></i>Visual Studio</span>
                  <span className="chip"><i className="devicon-mysql-plain colored" aria-hidden="true"></i>SQL DB</span>
                </div>
              </a>

              <a className="project-card" href="https://github.com/nethindu-2003" target="_blank"
                rel="noopener noreferrer">
                <div className="project-card__meta">
                  <span>07 / 07</span>
                  <span>HTML &amp; CSS</span>
                </div>
                <div>
                  <h3>Phone Shop Website</h3>
                  <p>A responsive online phone shop website built for ESOFT Code Masters Hackathon. Won 1st place for design aesthetics and clean functionality.</p>
                </div>
                <div className="project-card__stack">
                  <span className="chip"><i className="devicon-html5-plain colored" aria-hidden="true"></i>HTML5</span>
                  <span className="chip"><i className="devicon-css3-plain colored" aria-hidden="true"></i>CSS3</span>
                  <span className="chip">Responsive</span>
                  <span className="chip">Hackathon 1st</span>
                </div>
              </a>
            </div>
          </div>

          <div className="projects__progress" aria-hidden="true">
            <span id="projectsProgress" ref={progressRef}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
