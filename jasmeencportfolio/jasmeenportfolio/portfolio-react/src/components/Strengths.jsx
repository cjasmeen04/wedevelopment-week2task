import React from 'react';
import { motion } from 'framer-motion';
import './Strengths.css';

function Strengths() {
  // Strengths data
  const strengths = [
    {
      title: 'Curiosity',
      description: 'Always interested in learning something new.',
      icon: 'bulb',
    },
    {
      title: 'Consistency',
      description: 'Believe in improving through regular practice.',
      icon: 'circle',
    },
    {
      title: 'Teamwork',
      description: 'Comfortable learning and collaborating with others.',
      icon: 'target',
    },
    {
      title: 'Growth Mindset',
      description: 'Open to feedback and continuous improvement.',
      icon: 'growth',
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  // Icon SVG components
  const IconComponent = ({ type }) => {
    const icons = {
      bulb: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z" />
        </svg>
      ),
      circle: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9"></circle>
          <circle cx="12" cy="12" r="5"></circle>
          <circle cx="12" cy="12" r="1.5"></circle>
        </svg>
      ),
      target: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M300.9 149.2L184.3 278.8C179.7 283.9 179.9 291.8 184.8 296.7C215.3 327.2 264.8 327.2 295.3 296.7L327.1 264.9C331.3 260.7 336.6 258.4 342 258C348.8 257.4 355.8 259.7 361 264.9L537.6 440L608 384L608 96L496 160L472.2 144.1C456.4 133.6 437.9 128 418.9 128L348.5 128C347.4 128 346.2 128 345.1 128.1C328.2 129 312.3 136.6 300.9 149.2zM148.6 246.7L255.4 128L215.8 128C190.3 128 165.9 138.1 147.9 156.1L144 160L32 96L32 384L188.4 514.3C211.4 533.5 240.4 544 270.3 544L286 544L279 537C269.6 527.6 269.6 512.4 279 503.1C288.4 493.8 303.6 493.7 312.9 503.1L353.9 544.1L362.9 544.1C382 544.1 400.7 539.8 417.7 531.8L391 505C381.6 495.6 381.6 480.4 391 471.1C400.4 461.8 415.6 461.7 424.9 471.1L456.9 503.1L474.4 485.6C483.3 476.7 485.9 463.8 482 452.5L344.1 315.7L329.2 330.6C279.9 379.9 200.1 379.9 150.8 330.6C127.8 307.6 126.9 270.7 148.6 246.6z" />
        </svg>
      ),
      growth: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M416 224C398.3 224 384 209.7 384 192C384 174.3 398.3 160 416 160L576 160C593.7 160 608 174.3 608 192L608 352C608 369.7 593.7 384 576 384C558.3 384 544 369.7 544 352L544 269.3L374.6 438.7C362.1 451.2 341.8 451.2 329.3 438.7L224 333.3L86.6 470.6C74.1 483.1 53.8 483.1 41.3 470.6C28.8 458.1 28.8 437.8 41.3 425.3L201.3 265.3C213.8 252.8 234.1 252.8 246.6 265.3L352 370.7L498.7 224L416 224z" />
        </svg>
      ),
    };

    return icons[type] || icons.bulb;
  };

  return (
    <section className="section">
      {/* Section Heading */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <small>Beyond Code</small>
        <h2>What I Bring</h2>
      </motion.div>

      {/* Strengths Grid */}
      <motion.div
        className="strengths"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            className="strength"
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Icon */}
            <div className="strength-icon">
              <IconComponent type={strength.icon} />
            </div>

            {/* Title */}
            <h3>{strength.title}</h3>

            {/* Description */}
            <p>{strength.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Strengths;
