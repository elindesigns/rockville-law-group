import SealMark from './SealMark.jsx'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { trackEvent } from '../lib/analytics.js'
import './CTABand.css'

/** `funnel` ("consumer" | "attorney") tags the primary-button click event. */
export default function CTABand({
  eyebrow,
  title,
  zh,
  description,
  primary,
  secondary,
  className = '',
  funnel = 'consumer',
}) {
  const primaryEvent = funnel === 'attorney' ? 'attorney_coverage_click' : 'consumer_consultation_click'

  return (
    <section className={`section section--tight cta-band ${className}`.trim()}>
      <div className="container cta-band__inner">
        <SealMark tone="paper" size={30} className="cta-band__seal" />
        <Reveal>
          {eyebrow && <span className="eyebrow eyebrow--on-ink cta-band__eyebrow">{eyebrow}</span>}
          <h2 className="cta-band__title">{title}</h2>
          {zh && <p className="zh-label zh-label--on-ink cta-band__zh">{zh}</p>}
          {description && <p className="lede cta-band__lede">{description}</p>}
          <div className="cta-band__actions">
            {primary && (
              <Button
                to={primary.to}
                href={primary.href}
                variant="primary"
                onClick={() => trackEvent(primaryEvent, { title })}
              >
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button to={secondary.to} href={secondary.href} variant="outline-on-ink">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
