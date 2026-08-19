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
  { name: 'Immigration Services', path: '/immigration-services' },
  { name: 'Employment-Based Green Cards', path: '/employment-based-green-cards' },
]

const CATEGORIES = [
  {
    title: 'EB-2: Advanced Degree or Exceptional Ability',
    zh: '职业移民第二优先',
    desc: 'Available to members of the professions holding an advanced degree, or to individuals with exceptional ability in the sciences, arts, or business. Most EB-2 cases require a sponsoring employer and PERM labor certification, though a National Interest Waiver can allow certain applicants to self-petition without a job offer.',
  },
  {
    title: 'EB-3: Skilled Workers & Professionals',
    zh: '职业移民第三优先',
    desc: "Covers skilled workers with at least two years of training or experience, professionals with a U.S. bachelor's degree or its equivalent, and other workers performing unskilled labor. EB-3 requires a sponsoring employer and, in nearly all cases, PERM labor certification.",
  },
  {
    title: 'PERM Labor Certification',
    zh: '劳工证申请',
    desc: 'Before filing most EB-2 and EB-3 petitions, the employer must generally obtain a labor certification from the Department of Labor, confirming that hiring the foreign worker will not adversely affect wages and working conditions for U.S. workers in similar jobs.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Labor Certification (PERM)',
    desc: 'Where required, the sponsoring employer tests the labor market and obtains certification from the Department of Labor before moving forward.',
  },
  {
    step: '02',
    title: 'Immigrant Petition (Form I-140)',
    desc: 'The employer — or, for a National Interest Waiver, the employee — files a petition establishing eligibility for the category.',
  },
  {
    step: '03',
    title: 'Visa Availability',
    desc: 'Once the petition is approved, the case must also wait for a visa number to become available under the relevant category and country, which can take substantial time in some categories.',
  },
  {
    step: '04',
    title: 'Green Card',
    desc: 'The employee applies for permanent residence through adjustment of status or consular processing once a visa is available.',
  },
]

const FAQS = [
  {
    q: 'What is the difference between EB-2 and EB-3?',
    qZh: 'EB-2 与 EB-3 有什么区别？',
    a: 'EB-2 is generally for professionals with an advanced degree or individuals with exceptional ability; EB-3 covers skilled workers, professionals with a bachelor’s degree, and other workers. Both usually require a sponsoring employer, and the appropriate category depends on the position and the employee’s qualifications.',
  },
  {
    q: 'Do I need my employer to sponsor me?',
    qZh: '是否一定需要雇主担保？',
    a: 'Most EB-2 and EB-3 cases require a sponsoring employer and, in most instances, PERM labor certification. A National Interest Waiver is a narrower exception that can allow certain EB-2 applicants to self-petition without an employer.',
  },
  {
    q: 'How long does an employment-based green card take?',
    qZh: '职业移民绿卡需要多长时间？',
    a: 'Timelines vary by category, the employer’s PERM process, and visa availability for the employee’s country of birth, which can add significant waiting time in some categories. A consultation is the most reliable way to get a realistic estimate for a specific case.',
  },
  {
    q: 'Can I discuss my case in Mandarin Chinese?',
    qZh: '可以用中文咨询吗？',
    a: 'Yes. Rockville Law Group offers consultations in both English and Mandarin Chinese.',
  },
]

export default function EmploymentBasedGreenCards() {
  useDocumentTitle(
    'Employment-Based Green Card Lawyer in New York | Rockville Law Group',
    'PERM labor certification, EB-2, and EB-3 green cards explained by a bilingual immigration attorney in Flushing, New York — for employees and sponsoring employers beginning the employment-based process.',
    { lang: 'en-US', alternatePath: '/zh/employment-based-green-cards' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Employment-Based Green Cards</span>
          <h1 className="service-hero__title">Employment-Based Green Card Lawyer in New York</h1>
          <p className="zh-label service-hero__zh">职业绿卡</p>
          <p className="lede service-hero__lede">
            Employment-based green cards allow qualifying individuals to become lawful permanent residents based on
            their work, skills, or a sponsoring employer. Rockville Law Group advises employees — and, where
            appropriate, sponsoring employers — through the labor certification, petition, and green card process.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="The Basics" title="How Employment-Based Immigration Works" zh="运作方式" />
          <p className="lede lede--wide">
            Employment-based immigration covers several green card categories, most of which require a U.S. employer
            to sponsor the employee. The process generally begins with labor certification where applicable,
            followed by an immigrant petition and, finally, an application for permanent residence. Which category
            applies depends on the position, the employee's qualifications, and whether the case requires a formal
            test of the U.S. labor market.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Common Categories" title="Pathways This Firm Handles" zh="常见类别" />
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
        <div className="container">
          <SectionHeading eyebrow="General Process" title="How a Case Typically Moves Forward" zh="一般办理流程" />
          <div className="service-block">
            {PROCESS.map((step, i) => (
              <Reveal as="article" key={step.step} delay={i * 0.05} className="service-step">
                <span className="service-step__index">{step.step}</span>
                <h3 className="service-step__title">{step.title}</h3>
                <p className="service-step__desc">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="A Related Path" title="How This Differs From EB-1A" zh="与 EB-1A 的区别" />
          <p className="lede lede--wide">
            <Link to="/eb1a">EB-1A</Link> is a separate employment-based category reserved for individuals who can
            demonstrate extraordinary ability and sustained acclaim in their field, and it does not require a
            sponsoring employer. For most employees whose green card depends on a job offer and an employer's
            sponsorship, EB-2 or EB-3 — not EB-1A — is the applicable path.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Why It Matters" title="Why Legal Guidance May Help" zh="法律协助的作用" />
          <p className="lede lede--wide">
            Employment-based cases involve coordination between the employer and employee, government agencies, and
            often lengthy visa backlogs. Legal guidance can help identify the right category, prepare a labor
            certification or petition, and respond to requests for evidence — though no attorney can guarantee that a
            labor certification or petition will be approved.
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
              <h3>Related Reading</h3>
              <p>Adjustment of Status vs. Consular Processing — which applies once your petition is approved.</p>
            </div>
            <Button to="/resources/adjustment-of-status-vs-consular-processing" variant="outline">
              Read the Guide <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Next Step"
        title="Discuss Your Employment-Based Case"
        zh="咨询职业移民绿卡案件"
        description="Schedule a consultation to talk through your position, qualifications, and options with our team."
        primary={{ label: 'Schedule an Immigration Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'EB-1A', to: '/eb1a' }}
      />
    </>
  )
}
