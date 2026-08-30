import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar({ isDarkMode, toggleDarkMode }) {
  // State to handle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section smoothly
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after click
    }
  };

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Jasmeen Kaur
        </motion.div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>

          {/* Dark Mode Toggle in Mobile Menu */}
          <button className="dark-toggle-mobile" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Dark Mode Toggle Button */}
        <motion.button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
