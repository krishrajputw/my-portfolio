import { useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

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

  return (
    <section id="contact" className="contact-section">

      {/* TOP */}
      <div className="contact-top">
        <span>CONTACT</span>
      </div>

      {/* MAIN */}
      <div className="contact-main">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <span className="contact-small-title">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            LET'S
            <br />
            <span>WORK</span>
            <br />
            TOGETHER.
          </h2>

          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas,
            opportunities, or ways we can build something meaningful together.
          </p>

          {/* CONTACT INFO */}
          <div className="contact-info">

            <a
              href="mailto:kshypkrish@gmail.com"
              className="contact-info-item"
            >
              <span>EMAIL</span>
              <strong>kshypkrish@gmail.com ↗</strong>
            </a>

            <div className="contact-info-item">
              <span>LOCATION</span>
              <strong>Noida, India</strong>
            </div>

          </div>

          {/* SOCIALS */}
          <div className="contact-socials">

            <a
              href="https://github.com/krishrajputw"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/krishkshyp2003"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="contact-right">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>

              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">YOUR EMAIL</label>

              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">YOUR MESSAGE</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              <span>SEND MESSAGE</span>
              <span>↗</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;