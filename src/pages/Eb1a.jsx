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
  { name: 'Immigration Services', path: '/immigration-services' },
  { name: 'EB-1A', path: '/eb1a' },
]

const CRITERIA = [
  {
    title: 'A One-Time Major Award',
    zh: '一次性重大奖项',
    desc: 'Evidence of a single major, internationally recognized award — such as a Nobel Prize or an Olympic medal — can independently establish extraordinary ability. Very few applicants qualify this way.',
  },
  {
    title: 'Meeting Multiple Criteria',
    zh: '满足多项标准',
    desc: "Most applicants instead need to show they meet at least three of ten regulatory criteria — for example, nationally or internationally recognized awards, published material about the applicant's work, judging the work of others in the field, or a leading role in distinguished organizations. Meeting three criteria is a threshold, not an automatic approval.",
  },
  {
    title: 'Final Merits Review',
    zh: '最终综合评估',
    desc: 'USCIS also considers the record as a whole to determine whether it demonstrates sustained national or international acclaim and that the person is among the small percentage who has risen to the top of their field — a second, holistic step beyond checking boxes.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Eligibility Review',
    desc: "Reviewing an applicant's background against the regulatory criteria to assess whether the record realistically supports an EB-1A petition.",
  },
  {
    step: '02',
    title: 'Form I-140 Petition',
    desc: 'Filing the immigrant petition with supporting evidence, expert letters, and legal argument connecting the record to the legal standard.',
  },
  {
    step: '03',
    title: 'Adjudication',
    desc: 'USCIS reviews the petition and may issue a Request for Evidence before reaching a decision.',
  },
  {
    step: '04',
    title: 'Green Card',
    desc: 'Once the petition is approved and a visa is available, the individual may apply for a green card through adjustment of status or consular processing.',
  },
]

const FAQS = [
  {
    q: 'What is EB-1A?',
    qZh: '什么是 EB-1A？',
    a: 'EB-1A is a first-preference, employment-based green card category for individuals with extraordinary ability in the sciences, arts, education, business, or athletics, demonstrated through sustained national or international acclaim.',
  },
  {
    q: 'Do I need a job offer for EB-1A?',
    qZh: 'EB-1A 是否需要雇主担保？',
    a: 'No. EB-1A does not require a job offer or an employer sponsor — an eligible individual may file a self-petition on their own behalf.',
  },
  {
    q: 'Does having a strong résumé guarantee EB-1A approval?',
    qZh: '履历出色是否等于一定能获批？',
    a: 'No. EB-1A has a demanding legal standard, and USCIS evaluates the full record — not just a list of accomplishments — to determine whether it reflects sustained national or international acclaim. A consultation can help assess how a specific background may fit the criteria.',
  },
  {
    q: 'How many of the ten criteria do I need to meet?',
    qZh: '需要满足十项标准中的几项？',
    a: 'Most applicants need to meet at least three of the ten regulatory criteria, though meeting three is a threshold rather than an automatic approval — USCIS also considers the record as a whole in a final merits review.',
  },
  {
    q: 'Can I discuss an EB-1A case in Mandarin Chinese?',
    qZh: '可以用中文咨询 EB-1A 案件吗？',
    a: 'Yes. Rockville Law Group offers consultations in both English and Mandarin Chinese.',
  },
]

export default function Eb1a() {
  useDocumentTitle(
    'EB-1A Lawyer in New York | Rockville Law Group',
    'EB-1A eligibility, evidence, and the petition process explained by a bilingual immigration attorney in Flushing, New York — for individuals with extraordinary ability in their field considering a self-petitioned green card.',
    { lang: 'en-US', alternatePath: '/zh/eb1a' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">EB-1A Extraordinary Ability</span>
          <h1 className="service-hero__title">EB-1A Extraordinary Ability Lawyer in New York</h1>
          <p className="zh-label service-hero__zh">EB-1A 杰出人才移民</p>
          <p className="lede service-hero__lede">
            EB-1A is an employment-based immigrant classification for individuals who can demonstrate extraordinary
            ability in their field, sustained by national or international acclaim. Rockville Law Group advises
            clients on eligibility and prepares EB-1A petitions for qualifying individuals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="The Basics" title="Who EB-1A Is Designed For" zh="适用对象" />
          <p className="lede lede--wide">
            EB-1A is a first-preference employment-based green card category for people with extraordinary ability in
            the sciences, arts, education, business, or athletics. Unlike most employment-based categories, EB-1A
            does not require a job offer or an employer sponsor — an eligible individual may self-petition. It is
            designed for a small group of people who have risen to the top of their field, not simply for strong or
            accomplished professionals generally.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Eligibility Framework" title="How Extraordinary Ability Is Evaluated" zh="评估标准" />
          <div className="service-block">
            {CRITERIA.map((c, i) => (
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
          <SectionHeading eyebrow="Evidence Considerations" title="Building the Record" zh="证据准备" />
          <p className="lede lede--wide">
            EB-1A petitions are decided heavily on the strength and specificity of supporting evidence — third-party
            documentation, expert letters that explain the significance of the applicant's work rather than simply
            praising it, and objective indicators such as citation counts, media coverage, or the circumstances of an
            award. General claims of accomplishment, without corroborating evidence, are usually not enough.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="General Process" title="How an EB-1A Case Typically Moves Forward" zh="一般办理流程" />
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

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Why It Matters" title="Why Legal Guidance May Help" zh="法律协助的作用" />
          <p className="lede lede--wide">
            Because EB-1A is evaluated against a demanding legal standard, the way evidence is organized and
            explained often matters as much as the underlying accomplishments. Legal guidance can help identify which
            criteria a specific record can realistically support and how to present that evidence — but no attorney
            can guarantee that USCIS will approve a given petition.
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
        title="Discuss Your EB-1A Case"
        zh="咨询 EB-1A 案件"
        description="An EB-1A assessment depends on the specific record of achievement. Schedule a consultation to talk through your background with our team."
        primary={{ label: 'Schedule an Immigration Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Employment-Based Green Cards', to: '/employment-based-green-cards' }}
      />
    </>
  )
}
