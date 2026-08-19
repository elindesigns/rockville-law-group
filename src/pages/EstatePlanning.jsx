import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABand from '../components/CTABand.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { QuestionIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema, faqPageSchema } from '../lib/structuredData.js'
import './ServicePage.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Practice Areas', path: '/practice-areas' },
  { name: 'Estate Planning', path: '/estate-planning' },
]

const CATEGORIES = [
  {
    title: 'Wills & Trusts',
    zh: '遗嘱与信托',
    desc: 'Wills and trusts are the core documents in most estate plans — setting out how a person’s assets should be distributed and, in the case of a trust, how they should be managed along the way.',
  },
  {
    title: 'Health Care & Incapacity Planning',
    zh: '医疗指示与监护规划',
    desc: 'Health care directives and guardianship or conservatorship planning address who can make decisions — medical or financial — if a person becomes unable to make them personally.',
  },
  {
    title: 'Estate Administration',
    zh: '遗产管理',
    desc: 'Once an estate plan is needed in practice, estate administration covers the process of carrying out a person’s wishes and settling their affairs.',
  },
]

const FAQS = [
  {
    q: 'Do I need a will if I already have a trust?',
    a: 'Often, yes — a will and a trust generally serve different purposes, and many estate plans use both together. Whether a particular combination makes sense depends on the specific assets and goals involved.',
  },
  {
    q: 'What is the difference between a health care directive and guardianship?',
    a: 'A health care directive is set up in advance by the person it concerns, naming who can make medical decisions on their behalf if needed. Guardianship or conservatorship is a court process that appoints a decision-maker when no such advance arrangement exists or is sufficient.',
  },
  {
    q: 'When should someone start estate planning?',
    a: 'There is no single right time — significant life events such as marriage, having children, or acquiring property are common reasons people put a plan in place or revisit an existing one. A consultation can help clarify what makes sense for a specific situation.',
  },
  {
    q: 'Can estate planning matters be handled in Mandarin Chinese?',
    a: 'Yes. Rockville Law Group offers consultations in both English and Mandarin Chinese.',
  },
]

export default function EstatePlanning() {
  useDocumentTitle(
    'Estate Planning Lawyer in New York | Rockville Law Group',
    'Estate planning in New York — wills, trusts, health care directives, guardianship, and estate administration — from attorney Li Weng in Flushing, New York.',
    { lang: 'en-US', alternatePath: '/zh/estate-planning' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Estate Planning</span>
          <h1 className="service-hero__title">Estate Planning Lawyer in Flushing, Queens</h1>
          <p className="zh-label service-hero__zh">遗产规划</p>
          <p className="lede service-hero__lede">
            Estate planning puts a person's own wishes in writing — for their assets, their health care, and the
            people who may need to act on their behalf. Rockville Law Group helps individuals and families in New
            York put these plans in place, and helps families administer an estate when the time comes.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Areas of Focus" title="Estate Planning Services" zh="服务范围" />
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
          <SectionHeading eyebrow="Why It Matters" title="Why Legal Guidance May Help" zh="法律协助的作用" />
          <p className="lede lede--wide">
            Estate planning documents have to work together and comply with New York law to actually accomplish
            what a person intends — a will or trust drafted without attention to a specific family's circumstances
            can create confusion or unintended results later. Legal guidance can help identify which documents fit
            a specific situation, and help a family carry out an estate plan when the time comes.
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

      <CTABand
        eyebrow="Next Step"
        title="Schedule an Estate Planning Consultation"
        description="Every estate plan should reflect a person's specific circumstances. Schedule a consultation to talk through yours with our team."
        primary={{ label: 'Schedule an Estate Planning Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Practice Areas', to: '/practice-areas' }}
      />
    </>
  )
}
