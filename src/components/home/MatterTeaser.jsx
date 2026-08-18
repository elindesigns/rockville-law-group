import SectionHeading from '../SectionHeading.jsx'
import Reveal from '../Reveal.jsx'
import Button from '../Button.jsx'
import SealMark from '../SealMark.jsx'
import Photo from '../shared/Photo.jsx'
import { ArrowIcon } from '../shared/Icons.jsx'
import './MatterTeaser.css'

function TeaserBody({ eyebrow, title, zh, description, tags, note, cta, secondaryCta, tone }) {
  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={title} zh={zh} onInk={tone === 'ink'} />
      <p className={`matter-teaser__desc ${tone === 'ink' ? 'matter-teaser__desc--on-ink' : ''}`}>{description}</p>
      {tags && (
        <ul className="matter-teaser__tags">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      {note && <p className="field-note matter-teaser__note">{note}</p>}
      {(cta || secondaryCta) && (
        <div className="matter-teaser__actions">
          {cta && (
            <Button to={cta.to} variant="quiet" className="matter-teaser__cta">
              {cta.label} <ArrowIcon width={16} height={16} />
            </Button>
          )}
          {secondaryCta && (
            <Button to={secondaryCta.to} variant={tone === 'ink' ? 'outline-on-ink' : 'outline'} size="sm">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      )}
    </>
  )
}

export default function MatterTeaser({
  eyebrow,
  title,
  zh,
  markZh,
  description,
  tags,
  note,
  cta,
  secondaryCta,
  photo,
  reverse = false,
  tone = 'default',
}) {
  const toneClass = tone === 'deep' ? 'section--deep' : tone === 'ink' ? 'section--ink' : ''

  // Full-bleed variant: the photograph runs edge-to-edge to the
  // viewport, not boxed inside the container — a large, unframed
  // image reads as architecture rather than an illustration card.
  if (photo) {
    return (
      <section className={`section matter-teaser matter-teaser--bleed ${toneClass}`}>
        <div className={`matter-teaser__bleed-grid ${reverse ? 'matter-teaser__bleed-grid--reverse' : ''}`}>
          <div className="matter-teaser__bleed-content">
            <TeaserBody eyebrow={eyebrow} title={title} zh={zh} description={description} tags={tags} note={note} cta={cta} secondaryCta={secondaryCta} tone={tone} />
          </div>
          <Reveal as="div" delay={0.1} className="matter-teaser__bleed-media">
            <Photo photo={photo} aspect="4 / 5" sizes="(max-width: 900px) 100vw, 46vw" />
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className={`section matter-teaser ${toneClass}`}>
      <div className={`container matter-teaser__inner ${reverse ? 'matter-teaser__inner--reverse' : ''}`}>
        <div className="matter-teaser__content">
          <TeaserBody eyebrow={eyebrow} title={title} zh={zh} description={description} tags={tags} note={note} cta={cta} secondaryCta={secondaryCta} tone={tone} />
        </div>
        <Reveal className="matter-teaser__mark" delay={0.15}>
          <SealMark tone="ink" size={64} className="matter-teaser__mark-seal" />
          {markZh && <span className="matter-teaser__mark-zh">{markZh}</span>}
        </Reveal>
      </div>
    </section>
  )
}
