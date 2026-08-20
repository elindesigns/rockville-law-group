import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import ContactLink from '../components/shared/ContactLink.jsx'
import ConsultationForm from '../components/ConsultationForm.jsx'
import WhatHappensNext from '../components/WhatHappensNext.jsx'
import LocationMap from '../components/LocationMap.jsx'
import WeChatCard from '../components/WeChatCard.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { BriefcaseIcon, ArrowIcon, PinIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { legalServiceSchema, breadcrumbSchema } from '../lib/structuredData.js'
import { contact, offices, attorney, disclaimer, hours } from '../data/firm.js'
import headshot from '../assets/li-weng-headshot.jpg'
import './Contact.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]

export default function Contact() {
  useDocumentTitle(
    'Contact | Rockville Law Group, Flushing, New York',
    'Contact Rockville Law Group in Flushing, Queens to schedule a consultation about an immigration, family law, estate planning, or business matter, or reach out about attorney hearing coverage.',
    { lang: 'en-US', alternatePath: '/zh/contact' },
  )
  useStructuredData([legalServiceSchema(), breadcrumbSchema(BREADCRUMB_ITEMS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section section--tight contact-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Contact</span>
          <h1 className="contact-hero__title">Contact Rockville Law Group</h1>
          <p className="zh-label contact-hero__zh">联系 Rockville Law Group</p>
          <p className="lede contact-hero__lede">
            Reach out to schedule a consultation about your immigration, family law, estate planning, or business
            matter. Attorneys seeking hearing coverage can head straight to the{' '}
            <Button to="/for-attorneys" variant="quiet">
              For Attorneys page
            </Button>
            .
          </p>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-main__grid">
          <Reveal className="contact-info">
            <div className="contact-info__attorney">
              <img
                src={headshot}
                alt={`${attorney.name}, ${attorney.formalTitle}`}
                className="photo-frame photo-frame--md contact-info__attorney-photo"
              />
              <div>
                <p className="contact-info__attorney-name">{attorney.name}</p>
                <p className="contact-info__attorney-title">{attorney.formalTitle}</p>
                <div className="contact-info__attorney-links">
                  <a href={attorney.profiles.justia} target="_blank" rel="noreferrer">
                    Justia Profile ↗
                  </a>
                  <a href={attorney.profiles.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

            <h2 className="contact-info__heading">Get in Touch</h2>
            <ul className="contact-info__list">
              <li>
                <ContactLink type="phone" value={contact.phone} />
              </li>
              <li>
                <ContactLink type="phone" value={contact.phoneSecondary} />
              </li>
              <li>
                <ContactLink type="email" value={contact.email} />
              </li>
              <li>
                <ContactLink type="address" value={offices[0].address} />
              </li>
            </ul>

            {/* Stated visibly because openingHoursSpecification is
                emitted in the LegalService schema — structured data has
                to match what a visitor can actually see on the page. */}
            <h3 className="contact-info__subheading">Office Hours</h3>
            <p className="contact-info__hours">{hours.label}</p>

            <h3 className="contact-info__subheading">Consultation Methods</h3>
            <ul className="contact-info__tags">
              {attorney.consultationMethods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            <div className="contact-info__attorney-card">
              <BriefcaseIcon />
              <div>
                <h3>Are you an attorney?</h3>
                <p>For hearing coverage or professional collaboration requests, visit the For Attorneys page.</p>
                <Button to="/for-attorneys" variant="quiet">
                  Go to the For Attorneys Page <ArrowIcon width={16} height={16} />
                </Button>
              </div>
            </div>

            <WeChatCard />

            <p className="contact-info__disclaimer">{disclaimer}</p>
          </Reveal>

          <Reveal delay={0.1} id="consultation" className="contact-form-wrap">
            <SectionHeading eyebrow="Consultation" title="Schedule a Consultation" zh="预约咨询" />
            <ConsultationForm />
          </Reveal>
        </div>
      </section>

      <WhatHappensNext />

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Location" title="Our Office" zh="我们的办公室" icon={PinIcon} />
          <LocationMap />
        </div>
      </section>
    </>
  )
}
