function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        <img src="/logo.png" alt="Krish Rajput Logo" />
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

    <a
    href="/Krish_Resume_.pdf"
    className="resume-btn"
    download="Krish_Resume.pdf"
>
    resume
</a>
    </nav>
  );
}

export default Navbar;