import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-brand">
          <div className="nav-logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M9 9h6v6H9z" />
              <path d="M9 21v-4" />
              <path d="M15 21v-4" />
              <path d="M9 3v4" />
              <path d="M15 3v4" />
              <path d="M3 9h4" />
              <path d="M3 15h4" />
              <path d="M17 9h4" />
              <path d="M17 15h4" />
            </svg>
          </div>
          <motion.h1
            className="nav-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="title-main">SOCO</span>
            <span className="title-sub">Transparency Dashboard</span>
          </motion.h1>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
        </div>

        <button
          className="nav-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'line-1-active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'line-2-active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'line-3-active' : ''}`}></span>
        </button>
      </div>
    </motion.nav>
  );
}
