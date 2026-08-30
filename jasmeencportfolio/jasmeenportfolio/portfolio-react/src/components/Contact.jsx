import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, MapPin } from 'lucide-react';
import './Contact.css';

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Here you would normally send the data to a backend
    console.log('Form submitted:', formData);

    // Show success message
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  // Contact info data
  const contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'cjasmeen04@gmail.com',
      link: 'mailto:cjasmeen04@gmail.com',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'cjasmeen04',
      link: 'https://github.com/cjasmeen04',
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'Punjab, India',
      link: '#',
    },
  ];

  // Icon components using Lucide React
  const IconComponent = ({ type }) => {
    const icons = {
      email: <Mail size={24} />,
      github: <Github size={24} />,
      location: <MapPin size={24} />,
    };

    return icons[type] || icons.email;
  };

  return (
    <section id="contact" className="section">
      {/* Contact Container */}
      <motion.div
        className="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Contact Heading */}
        <h2>Let's Build Something Together.</h2>
        <p>
          I am currently focused on strengthening my development skills,
          building projects and exploring opportunities where I can learn,
          contribute and grow as a developer.
        </p>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Name Input */}
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />

          {/* Email Input */}
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />

          {/* Message Textarea */}
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="btn primary-btn contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              whileHover={{ x: 5 }}
            >
              <span className="contact-icon">
                <IconComponent type={info.icon} />
              </span>
              <span className="contact-text">{info.value}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
