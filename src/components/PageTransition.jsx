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
      // `behavior: 'instant'` is deliberate. The two-argument
      // window.scrollTo(0, 0) inherits `scroll-behavior: smooth` from
      // html, which made every route change animate a slow glide back
      // to the top — nearly a second from deep in a long page. A new
      // page should simply start at the top. Smooth scrolling is still
      // used for in-page #hash targets above, where it's wanted.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  )
}
