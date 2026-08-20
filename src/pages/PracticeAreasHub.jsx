import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CTABand from '../components/CTABand.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { ArrowIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema } from '../lib/structuredData.js'
import { mainPracticeAreas } from '../data/firm.js'
import './ServicePage.css'
import './PracticeAreasHub.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Practice Areas', path: '/practice-areas' },
]

export default function PracticeAreasHub() {
  useDocumentTitle(
    'Practice Areas | Rockville Law Group',
    "Compare Rockville Law Group's six practice areas — immigration, family law, estate planning, business, securities, and escrow — to find where your matter fits.",
    { lang: 'en-US', alternatePath: '/zh/practice-areas' },
  )
  useStructuredData(breadcrumbSchema(BREADCRUMB_ITEMS))

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Practice Areas</span>
          <h1 className="service-hero__title">Practice Areas</h1>
          <p className="zh-label service-hero__zh">业务领域</p>
          <p className="lede service-hero__lede">
            Rockville Law Group is a New York law firm serving individuals, families, and businesses. The firm
            practices across immigration, family, estate planning, and business and securities law — each area
            below has its own guide to how the firm can help.
          </p>
        </div>
      </section>

      <section className="section priority-detail">
        <div className="container">
          <div className="priority-detail__list">
            {mainPracticeAreas.map((area, i) => (
              <Reveal as="article" key={area.id} id={area.id} delay={(i % 2) * 0.06} className="priority-detail__item">
                <span className="priority-detail__index">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="priority-detail__title">{area.name}</h2>
                {area.nameZh && <p className="zh-label priority-detail__zh">{area.nameZh}</p>}
                <p className="priority-detail__desc">{area.short}</p>
                <Button to={area.to} variant="quiet" className="priority-detail__cta">
                  {area.cta} <ArrowIcon width={16} height={16} />
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Attorney" title="One Firm, Multiple Practice Areas" zh="一家律所，多元业务领域" align="center" />
          <p className="lede lede--wide practice-hub__attorney-lede">
            Immigration, family, estate planning, and business matters often overlap — a green card case that also
            calls for a will, a business matter that touches a family petition. Because Rockville Law Group
            practices across all of them, related needs can be handled together, instead of starting over with
            someone new.
          </p>
          <div className="practice-hub__attorney-cta">
            <Button to="/about" variant="quiet">
              About Li Weng <ArrowIcon width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Get Started"
        title="Discuss Your Legal Matter"
        description="Schedule a consultation to talk through your situation with our team, or read a guide first if you're still getting oriented."
        primary={{ label: 'Schedule a Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Guides & Resources', to: '/resources' }}
      />
    </>
  )
}
