
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Certifications() {
  const certificates = [
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM • Coursera",
      image: "/certificates/python-data-science.png",
      link: "https://coursera.org/share/d3bc69574a7451fc1ba3e96dac7a922f",
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM • Coursera",
      image: "/certificates/ibm-ai.png",
      link: "https://coursera.org/share/96ab81a8e861f5ffb142e98471485e78",
    },
    {
      title: "Python Basics",
      issuer: "University of Michigan • Coursera",
      image: "/certificates/python-basics.png",
      link: "https://coursera.org/share/2272b06ac6d13e93a8dcef966621e179",
    },
    {
      title: "Object Oriented Programming in Java",
      issuer: "University of California San Diego • Coursera",
      image: "/certificates/oops.png",
      link: "https://coursera.org/share/17ef099d7593f5b23c82b1ca1ff725c3",
    },
  ];

  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  /* NEXT */
  const nextCertificate = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  /* PREVIOUS */
  const previousCertificate = () => {
    setCurrent(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  const certificate = certificates[current];

  return (
    <section id="certifications" className="certifications-section">
        
      {/* HEADING */}
      <motion.div
        className="certifications-heading"
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
        <h2>
          CERTIFICATES
          <br />
          <span>I've earned.</span>
        </h2>
      </motion.div>

      {/* CONTENT */}
      <div className="certificate-content">

        {/* CERTIFICATE IMAGE - LEFT */}
        <div className="certificate-main-image">

          <AnimatePresence mode="wait">
            <motion.a
              key={`image-${current}`}
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              initial={{
                opacity: 0,
                x: -80,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: 80,
                scale: 0.94,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.img
                src={certificate.image}
                alt={certificate.title}
                whileHover={{
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            </motion.a>
          </AnimatePresence>

        </div>

        {/* DETAILS + CONTROLS - RIGHT */}
        <div className="certificate-info">

          <AnimatePresence mode="wait">

            <motion.div
              key={`details-${current}`}
              className="certificate-details"

              initial={{
                opacity: 0,
                x: 50,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              exit={{
                opacity: 0,
                x: -30,
              }}

              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <motion.span
                className="certificate-count"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                }}
              >
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(certificates.length).padStart(2, "0")}
              </motion.span>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                {certificate.title}
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
              >
                {certificate.issuer}
              </motion.p>

            </motion.div>

          </AnimatePresence>

          {/* CONTROLS */}
          <motion.div
            className="certificate-controls"
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
              duration: 0.6,
              delay: 0.4,
            }}
          >

            <button
              onClick={previousCertificate}
              aria-label="Previous certificate"
            >
              ←
            </button>

            {/* DOTS */}
            <div className="certificate-dots">

              {certificates.map((_, index) => (

                <span
                  key={index}
                  className={index === current ? "active" : ""}
                  onClick={() => setCurrent(index)}
                ></span>

              ))}

            </div>

            <button
              onClick={nextCertificate}
              aria-label="Next certificate"
            >
              →
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;

