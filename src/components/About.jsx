
import { motion } from "framer-motion";

function About() {
  const columnVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="about-section">

      {/* TOP */}
      <motion.div
        className="about-top"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <span className="about-label">ABOUT ME</span>
      </motion.div>

      {/* HERO HEADING */}
      <motion.div
        className="about-hero-text"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <h2>
          THE PERSON
          <br />
          BEHIND THE
          <br />
          <span>CODE.</span>
        </h2>
      </motion.div>

      {/* INTRO */}
      <div className="about-intro">

        <motion.div
          className="about-line"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
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
        </motion.p>

      </div>

      {/* WHAT DEFINES ME */}
      <motion.div
        className="defines-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >

        <div className="defines-header">
          <span>WHAT DEFINES ME</span>
        </div>

        <div className="about-columns">

          {/* COLUMN 01 */}
          <motion.div
            className="about-column"
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="column-number">01</span>

            <h3>WHO I AM</h3>

            <p>
              A curious developer who enjoys learning, experimenting,
              solving problems and building things from scratch.
            </p>
          </motion.div>

          {/* COLUMN 02 */}
          <motion.div
            className="about-column"
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="column-number">02</span>

            <h3>WHAT I BUILD</h3>

            <p>
              Real-world digital solutions that turn ideas into useful
              products and meaningful experiences.
            </p>
          </motion.div>

          {/* COLUMN 03 */}
          <motion.div
            className="about-column"
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="column-number">03</span>

            <h3>WHAT'S NEXT</h3>

            <p>
              Keep learning, experimenting and improving with every
              project and challenge I take on.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* =========================================
          DEVELOPMENT JOURNEY
      ========================================= */}

      <div className="journey-section">

        {/* HEADER */}
        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span>MY DEVELOPMENT JOURNEY</span>
        </motion.div>

        <div className="journey">

          {/* TIMELINE LINE */}
          <motion.div
            className="journey-progress"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          ></motion.div>

          {/* ================= LEARN ================= */}

          <motion.div
            className="journey-item"
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              className="journey-dot"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.5,
              }}
            >
              <span></span>
            </motion.div>

            <div className="journey-content">

              <span className="journey-number">
                01
              </span>

              <h3>LEARN</h3>

              <p>
                Programming
                <br />
                Web Development
                <br />
                Computer Science
              </p>

            </div>

          </motion.div>

          {/* ================= BUILD ================= */}

          <motion.div
            className="journey-item"
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              className="journey-dot"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.75,
              }}
            >
              <span></span>
            </motion.div>

            <div className="journey-content">

              <span className="journey-number">
                02
              </span>

              <h3>BUILD</h3>

              <p>
                Pooja Store
                <br />
                NextStep AI
                <br />
                Portfolio
              </p>

            </div>

          </motion.div>

          {/* ================= IMPROVE ================= */}

          <motion.div
            className="journey-item"
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              className="journey-dot"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 1,
              }}
            >
              <span></span>
            </motion.div>

            <div className="journey-content">

              <span className="journey-number">
                03
              </span>

              <h3>IMPROVE</h3>

              <p>
                DSA
                <br />
                React
                <br />
                Backend
              </p>

            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default About;

