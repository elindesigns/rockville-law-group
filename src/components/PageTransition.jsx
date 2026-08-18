import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

// Restrained fade/rise on route change — no exit animation, so
// navigation never feels delayed. Also owns scroll restoration: top
// of page on a plain route change, or smooth-scroll to the target
// element when the URL carries a #hash (e.g. /contact#consultation).
export default function PageTransition({ children }) {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash, reduceMotion])

  return (
    <motion.div
      key={location.pathname}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
