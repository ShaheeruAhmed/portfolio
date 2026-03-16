import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Tech' },
  { href: '#metrics', label: 'Metrics' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const scrollThreshold = 80

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y <= scrollThreshold) {
        setHidden(false)
      } else if (y > lastScrollY) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: hidden ? '-100%' : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-[1000] flex justify-between items-center px-6 py-5 bg-surface md:px-10"
        style={{ pointerEvents: hidden ? 'none' : 'auto' }}
      >
        <span className="font-semibold text-lg">QA</span>
        <ul className="flex gap-6 list-none m-0 p-0">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white no-underline hover:text-accent transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </AnimatePresence>
  )
}
