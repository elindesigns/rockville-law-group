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
  { name: '首页', path: '/zh' },
  { name: '业务领域', path: '/zh/practice-areas' },
  { name: '移民服务', path: '/zh/immigration-services' },
  { name: '职业移民', path: '/zh/employment-based-green-cards' },
]

const CATEGORIES = [
  {
    title: 'EB-2：高级学位或杰出能力',
    desc: '适用于拥有高级学位的专业人士，或在科学、艺术、商业领域具有杰出能力的申请人。大多数 EB-2 案件需要雇主担保及劳工证；国家利益豁免（National Interest Waiver）则是一种较为特殊的例外情形，允许部分符合条件的申请人无需雇主即可自行申请。',
  },
  {
    title: 'EB-3：技术工人与专业人士',
    desc: '涵盖具备至少两年培训或工作经验的技术工人、持有美国学士学位（或同等学历）的专业人士，以及从事非技术性工作的其他工人。EB-3 需要雇主担保，且几乎所有案件都需要劳工证。',
  },
  {
    title: '劳工证申请（PERM）',
    desc: '在递交多数 EB-2 及 EB-3 申请之前，雇主通常需要先向劳工部申请劳工证，证明聘用该外籍雇员不会对从事类似工作的美国工人的薪资及工作条件造成不利影响。',
  },
]

const PROCESS = [
  { step: '01', title: '劳工证申请（PERM）', desc: '在适用情形下，担保雇主需先测试劳动力市场，并向劳工部取得认证，之后才能继续下一步。' },
  { step: '02', title: '递交移民申请（I-140）', desc: '雇主（或在国家利益豁免情形下由雇员本人）递交申请，证明符合相应类别的资格条件。' },
  { step: '03', title: '等待签证名额', desc: '申请获批后，案件还需等待所属类别及原籍国的签证名额开放，某些类别的等待时间可能相当长。' },
  { step: '04', title: '申请绿卡', desc: '在签证名额可用后，雇员可以通过身份调整或领事馆程序申请永久居民身份。' },
]

const FAQS = [
  {
    q: 'EB-2 与 EB-3 有什么区别？',
    a: 'EB-2 通常适用于拥有高级学位的专业人士，或具有杰出能力的申请人；EB-3 则涵盖技术工人、持学士学位的专业人士，以及其他工人。两者通常都需要雇主担保，具体适用哪一类别取决于职位性质及雇员的资历。',
  },
  {
    q: '是否一定需要雇主担保？',
    a: '大多数 EB-2 及 EB-3 案件需要雇主担保，且多数情形下还需劳工证。国家利益豁免是一种较为特殊的例外，允许部分符合条件的 EB-2 申请人无需雇主即可自行申请。',
  },
  {
    q: '职业移民绿卡通常需要多长时间？',
    a: '办理时间因类别、雇主的劳工证办理进度，以及雇员原籍国的签证名额情况而有很大差异，部分类别的等待时间可能相当长。想要了解具体案件的合理时间预期，咨询是最可靠的方式。',
  },
  { q: '是否可以用中文咨询？', a: '是的。Rockville Law Group 提供英文与普通话咨询服务。' },
]

export default function EmploymentBasedGreenCardsZh() {
  useDocumentTitle(
    '纽约职业移民律师 | Rockville Law Group',
    '劳工证（PERM）、EB-2 及 EB-3 职业移民绿卡办理流程——由精通英文与普通话的纽约移民律师 Li Weng 为雇员及担保雇主讲解。',
    { lang: 'zh-Hans', alternatePath: '/employment-based-green-cards' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">职业移民</span>
          <h1 className="service-hero__title">职业移民</h1>
          <p className="lede service-hero__lede">
            职业移民绿卡允许符合条件的申请人凭借其工作、技能，或雇主的担保，成为美国永久居民。Rockville Law Group
            为雇员——以及在适当情形下的担保雇主——提供劳工证申请、移民申请到绿卡各阶段的法律协助。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="基本概念" title="职业移民如何运作" />
          <p className="lede lede--wide">
            职业移民涵盖多个绿卡类别，其中大多数类别都需要美国雇主提供担保。办理流程通常从劳工证申请（在适用情形下）开始，随后是移民申请，最后是永久居民身份的申请。具体适用哪一类别，取决于职位性质、雇员的资历，以及该案件是否需要正式测试美国劳动力市场。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="常见类别" title="本所办理的职业移民类别" />
          <div className="service-block">
            {CATEGORIES.map((c, i) => (
              <Reveal as="article" key={c.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">{c.title}</h3>
                <p className="service-step__desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="一般办理流程" title="案件通常如何推进" />
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
          <SectionHeading eyebrow="相关类别说明" title="与 EB-1A 的区别" />
          <p className="lede lede--wide">
            <Link to="/zh/eb1a">EB-1A</Link>{' '}
            是另一个独立的职业移民类别，适用于能够证明杰出能力及持续声誉的申请人，且不需要雇主担保。对于大多数需要依靠工作机会及雇主担保才能申请绿卡的雇员而言，适用的通常是 EB-2 或
            EB-3，而非 EB-1A。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="律师的作用" title="为什么法律协助很重要" />
          <p className="lede lede--wide">
            职业移民案件涉及雇主、雇员及政府部门之间的多方协调，且常常面临较长的签证等待期。律师可以协助判断适用类别、准备劳工证或移民申请，并回应补充证据通知——但没有任何律师可以保证劳工证或移民申请一定会获批。
          </p>
        </div>
      </section>

      <section className="section service-faq">
        <div className="container container--narrow">
          <SectionHeading eyebrow="常见问题" title="您可能想了解的问题" align="center" icon={QuestionIcon} />
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTABand
        eyebrow="联系律师"
        title="讨论您的职业移民案件"
        description="预约咨询，与我们的团队讨论您的职位、资历及可行的申请途径。"
        primary={{ label: '预约移民咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '了解 EB-1A', to: '/zh/eb1a' }}
      />
    </>
  )
}
