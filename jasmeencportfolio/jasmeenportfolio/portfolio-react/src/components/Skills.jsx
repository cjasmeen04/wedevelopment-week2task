import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  // Skills data with SVG icons
  const skills = [
    {
      title: 'Frontend Development',
      description:
        'Building structured and responsive interfaces using HTML, CSS, JavaScript and React.js.',
      icon: 'frontend',
    },
    {
      title: 'Backend Development',
      description:
        'Learning server-side development using Node.js, Express.js and REST APIs.',
      icon: 'backend',
    },
    {
      title: 'Database',
      description:
        'Working with MongoDB and Mongoose to create, read, update and delete data.',
      icon: 'database',
    },
    {
      title: 'Responsive Design',
      description:
        'Creating mobile-first designs that work seamlessly across all devices.',
      icon: 'responsive',
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  // Icon SVG components
  const IconComponent = ({ type }) => {
    const icons = {
      frontend: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M64 96C64 78.3 78.3 64 96 64L544 64C561.7 64 576 78.3 576 96L576 416C576 433.7 561.7 448 544 448L96 448C78.3 448 64 433.7 64 416L64 96zM240 512L400 512L400 544L240 544L240 512z" />
        </svg>
      ),
      backend: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M320 64C337.7 64 352 78.3 352 96L352 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L352 352L352 544C352 561.7 337.7 576 320 576C302.3 576 288 561.7 288 544L288 352L96 352C78.3 352 64 337.7 64 320C64 302.3 78.3 288 96 288L288 288L288 96C288 78.3 302.3 64 320 64z" />
        </svg>
      ),
      database: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M320 64C179.1 64 64 107 64 160L64 480C64 533 179.1 576 320 576C460.9 576 576 533 576 480L576 160C576 107 460.9 64 320 64zM320 112C438.7 112 528 139.3 528 160C528 180.7 438.7 208 320 208C201.3 208 112 180.7 112 160C112 139.3 201.3 112 320 112zM112 240C162.7 264 239.6 272 320 272C400.4 272 477.3 264 528 240L528 320C528 340.7 438.7 368 320 368C201.3 368 112 340.7 112 320L112 240zM112 400C162.7 424 239.6 432 320 432C400.4 432 477.3 424 528 400L528 480C528 500.7 438.7 528 320 528C201.3 528 112 500.7 112 480L112 400z" />
        </svg>
      ),
      responsive: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M64 240C64 217.9 81.91 200 104 200H536C558.1 200 576 217.9 576 240V400C576 422.1 558.1 440 536 440H104C81.91 440 64 422.1 64 400V240zM104 256C99.58 256 96 259.6 96 264V360C96 364.4 99.58 368 104 368H536C540.4 368 544 364.4 544 360V264C544 259.6 540.4 256 536 256H104zM320 528C320 544.8 308.2 560 292.7 563.3C285.9 564.8 279.1 560 279.1 553.1V520H360V553.1C360 560 354.1 564.8 347.3 563.3C331.8 560 320 544.8 320 528Z" />
        </svg>
      ),
    };

    return icons[type] || icons.frontend;
  };

  return (
    <section id="skills" className="section">
      {/* Section Heading */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <small>What I Know</small>
        <h2>My Skills</h2>
        <p>
          Technologies and concepts I have learned and continue to practice.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)' }}
          >
            {/* Icon */}
            <div className="skill-icon">
              <IconComponent type={skill.icon} />
            </div>

            {/* Title */}
            <h3>{skill.title}</h3>

            {/* Description */}
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
