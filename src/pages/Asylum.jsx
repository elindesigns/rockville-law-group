import { Link } from 'react-router-dom'
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
  { name: 'Asylum', path: '/asylum' },
]

const TRACKS = [
  {
    title: 'Affirmative Asylum',
    zh: '主动申请庇护',
    desc: 'A person not already in removal proceedings applies directly with USCIS by filing Form I-589. An asylum officer interviews the applicant and decides the case administratively, outside of court.',
  },
  {
    title: 'Defensive Asylum',
    zh: '法庭辩护式庇护',
    desc: 'A person already in removal proceedings raises asylum as a defense before an immigration judge. The judge, not a USCIS asylum officer, decides the claim after a hearing in immigration court, with the government represented as well.',
  },
]

const PROCESS = [
  {
    step: 'Filing',
    title: 'File Form I-589',
    desc: 'The application generally must be filed within one year of arrival in the United States, though limited exceptions exist for changed or extraordinary circumstances.',
  },
  {
    step: 'Review',
    title: 'Interview or Hearing',
    desc: 'Affirmative cases include an interview with a USCIS asylum officer. Defensive cases are decided by an immigration judge after a hearing in immigration court.',
  },
  {
    step: 'Decision',
    title: 'Decision',
    desc: 'An affirmative case may be granted, referred to immigration court, or in limited circumstances denied outright. A defensive case results in a decision from the immigration judge, which may be appealable.',
  },
  {
    step: 'After',
    title: 'After a Grant',
    desc: 'A person granted asylum may work in the United States and, after one year, apply for a green card. A spouse and children may be included in some circumstances.',
  },
]

const FAQS = [
  {
    q: 'What is the difference between affirmative and defensive asylum?',
    qZh: '主动申请与法庭辩护式庇护有何不同？',
    a: "Affirmative asylum is filed directly with USCIS by someone not already in removal proceedings. Defensive asylum is raised as a defense before an immigration judge by someone who is already in proceedings, including, in some cases, after an affirmative claim is referred to court. The setting, decision-maker, and process differ between the two.",
  },
  {
    q: 'Is there a deadline to apply for asylum?',
    qZh: '申请庇护是否有时间限制？',
    a: 'Applicants generally must file within one year of their last arrival in the United States. Limited exceptions exist for changed circumstances or extraordinary circumstances that caused the delay. A consultation can help evaluate whether an exception may apply to a specific situation.',
  },
  {
    q: 'Does asylum guarantee I can stay in the United States?',
    qZh: '获得庇护是否能保证留在美国？',
    a: 'No. Asylum is a form of discretionary relief decided case by case, based on the specific facts and evidence presented. Meeting the general legal definition does not guarantee a grant, and no attorney can promise a specific outcome.',
  },
  {
    q: 'Can my spouse and children be included in my asylum case?',
    qZh: '配偶及子女是否可以被列入庇护申请？',
    a: 'A spouse and unmarried children under 21 may be included on an asylum application in some circumstances, whether they are already in the United States or apply to join later. Whether this applies to a specific family depends on the individual case.',
  },
]

export default function Asylum() {
  useDocumentTitle(
    'Asylum Lawyer in New York | Rockville Law Group',
    'Affirmative and defensive asylum representation from a bilingual immigration attorney in Flushing, New York, explaining eligibility, process, and what to expect in immigration court.',
    { lang: 'en-US', alternatePath: '/zh/asylum' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Asylum</span>
          <h1 className="service-hero__title">Asylum Lawyer in New York</h1>
          <p className="zh-label service-hero__zh">庇护申请</p>
          <p className="lede service-hero__lede">
            Asylum offers protection to people who cannot safely return to their home country because of
            persecution. Rockville Law Group represents individuals through the asylum process, both affirmatively
            with USCIS and defensively in immigration court.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="The Basics" title="What Asylum Protects Against" zh="庇护保护的对象" />
          <p className="lede lede--wide">
            Asylum may be available to someone who has been persecuted, or has a well-founded fear of future
            persecution, in their home country on account of race, religion, nationality, political opinion, or
            membership in a particular social group. If granted, asylum allows a person to remain lawfully in the
            United States and, after one year, apply for a green card. Asylum is a form of discretionary relief.
            Meeting the general definition does not, by itself, guarantee a grant.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Two Paths" title="Affirmative vs. Defensive Asylum" zh="两种申请途径" />
          <div className="service-block service-block--2col">
            {TRACKS.map((t, i) => (
              <Reveal as="article" key={t.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">
                  {t.title} <span className="zh-label service-step__zh">{t.zh}</span>
                </h3>
                <p className="service-step__desc">{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="General Process" title="How an Asylum Case Typically Moves Forward" zh="一般办理流程" />
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
          <SectionHeading eyebrow="Immigration Court Considerations" title="When an Asylum Case Reaches Immigration Court" zh="移民法庭中的庇护案件" />
          <p className="lede lede--wide">
            Asylum claims that are denied affirmatively, or that arise after a Notice to Appear has been issued, are
            generally decided in{' '}
            <Link to="/immigration-court">immigration court</Link> rather than by USCIS. Representation in these
            proceedings looks different from the affirmative process. It involves formal hearings before an
            immigration judge, with the government represented as well. Rockville Law Group represents clients in
            both settings.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Why It Matters" title="Why Legal Representation Can Help" zh="法律协助的作用" />
          <p className="lede lede--wide">
            Asylum cases turn on detailed facts, corroborating evidence, and strict deadlines. Legal representation
            can help identify the strongest legal theory for a claim, gather supporting evidence, and prepare
            testimony, but no attorney can guarantee the outcome of an asylum case.
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
        title="Discuss Your Asylum Case"
        zh="咨询庇护申请"
        description="Asylum cases are time-sensitive and fact-specific. Schedule a consultation to talk through your situation directly with our team."
        primary={{ label: 'Schedule an Immigration Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Immigration Court', to: '/immigration-court' }}
      />
    </>
  )
}
