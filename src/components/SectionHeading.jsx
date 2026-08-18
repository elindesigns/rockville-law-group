import Reveal from './Reveal.jsx'
import './SectionHeading.css'

export default function SectionHeading({
  eyebrow,
  title,
  zh,
  lede,
  align = 'left',
  onInk = false,
  as: Heading = 'h2',
  icon: Icon,
  className = '',
}) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow && (
        <div className={`eyebrow-line ${align === 'center' ? 'eyebrow-line--center' : ''}`}>
          {Icon && <Icon className="section-heading__icon" aria-hidden="true" />}
          <span className={`eyebrow ${onInk ? 'eyebrow--on-ink' : ''}`}>{eyebrow}</span>
        </div>
      )}
      <Heading className={`section-heading__title ${onInk ? 'section-heading__title--on-ink' : ''}`}>{title}</Heading>
      {zh && <p className={`zh-label section-heading__zh ${onInk ? 'zh-label--on-ink' : ''}`}>{zh}</p>}
      {lede && <p className="lede section-heading__lede">{lede}</p>}
    </Reveal>
  )
}
