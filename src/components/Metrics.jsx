import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { label: 'Test suites built', percent: 60 },
  { label: 'Test cases automated', percent: 70 },
  { label: 'API test coverage', percent: 65 },
  { label: 'CI pipeline runs', percent: 75 },
]

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      id="metrics"
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
        Key Metrics
      </motion.h2>
      <div className="max-w-[600px] mx-auto space-y-7">
        {skills.map(({ label, percent }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 + index * 0.08 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-200">{label}</span>
              <span className="text-accent font-semibold">{percent}%</span>
            </div>
            <div className="h-2.5 bg-surface rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-[#8b6354]"
                initial={{ width: 0 }}
                animate={inView ? { width: `${percent}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
