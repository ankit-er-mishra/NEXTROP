import "./Navbar.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="container navbar-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="NEXTROP Logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Practice Areas
          </NavLink>

          <NavLink
            to="/knowledge-hub"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Knowledge Hub
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>

          <Link to="/contact" className="mobile-nav-btn" onClick={closeMenu}>
            Schedule Consultation
          </Link>
        </nav>

        <Link to="/contact" className="nav-btn">
          Schedule Consultation
        </Link>

        <button
          className={`menu-btn ${menuOpen ? "menu-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar;