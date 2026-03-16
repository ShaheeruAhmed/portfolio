import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'Automation Framework',
    desc: 'Selenium + TestNG framework with Page Object Model',
  },
  {
    title: 'API Testing Suite',
    desc: 'Automated API tests using RestAssured',
  },
  {
    title: 'CI Pipeline',
    desc: 'Automated regression runs using Jenkins',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-24 px-[10%]"
    >
      <motion.h2
        className="text-center mb-12 text-3xl font-semibold"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.1 }}
      >
        QA Projects
      </motion.h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass-card rounded-xl p-6 text-center cursor-pointer hover:text-accent"
          >
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
