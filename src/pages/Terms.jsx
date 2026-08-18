import Breadcrumbs from '../components/Breadcrumbs.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema } from '../lib/structuredData.js'
import { contact, disclaimer, confidentialityNotice } from '../data/firm.js'
import './ServicePage.css'
import './Article.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Terms & Disclaimer', path: '/terms' },
]

export default function Terms() {
  useDocumentTitle(
    'Terms & Disclaimer | Rockville Law Group',
    "Terms of use for the Rockville Law Group website, including the firm's attorney-client relationship, attorney advertising, and confidentiality disclaimers.",
    { lang: 'en-US', alternatePath: '/zh/terms' },
  )
  useStructuredData(breadcrumbSchema(BREADCRUMB_ITEMS))

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Terms</span>
          <h1 className="service-hero__title">Terms &amp; Disclaimer</h1>
          <p className="lede service-hero__lede">
            These terms govern your use of this website. Please read them alongside the{' '}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <div className="article-block">
            <h2 className="article-block__heading">No Attorney-Client Relationship</h2>
            <p className="article-body-text">
              {disclaimer} Submitting a form, sending an email, or calling the phone number listed on this website
              does not, by itself, establish representation. An attorney-client relationship with Rockville Law
              Group LLC is formed only once the firm has confirmed representation with you directly, typically in
              writing.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">No Guarantee of Outcome</h2>
            <p className="article-body-text">
              Every legal matter depends on its own facts. Nothing on this website — including case types discussed,
              practice area descriptions, or attorney background — is a guarantee, warranty, or prediction of the
              outcome of any matter.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">Not a Substitute for Individual Legal Advice</h2>
            <p className="article-body-text">
              The content of this website is general information about Rockville Law Group and the areas of law it
              practices. It is not legal advice for your specific situation, and it should not be relied on as a
              substitute for consulting an attorney about the facts of your own matter.
            </p>
          </div>

          <div className="article-callout">
            <h3 className="article-block__heading">Confidential Information</h3>
            <p>{confidentialityNotice}</p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">Attorney Advertising</h2>
            <p className="article-body-text">
              This website may be considered attorney advertising in some jurisdictions. Prior results described or
              referenced on this website, if any, do not guarantee a similar outcome in a future matter.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">External Links</h2>
            <p className="article-body-text">
              This website links to a small number of external profiles, such as Justia and LinkedIn, so that
              visitors can independently verify attorney credentials. Rockville Law Group does not control and is
              not responsible for the content of those third-party sites.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">Contact</h2>
            <p className="article-body-text">
              Questions about these terms can be directed to <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
