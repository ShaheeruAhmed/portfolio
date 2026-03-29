import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const jobs = [
  {
    title: "Senior Test Automation Engineer",
    meta: "Tablecheck • 2022 - Present",
    bullets: [
      "Led the migration of frontend test suites from Cypress to Playwright (TypeScript), significantly improving CI/CD performance and test execution speed.",
      "Designed and maintained scalable automation for regression and API testing, ensuring reliability across monolithic backend systems.",
      "Collaborated with product owners to define clear acceptance criteria and validate high-risk user flows through targeted testing strategies.",
    ],
  },
  {
    title: "QA Lead",
    meta: "Daraz - AliBaba • 2021 - 2022",
    bullets: [
      "Owned QA strategy across payments and digital platforms, ensuring reliability of critical transaction flows and integrations.",
      "Drove risk analysis and cross-team coordination, working closely with engineering, product, and finance teams to validate impact on payment systems and user journeys.",
      "Integrated and validated digital onboarding flows and third-party payment wallets, improving end-to-end customer experience.",
      "Led a team of 4 engineers and mentored junior engineers on automation frameworks (Cypress, BDD) and QA best practices.",
    ],
  },
  {
    title: "QA Specialist + Product Manager",
    meta: "Maestroconference / VoiceVoice • 2018 - 2021",
    bullets: [
      "Led QA processes across releases and sprints and a team of 3 QA engineers, ensuring structured delivery and consistent product quality.",
      "Built and maintained a scalable automation framework (POM) using Python, improving test coverage and reducing manual effort.",
      "Contributed to product design and validation, aligning user expectations with functional delivery.",
    ],
  },
  {
    title: "SQA Engineer",
    meta: "Avanza Solutions • 2017 - 2018",
    bullets: [
      "Designed and executed test strategies, ensuring stability of banking and payment systems.",
      "Responsible to handle test activities at two of the major banks in Pakistan.",
      "Collaborated cross-functionally with product, development, and support teams to deliver reliable financial products, unblocking issues and maintaining quality across critical user journeys.",
      "Applied early-stage requirement analysis and risk-based testing to validate core banking features such as transactions, integrations, and customer workflows.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
        Where I've Delivered Value
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
  );
}
