import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiVuedotjs, 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiAngular
} from 'react-icons/si'
import { 
  FaHospital, 
  FaMoneyBillWave, 
  FaShoppingCart, 
  FaShieldAlt,
  FaBitcoin,
  FaRobot
} from 'react-icons/fa'
import './About.css'

const About = () => {
  const techIcons = [
    // Uncomment and update if you want floating icons on the section
    // { icon: <SiReact />, position: { top: '10%', left: '30%' }, delay: 0 },
    // { icon: <SiNextdotjs />, position: { top: '20%', left: '10%' }, delay: 0.15 },
    // { icon: <SiVuedotjs />, position: { top: '30%', left: '60%' }, delay: 0.25 },
    // { icon: <SiAngular />, position: { top: '50%', left: '45%' }, delay: 0.35 },
    // { icon: <SiNodedotjs />, position: { bottom: '30%', left: '15%' }, delay: 0.5 },
    // { icon: <SiPython />, position: { bottom: '10%', right: '20%' }, delay: 0.65 },
    // { icon: <SiDocker />, position: { top: '70%', right: '15%' }, delay: 0.8 },
    // { icon: <FaRobot />, position: { bottom: '12%', left: '55%' }, delay: 1 }
  ]

  return (
    <section id="about" className="about">
      {/* Floating Tech Icons - Full Width */}
      <div className="floating-icons">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.6,
              delay: item.delay * 0.1,
              y: {
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>
        
        <div className="about-wrapper">
          <div className="about-content">
            <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
<>
  <strong>Software Engineer and AI Engineer</strong> with experience at Experiana Trails and Nutrination.AI, currently working as an AI Engineer at Cyber Media India Ltd.</>
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Strong in backend engineering with both <strong>Python</strong> and <strong>JavaScript</strong> ecosystems, including experience with APIs, async programming, authentication systems, caching, REST APIs, and performance optimization.
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  Skilled in <strong>Data Structures & Algorithms</strong> and experienced with databases such as <strong>MongoDB</strong>, <strong>MySQL</strong>, and <strong>Redis</strong>. Also experienced in frontend development using <strong>React</strong>, <strong>Next.js</strong>, and modern JavaScript frameworks.
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  Graduated in May <strong>2026</strong> with a Bachelor's degree in Computer Science Engineering and currently based in <strong>Gurugoan, India</strong>. Passionate about building high-performance applications and solving complex engineering problems.
</motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
