import { useEffect, useRef, useState } from 'react'
import './Reveal.css'

// Shared scroll-reveal wrapper. Entrance only — no scroll-linked
// scrubbing. Previously built on framer-motion, which pulled its whole
// layout-projection engine into the entry bundle for what is really a
// fade-and-rise; this does the same job with an IntersectionObserver
// and a CSS class, and respects prefers-reduced-motion via Reveal.css.
export default function Reveal({ children, delay = 0, y = 16, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // No IntersectionObserver (very old browser): show immediately
    // rather than leaving content stuck at opacity 0.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        // `top < 0` catches anything already scrolled past — e.g. a
        // deep link that lands mid-page, or a fast scroll. Without it
        // those elements would sit at opacity 0 forever.
        if (entries.some((entry) => entry.isIntersecting || entry.boundingClientRect.top < 0)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      // Only the bottom edge is inset, so an element has to rise a
      // little way into view before it animates. Insetting all four
      // edges (the obvious reading of framer's `margin: '-80px'`) left
      // content stranded invisible near the fold.
      { rootMargin: '0px 0px -80px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}s`, '--reveal-y': `${y}px` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
