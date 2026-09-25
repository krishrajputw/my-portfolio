function Projects() {
  const projects = [
    {
      no: "01",
      title: "Pooja Store",
      subtitle: "Real Wholesale Business E-Commerce Platform",
      stack: "React • Node • Express • MongoDB",
      link: "https://github.com/krishrajputw/pooja-store",
    },
    {
      no: "02",
      title: "NextStep AI",
      subtitle: "AI Powered Career Guidance Platform",
      stack: "React • Express • MongoDB • Gemini API",
      link: "https://github.com/krishrajputw/NextStep-AI",
    },
    {
      no: "03",
      title: "Developer Portfolio",
      subtitle: "Modern Interactive Portfolio Website",
      stack: "React • CSS • Animation",
      link: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <p>SELECTED WORK</p>
        <h2>Projects</h2>
      </div>

      {projects.map((project) => (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-row"
          key={project.no}
        >
          <div className="project-no">
            {project.no}
          </div>

          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <span>{project.stack}</span>
          </div>

          <div className="project-arrow">
            ↗
          </div>
        </a>
      ))}
    </section>
  );
}

export default Projects;