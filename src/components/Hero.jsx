import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "Full-Stack QA Engineer",
  "Test Automation Architect",
  "Quality Engineering Advocate",
  "API & Integration Testing Specialist",
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[i];
    if (!isDeleting && j === currentRole.length) {
      const pause = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pause);
    }
    if (isDeleting && j === 0) {
      setIsDeleting(false);
      setI((prev) => (prev + 1) % roles.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        if (isDeleting) setJ((prev) => prev - 1);
        else setJ((prev) => prev + 1);
      },
      isDeleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [i, j, isDeleting]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hello, I'm <span className="text-accent">Shaheer</span>
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl text-accent font-semibold min-h-[2rem] mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        data-testid="typewriter"
      >
        {roles[i].slice(0, j)}
      </motion.h2>
      <motion.p
        className="max-w-xl text-slate-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Engineering quality into every stage of delivery — from code to
        customer.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://github.com/ShaheeruAhmed"
          className="text-accent hover:text-white transition-colors"
          data-testid="github-logo"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/shaheeruddin/"
          className="text-accent hover:text-white transition-colors"
          data-testid="linkedin-logo"
        >
          <FaLinkedin size={28} />
        </a>
      </motion.div>
    </motion.section>
  );
}
