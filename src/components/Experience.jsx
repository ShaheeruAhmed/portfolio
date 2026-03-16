import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const jobs = [
  {
    title: 'Senior QA Engineer',
    meta: 'Company Name • 2022 – Present',
    bullets: [
      'Built automation framework reducing regression testing by 70%',
      'Integrated automated tests into CI/CD pipelines',
      'Led API testing strategy',
    ],
  },
  {
    title: 'QA Engineer',
    meta: 'Previous Company • 2020 – 2022',
    bullets: [
      'Created Selenium automation suite',
      'Performed exploratory and regression testing',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.section
      ref={ref}
      id="experience"
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
        Experience
      </motion.h2>
      <div className="max-w-[700px] mx-auto space-y-10">
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 + index * 0.15, duration: 0.5 }}
            className="mb-10"
          >
            <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
            <p className="text-slate-400 mb-3">{job.meta}</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
