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
import './ServicePage.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Practice Areas', path: '/practice-areas' },
  { name: 'Business & Corporate Law', path: '/business-law' },
]

const CATEGORIES = [
  {
    title: 'Formation & Growth',
    zh: '公司设立与发展',
    desc: 'Business formation and franchising matters for owners starting or expanding a business in New York.',
  },
  {
    title: 'Contracts & Transactions',
    zh: '合同与交易',
    desc: 'Business contracts, business finance matters, and mergers and acquisitions. The agreements that govern how a business operates and grows.',
  },
  {
    title: 'Disputes & Dissolution',
    zh: '争议与解散',
    desc: 'Business litigation, partnership and shareholder disputes, and business dissolution when a business relationship needs to be resolved or wound down.',
  },
]

const FAQS = [
  {
    q: 'What business entity should I form?',
    a: 'The right structure (an LLC, corporation, partnership, or another entity) depends on the specific business, its owners, and its goals. A consultation can help clarify the options for a particular business.',
  },
  {
    q: 'Do you review contracts before I sign them?',
    a: 'Yes. Rockville Law Group reviews and negotiates business contracts for clients, and can also draft agreements for a new or existing business relationship.',
  },
  {
    q: 'What happens in a partnership or shareholder dispute?',
    a: 'These disputes vary widely depending on the governing documents, the relationship between the parties, and what each side is seeking, options can range from negotiation to litigation. A consultation is the best way to evaluate a specific situation.',
  },
]

export default function BusinessLaw() {
  useDocumentTitle(
    'Business Lawyer in New York | Rockville Law Group',
    'Business and corporate law in New York (formation, contracts, mergers and acquisitions, and partnership and shareholder disputes) from attorney Li Weng in Flushing, New York.',
    { lang: 'en-US', alternatePath: '/zh/business-law' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Business & Corporate Law</span>
          <h1 className="service-hero__title">Business & Corporate Lawyer in Queens, New York</h1>
          <p className="zh-label service-hero__zh">商业与公司法</p>
          <p className="lede service-hero__lede">
            Rockville Law Group advises business owners in New York from formation through the transactions,
            contracts, and occasional disputes that come with running a business.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Areas of Focus" title="Business Law Services" zh="服务范围" />
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
        <div className="container container--narrow">
          <SectionHeading eyebrow="A Related Practice" title="Securities Matters in Business Transactions" zh="交易中的证券事务" />
          <p className="lede lede--wide">
            Some business transactions (raising capital, bringing on new investors, or restructuring ownership)
            also involve securities law considerations.{' '}
            <Link to="/ipo-securities">Rockville Law Group's securities law practice</Link> works alongside its
            business law practice on these matters.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="A Related Practice" title="Escrow in Business Transactions" zh="商业交易中的托管事务" />
          <p className="lede lede--wide">
            Business transactions (a merger, an acquisition, or a large contract) often call for a neutral third
            party to hold funds or documents until closing conditions are met.{' '}
            <Link to="/escrow-services">Rockville Law Group's escrow services</Link> work alongside its business law
            practice on these matters.
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
              <h3>Considering an equity raise or investor transaction?</h3>
              <p>Securities law questions often come up alongside business transactions.</p>
            </div>
            <Button to="/ipo-securities" variant="outline">
              Securities Law <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Next Step"
        title="Business & Corporate Counsel in Queens"
        description="Schedule a consultation to talk through your business's specific needs with our team."
        primary={{ label: 'Discuss Your Business Matter', to: '/contact#consultation' }}
        secondary={{ label: 'Practice Areas', to: '/practice-areas' }}
      />
    </>
  )
}
