function TechStack() {
  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Java",
    "Python",
  ];

  return (
    <section className="tech-stack">
      <div className="section-container">
        <p className="section-tag">TECH STACK</p>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className="tech-card" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;