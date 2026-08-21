import Breadcrumbs from '../components/Breadcrumbs.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema } from '../lib/structuredData.js'
import { contact } from '../data/firm.js'
import './ServicePage.css'
import './Article.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy' },
]

export default function Privacy() {
  useDocumentTitle(
    'Privacy Policy | Rockville Law Group',
    'How Rockville Law Group handles information submitted through this website, what the consultation and attorney-coverage forms collect, how it is used, and how to reach us with privacy questions.',
    { lang: 'en-US', alternatePath: '/zh/privacy' },
  )
  useStructuredData(breadcrumbSchema(BREADCRUMB_ITEMS))

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Privacy</span>
          <h1 className="service-hero__title">Privacy Policy</h1>
          <p className="lede service-hero__lede">
            This page describes how Rockville Law Group LLC handles information submitted through this website. It
            does not apply to information you share directly with the firm outside of this website, such as by
            phone or during a consultation.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <div className="article-block">
            <h2 className="article-block__heading">Information We Collect</h2>
            <p className="article-body-text">
              When you submit the consultation request form or the attorney hearing-coverage request form, we
              collect the information you enter, typically your name, email, phone number, and a brief description
              of your matter or request. This website does not require you to create an account, and it does not
              collect payment information.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">How Form Submissions Are Handled</h2>
            <p className="article-body-text">
              Form submissions on this website are delivered through Formspree, a third-party form-processing
              service, or, if a form is not yet connected to that service, as a pre-filled email that you send
              yourself from your own email application. Either way, the information you submit is used only to
              respond to your request.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">Analytics</h2>
            <p className="article-body-text">
              This site may use Google Analytics to understand general, aggregate patterns in how visitors use the
              site, such as which pages are viewed. Analytics tools of this kind may use cookies. This information
              is not used to identify you personally, and it is separate from anything you submit through a contact
              form.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">How We Use Your Information</h2>
            <p className="article-body-text">
              We use the information you submit to respond to your inquiry, schedule a consultation, or discuss an
              attorney hearing-coverage request. We do not sell your personal information, and we do not share it
              with third parties for their own marketing purposes.
            </p>
          </div>

          <div className="article-callout">
            <h3 className="article-block__heading">A Note on Confidential Information</h3>
            <p>
              Please do not submit confidential, privileged, or sensitive case information through a website form.
              We will discuss case-specific details directly, through an appropriate and secure means of
              communication, once we are in touch.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">Questions About This Policy</h2>
            <p className="article-body-text">
              If you have questions about how this website handles your information, you can reach us at{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">Changes to This Policy</h2>
            <p className="article-body-text">
              This policy may be updated from time to time. The version posted on this page is the current one.
              Last updated: August 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
