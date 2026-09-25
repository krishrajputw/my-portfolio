
import { motion } from "framer-motion";

import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiMongoose,
  SiAxios,
  SiVite,
  SiJsonwebtokens,
  SiGooglegemini,
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact />, featured: true },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Mongoose", icon: <SiMongoose /> },
    { name: "Axios", icon: <SiAxios /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Gemini API", icon: <SiGooglegemini /> },
    { name: "DSA", icon: <FaBrain /> },
    { name: "REST API", icon: <FaCode /> },
    { name: "OOP", icon: <FaProjectDiagram /> },
    { name: "Data Structures", icon: <FaDatabase /> },
  ];

  return (
    <section id="skills" className="skills-wall-section">

      {/* HEADER */}
      <motion.div
        className="skills-wall-header"
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
        <p>TECH STACK</p>

        <h2>
          Technologies I <span>work with.</span>
        </h2>
      </motion.div>

      {/* SKILLS WALL */}
      <motion.div
        className="skills-wall"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        <div className="wall-glow"></div>

        {skills.map((skill, index) => (

          <motion.div
            className={`tech-logo ${
              skill.featured ? "featured" : ""
            }`}
            key={skill.name}

            initial={{
              opacity: 0,
              y: 60,
              scale: 0.7,
              rotate: index % 2 === 0 ? -8 : 8,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              className="tech-icon"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.08,
              }}
            >
              {skill.icon}
            </motion.div>

            <span>{skill.name}</span>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
}

export default Skills;

