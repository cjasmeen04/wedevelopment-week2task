import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Footer links data
  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/cjasmeen04',
      icon: 'github',
    },
    {
      name: 'Email',
      url: 'mailto:cjasmeen04@gmail.com',
      icon: 'email',
    },
  ];

  // Icon component for social links
  const IconComponent = ({ type }) => {
    const icons = {
      github: <Github size={18} />,
      email: <Mail size={18} />,
    };
    return icons[type] || icons.github;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Footer Brand */}
        <motion.div className="footer-brand" variants={itemVariants}>
          <h2>
            JASMEEN<span>.</span>
          </h2>
          <p>
            Aspiring Full-Stack Developer passionate about building clean,
            responsive and meaningful web experiences.
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.div className="footer-links" variants={itemVariants}>
          <h3>Explore</h3>
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Footer Connect */}
        <motion.div className="footer-connect" variants={itemVariants}>
          <h3>Let's Connect</h3>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title={link.name}
              >
                <IconComponent type={link.icon} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Designed & developed by Jasmeen Kaur</p>
        <p>© {currentYear} All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
