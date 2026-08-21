import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CTABand from '../components/CTABand.jsx'
import Testimonials from '../components/Testimonials.jsx'
import JurisdictionDisplay from '../components/JurisdictionDisplay.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { personSchema, breadcrumbSchema } from '../lib/structuredData.js'
import { attorney } from '../data/firm.js'
import headshot from '../assets/li-weng-headshot.jpg'
import './About.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]

export default function About() {
  useDocumentTitle(
    'Li Weng, New York Attorney | Rockville Law Group',
    "Li Weng is the founding attorney of Rockville Law Group LLC in Flushing, New York, with 14+ years of experience in immigration, family, estate planning, and business law. Admitted in New York and D.C.; fluent in English and Mandarin Chinese.",
    { lang: 'en-US', alternatePath: '/zh/about' },
  )
  useStructuredData([personSchema(), breadcrumbSchema(BREADCRUMB_ITEMS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <span className="eyebrow">About</span>
            <h1 className="about-hero__title">{attorney.name}</h1>
            <p className="about-hero__subtitle">{attorney.formalTitle}</p>
            <p className="zh-label about-hero__zh">创始合伙人</p>
            <p className="lede about-hero__lede">
              Li Weng practices from Rockville Law Group's office in Flushing, Queens, representing individuals,
              families, and businesses throughout New York City and beyond.
            </p>
          </div>
          <Reveal delay={0.1} className="about-hero__media">
            <img
              src={headshot}
              alt={`${attorney.name}, ${attorney.formalTitle}`}
              className="photo-frame photo-frame--lg about-hero__photo"
            />
          </Reveal>
        </div>
      </section>

      <section className="section about-profile">
        <div className="container container--narrow">
          <Reveal>
            {attorney.bio.map((paragraph, i) => (
              <p key={i} className="about-profile__paragraph">
                {paragraph}
              </p>
            ))}
            <div className="about-profile__links">
              <Button href={attorney.profiles.justia} variant="outline">
                View Justia Profile
              </Button>
              <Button href={attorney.profiles.linkedin} variant="outline">
                View LinkedIn
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep about-credentials">
        <div className="container">
          <SectionHeading eyebrow="Credentials" title="Bar Admissions &amp; Background" zh="资历与背景" align="center" />

          <JurisdictionDisplay />

          <div className="about-credentials__grid about-credentials__grid--secondary">
            <Reveal as="div" delay={0.1} className="card about-credentials__card">
              <h3>
                Education <span className="zh-label about-credentials__card-zh">教育背景</span>
              </h3>
              <ul>
                {attorney.education.map((e) => (
                  <li key={e.degree + e.school}>
                    {e.degree}, {e.school}
                    {e.location ? `, ${e.location}` : ''} <span className="about-credentials__since">{e.year}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="div" delay={0.15} className="card about-credentials__card">
              <h3>
                Languages <span className="zh-label about-credentials__card-zh">语言</span>
              </h3>
              <ul>
                {attorney.languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="div" delay={0.2} className="card about-credentials__card about-credentials__card--wide">
              <h3>
                Practice Areas <span className="zh-label about-credentials__card-zh">执业领域</span>
              </h3>
              <ul className="about-credentials__tags">
                {attorney.practiceAreas.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTABand
        eyebrow="Work With Li"
        title="Schedule a Consultation"
        zh="预约咨询"
        description="Discuss your legal matter directly with Li Weng, or reach out about attorney hearing coverage."
        primary={{ label: 'Schedule a Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'For Attorneys', to: '/for-attorneys' }}
      />
    </>
  )
}
