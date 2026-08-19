import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

// Restrained fade/rise on route change — no exit animation, so
// navigation never feels delayed. Also owns scroll restoration: top
// of page on a plain route change, or smooth-scroll to the target
// element when the URL carries a #hash (e.g. /contact#consultation).
//
// The animation itself lives in PageTransition.css; keying the div on
// pathname remounts it per route so the keyframe replays.
export default function PageTransition({ children }) {
  const location = useLocation()

  useEffect(() => {
    // Read the motion preference at call time instead of subscribing to
    // it — this only affects the one-off scroll behaviour below.
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  )
}
