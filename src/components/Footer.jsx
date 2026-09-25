
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
      >
        © 2026 Krish Rajput. All rights reserved.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.35,
        }}
      >
        MERN Stack Developer · Noida, India
      </motion.p>
    </motion.footer>
  );
}

export default Footer;

