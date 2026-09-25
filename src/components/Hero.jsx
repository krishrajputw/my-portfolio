import { useEffect, useState } from "react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="hero">

      {/* Background Glow */}
      <div className="hero-bg-glow glow-one"></div>
      <div className="hero-bg-glow glow-two"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Krish
            <span>Rajput.</span>
          </h1>

          <h2>
            MERN Stack <strong>Developer</strong>
          </h2>

          <p className="hero-description">
            I build modern, scalable and user-focused full-stack web
            applications using React, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-btn primary"
            >
              View Projects
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="hero-btn secondary"
            >
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/krishrajputw"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/krishkshyp2003"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <span>
              Noida, India
            </span>

          </div>

        </div>


        {/* RIGHT AVATAR */}
        <div
          className="hero-visual avatar-visual"
          style={{
            transform: `
              perspective(1000px)
              rotateY(${mouse.x * 0.35}deg)
              rotateX(${-mouse.y * 0.35}deg)
            `,
          }}
        >

          <div className="avatar-glow"></div>


          {/* FLOATING ICONS */}
          <div className="hero-icons">

            <div className="hero-icon html-icon">
              <SiHtml5 />
            </div>

            <div className="hero-icon css-icon">
              <SiCss />
            </div>

            <div className="hero-icon js-icon">
              <SiJavascript />
            </div>

            <div className="hero-icon python-icon">
              <SiPython />
            </div>

            <div className="hero-icon react-icon">
              <SiReact />
            </div>

            <div className="hero-icon node-icon">
              <SiNodedotjs />
            </div>

            <div className="hero-icon mongo-icon">
              <SiMongodb />
            </div>

            <div className="hero-icon git-icon">
              <SiGit />
            </div>

            <div className="hero-icon github-icon">
              <SiGithub />
            </div>

          </div>


          {/* AVATAR */}
          <img
            src="/avatar.png"
            alt="Krish - MERN Stack Developer"
            className="hero-avatar"
          />

        </div>

      </div>


      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span></span>
        SCROLL TO EXPLORE
      </div>

    </section>
  );
}

export default Hero;