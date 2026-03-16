import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const techs = [
  'Selenium',
  'Playwright',
  'Cypress',
  'Java',
  'Python',
  'JavaScript',
  'Postman',
  'Jenkins',
  'Docker',
]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.section
      ref={ref}
      id="stack"
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
        Tech Stack
      </motion.h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 max-w-4xl mx-auto">
        {techs.map((name, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass-card rounded-xl p-6 text-center text-white cursor-default"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
