
import { useRef } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    try {
      const response = await fetch(
        "https://my-portfolio-backend-23vn.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Unable to send message. Please try again.");
    }
  };

  const fieldVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="contact" className="contact-section">

      {/* TOP */}
      <motion.div
        className="contact-top"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <span>CONTACT</span>
      </motion.div>

      {/* MAIN */}
      <div className="contact-main">

        {/* LEFT SIDE */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.span
            className="contact-small-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
          >
            HAVE A PROJECT IN MIND?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            LET'S
            <br />
            <span>WORK</span>
            <br />
            TOGETHER.
          </motion.h2>

          <motion.p
            className="contact-description"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            I'm always open to discussing new projects, creative ideas,
            opportunities, or ways we can build something meaningful together.
          </motion.p>

          {/* CONTACT INFO */}
          <div className="contact-info">

            <motion.a
              href="mailto:kshypkrish@gmail.com"
              className="contact-info-item"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <span>EMAIL</span>
              <strong>
                kshypkrish@gmail.com ↗
              </strong>
            </motion.a>

            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <span>LOCATION</span>
              <strong>Noida, India</strong>
            </motion.div>

          </div>

          {/* SOCIALS */}
          <motion.div
            className="contact-socials"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
          >
            <motion.a
              href="https://github.com/krishrajputw"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.75,
              }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/krishkshyp2003"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.85,
              }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.95,
              }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <motion.div
              className="form-group"
              custom={0}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="name">YOUR NAME</label>

              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter your name"
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              custom={1}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="email">YOUR EMAIL</label>

              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your email"
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              custom={2}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="message">YOUR MESSAGE</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="contact-submit"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              <span>SEND MESSAGE</span>
              <span>↗</span>
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;

