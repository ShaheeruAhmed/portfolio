import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="about"
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
        Breaking Things. Building Confidence.
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-slate-300 text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        QA & Automation Engineer with 9+ years of experience and a relentless
        bug hunter who has made a career out of keeping developers just a little
        bit nervous. Experienced in domains like Banking, E-commerce, SaaS,
        Fintech, Insurance, and Reservation & Guest Experience, with hands-on
        expertise in manual, automation, API, and performance testing — because
        bugs don't discriminate, and neither should testing. Known for being
        detail-obsessed, product-driven, and quietly strategic in applying
        risk-based testing to focus on what truly matters. Well-versed in
        testing processes and always looking for ways to refine, streamline, and
        improve them — because good quality is great, but efficient quality is
        better. A collaborative team player who can step into leadership when
        needed, with a strong sense of ownership as the final quality
        gatekeeper. Recently diving into AI-driven and agentic automation
        (UiPath certified), always looking for smarter, faster ways to break
        things — so users don't have to.
      </motion.p>
    </motion.section>
  );
}
