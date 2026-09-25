
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Matter from "matter-js";

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

/* =========================================
   PHYSICS TECHNOLOGY ICONS
========================================= */

function PhysicsIcons() {
  const containerRef = useRef(null);
  const [bodies, setBodies] = useState([]);

  const icons = [
    {
      id: "html",
      icon: <SiHtml5 />,
      color: "#e34f26",
    },
    {
      id: "css",
      icon: <SiCss />,
      color: "#1572b6",
    },
    {
      id: "javascript",
      icon: <SiJavascript />,
      color: "#f7df1e",
    },
    {
      id: "python",
      icon: <SiPython />,
      color: "#3776ab",
    },
    {
      id: "react",
      icon: <SiReact />,
      color: "#61dafb",
    },
    {
      id: "node",
      icon: <SiNodedotjs />,
      color: "#68a063",
    },
    {
      id: "mongodb",
      icon: <SiMongodb />,
      color: "#47a248",
    },
    {
      id: "git",
      icon: <SiGit />,
      color: "#f05032",
    },
    {
      id: "github",
      icon: <SiGithub />,
      color: "#ffffff",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const {
      Engine,
      Bodies,
      Composite,
      Runner,
      Events,
      Body,
    } = Matter;

    const width = container.clientWidth;
    const height = container.clientHeight;

    /* =========================
       ENGINE
    ========================= */

    const engine = Engine.create();

    engine.gravity.y = 1.1;

    const world = engine.world;

    /* =========================
       FLOOR
    ========================= */

    const floor = Bodies.rectangle(
      width / 2,
      height - 8,
      width,
      16,
      {
        isStatic: true,
        restitution: 0.2,
        friction: 0.9,
      }
    );

    /* =========================
       WALLS
    ========================= */

    const leftWall = Bodies.rectangle(
      -10,
      height / 2,
      20,
      height,
      {
        isStatic: true,
      }
    );

    const rightWall = Bodies.rectangle(
      width + 10,
      height / 2,
      20,
      height,
      {
        isStatic: true,
      }
    );

    Composite.add(world, [
      floor,
      leftWall,
      rightWall,
    ]);

    /* =========================
       CREATE ICONS
    ========================= */

    const iconBodies = icons.map((item, index) => {
      const size = 58;

      const startX =
        width / 2 +
        (index - (icons.length - 1) / 2) * 25;

      const body = Bodies.rectangle(
        startX,
        -100 - index * 100,
        size,
        size,
        {
          restitution: 0.35,
          friction: 0.75,
          frictionAir: 0.025,
          density: 0.002,

          chamfer: {
            radius: 12,
          },
        }
      );

      /* Small random movement */
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: 0,
      });

      /* Initial rotation */
      Body.setAngularVelocity(
        body,
        (Math.random() - 0.5) * 0.08
      );

      return {
        ...item,
        body,
        size,
      };
    });

    Composite.add(
      world,
      iconBodies.map((item) => item.body)
    );

    setBodies(iconBodies);

    /* =========================
       RUN PHYSICS
    ========================= */

    const runner = Runner.create();

    Runner.run(runner, engine);

    /* =========================
       UPDATE REACT
    ========================= */

    const update = () => {
      setBodies((current) => [...current]);
    };

    Events.on(
      engine,
      "afterUpdate",
      update
    );

    /* =========================
       CLEANUP
    ========================= */

    return () => {
      Events.off(
        engine,
        "afterUpdate",
        update
      );

      Runner.stop(runner);

      Composite.clear(
        world,
        false
      );

      Engine.clear(engine);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="physics-icons-container"
    >

      {bodies.map((item) => {
        const {
          body,
          color,
          icon,
          size,
          id,
        } = item;

        return (
          <div
            key={id}
            className="physics-icon"
            style={{
              width: size,
              height: size,

              left: body.position.x,
              top: body.position.y,

              color,

              transform: `
                translate(-50%, -50%)
                rotate(${body.angle}rad)
              `,
            }}
          >
            {icon}
          </div>
        );
      })}

      {/* FLOOR */}
      <div className="physics-floor"></div>

    </div>
  );
}


/* =========================================
   HERO
========================================= */

function Hero() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x:
          (e.clientX / window.innerWidth - 0.5) *
          20,

        y:
          (e.clientY / window.innerHeight - 0.5) *
          20,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section
      id="home"
      className="hero"
    >

      {/* BACKGROUND GLOW */}

      <div className="hero-bg-glow glow-one"></div>

      <div className="hero-bg-glow glow-two"></div>


      <div className="hero-container">


        {/* =================================
            LEFT CONTENT
        ================================= */}

        <motion.div
          className="hero-content"

          initial={{
            opacity: 0,
            x: -60,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* BADGE */}

          <motion.div
            className="hero-badge"

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <span></span>

            AVAILABLE FOR OPPORTUNITIES
          </motion.div>


          {/* HELLO */}

          <motion.p
            className="hero-small"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            HELLO, I'M
          </motion.p>


          {/* NAME */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            Krish
            <span>Rajput.</span>
          </motion.h1>


          {/* ROLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            MERN Stack{" "}
            <strong>Developer</strong>
          </motion.h2>


          {/* DESCRIPTION */}

          <motion.p
            className="hero-description"

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
          >
            I build modern, scalable and
            user-focused full-stack web
            applications using React, Node.js,
            Express.js and MongoDB.
          </motion.p>


          {/* BUTTONS */}

          <motion.div
            className="hero-buttons"

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
          >

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

          </motion.div>


          {/* SOCIALS */}

          <motion.div
            className="hero-socials"

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
          >

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

          </motion.div>

        </motion.div>


        {/* =================================
            RIGHT AVATAR
        ================================= */}

        <motion.div
          className="hero-visual avatar-visual"

          initial={{
            opacity: 0,
            scale: 0.8,
            x: 60,
            y: -300,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
          }}

          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.3,
          }}

          style={{
            transform: `
              perspective(1000px)
              rotateY(${mouse.x * 0.35}deg)
              rotateX(${-mouse.y * 0.35}deg)
            `,
          }}
        >

          <div className="avatar-glow"></div>


          {/* =================================
              PHYSICS ICONS
          ================================= */}

          <PhysicsIcons />


          {/* =================================
              AVATAR
          ================================= */}

          <motion.img
            src="/avatar.png"
            alt="Krish - MERN Stack Developer"
            className="hero-avatar"

            initial={{
              opacity: 0,
              y: -400,
            }}

            animate={{
              opacity: 1,
              y: [0, -8, 0],
            }}

            transition={{
              opacity: {
                duration: 0.2,
                delay: 0.3,
              },

              y: {
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.3,
              },
            }}
          />

        </motion.div>

      </div>


      {/* =================================
          SCROLL INDICATOR
      ================================= */}

      <motion.div
        className="scroll-indicator"

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          duration: 1,
          delay: 1.2,
        }}
      >

        <motion.span
          animate={{
            y: [0, 8, 0],
          }}

          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.span>

        SCROLL TO EXPLORE

      </motion.div>

    </section>
  );
}

export default Hero;

