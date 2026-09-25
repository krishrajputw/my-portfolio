
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* LOGO */}
      <motion.a
        href="#home"
        className="nav-logo"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      >
        <img
          src="/logo.png"
          alt="Krish Rajput Logo"
        />
      </motion.a>

      {/* NAV LINKS */}
      <div className="nav-links">
        {["Home", "About", "Skills", "Projects", "Contact"].map(
          (item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.08,
              }}
            >
              {item}
            </motion.a>
          )
        )}
      </div>

      {/* RESUME */}
      <motion.a
        href="/Krish_Resume_.pdf"
        className="resume-btn"
        download="Krish_Resume.pdf"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
        }}
      >
        resume
      </motion.a>
    </motion.nav>
  );
}

export default Navbar;

