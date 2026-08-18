import { useParams, Navigate } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CTABand from '../components/CTABand.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import ArticleByline from '../components/ArticleByline.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { QuestionIcon, ArrowIcon, CheckIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { articleSchema, breadcrumbSchema } from '../lib/structuredData.js'
import { getArticleBySlug } from '../data/articles.js'
import '../pages/ServicePage.css'
import './Article.css'

function Block({ block }) {
  switch (block.type) {
    case 'text':
      return (
        <div className="article-block">
          {block.heading && <h2 className="article-block__heading">{block.heading}</h2>}
          {block.paragraphs.map((p, i) => (
            <p key={i} className="article-body-text">
              {p}
            </p>
          ))}
        </div>
      )

    case 'steps':
      return (
        <div className="article-block">
          {block.heading && <h2 className="article-block__heading">{block.heading}</h2>}
          <div className="service-block">
            {block.items.map((item, i) => (
              <Reveal as="article" key={item.title} delay={i * 0.05} className="service-step">
                <span className="service-step__index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="service-step__title">{item.title}</h3>
                <p className="service-step__desc">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      )

    case 'comparison':
      return (
        <div className="article-block">
          {block.heading && <h2 className="article-block__heading">{block.heading}</h2>}
          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">{block.columns[0]}</th>
                  <th scope="col">{block.columns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.a}</td>
                    <td>{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'checklist':
      return (
        <div className="article-block">
          {block.heading && <h2 className="article-block__heading">{block.heading}</h2>}
          <ul className="article-checklist">
            {block.items.map((item, i) => (
              <li key={i}>
                <CheckIcon aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'callout':
      return (
        <div className="article-callout">
          {block.heading && <h2 className="article-block__heading">{block.heading}</h2>}
          <p>{block.body}</p>
        </div>
      )

    default:
      return null
  }
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  const breadcrumbItems = article
    ? [
        { name: 'Home', path: '/' },
        { name: 'Resources', path: '/resources' },
        { name: article.title, path: `/resources/${article.slug}` },
      ]
    : null

  useDocumentTitle(article?.metaTitle, article?.metaDescription)
  useStructuredData(article ? [articleSchema(article), breadcrumbSchema(breadcrumbItems)] : null)

  if (!article) {
    return <Navigate to="/resources" replace />
  }

  const isAttorneyPiece = article.audience === 'attorney'

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">{article.category}</span>
          <h1 className="service-hero__title">{article.title}</h1>
          {article.categoryZh && <p className="zh-label service-hero__zh">{article.categoryZh}</p>}
          <p className="lede service-hero__lede">{article.dek}</p>
          <ArticleByline
            author={article.author}
            reviewedBy={article.reviewedBy}
            reviewDate={article.reviewDate}
            datePublished={article.datePublished}
            dateModified={article.dateModified}
          />
        </div>
      </section>

      <section className="section article-content">
        <div className="container container--narrow">
          {article.quickAnswer && (
            <Reveal as="div" className="article-callout article-callout--quick">
              <h2 className="article-block__heading">Quick Answer</h2>
              <p>{article.quickAnswer}</p>
            </Reveal>
          )}

          {article.sections.map((block, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
              <Block block={block} />
            </Reveal>
          ))}
        </div>
      </section>

      {article.faqs && (
        <section className="section service-faq">
          <div className="container container--narrow">
            <SectionHeading
              eyebrow="Common Questions"
              title="Frequently Asked Questions"
              zh="常见问题"
              align="center"
              icon={QuestionIcon}
            />
            <FAQAccordion items={article.faqs} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container container--narrow">
          <Reveal className="article-related card">
            <div>
              <h3>Related Rockville Law Group Service</h3>
              <p>
                This article supports our {article.relatedService.label} practice
                {article.secondaryRelatedService ? ` and our ${article.secondaryRelatedService.label} practice` : ''}.
              </p>
            </div>
            <div className="article-related__actions">
              <Button to={article.relatedService.to} variant="outline">
                {article.relatedService.label} <ArrowIcon width={16} height={16} />
              </Button>
              {article.secondaryRelatedService && (
                <Button to={article.secondaryRelatedService.to} variant="outline">
                  {article.secondaryRelatedService.label} <ArrowIcon width={16} height={16} />
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {isAttorneyPiece ? (
        <CTABand
          eyebrow="Next Step"
          title="Request Hearing Coverage"
          zh="申请出庭代理"
          description="Share the basics and Rockville Law Group will follow up to discuss availability and scope."
          primary={{ label: 'Request Hearing Coverage', to: '/for-attorneys#request-coverage' }}
          secondary={{ label: 'For Attorneys', to: '/for-attorneys' }}
          funnel="attorney"
        />
      ) : (
        <CTABand
          eyebrow="Next Step"
          title="Discuss Your Situation"
          zh="预约咨询"
          description="Every case is different. Schedule a consultation to talk through yours directly with our team."
          primary={{ label: 'Schedule an Immigration Consultation', to: '/contact#consultation' }}
          secondary={{ label: article.relatedService.label, to: article.relatedService.to }}
        />
      )}
    </>
  )
}
