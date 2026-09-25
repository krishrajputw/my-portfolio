function About() {
  return (
    <section id="about" className="about-section">

      {/* TOP */}
      <div className="about-top">
        <span className="about-label">ABOUT ME</span>
      </div>

      {/* HERO HEADING */}
      <div className="about-hero-text">
        <h2>
          THE PERSON
          <br />
          BEHIND THE
          <br />
          <span>CODE.</span>
        </h2>
      </div>

      {/* INTRO */}
      <div className="about-intro">
        <div className="about-line"></div>

        <p>
          I'm Krish Rajput, a CSE graduate who enjoys turning ideas into
          working products and creating solutions that are simple, useful,
          and meaningful. I like understanding how things work, breaking
          complex problems into smaller pieces, and continuously improving
          with every project I build.
          <br />
          <br />
          I consider myself a curious, adaptable, and problem-solving-oriented
          developer who enjoys learning new technologies and experimenting
          with different ideas. I value clear communication, teamwork,
          critical thinking, and taking ownership of the work I do.
        </p>
      </div>

      {/* WHAT DEFINES ME */}
      <div className="defines-section">

        <div className="defines-header">
          <span>WHAT DEFINES ME</span>
        </div>

        <div className="about-columns">

          <div className="about-column">
            <span className="column-number">01</span>

            <h3>WHO I AM</h3>

            <p>
              A curious developer who enjoys learning, experimenting,
              solving problems and building things from scratch.
            </p>
          </div>

          <div className="about-column">
            <span className="column-number">02</span>

            <h3>WHAT I BUILD</h3>

            <p>
              Real-world digital solutions that turn ideas into useful
              products and meaningful experiences.
            </p>
          </div>

          <div className="about-column">
            <span className="column-number">03</span>

            <h3>WHAT'S NEXT</h3>

            <p>
              Keep learning, experimenting and improving with every
              project and challenge I take on.
            </p>
          </div>

        </div>

      </div>

      {/* DEVELOPMENT JOURNEY */}
      <div className="journey-section">

        <div className="journey-header">
          <span>MY DEVELOPMENT JOURNEY</span>
        </div>

        <div className="journey">

          <div className="journey-progress"></div>

          <div className="journey-item">
            <div className="journey-dot"></div>

            <h3>LEARN</h3>

            <p>
              Programming
              <br />
              Web Development
              <br />
              Computer Science
            </p>
          </div>

          <div className="journey-item">
            <div className="journey-dot"></div>

            <h3>BUILD</h3>

            <p>
              Pooja Store
              <br />
              NextStep AI
              <br />
              Portfolio
            </p>
          </div>

          <div className="journey-item">
            <div className="journey-dot"></div>

            <h3>IMPROVE</h3>

            <p>
              DSA
              <br />
              React
              <br />
              Backend
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;