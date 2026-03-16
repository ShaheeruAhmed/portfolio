# How This Portfolio App Works

A plain-English guide to how your static page became a React app and what each part does.

---

## 1. Before vs After: What Actually Changed?

### Before (Static Site)

- **One big HTML file** (`index.html`) had everything: navbar, hero, sections, cards, skill bars.
- **One CSS file** (`style.css`) had all the styles.
- **One JS file** (`script.js`) had all the logic: typing effect, navbar hide/show, AOS, tsParticles, skill bar animation.
- The browser loaded the HTML, then the CSS, then the JS. The JS found elements by class/ID and changed them.

### After (React App)

- **One small HTML file** (`index.html`) only has a single empty `<div id="root">`. No navbar, no sections—nothing visible.
- **React** “draws” the whole page inside that `#root` div by running JavaScript that returns a tree of components (Navbar, Hero, About, etc.).
- **Each section is its own component** (its own file). Styling is done with **Tailwind** (utility classes in the JSX) plus a small **CSS** file. Animations use **Framer Motion** instead of AOS and custom JS.

So: the same *content* (navbar, hero, metrics, etc.) is still there, but it’s now built by React components instead of one big HTML file.

---

## 2. Who Is Responsible for What? (The “Cast of Characters”)

| Thing | Role |
|-------|------|
| **Browser** | Loads `index.html`, runs the script that starts the app, and displays whatever React tells it to draw. |
| **Vite** | Development server and build tool. When you run `npm run dev`, Vite serves the app, turns JSX into JS, and bundles everything. In production, `npm run build` creates optimized files. |
| **React** | Library that builds the UI. You describe the page as “components” (functions that return what the page should show). React updates the real HTML when data or state changes. |
| **Tailwind CSS** | Provides utility classes (e.g. `flex`, `p-6`, `text-accent`) so you style by adding class names in the JSX instead of writing lots of custom CSS. |
| **Framer Motion** | Library for animations. You use components like `<motion.div>` and options like `initial`, `animate`, `whileHover` instead of writing animation logic by hand. |
| **tsParticles** | Draws the floating particle background. We use its React wrapper so it runs when the app mounts. |

So:

- **Vite** = “runs and builds the app.”
- **React** = “builds the UI from components.”
- **Tailwind** = “styling via classes.”
- **Framer Motion** = “animations.”
- **tsParticles** = “particle background.”

---

## 3. The Order Things Run (Startup Flow)

When you open the app in the browser or run `npm run dev`, this is the order things happen:

1. **Browser loads `index.html`.**
   - It sees a single `<div id="root"></div>` and a script: `src="/src/main.jsx"`.

2. **Vite serves `main.jsx`** (and any imports it needs).
   - `main.jsx` is the **entry point** of the React app.

3. **`main.jsx` runs.**
   - It finds the DOM node with `id="root"`.
   - It tells React to “render” the `<App />` component into that node.
   - From now on, **React owns** everything inside `#root`. The rest of the page is built by React.

4. **React runs `App`.**
   - `App` returns the layout: particles container, `<Navbar />`, then `<main>` with `<Hero />`, `<About />`, etc.
   - For each of those tags, React runs the matching component function (Navbar, Hero, About, …) and draws what they return.
   - Some components use **state** (e.g. “is navbar hidden?”, “what’s the current typing index?”). When state changes, React re-runs those components and updates the screen.

So the chain is:

**index.html** → loads **main.jsx** → **main.jsx** renders **App** → **App** renders **Navbar, Hero, About, …** → the page you see.

---

## 4. File-by-File: What Each File Does

### Root (project folder)

| File | Purpose |
|------|--------|
| **index.html** | The only HTML the browser loads. Contains `<div id="root">` and the script tag that loads `src/main.jsx`. Nothing else is in the HTML; React fills `#root`. |
| **package.json** | Lists dependencies (React, Vite, Tailwind, Framer Motion, tsParticles) and scripts (`npm run dev`, `npm run build`). `npm install` uses this to install packages. |
| **vite.config.js** | Tells Vite to use the React plugin so it understands JSX and React. |
| **tailwind.config.js** | Tells Tailwind which files to scan for class names and defines your custom colors (e.g. `background`, `surface`, `accent`). |
| **postcss.config.js** | Lets PostCSS run Tailwind and Autoprefixer so Tailwind’s utilities work and CSS is prefixed for older browsers. |
| **.npmrc** | Forces this project to use the public npm registry so `npm install` works even if your global npm was set to a company registry. |

### `src/` folder

| File | Purpose |
|------|--------|
| **main.jsx** | **Entry point.** Imports React, `App`, and global CSS. Finds `document.getElementById('root')` and renders `<App />` inside it. Everything you see is rendered because of this file. |
| **App.jsx** | **Root component.** Composes the whole page: particle background (when ready), `<Navbar />`, and `<main>` with all sections (Hero, About, TechStack, Metrics, Experience, Projects, Contact). Holds the tsParticles options and the “particles ready” state. |
| **index.css** | Global styles: Tailwind directives (`@tailwind base/components/utilities`) and a few custom rules (e.g. body background, `.glass-card`). |

### `src/components/` folder

Each component is a **function** that returns JSX (HTML-like markup). React calls these functions and turns the JSX into real DOM updates.

| Component | Responsibility |
|-----------|----------------|
| **Navbar.jsx** | Top bar with logo “QA” and links (About, Tech, Metrics, etc.). Uses **state** and **scroll listener** to hide/show the bar when you scroll down/up (same behavior as the old script.js). Uses Framer Motion for the hide/show animation. |
| **Hero.jsx** | Top section: “Hello, I’m Your Name”, the rotating typing text, short description, and GitHub/LinkedIn buttons. The typing effect is implemented with **state** (`i`, `j`, `isDeleting`) and **useEffect** (same idea as the old script, but in React). |
| **About.jsx** | “About Me” section and short paragraph. Uses Framer Motion’s **useInView** to animate when the section scrolls into view. |
| **TechStack.jsx** | “Tech Stack” heading and the grid of glass cards (Selenium, Playwright, etc.). Each card is a `<motion.div>` with scroll-in and hover animations. |
| **Metrics.jsx** | “Key Metrics” and the skill bars. Uses **useInView** so when the section is visible, the bars animate from 0% to their target (60%, 70%, etc.) via Framer Motion’s `animate={{ width: ... }}`. |
| **Experience.jsx** | “Experience” and the job list (titles, dates, bullet points). Scroll-in animation with Framer Motion. |
| **Projects.jsx** | “QA Projects” and the three project cards. Same pattern: scroll-in and hover. |
| **Contact.jsx** | “Contact” plus short text and email. Scroll-in animation. |

So:

- **App.jsx** = “what sections exist and in what order.”
- **Each component** = “how one section looks and behaves (and who animates it).”

---

## 5. Important Concepts (Minimal Frontend View)

### Component

A **component** is a function that returns JSX (the HTML-like syntax inside JavaScript). For example, `Navbar` is a function; when React needs to draw the navbar, it calls `Navbar()` and uses what it returns. Components can be reused and nested (e.g. `App` uses `Hero`, `Hero` uses `<motion.section>`).

### State

**State** is data that can change over time and that the component “remembers.” When state changes, React re-runs the component and updates the UI. Examples:

- In **Navbar**: “is the navbar hidden?” (so it can slide up/down on scroll).
- In **Hero**: “which role are we on?” and “how many characters shown?” (for the typing effect).
- In **App**: “are particles ready?” (so we only render tsParticles after the engine is initialized).

State is created with **useState** and updated with the setter (e.g. `setHidden(true)`).

### JSX

**JSX** is the syntax that looks like HTML inside JavaScript (`<div className="...">`, `<Navbar />`). It gets compiled (by Vite) into normal JavaScript. Things to remember:

- Use `className` instead of `class` (because `class` is reserved in JS).
- Components that don’t have children can be written as `<ComponentName />`.

### Tailwind Classes

Instead of writing CSS in a separate file, you add class names to elements. For example:

- `flex` = display: flex
- `p-6` = padding
- `text-accent` = use the `accent` color from your theme
- `fixed inset-0` = position fixed, full screen

Tailwind’s build step sees these classes in your JSX/CSS and generates the actual CSS. Your custom colors are defined in `tailwind.config.js`.

### Framer Motion

You use **motion** components (e.g. `<motion.div>`) and pass:

- **initial** / **animate**: what the element looks like at start and after (e.g. opacity, y position).
- **transition**: duration, easing.
- **whileHover**: what happens on hover (e.g. lift up).
- **useInView**: hook that tells you when the element is in the viewport, so you can trigger animations on scroll.

So Framer Motion is “who” does the scroll and hover animations; React is “who” decides when to show which component.

---

## 6. Data Flow in One Sentence

**index.html** loads **main.jsx** → **main.jsx** renders **App** into `#root` → **App** renders **Navbar** and all section components → each component uses **state** and **Framer Motion** for behavior and animation → when state or scroll position changes, React re-renders the right parts and the page updates.

---

## 7. Quick Reference: “I want to change…”

| You want to… | Where to look |
|--------------|----------------|
| Change the page title | `index.html` (`<title>`) |
| Add/remove/reorder sections | `src/App.jsx` (the list of components inside `<main>`) |
| Change nav links | `src/components/Navbar.jsx` (the `links` array and the map over it) |
| Change hero text, typing roles, or buttons | `src/components/Hero.jsx` |
| Change colors (e.g. accent, background) | `tailwind.config.js` (`theme.extend.colors`) and/or `src/index.css` |
| Change global styles (e.g. body, glass card) | `src/index.css` |
| Change particle behavior | `src/App.jsx` (`particlesOptions`) |
| Change skill bar labels/percentages | `src/components/Metrics.jsx` (the `skills` array) |
| Change experience or projects content | `src/components/Experience.jsx` and `src/components/Projects.jsx` |

---

That’s the full picture: from a single static HTML page to a React app where **main.jsx** starts the app, **App.jsx** composes the page, and each **component** is responsible for one part of the UI and its behavior.
