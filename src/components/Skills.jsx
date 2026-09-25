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
      <div className="skills-wall-header">
        <p>TECH STACK</p>

        <h2>
          Technologies I <span>work with.</span>
        </h2>
      </div>

      <div className="skills-wall">
        <div className="wall-glow"></div>

        {skills.map((skill) => (
          <div
            className={`tech-logo ${
              skill.featured ? "featured" : ""
            }`}
            key={skill.name}
          >
            <div className="tech-icon">
              {skill.icon}
            </div>

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;