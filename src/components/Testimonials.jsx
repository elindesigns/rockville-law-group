import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { testimonials } from '../data/testimonials.js'
import './Testimonials.css'

/**
 * Renders nothing until real, verified testimonials exist in
 * data/testimonials.js — safe to mount on any page ahead of time.
 */
export default function Testimonials({ className = '' }) {
  if (!testimonials.length) return null

  return (
    <section className={`section testimonials ${className}`.trim()}>
      <div className="container">
        <SectionHeading eyebrow="From Past Clients" title="What Clients Say" zh="客户评价" align="center" />
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.attribution} delay={i * 0.06} className="card testimonials__item">
              <blockquote className="testimonials__quote">&ldquo;{t.quote}&rdquo;</blockquote>
              {t.quoteZh && <p className="zh-label testimonials__quote-zh">{t.quoteZh}</p>}
              <figcaption className="testimonials__attribution">
                {t.attribution}
                {t.matterType && <span className="testimonials__matter"> · {t.matterType}</span>}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
