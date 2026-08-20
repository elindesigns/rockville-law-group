import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CTABand from '../components/CTABand.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import SealMark from '../components/SealMark.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { ArrowIcon, BriefcaseIcon, QuestionIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema, faqPageSchema } from '../lib/structuredData.js'
import { hearingCoverage } from '../data/firm.js'
import './ServicePage.css'
import './ImmigrationCourt.css'

const BREADCRUMB_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Practice Areas', path: '/practice-areas' },
  { name: 'Immigration Services', path: '/immigration-services' },
  { name: 'Immigration Court', path: '/immigration-court' },
]

const AFTER_NTA = [
  {
    title: 'The Notice to Appear',
    zh: '出庭通知书',
    desc: 'A Notice to Appear (NTA) is the charging document that starts removal proceedings, listing the allegations and the immigration law provisions the government says apply. Receiving one does not mean removal is guaranteed — it means a case will be decided by an immigration judge.',
  },
  {
    title: 'Possible Forms of Relief',
    zh: '可能的救济方式',
    desc: 'Depending on the facts, relief from removal may include asylum, cancellation of removal, adjustment of status, waivers, or other options. Which forms of relief may be available depends heavily on immigration history, family ties, and the specific allegations in the case.',
  },
  {
    title: 'If a Hearing Is Missed',
    zh: '缺席聆讯的后果',
    desc: 'Missing a scheduled hearing can result in an in absentia removal order — a decision made without the person present. Deadlines to ask the court to reopen a case after a missed hearing are generally short, so prompt legal advice matters.',
  },
]

const FAQS = [
  {
    q: 'Do I need a lawyer for immigration court?',
    qZh: '出庭是否需要律师？',
    a: 'You have the right to be represented by an attorney in immigration court, though the government does not provide one at its own expense. Because removal proceedings can affect a person’s ability to remain in the United States, many people choose to be represented.',
  },
  {
    q: 'What happens if I miss my immigration court hearing?',
    qZh: '缺席移民法庭聆讯会怎样？',
    a: 'Missing a hearing can result in an in absentia removal order — a decision made without you present, which can also affect eligibility for future relief. If a hearing has already been missed, prompt legal advice is important, since deadlines to request reopening the case are short.',
  },
  {
    q: 'How long do removal proceedings take?',
    qZh: '遣返程序需要多长时间？',
    a: "Timelines vary widely depending on the immigration court's caseload, the forms of relief being pursued, and the complexity of the case — proceedings can take anywhere from several months to a few years.",
  },
  {
    q: "Can I appeal an immigration judge's decision?",
    qZh: '可以对移民法官的裁决提出上诉吗？',
    a: 'In many cases, yes — generally by filing a Notice of Appeal with the Board of Immigration Appeals within 30 days of the decision. Not every issue is appealable, and a consultation can help clarify the options after a specific ruling.',
  },
]

export default function ImmigrationCourt() {
  useDocumentTitle(
    'Immigration Court Lawyer in New York | Rockville Law Group',
    'Representation in immigration court from attorney Li Weng — removal defense, master calendar and individual hearings, and BIA appeals. Learn what to expect and how immigration court differs from USCIS.',
    { lang: 'en-US', alternatePath: '/zh/immigration-court' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">Immigration Court</span>
          <h1 className="service-hero__title">Representation in Immigration Court</h1>
          <p className="zh-label service-hero__zh">移民法庭代理</p>
          <p className="lede service-hero__lede">
            Immigration court proceedings move on their own schedule and their own rules. Rockville Law Group
            represents individuals in removal proceedings, guiding clients through what to expect at each stage of
            a case before an immigration judge.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What to Expect" title="Immigration Court Hearings" zh="移民法庭听证会" />
          <div className="service-block">
            <Reveal as="article" className="service-step">
              <span className="service-step__index">Preliminary</span>
              <h3 className="service-step__title">
                Master Calendar Hearing <span className="zh-label service-step__zh">主日历听证</span>
              </h3>
              <p className="service-step__desc">
                A short, preliminary hearing where the judge addresses scheduling, confirms basic case information,
                and sets dates for the next steps in the case.
              </p>
            </Reveal>
            <Reveal as="article" delay={0.06} className="service-step">
              <span className="service-step__index">Merits</span>
              <h3 className="service-step__title">
                Individual (Merits) Hearing <span className="zh-label service-step__zh">主审听证</span>
              </h3>
              <p className="service-step__desc">
                A longer hearing where evidence and testimony are presented, and the immigration judge decides the
                merits of the case.
              </p>
            </Reveal>
            <Reveal as="article" delay={0.12} className="service-step">
              <span className="service-step__index">Appeal</span>
              <h3 className="service-step__title">
                BIA Hearing <span className="zh-label service-step__zh">BIA 听证</span>
              </h3>
              <p className="service-step__desc">
                Proceedings before the Board of Immigration Appeals, which reviews decisions made by immigration
                judges.
              </p>
            </Reveal>
          </div>
          <p className="field-note immigration-court__caveat">{hearingCoverage.remoteCaveat}</p>
        </div>
      </section>

      <section className="section section--ink court-pullquote">
        <div className="container container--narrow">
          <Reveal>
            <SealMark tone="paper" size={32} className="court-pullquote__seal" />
            <p className="court-pullquote__text">
              Every hearing follows its own rules — and its own timeline. Knowing what to expect is most of the
              battle.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="A Common Question" title="Immigration Court vs. USCIS" zh="移民法庭与 USCIS 的区别" />
          <p className="lede lede--wide">
            Immigration court — part of the Executive Office for Immigration Review (EOIR) — is separate from U.S.
            Citizenship and Immigration Services (USCIS). USCIS handles applications such as green cards,
            naturalization, and visa petitions. Immigration court handles removal proceedings and related forms of
            relief, decided by an immigration judge rather than a USCIS officer.
          </p>
        </div>
      </section>

      <section className="section" id="removal-defense">
        <div className="container">
          <SectionHeading
            eyebrow="Removal Proceedings"
            title="Removal & Deportation Defense"
            zh="遣返辩护"
          />
          <p className="lede lede--wide">
            Removal proceedings begin when the Department of Homeland Security files a Notice to Appear, placing a
            person in immigration court. Rockville Law Group represents individuals in these proceedings —
            reviewing the government's allegations, identifying potential forms of relief, and appearing at
            hearings before the immigration judge.
          </p>
          <div className="service-block">
            {AFTER_NTA.map((item, i) => (
              <Reveal as="article" key={item.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">
                  {item.title} <span className="zh-label service-step__zh">{item.zh}</span>
                </h3>
                <p className="service-step__desc">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep" id="appeals">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Post-Decision Options" title="Immigration Appeals" zh="移民上诉" />
          <p className="lede lede--wide">
            When an immigration judge rules against a client, there may be options to challenge that decision. An
            appeal to the Board of Immigration Appeals (BIA) generally must be filed within 30 days of the judge's
            decision. The BIA reviews the immigration judge's decision on the existing record — a different process
            from a hearing, and not every issue is appealable. Rockville Law Group advises clients on whether an
            appeal or another form of post-decision relief may be available.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="court-connector card">
            <BriefcaseIcon className="court-connector__icon" />
            <div>
              <h3>Are you an attorney with a hearing that needs coverage?</h3>
              <p>Rockville Law Group works with attorneys who need qualifying immigration court hearing coverage.</p>
            </div>
            <Button to="/for-attorneys" variant="outline">
              For Attorneys <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-block service-block--2col">
            <Reveal as="article" className="card court-resource-card">
              <h3 className="court-resource-card__title">What Happens After a Notice to Appear</h3>
              <p className="court-resource-card__desc">A step-by-step look at what generally happens once removal proceedings begin.</p>
              <Button to="/resources/notice-to-appear-what-happens-next" variant="quiet" className="court-resource-card__cta">
                What Happens After an NTA <ArrowIcon width={16} height={16} />
              </Button>
            </Reveal>
            <Reveal as="article" delay={0.06} className="card court-resource-card">
              <h3 className="court-resource-card__title">Master Calendar vs. Individual Hearing</h3>
              <p className="court-resource-card__desc">What actually happens at each type of hearing, side by side.</p>
              <Button to="/resources/master-calendar-vs-individual-hearing" variant="quiet" className="court-resource-card__cta">
                Compare the Two Hearings <ArrowIcon width={16} height={16} />
              </Button>
            </Reveal>
          </div>
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
        title="Discuss Your Immigration Court Matter"
        zh="咨询移民法庭事务"
        description="Schedule a consultation to talk through your case and what to expect."
        primary={{ label: 'Schedule an Immigration Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Immigration Services', to: '/immigration-services' }}
      />
    </>
  )
}
