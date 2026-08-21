import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CTABand from '../components/CTABand.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { ArrowIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema } from '../lib/structuredData.js'
import { articles } from '../data/articles.js'
import './Resources.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Resources', path: '/resources' },
]

export default function Resources() {
  useDocumentTitle(
    'Immigration Law Resources & Guides | Rockville Law Group',
    'Practical guides on family-based green cards, immigration court, and hearing coverage, written to help you understand your situation before a consultation.',
  )
  useStructuredData(breadcrumbSchema(BREADCRUMB_ITEMS))

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Resources</span>
          <h1 className="service-hero__title">Guides &amp; Resources</h1>
          <p className="zh-label service-hero__zh">资源与指南</p>
          <p className="lede service-hero__lede">
            Practical explanations of how specific immigration processes generally work, written to help you
            understand a situation before a consultation, not to replace one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Guides" title="All Resources" zh="全部资源" />
          <div className="resources__grid">
            {articles.map((article, i) => (
              <Reveal as="article" key={article.slug} delay={(i % 3) * 0.06} className="card resources__card">
                <span className="resources__category">{article.category}</span>
                <h3 className="resources__title">{article.title}</h3>
                <p className="resources__dek">{article.dek}</p>
                <Button to={`/resources/${article.slug}`} variant="quiet" className="resources__cta">
                  Read the Guide <ArrowIcon width={16} height={16} />
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Have a Specific Question?"
        title="Talk It Through Directly"
        description="These guides cover general situations. For anything specific to yours, a consultation is the most reliable next step."
        primary={{ label: 'Schedule a Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Immigration Services', to: '/immigration-services' }}
      />
    </>
  )
}
