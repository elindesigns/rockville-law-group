import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CTABand from '../components/CTABand.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { QuestionIcon, ArrowIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema, faqPageSchema } from '../lib/structuredData.js'
import { contact } from '../data/firm.js'
import './ServicePage.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Practice Areas', path: '/practice-areas' },
  { name: 'Escrow Services', path: '/escrow-services' },
]

const CATEGORIES = [
  {
    title: 'Business & Transaction Escrow',
    zh: '商业与交易托管',
    desc: 'Escrow arrangements for mergers, acquisitions, stock purchases, and other business agreements — holding funds or documents until closing conditions, such as due diligence or indemnification holdbacks, are satisfied.',
  },
  {
    title: 'Real Estate Escrow',
    zh: '房地产托管',
    desc: 'Serving as escrow agent for real estate transactions — holding earnest money, deeds, and closing funds until financing, inspection, and other contract contingencies are resolved.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Escrow Agreement',
    desc: 'The terms of the escrow — what is being held, the conditions for release, and each party’s responsibilities — are set out in writing as part of the underlying transaction.',
  },
  {
    step: '02',
    title: 'Funds or Documents Deposited',
    desc: 'The relevant funds, deeds, or other documents are deposited with the escrow agent.',
  },
  {
    step: '03',
    title: 'Conditions Verified',
    desc: 'The escrow agent confirms that the agreed-upon conditions — financing, inspection, closing requirements, or other contingencies — have been satisfied.',
  },
  {
    step: '04',
    title: 'Release',
    desc: 'Once conditions are met, the escrow agent releases the funds or documents according to the agreement.',
  },
]

const FAQS = [
  {
    q: 'Does Rockville Law Group provide escrow services?',
    a: 'Yes. Rockville Law Group serves as escrow agent for business and real estate transactions, holding funds or documents until the conditions of a deal are met.',
  },
  {
    q: 'What is escrow and how does it work?',
    a: 'Escrow is an arrangement where a neutral third party holds funds, documents, or property on behalf of the parties to a transaction, releasing them only once agreed-upon conditions have been satisfied. It protects both sides — neither party has to hand over money or documents before the deal is actually ready to close.',
  },
  {
    q: 'Is escrow only used in real estate transactions?',
    a: 'No. Escrow comes up in real estate closings, but it is also common in business transactions — mergers, acquisitions, stock purchases, and other agreements where funds or documents need to be held until closing conditions are met.',
  },
  {
    q: 'How do I set up an escrow arrangement?',
    a: `Escrow is typically set up as part of a larger transaction. The most direct way to discuss whether it fits a specific deal is to reach out directly — by phone at ${contact.phone} or by email at ${contact.email} — or schedule a consultation.`,
    aNode: (
      <>
        Escrow is typically set up as part of a larger transaction. The most direct way to discuss whether it fits
        a specific deal is to reach out directly — by phone at{' '}
        <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a> or by email at{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> — or schedule a consultation.
      </>
    ),
  },
  {
    q: 'Can escrow matters be handled in Mandarin Chinese?',
    a: 'Yes. Rockville Law Group offers consultations in both English and Mandarin Chinese.',
  },
]

export default function EscrowServices() {
  useDocumentTitle(
    'Escrow Services Attorney in New York | Rockville Law Group',
    'Escrow agent services in New York for business and real estate transactions — holding funds, deeds, or closing documents until financing, inspection, or other deal conditions are met — from attorney Li Weng in Flushing, New York.',
    { lang: 'en-US', alternatePath: '/zh/escrow-services' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Escrow Services</span>
          <h1 className="service-hero__title">Escrow Services for Business & Real Estate Transactions</h1>
          <p className="zh-label service-hero__zh">托管服务</p>
          <p className="lede service-hero__lede">
            Escrow protects both sides of a transaction — funds, documents, or property are held by a neutral third
            party until agreed-upon conditions are met. Rockville Law Group serves as escrow agent for business and
            real estate transactions in New York.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Areas of Focus" title="Escrow Services" zh="服务范围" />
          <div className="service-block">
            {CATEGORIES.map((c, i) => (
              <Reveal as="article" key={c.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">
                  {c.title} <span className="zh-label service-step__zh">{c.zh}</span>
                </h3>
                <p className="service-step__desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How It Works" title="How an Escrow Arrangement Typically Moves Forward" zh="一般办理流程" />
          <div className="service-block">
            {PROCESS.map((step, i) => (
              <Reveal as="article" key={step.step} delay={i * 0.05} className="service-step">
                <span className="service-step__index">{step.step}</span>
                <h3 className="service-step__title">{step.title}</h3>
                <p className="service-step__desc">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="A Related Practice" title="Escrow in Business Transactions" zh="商业交易中的托管事务" />
          <p className="lede lede--wide">
            Escrow arrangements often come up alongside business transactions — a merger, an acquisition, or a large
            contract.{' '}
            <Link to="/business-law">Rockville Law Group's business law practice</Link> works alongside its escrow
            services on these matters.
          </p>
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
              <h3>Setting up an escrow arrangement for a transaction?</h3>
              <p>Escrow is usually arranged as part of a larger deal — a consultation is the most direct way to talk through the details.</p>
            </div>
            <Button to="/contact#consultation" variant="outline">
              Schedule a Consultation <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Next Step"
        title="Discuss Your Escrow Matter"
        description="Escrow is usually tied to a specific transaction. Schedule a consultation to talk through yours with our team."
        primary={{ label: 'Discuss Your Escrow Matter', to: '/contact#consultation' }}
        secondary={{ label: 'Business & Corporate Law', to: '/business-law' }}
      />
    </>
  )
}
