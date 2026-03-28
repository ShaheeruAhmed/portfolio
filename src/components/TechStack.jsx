import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techs = [
  "Playwright",
  "Cypress",
  "Selenium",
  "Git",
  "Python",
  "JavaScript",
  "GitHub",
  "Postman",
  "Semaphore CI",
  "GitHub Actions",
  "Appian",
  "UIPath",
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
        Testing Arsenal
      </motion.h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="glass-card rounded-xl p-6 text-white hover:text-accent transition-colors duration-300">
          <h3 class="text-xl font-semibold mb-3">Build Scalable Automation</h3>
          <p class="text-sm text-gray-300 mb-2">
            Cypress | Playwright | Selenium
          </p>
          <p class="text-xs text-gray-400">
            Framework Design • CI Integration • Maintainable Test Suites
          </p>
        </div>

        <div class="glass-card rounded-xl p-6 text-white hover:text-accent transition-colors duration-300">
          <h3 class="text-xl font-semibold mb-3">
            Validate APIs Before They Get Integrated
          </h3>
          <p class="text-sm text-gray-300 mb-2">Postman | RestAssured | Soap</p>
          <p class="text-xs text-gray-400">
            Contract Testing • Service Validation • API Automation
          </p>
        </div>

        <div class="glass-card rounded-xl p-6 text-white hover:text-accent transition-colors duration-300">
          <h3 class="text-xl font-semibold mb-3">
            Ensure Systems Scale Under Pressure
          </h3>
          <p class="text-sm text-gray-300 mb-2">JMeter | LoadRunner</p>
          <p class="text-xs text-gray-400">
            Load • Stress • Scalability Testing
          </p>
        </div>

        <div class="glass-card rounded-xl p-6 text-white hover:text-accent transition-colors duration-300">
          <h3 class="text-xl font-semibold mb-3">
            Drive Quality with Strategy
          </h3>
          <p class="text-sm text-gray-300 mb-2">
            Risk-Based Testing | Test Planning | Shift-Left Mindset
          </p>
          <p class="text-xs text-gray-400">
            Process Improvement • Coverage Optimization • Release Confidence •
            Data-Driven Decision Making
          </p>
        </div>

        <div class="glass-card rounded-xl p-6 text-white hover:text-accent transition-colors duration-300">
          <h3 class="text-xl font-semibold mb-3">Enable Continuous Delivery</h3>
          <p class="text-sm text-gray-300 mb-2">
            Jenkins | GitHub Actions | Semaphore CI
          </p>
          <p class="text-xs text-gray-400">
            Pipeline Integration • Fast Feedback Loops • Continuous Integration
          </p>
        </div>

        <div class="glass-card rounded-xl p-6 text-white hover:text-accent transition-colors duration-300">
          <h3 class="text-xl font-semibold mb-3">Push Testing with AI</h3>
          <p class="text-sm text-gray-300 mb-2">UiPath | Agentic Automation</p>
          <p class="text-xs text-gray-400">
            AI-Driven Testing • Smarter Automation • Process Efficiency
          </p>
        </div>
      </div>

      <p class="text-gray-400 mb-6 text-sm text-right mt-12">
        Tools change. Outcomes don't.
      </p>

      {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 max-w-4xl mx-auto">
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
      </div> */}
    </motion.section>
  );
}
