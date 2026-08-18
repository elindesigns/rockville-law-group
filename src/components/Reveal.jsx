import { motion, useReducedMotion } from 'framer-motion'

// Shared scroll-reveal wrapper. Respects prefers-reduced-motion; keep
// use sparingly (entrance only, no scroll-linked scrubbing).
export default function Reveal({ children, delay = 0, y = 16, as = 'div', className, ...rest }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  if (reduceMotion) {
    const Static = as
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    )
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
