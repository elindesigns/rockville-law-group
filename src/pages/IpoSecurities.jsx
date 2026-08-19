import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
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
  { name: 'Securities Law', path: '/ipo-securities' },
]

const FAQS = [
  {
    q: 'What does a securities law attorney help with?',
    a: 'Securities law governs the offer and sale of ownership interests — stock, membership interests, and similar instruments — including how those offerings must be structured and disclosed under federal and state law. It comes up any time a business raises money by offering an ownership stake rather than, for example, taking out a loan.',
  },
  {
    q: 'Does this apply to a private or closely-held business, not just a public company?',
    a: "Yes. Securities law questions aren't limited to public companies — they routinely arise for private and closely-held businesses too, such as when a company raises capital from investors through a private offering.",
  },
  {
    q: 'What is a private placement or exempt offering?',
    a: 'Many private businesses raise capital under exemptions from full public registration requirements — commonly known as private placements or exempt offerings. These still have to satisfy specific legal requirements, even though they aren’t registered the way a public offering would be.',
  },
  {
    q: 'Can securities law matters be discussed in Mandarin Chinese?',
    a: 'Yes. Rockville Law Group offers consultations in both English and Mandarin Chinese.',
  },
]

export default function IpoSecurities() {
  useDocumentTitle(
    'Securities Law Attorney in New York | Rockville Law Group',
    'Securities law counsel in New York for closely-held businesses, including private offerings and securities considerations in corporate transactions, from attorney Li Weng in Flushing, New York.',
    { lang: 'en-US', alternatePath: '/zh/ipo-securities' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Securities Law</span>
          <h1 className="service-hero__title">Securities Law Attorney in New York</h1>
          <p className="zh-label service-hero__zh">证券法</p>
          <p className="lede service-hero__lede">
            Securities law questions come up whenever a business raises money by offering an ownership stake —
            stock, membership interests, or similar instruments. Rockville Law Group provides securities law
            counsel to closely-held businesses navigating these matters.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="The Basics" title="What Securities Law Covers" zh="证券法涵盖的内容" />
          <p className="lede lede--wide">
            Securities law governs how ownership interests in a business may be offered and sold, and what has to
            be disclosed to investors along the way. This isn't limited to publicly traded companies — it applies
            whenever a private or closely-held business raises capital by offering equity, whether to a small
            group of investors or more broadly. Many private offerings rely on specific exemptions from full
            registration requirements, and satisfying those exemptions correctly matters.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="How This Fits Together" title="Securities Considerations in Business Matters" zh="与商业事务的关联" />
          <p className="lede lede--wide">
            Securities law questions frequently arise alongside other business matters — bringing on new
            investors, restructuring ownership, or raising capital as part of a larger transaction. Rockville Law
            Group's securities law practice works alongside its{' '}
            <Link to="/business-law">business and corporate law practice</Link> on these matters. Every engagement is
            scoped to the specific transaction — a consultation is the best way to discuss whether a particular
            matter is a fit.
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
        title="Discuss Your Securities Law Matter"
        description="Schedule a consultation to talk through your transaction and confirm it's a fit with our team."
        primary={{ label: 'Discuss Your Securities Matter', to: '/contact#consultation' }}
        secondary={{ label: 'Business & Corporate Law', to: '/business-law' }}
      />
    </>
  )
}
