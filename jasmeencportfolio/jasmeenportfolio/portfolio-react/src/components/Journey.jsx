import React from 'react';
import { motion } from 'framer-motion';
import './Journey.css';

function Journey() {
  // Journey data
  const journeyItems = [
    {
      year: '2022',
      title: 'B.Tech Graduation',
      description:
        'Completed my Bachelor of Technology degree in Computer Science Engineering.',
    },
    {
      year: '2022 - 2023',
      title: 'Learning Fundamentals',
      description:
        'Started my web development journey with HTML, CSS, and JavaScript basics.',
    },
    {
      year: '2023',
      title: 'React & MERN Stack',
      description:
        'Dived deep into React.js, Node.js, Express, and MongoDB to build full-stack applications.',
    },
    {
      year: '2024',
      title: 'Building Projects',
      description:
        'Creating real-world projects and continuously improving my development skills.',
    },
    {
      year: 'Present',
      title: 'Seeking Opportunities',
      description:
        'Looking for internship opportunities to contribute and grow as a developer.',
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="journey" className="section">
      {/* Section Heading */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <small>My Path</small>
        <h2>Learning Journey</h2>
        <p>
          Timeline of my growth and milestones in the world of web development.
        </p>
      </motion.div>

      {/* Journey Timeline */}
      <motion.div
        className="journey"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {journeyItems.map((item, index) => (
          <motion.div
            key={index}
            className="journey-item"
            variants={itemVariants}
            whileHover={{ x: 10 }}
          >
            <div className="journey-year">{item.year}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Journey;
