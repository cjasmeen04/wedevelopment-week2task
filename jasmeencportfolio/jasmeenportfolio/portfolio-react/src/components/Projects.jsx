import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

function Projects() {
  // Projects data
  const projects = [
    {
      number: '01',
      type: 'MERN PROJECT',
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application with product catalog, shopping cart and checkout functionality built using React and MongoDB.',
      technologies: 'React • Node.js • MongoDB • Express',
      github: '#',
      demo: '#',
    },
    {
      number: '02',
      type: 'FRONTEND PROJECT',
      title: 'Weather App',
      description:
        'A responsive weather application that fetches real-time weather data using weather APIs and displays it beautifully.',
      technologies: 'HTML • CSS • JavaScript',
      github: '#',
      demo: '#',
    },
    {
      number: '03',
      type: 'REACT PROJECT',
      title: 'Task Management App',
      description:
        'A feature-rich task manager with real-time updates, local storage persistence, and an intuitive user interface.',
      technologies: 'React • JavaScript • CSS',
      github: '#',
      demo: '#',
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section">
      {/* Section Heading */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <small>My Work</small>
        <h2>Featured Projects</h2>
        <p>
          Some of the projects I've built to strengthen my skills and showcase
          my capabilities.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="project"
            variants={cardVariants}
            whileHover={{
              y: -8,
            }}
          >
            {/* Project Info */}
            <div>
              <span className="project-number">{project.number}</span>
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            {/* Project Tech */}
            <div className="project-tech">{project.technologies}</div>

            {/* Project Links */}
            <div className="project-links">
              <a href={project.github} className="project-link" title="GitHub Repository">
                <Github size={18} />
              </a>
              <a href={project.demo} className="project-link" title="Live Demo">
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
