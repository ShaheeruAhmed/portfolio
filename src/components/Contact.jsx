import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="contact"
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
        Let's Talk Quality
      </motion.h2>
      <motion.p
        className="text-center text-slate-300 mb-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        Got a tricky bug, scaling challenge, or just want to talk quality?
        Always open to interesting conversations and opportunities.
      </motion.p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <motion.p
          className="glass-card px-6 py-4 rounded-xl hover:text-accent transition"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <a
            href="mailto:shaheer.uddin@live.com"
            className="text-white hover:text-accent transition"
          >
            shaheer.uddin@live.com
          </a>
        </motion.p>
      </div>
    </motion.section>
  );
}
