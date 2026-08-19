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
import { priorityServices } from '../data/firm.js'
import './ServicePage.css'

// This page is a hub, not a destination for depth — each priority
// service has its own dedicated page (linked below) that covers
// eligibility, process, and FAQs. Keep these teasers short on purpose.
const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Practice Areas', path: '/practice-areas' },
  { name: 'Immigration Services', path: '/immigration-services' },
]

const RELEVANT_IF = {
  'family-based-green-cards': "You're married to, or an immediate family member of, a U.S. citizen or permanent resident and are seeking a green card.",
  asylum: 'You fear returning to your home country and are already in the United States.',
  eb1a: 'You have a significant, documented record of achievement in your field and are exploring a path to permanent residence based on that record.',
  'employment-based-green-cards': 'An employer is sponsoring your green card, or you are exploring an employment-based path to permanent residence.',
}

const OTHER_MATTERS = [
  {
    title: 'Immigration Court & Removal Defense',
    zh: '移民法庭与遣返辩护',
    description:
      'Representation before an immigration judge — including responding to a Notice to Appear, identifying available forms of relief, and defensive asylum.',
    to: '/immigration-court',
  },
  {
    title: 'Immigration Appeals',
    zh: '移民上诉',
    description: "When a case doesn't go as hoped, there may be options to appeal — including to the Board of Immigration Appeals.",
    to: '/immigration-court#appeals',
  },
]

const FAQS = [
  {
    q: 'Does contacting Rockville Law Group create an attorney-client relationship?',
    qZh: '联系我们是否会建立委托关系？',
    a: 'No. Visiting this website or submitting a contact form does not create an attorney-client relationship. That relationship begins only once both sides agree to it, typically after a consultation.',
  },
  {
    q: 'Do you offer consultations in Mandarin Chinese?',
    qZh: '是否提供中文咨询？',
    a: 'Yes. Rockville Law Group offers consultations in both English and Mandarin Chinese.',
  },
  {
    q: 'What should I expect at a consultation?',
    qZh: '咨询时会了解哪些内容？',
    a: 'A consultation is a chance to describe your situation and understand your general options. Specific next steps and any engagement terms are discussed directly.',
  },
  {
    q: 'Does demonstrating extraordinary ability or family eligibility guarantee approval?',
    qZh: '证明杰出人才或家庭资格是否保证获批？',
    a: 'No. Eligibility requirements are evaluated case by case, and no outcome can be promised. A consultation is the best way to understand where your situation stands.',
  },
]

export default function ImmigrationServices() {
  useDocumentTitle(
    'Immigration Services in New York | Rockville Law Group',
    'An overview of family-based green cards, asylum, EB-1A, and employment-based green cards at Rockville Law Group in New York — with a dedicated guide to eligibility, process, and FAQs for each.',
    { lang: 'en-US', alternatePath: '/zh/immigration-services' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Immigration Services</span>
          <h1 className="service-hero__title">Immigration Legal Services in New York</h1>
          <p className="zh-label service-hero__zh">专注移民法律服务</p>
          <p className="lede service-hero__lede">
            Rockville Law Group concentrates on family-based green cards, asylum, EB-1A, and employment-based green
            cards — representing individuals, families, and employment-based clients through each stage of the
            process. Each area below has its own guide covering eligibility, process, and common questions.
          </p>
        </div>
      </section>

      <section className="section priority-detail">
        <div className="container">
          <div className="priority-detail__list">
            {priorityServices.map((service, i) => (
              <Reveal
                as="article"
                key={service.id}
                id={service.id}
                delay={(i % 2) * 0.06}
                className="priority-detail__item"
              >
                <span className="priority-detail__index">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="priority-detail__title">{service.name}</h2>
                {service.nameZh && <p className="zh-label priority-detail__zh">{service.nameZh}</p>}
                <p className="priority-detail__desc">{service.description}</p>
                <p className="service-areas__relevant">
                  <strong>May be relevant if:</strong> {RELEVANT_IF[service.id]}
                </p>
                <Button to={service.to} variant="quiet" className="priority-detail__cta">
                  {service.cta} <ArrowIcon width={16} height={16} />
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The full visa-type directory (components/PracticeAreas.jsx +
          data/practiceAreas.js) used to render here. It was removed: it
          repeated, at length, the exact subjects of this hub's own child
          pages — asylum, EB-2/EB-3, the F-preference categories — so the
          hub competed with the pages it exists to funnel into. The
          Chinese hub never included it, and reads better for it.

          Those files are intentionally left in the repo: nothing imports
          them, so they add nothing to the bundle, and the content is
          worth redistributing into the relevant child pages or giving
          its own URL later. */}
      <section className="section service-areas">
        <div className="container">
          <SectionHeading eyebrow="Additional Services" title="Other Immigration Matters" zh="其他移民事务" />
          <div className="service-areas__list">
            {OTHER_MATTERS.map((area, i) => (
              <Reveal as="article" key={area.title} delay={(i % 3) * 0.05} className="service-areas__item">
                <h3 className="service-areas__title">{area.title}</h3>
                {area.zh && <p className="zh-label service-areas__zh">{area.zh}</p>}
                <p className="service-areas__desc">{area.description}</p>
                <Button to={area.to} variant="quiet" className="priority-detail__cta">
                  Learn More <ArrowIcon width={16} height={16} />
                </Button>
              </Reveal>
            ))}
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

      <CTABand
        eyebrow="Next Step"
        title="Discuss Your Immigration Matter"
        description="Every situation is different. Schedule a consultation to talk through yours directly with our team."
        primary={{ label: 'Schedule an Immigration Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Immigration Court', to: '/immigration-court' }}
      />
    </>
  )
}
