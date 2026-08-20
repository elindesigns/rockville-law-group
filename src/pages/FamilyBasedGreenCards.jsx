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
  { name: 'Family-Based Green Cards', path: '/family-based-green-cards' },
]

const PATHWAYS = [
  {
    title: 'Marriage to a U.S. Citizen or Green Card Holder',
    zh: '婚姻绿卡',
    desc: "Spouses of U.S. citizens are classified as immediate relatives, generally without an annual numerical cap on visas. Spouses of lawful permanent residents fall into a preference category and may face a waiting period. In both cases, the marriage must be genuine — entered into to build a life together, not primarily to obtain an immigration benefit.",
  },
  {
    title: 'Parents, Children & Siblings',
    zh: '父母、子女与兄弟姐妹',
    desc: 'U.S. citizens age 21 or older may petition for their parents. Petitions for unmarried or married adult children, and for siblings, generally fall into family preference categories with waiting periods that vary by category and the beneficiary’s country of birth. Lawful permanent residents may petition for a spouse and unmarried children.',
  },
  {
    title: "Fiancé(e) Visas",
    zh: '未婚夫妻签证',
    desc: "A U.S. citizen who intends to marry a foreign national within 90 days of that person's arrival may petition for a K-1 visa. Unmarried children of the fiancé(e) under 21 may qualify for a companion K-2 visa. Both generally require an in-person meeting within the two years before filing, with limited exceptions.",
  },
]

const PROCESS = [
  {
    step: 'Petition',
    title: 'File the Petition',
    desc: 'The U.S. citizen or permanent resident relative files a petition (commonly Form I-130) establishing the qualifying family relationship.',
  },
  {
    step: 'Availability',
    title: 'Visa Availability',
    desc: 'Immediate relatives can generally move forward once the petition is approved. Family preference categories must also wait for a visa number to become available under the relevant category and country.',
  },
  {
    step: 'Filing',
    title: 'Adjustment or Consular Processing',
    desc: 'A beneficiary already in the United States may apply to adjust status without leaving the country. A beneficiary abroad generally completes the process through a U.S. embassy or consulate instead.',
  },
  {
    step: 'Decision',
    title: 'Interview & Decision',
    desc: 'Most cases include an interview — with USCIS for adjustment of status, or at a consulate abroad — before a final decision on the green card.',
  },
]

const FAQS = [
  {
    q: 'Can I get a green card by marrying a U.S. citizen?',
    qZh: '与美国公民结婚可以获得绿卡吗？',
    a: 'Marriage to a U.S. citizen can make you eligible to apply for a green card as an immediate relative, provided the marriage is genuine and the other requirements are met. USCIS reviews these cases carefully, and approval is never guaranteed — a consultation can help clarify where a specific situation stands.',
  },
  {
    q: 'What is the difference between adjustment of status and consular processing?',
    qZh: '身份调整与领事馆签证程序有什么区别？',
    a: 'Adjustment of status allows an eligible beneficiary already in the United States to apply for a green card without leaving the country. Consular processing is completed at a U.S. embassy or consulate abroad. Which option applies generally depends on where the beneficiary is living and their immigration history.',
  },
  {
    q: 'How long does a family-based green card take?',
    qZh: '亲属移民绿卡需要多长时间？',
    a: "Timelines vary significantly by category, the beneficiary's country of birth, and current visa availability. Immediate relative cases are generally faster than family preference categories, which can involve a multi-year wait for a visa to become available. A consultation is the most reliable way to get a realistic sense of a specific case.",
  },
]

export default function FamilyBasedGreenCards() {
  useDocumentTitle(
    'Family-Based Green Card Lawyer in New York | Rockville Law Group',
    'Guidance on marriage-based and family preference green cards — petitions, adjustment of status, and consular processing — from a bilingual immigration attorney in Flushing, New York.',
    { lang: 'en-US', alternatePath: '/zh/family-based-green-cards' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Family-Based Green Cards</span>
          <h1 className="service-hero__title">Family-Based Green Card Lawyer in New York</h1>
          <p className="zh-label service-hero__zh">亲属移民</p>
          <p className="lede service-hero__lede">
            U.S. citizens and lawful permanent residents can petition for certain family members to immigrate to the
            United States. Rockville Law Group represents petitioners and beneficiaries through every stage of a
            family-based case, from the initial petition to the green card interview.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="The Basics" title="How Family-Based Immigration Works" zh="运作方式" />
          <p className="lede lede--wide">
            Family-based immigration allows a U.S. citizen or lawful permanent resident to sponsor certain relatives
            for a green card. Immigration law divides these relationships into two groups: immediate relatives of
            U.S. citizens, who are not subject to an annual numerical limit, and family preference categories, which
            are subject to per-country quotas that can create a waiting period before a visa becomes available. Which
            group applies — and how long the process takes — depends on the specific relationship and the
            petitioner's status.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="Who May Qualify" title="Common Family-Based Pathways" zh="常见家庭移民途径" />
          <div className="service-block">
            {PATHWAYS.map((p, i) => (
              <Reveal as="article" key={p.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">
                  {p.title} <span className="zh-label service-step__zh">{p.zh}</span>
                </h3>
                <p className="service-step__desc">{p.desc}</p>
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
          <SectionHeading eyebrow="Complications to Watch For" title="When Legal Guidance May Help" zh="需要法律协助的情形" />
          <p className="lede lede--wide">
            Many family-based petitions proceed in a straightforward way. Others become more complicated — a prior
            immigration violation, a previous marriage that was not properly terminated, a request for additional
            evidence, or bona fides questions at the interview are all situations where legal guidance can matter.
            Because eligibility depends heavily on individual facts, general information online is not a substitute
            for reviewing a specific situation directly.
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
              <p>Can You Get a Green Card Through Marriage? — a closer look at the process, including the conditional two-year card.</p>
            </div>
            <Button to="/resources/green-card-through-marriage" variant="outline">
              Green Cards Through Marriage <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Next Step"
        title="Discuss Your Family-Based Case"
        zh="咨询家庭移民案件"
        description="Every family's situation is different. Schedule a consultation to talk through your specific circumstances with our team."
        primary={{ label: 'Schedule an Immigration Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Immigration Services', to: '/immigration-services' }}
      />
    </>
  )
}
