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
  { name: 'Family Law', path: '/family-law' },
]

const CATEGORIES = [
  {
    title: 'Custody, Support & Parentage',
    zh: '监护权、抚养费与亲子关系',
    desc: 'Child custody and child support matters, paternity, and father’s rights — helping parents understand their options and obligations, whether a matter is contested or by agreement.',
  },
  {
    title: 'Family Formation & Agreements',
    zh: '家庭组建与协议',
    desc: 'Adoption, prenuptial and marital agreements, and family law matters for same-sex couples and families — planning ahead or formalizing a family relationship.',
  },
  {
    title: 'Protective & Guardianship Matters',
    zh: '保护令与监护事务',
    desc: 'Restraining orders and guardianship or conservatorship proceedings for a child or an incapacitated family member.',
  },
]

const FAQS = [
  {
    q: 'Does Rockville Law Group handle contested custody cases?',
    a: 'Yes. Rockville Law Group represents parents in both contested and uncontested custody and support matters. What approach makes sense depends heavily on the specific family situation — a consultation is the best way to talk through options.',
  },
  {
    q: 'What is the difference between custody and guardianship?',
    a: 'Custody generally concerns a parent’s rights and responsibilities toward their own child. Guardianship or conservatorship is a separate legal process that gives a person authority over a child or an incapacitated adult who is not their own — the requirements and procedures differ.',
  },
  {
    q: 'Do prenuptial agreements need to be complicated?',
    a: 'Not necessarily — the right scope depends on the couple’s specific assets, goals, and circumstances. A consultation can help clarify what a particular agreement should and shouldn’t address.',
  },
  {
    q: 'Can family law matters be handled in Mandarin Chinese?',
    a: 'Yes. Rockville Law Group offers consultations in both English and Mandarin Chinese.',
  },
]

export default function FamilyLaw() {
  useDocumentTitle(
    'Family Law Attorney in New York | Rockville Law Group',
    'Family law representation in New York — child custody and support, paternity, adoption, prenuptial agreements, and guardianship — from attorney Li Weng in Flushing, New York.',
    { lang: 'en-US', alternatePath: '/zh/family-law' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Family Law</span>
          <h1 className="service-hero__title">Family Law Attorney in New York</h1>
          <p className="zh-label service-hero__zh">家庭法</p>
          <p className="lede service-hero__lede">
            Family law matters are personal, and often urgent. Rockville Law Group represents individuals and
            families in New York on custody, support, and parentage matters, family formation and agreements, and
            protective and guardianship proceedings.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Areas of Focus" title="Family Law Matters We Handle" zh="业务范围" />
          <div className="service-block service-block--2col">
            {CATEGORIES.map((c, i) => (
              <Reveal as="article" key={c.title} delay={(i % 3) * 0.06} className="service-step">
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
          <SectionHeading eyebrow="Why It Matters" title="Why Legal Representation Can Help" zh="法律协助的作用" />
          <p className="lede lede--wide">
            Family law matters affect the people closest to you, and the right outcome depends on the specific
            facts of a case — the applicable New York law, the family's history, and what each party is seeking.
            Legal representation can help identify the available options, prepare and file the necessary
            paperwork, and advocate for a client's position, whether the matter is resolved by agreement or
            requires a court to decide. No attorney can guarantee a particular result.
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
        title="Discuss Your Family Law Matter"
        description="Every family's situation is different. Schedule a consultation to talk through your specific circumstances with our team."
        primary={{ label: 'Schedule a Family Law Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Practice Areas', to: '/practice-areas' }}
      />
    </>
  )
}
