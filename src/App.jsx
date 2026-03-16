import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const particlesOptions = {
  fullScreen: false,
  background: { color: "transparent" },
  particles: {
    number: { value: 45 },
    color: { value: "#a47864" },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      random: true,
      straight: false,
    },
    size: { value: { min: 1, max: 2.5 } },
    opacity: { value: { min: 0.2, max: 0.5 } },
    shape: { type: "circle" },
  },
  interactivity: { events: { onHover: { enable: false } }, modes: {} },
};

export default function App() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        aria-hidden="true"
      >
        {particlesReady && (
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="w-full h-full"
          />
        )}
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Metrics />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
