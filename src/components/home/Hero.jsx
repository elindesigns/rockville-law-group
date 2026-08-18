import { motion, useReducedMotion } from 'framer-motion'
import SealMark from '../SealMark.jsx'
import Button from '../Button.jsx'
import TrustBar from '../shared/TrustBar.jsx'
import Photo from '../shared/Photo.jsx'
import { firm, ctas } from '../../data/firm.js'
import { photos } from '../../data/images.js'
import { trackEvent } from '../../lib/analytics.js'
import './Hero.css'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__text">
          <SealMark tone="ink" size={40} className="hero__seal" />

          <span className="eyebrow hero__eyebrow">{firm.legalName}</span>

          <h1 className="hero__title">New York Law Firm</h1>
          <p className="zh-label hero__title-zh">{firm.heroTitleZh}</p>

          <motion.div
            className="hero__rule"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          />

          <p className="lede hero__lede">
            Representing individuals, families, and businesses in New York across immigration, family law, estate
            planning, and business matters — with professional collaboration available for attorneys.
          </p>

          <div className="hero__actions">
            <Button
              to={ctas.consultation.to}
              variant="primary"
              onClick={() => trackEvent('consumer_consultation_click', { source: 'homepage_hero' })}
            >
              {ctas.consultation.label}
            </Button>
            <Button to="/for-attorneys" variant="outline">
              For Attorneys
            </Button>
          </div>

          <TrustBar tone="light" className="hero__trust" />
        </div>

        <div className="hero__media">
          <Photo photo={photos.hero} aspect="3 / 4" sizes="(max-width: 900px) 100vw, 42vw" priority className="hero__photo" />
          <div className="scrim-side hero__media-scrim" aria-hidden="true" />
          <span className="photo-caption hero__caption">New York City</span>
        </div>
      </div>
    </section>
  )
}
