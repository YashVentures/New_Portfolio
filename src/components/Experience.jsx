import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaTrophy,
} from 'react-icons/fa'
import experienceRaw from '../data/experience.json'
import './Experience.css'

const Experience = () => {
  const experiences = useMemo(() => experienceRaw, [])

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key="timeline"
            className="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="timeline-line" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                {/* Dot */}
                <div className="timeline-dot">
                  <FaTrophy className="dot-icon" />
                </div>

                {/* Card */}
                <motion.div
                  className="exp-card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Top accent stripe */}
                  <div className="exp-card-stripe" />

                  <div className="exp-card-body">
                    {/* Header */}
                    <div className="exp-header">
                      <div className="exp-logo-wrap">
                        {exp.image ? (
                          <img
                            src={`/images/${exp.image}`}
                            alt={exp.title}
                            className="exp-logo"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                        ) : null}
                        <div
                          className="exp-logo-fallback"
                          style={{ display: exp.image ? 'none' : 'flex' }}
                        >
                          <FaBriefcase />
                        </div>
                      </div>

                      <div className="exp-meta">
                        <h3 className="exp-title">{exp.title}</h3>
                        <p className="exp-subtitle">{exp.subtitle}</p>
                        <div className="exp-date">
                          <FaCalendarAlt className="date-icon" />
                          <span>{exp.date}</span>
                        </div>
                      </div>

                      {exp.websiteLink && (
                        <motion.a
                          href={exp.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-link-icon"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          title="Visit Website"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="exp-description">{exp.description}</p>

                    {/* Tech pills */}
                    <div className="exp-tech-pills">
                      {exp.technologies.map((tech, ti) => (
                        <span key={ti} className="exp-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Experience