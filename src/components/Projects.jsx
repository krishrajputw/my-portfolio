
import { motion } from "framer-motion";

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

      {/* HEADER */}
      <motion.div
        className="projects-header"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <p>SELECTED WORK</p>
        <h2>Projects</h2>
      </motion.div>

      {/* PROJECTS */}
      {projects.map((project, index) => (

        <motion.a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-row"
          key={project.no}

          initial={{
            opacity: 0,
            x: -80,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            duration: 0.8,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* NUMBER */}
          <motion.div
            className="project-no"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.2,
            }}
          >
            {project.no}
          </motion.div>

          {/* INFO */}
          <div className="project-info">

            <motion.h3
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.25,
              }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.35,
              }}
            >
              {project.subtitle}
            </motion.p>

            <motion.span
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.45,
              }}
            >
              {project.stack}
            </motion.span>

          </div>

          {/* ARROW */}
          <motion.div
            className="project-arrow"
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.5,
            }}
          >
            ↗
          </motion.div>

        </motion.a>

      ))}

    </section>
  );
}

export default Projects;

