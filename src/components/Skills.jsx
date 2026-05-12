import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiDocker,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiFigma,
  SiWebpack,
  SiVite,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiRedis,
  SiBootstrap,
  SiNestjs,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiOpenai,
  SiSelenium,
  SiStreamlit,
} from 'react-icons/si'
import { 
  FaDatabase, 
  FaServer, 
  FaCode,
  FaPalette,
  FaCog,
  FaComments,
  FaLightbulb,
  FaCrown,
  FaRocket,
  FaUsers,
  FaHeart,
  FaBrain
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical')

  const tabs = [
    { name: 'Technical', icon: <FaCode /> },
    { name: 'Soft Skills', icon: <FaUsers /> },
    { name: 'Tools', icon: <FaCog /> },
  ]

  const technicalSkillsTop = [
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Streamlit', icon: <SiStreamlit /> },
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Nest.js', icon: <SiNestjs /> },
        { name: 'REST APIs', icon: <FaServer /> },
        { name: 'Fast APIs', icon: <FaServer /> },
        { name: 'OpenAI', icon: <SiOpenai /> },
        { name: 'Langchain', icon: <FaBrain /> },
        { name: 'Langgraph', icon: <FaBrain /> },
        { name: 'Selenium', icon: <SiSelenium /> },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Redis', icon: <SiRedis /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'CI/CD', icon: <SiJenkins /> }
      ]
    }
  ]

  const softSkills = [
    {
      title: 'Communication',
      icon: <FaComments />,
      description: 'Effective verbal and written communication with stakeholders, team members, and clients.'
    },
    {
      title: 'Problem Solving',
      icon: <FaLightbulb />,
      description: 'Analytical thinking and creative problem-solving abilities to tackle complex technical challenges.'
    },
    {
      title: 'Leadership',
      icon: <FaCrown />,
      description: 'Experience leading teams, mentoring junior developers, and driving project success.'
    },
    {
      title: 'Adaptability',
      icon: <FaRocket />,
      description: 'Quick learner with ability to adapt to new technologies and changing project requirements.'
    },
    {
      title: 'Team Collaboration',
      icon: <FaUsers />,
      description: 'Strong team player with experience in agile methodologies and cross-functional collaboration.'
    },
    {
      title: 'Attention to Detail',
      icon: <FaHeart />,
      description: 'Meticulous approach to code quality, testing, and delivering polished user experiences.'
    }
  ]

  const developmentTools = [
    { name: 'VS Code', icon: <FaCode /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'GitLab', icon: <SiGitlab /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Webpack', icon: <SiWebpack /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'npm', icon: <FaCode /> },
    { name: 'yarn', icon: <FaCode /> },
    { name: 'Docker', icon: <SiDocker /> },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical competencies and professional skills I&apos;ve developed through experience and continuous learning
        </motion.p>

        {/* Skill Tabs */}
        <motion.div 
          className="skill-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              className={`skill-tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'Technical' && (
            <motion.div
              key="technical"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3">
                {technicalSkillsTop.map((category, index) => (
                  <motion.div
                    key={index}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div className="skills-list-tech">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Soft Skills' && (
            <motion.div
              key="soft-skills"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="soft-skill-card-compact"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="soft-skill-icon-compact">{skill.icon}</div>
                    <h3 className="soft-skill-title-compact">{skill.title}</h3>
                    <p className="soft-skill-description-compact">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          {activeTab === 'Tools' && (
            <motion.div
              key="tools"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3">
                <motion.div
                  className="skill-category-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="category-header">
                    <div className="category-icon-circle"><FaCode /></div>
                    <h3 className="category-title-tech">Development Tools</h3>
                  </div>
                  <div className="skills-list-tech">
                    {developmentTools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="skill-badge-with-icon">
                        <span className="skill-icon-small">{tool.icon}</span>
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills