import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import TrustBar from '../components/shared/TrustBar.jsx'
import JurisdictionDisplay from '../components/JurisdictionDisplay.jsx'
import AttorneyCoverageForm from '../components/AttorneyCoverageForm.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { QuestionIcon, ArrowIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema, faqPageSchema } from '../lib/structuredData.js'
import { attorney, contact, hearingCoverage } from '../data/firm.js'
import './ServicePage.css'
import './ForAttorneys.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'For Attorneys', path: '/for-attorneys' },
]

const FAQS = [
  {
    q: 'What types of hearings can you cover?',
    a: 'Individual (merits) hearings, master calendar hearings, and BIA matters, subject to scope, timing, and availability for the specific court and case.',
  },
  {
    q: 'Which courts do you appear in?',
    a: 'SDNY, EDNY, Maryland federal court, New York state court, and D.C. state court. See the jurisdictions section above for the distinction between courts of appearance and bar admission.',
  },
  {
    q: 'Are remote appearances available?',
    a: "Remote appearance is available for qualifying matters, subject to the specific court's rules and authorization, see the note on remote hearings above for details.",
  },
  {
    q: 'How do I request coverage?',
    a: `Use the request form below, or reach out directly by phone at ${contact.phone} or by email at ${contact.email}. Coverage is confirmed case by case, subject to scope, timing, and availability.`,
    aNode: (
      <>
        Use the request form below, or reach out directly by phone at{' '}
        <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a> or by email at{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>. Coverage is confirmed case by case, subject to
        scope, timing, and availability.
      </>
    ),
  },
]

export default function ForAttorneys() {
  useDocumentTitle(
    // "Per diem" is the term attorneys actually use for this service;
    // searches for "hearing coverage" are read by Google as consumer
    // removal-defense intent, which is not this page's audience.
    'Per Diem Immigration Attorney: Hearing Coverage | Rockville Law Group',
    'Per diem immigration court appearances for attorneys: individual, master calendar, and BIA hearings, with remote appearance for qualifying matters. Covering SDNY, EDNY, and other courts.',
    { lang: 'en-US', alternatePath: '/zh/attorney-hearing-coverage' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section section--ink for-attorneys-hero">
        <div className="container">
          <span className="eyebrow eyebrow--on-ink">For Attorneys</span>
          <h1 className="for-attorneys-hero__title">Immigration Court Coverage for Attorneys</h1>
          <p className="zh-label zh-label--on-ink for-attorneys-hero__zh">需要移民法庭出庭协助？</p>
          <p className="lede lede--wide for-attorneys-hero__lede">
            Rockville Law Group provides per diem special appearance coverage for individual hearings, master
            calendar hearings, and BIA matters, including in SDNY and EDNY, for attorneys who need another
            immigration attorney to appear on a specific hearing.
          </p>
          <div className="for-attorneys-hero__actions">
            <Button href="#request-coverage" variant="primary">
              Request Hearing Coverage
            </Button>
            <Button to="/about" variant="outline-on-ink">
              Li Weng's Background
            </Button>
          </div>
          <TrustBar className="for-attorneys-hero__trust" />
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Coverage Services" title="Remote Immigration Court Hearings" zh="远程移民法庭听证" />
          <ul className="for-attorneys__hearing-list">
            {hearingCoverage.remoteHearingTypes.map((h, i) => (
              <Reveal as="li" key={h} delay={i * 0.05} className="for-attorneys__hearing-chip">
                {h}
              </Reveal>
            ))}
          </ul>
          <p className="field-note for-attorneys__caveat">{hearingCoverage.remoteCaveat}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Admissions vs. Appearance"
            title="Bar Admissions &amp; Courts of Appearance"
            zh="执业资格与出庭法院"
            align="center"
          />
          <JurisdictionDisplay />
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="How It Works" title="The Coverage Request Process" zh="代理申请流程" />
          <div className="service-block for-attorneys__process">
            {hearingCoverage.process.map((step, i) => (
              <Reveal as="article" key={step.step} delay={i * 0.05} className="service-step">
                <span className="service-step__index">{step.step}</span>
                <h3 className="service-step__title">{step.title}</h3>
                <p className="service-step__desc">{step.description}</p>
              </Reveal>
            ))}
          </div>
          <p className="field-note for-attorneys__caveat">
            Coverage is confirmed case by case, subject to scope, timing, and availability. Submitting a request does
            not guarantee acceptance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Credentials" title="Why Attorneys Work With Rockville Law Group" zh="律师选择我们的理由" />
          <div className="service-block service-block--2col">
            <Reveal className="card about-credentials__card">
              <h3>
                Experience &amp; Admissions <span className="zh-label about-credentials__card-zh">经验与资格</span>
              </h3>
              <ul>
                <li>{attorney.yearsExperience} years of legal experience</li>
                {attorney.bar.map((b) => (
                  <li key={b.jurisdiction}>
                    Admitted, {b.jurisdiction} <span className="about-credentials__since">since {b.since}</span>
                  </li>
                ))}
                {attorney.federalCourts.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06} className="card about-credentials__card">
              <h3>
                Verify Directly <span className="zh-label about-credentials__card-zh">直接核实</span>
              </h3>
              <ul>
                <li>
                  <a href={attorney.profiles.justia} target="_blank" rel="noreferrer">
                    Justia Attorney Profile ↗
                  </a>
                </li>
                <li>
                  <a href={attorney.profiles.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn Profile ↗
                  </a>
                </li>
                <li>{attorney.languages.join(' · ')}</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section service-faq">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            zh="常见问题"
            align="center"
            icon={QuestionIcon}
          />
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="court-connector card">
            <div>
              <h3>New to requesting coverage from another firm?</h3>
              <p>Read a fuller walkthrough of how coverage requests, scope, and remote appearance typically work.</p>
            </div>
            <Button to="/resources/immigration-court-hearing-coverage-guide" variant="outline">
              How Hearing Coverage Works <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="request-coverage" className="section section--deep for-attorneys__form-section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Request Coverage"
            title="Request Hearing Coverage"
            zh="申请出庭代理"
            lede="Share the basics and Rockville Law Group will follow up to discuss availability and scope."
            align="center"
          />
          <AttorneyCoverageForm />
        </div>
      </section>
    </>
  )
}
