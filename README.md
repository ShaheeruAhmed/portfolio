# QA Engineer Portfolio

A hi-fi portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- **React 18** – UI components
- **Vite** – build tool and dev server
- **Tailwind CSS** – utility-first styling (custom palette: `#100c09`, `#2d201a`, `#a47864`)
- **Framer Motion** – scroll and hover animations, navbar hide/show
- **tsParticles** – subtle background particles

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Features

- Glassmorphism cards with backdrop blur
- Navbar hides on scroll down, reappears on scroll up
- Scroll-triggered section and card animations (Framer Motion `useInView`)
- Animated skill bars (0 → percent on scroll into view)
- Typing effect in hero
- Particle background (tsParticles)

The app lives under `src/`; `index.html` is the Vite entry point.
