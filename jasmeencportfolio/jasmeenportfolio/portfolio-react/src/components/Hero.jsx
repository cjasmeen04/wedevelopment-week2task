import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

function Hero() {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const scrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Hero Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small Heading */}
        <motion.div className="small-heading" variants={itemVariants}>
          Web Development • CSE • MERN
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants}>
          Hi, I'm <span>Jasmeen Kaur.</span>
        </motion.h1>

        {/* Description Paragraphs */}
        <motion.p variants={itemVariants}>
          A Computer Science Engineering graduate and aspiring Web Developer
          currently building my skills in modern web development and the MERN
          stack.
        </motion.p>

        <motion.p variants={itemVariants}>
          I enjoy turning ideas into clean, responsive and user-friendly web
          experiences while continuously learning and improving my development
          skills.
        </motion.p>

        {/* Buttons */}
        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>
          <a href="#contact" className="btn secondary-btn">
            Let's Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Hero Profile Image */}
      <motion.div
        className="hero-profile"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14546.jpg"
          alt="Jasmeen Kaur profile image"
        />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        className="scroll-down"
        onClick={scrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}

export default Hero;
