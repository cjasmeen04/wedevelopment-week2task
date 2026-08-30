import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // About info data
  const aboutInfo = [
    { label: 'Education', value: 'B.Tech – Computer Science Engineering' },
    { label: 'Focus', value: 'Web Development' },
    { label: 'Frontend', value: 'HTML, CSS, JavaScript, React' },
    { label: 'Backend', value: 'Node.js, Express.js' },
    { label: 'Database', value: 'MongoDB' },
    { label: 'Goal', value: 'Become a skilled Full-Stack Developer' },
  ];

  return (
    <section id="about" className="section">
      {/* Section Heading */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <small>Get To Know Me</small>
        <h2>About Me</h2>
        <p>
          A little introduction about my journey, interests and what I am
          working towards.
        </p>
      </motion.div>

      {/* About Container */}
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* About Text */}
        <motion.div className="about-text" variants={itemVariants}>
          <h2>
            Learning today,
            <span> building tomorrow.</span>
          </h2>

          <p>
            I am a Computer Science Engineering graduate with a strong interest in Web Development. My learning journey started with HTML and CSS and gradually expanded into JavaScript, React.js and backend development.
          </p>

          <p>
            Currently, I am strengthening my understanding of the MERN stack and working on practical projects to understand how frontend, backend and databases work together.
          </p>

          <p>
            I believe that consistent practice, building projects and learning from mistakes are some of the best ways to become a better developer.
          </p>
        </motion.div>

        {/* About Info Cards */}
        <motion.div className="about-info" variants={itemVariants}>
          {aboutInfo.map((info, index) => (
            <motion.div
              key={index}
              className="info-item"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <strong>{info.label}</strong>
              <span>{info.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
