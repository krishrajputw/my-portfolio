
import { useEffect, useState } from "react";

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

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  // NEXT
  const nextCertificate = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  // PREVIOUS
  const previousCertificate = () => {
    setCurrent(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  const certificate = certificates[current];

  return (
    <section id="certifications" className="certifications-section">

      {/* BACKGROUND */}
      <div
        className="certificate-background"
        style={{
          backgroundImage: `url(${certificate.image})`,
        }}
      ></div>

      {/* OVERLAY */}
      <div className="certificate-overlay"></div>

      {/* HEADING */}
      <div className="certifications-heading">
        <h2>
          CERTIFICATES
          <br />
          <span>I've earned.</span>
        </h2>
      </div>

      {/* CONTENT */}
      <div className="certificate-content">

        {/* CERTIFICATE IMAGE - LEFT */}
        <div className="certificate-main-image">
          <a
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
            />
          </a>
        </div>

        {/* DETAILS + CONTROLS - RIGHT */}
        <div className="certificate-info">

          {/* DETAILS */}
          <div className="certificate-details">
            <span className="certificate-count">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(certificates.length).padStart(2, "0")}
            </span>

            <h2>{certificate.title}</h2>
            <p>{certificate.issuer}</p>
          </div>

          {/* CONTROLS */}
          <div className="certificate-controls">

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

          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

