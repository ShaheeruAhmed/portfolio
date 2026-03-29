import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Projects() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

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
        Driving Quality at Scale
      </motion.h2>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface/80 border border-white/10 text-white flex items-center justify-center hover:bg-accent/40 transition-colors"
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-4 px-4"
        >
          <div className="w-[calc(50%-0.5rem)] flex-shrink-0 snap-start glass-card rounded-xl p-6 text-white hover:text-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">API Contract Testing</h3>

            <p className="text-sm text-gray-400 mb-3">
              Insurance | Pet Insurance Comparison
            </p>

            <p className="text-sm text-gray-300 mb-4">
              <a
                href="https://www.comparethemarket.com.au/pet/compare/"
                target="_blank"
                className="text-accent hover:text-white transition-colors"
              >
                www.comparethemarket.com.au/pet-insurance/
              </a>
            </p>

            <div className="text-xs text-gray-400 mb-3">
              <strong>Impact:</strong> Increased confidence in the journey,
              reduced the number of manual tests.
            </div>

            <div className="text-xs text-gray-400 mb-3">
              <strong>What I Did:</strong> Designed automation API framework,
              led test strategy, introduced API contract testing, ensured
              end-to-end testing of the Journey.
            </div>

            <div className="text-xs text-gray-500">Postman • Sauce Labs</div>
          </div>

          <div className="w-[calc(50%-0.5rem)] flex-shrink-0 snap-start glass-card rounded-xl p-6 text-white hover:text-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">
              E2E Automation Framework
            </h3>

            <p className="text-sm text-gray-400 mb-3">
              Reservation | Booking Experience | Regression Testing
            </p>

            <p className="text-sm text-gray-300 mb-4">
              <a
                href="https://www.tablecheck.com/en/japan"
                target="_blank"
                className="text-accent hover:text-white transition-colors"
              >
                tablecheck.com/en/japan
              </a>
            </p>

            <div className="text-xs text-gray-400 mb-3">
              <strong>Impact:</strong> Increased confidence in the booking
              experience, reduced the number of manual tests and efforts in
              regression testing, improved the release cycle.
            </div>

            <div className="text-xs text-gray-400 mb-3">
              <strong>What I Did:</strong> Deisnged and maintained automation
              framework to collaborate between 3 systems from an end-to-end
              booking perspective of different restaurants in Japan including
              API calls and payments tests under different scenarios.
            </div>

            <div className="text-xs text-gray-500">
              Python • Pytest • Playwright • Semaphore CI
            </div>
          </div>

          <div className="w-[calc(50%-0.5rem)] flex-shrink-0 snap-start glass-card rounded-xl p-6 text-white hover:text-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">Tests Migration</h3>

            <p className="text-sm text-gray-400 mb-3">
              Integration tests | Guests Experience | Component Tests
            </p>

            <p className="text-sm text-gray-300 mb-4">
              <a
                href="https://www.tablecheck.com/en/japan"
                target="_blank"
                className="text-accent hover:text-white transition-colors"
              >
                tablecheck.com/en/japan
              </a>
            </p>

            <div className="text-xs text-gray-400 mb-3">
              <strong>Impact:</strong> Helped the development team to migrate
              the tests to the new framework and improve the quality of the
              tests under the front-end repository.
            </div>

            <div className="text-xs text-gray-400 mb-3">
              <strong>What I Did:</strong> Redeisgned and migrated the tests
              formerly written in Cypress to Playwright to improve the
              performance and the quality of the tests.
            </div>

            <div className="text-xs text-gray-500">
              Playwright • Cypress • Typescript
            </div>
          </div>

          <div className="w-[calc(50%-0.5rem)] flex-shrink-0 snap-start glass-card rounded-xl p-6 text-white hover:text-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">
              11.11 Campaign Leadership
            </h3>

            <p className="text-sm text-gray-400 mb-3">
              E-commerce | Payment Gateway | Load Testing
            </p>

            <p className="text-sm text-gray-300 mb-4">
              <a
                href="https://www.daraz.pk/#?"
                target="_blank"
                className="text-accent hover:text-white transition-colors"
              >
                daraz.pk/
              </a>
            </p>

            <div className="text-xs text-gray-400 mb-3">
              <strong>Impact:</strong> Smooth checkout with no errors or delays.
              Best campaign from a technical perspective in the past 5 years.
            </div>

            <div className="text-xs text-gray-400 mb-3">
              <strong>What I Did:</strong> Led the team to ensure the stability
              of the payment gateway and the load testing of the e-commerce
              platform during the 11.11 campaign. Lead the team to ensure a
              complete regression of the system and payment integration checks,
              along with all the new games introduced in the campaign. Performed
              load and spike testing to ensure the system can handle the high
              traffic and spike hours, and ensure the system is stable and can
              handle the high traffic.
            </div>

            <div className="text-xs text-gray-500">
              JMeter • LoadRunner • Manual Testing
            </div>
          </div>
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface/80 border border-white/10 text-white flex items-center justify-center hover:bg-accent/40 transition-colors"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </motion.section>
  );
}
