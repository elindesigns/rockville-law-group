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
  { name: 'EB-1A 杰出人才移民', path: '/zh/eb1a' },
]

const CRITERIA = [
  {
    title: '一次性重大奖项',
    desc: '如果申请人曾获得诺贝尔奖或奥运奖牌等国际公认的重大奖项，可以单独作为证明杰出能力的依据。但符合此类条件的申请人极少。',
  },
  {
    title: '满足多项标准',
    desc: '大多数申请人需要证明自己至少满足移民局规定的十项标准中的三项——例如获得国家级或国际级认可的奖项、有关本人成就的重要媒体报道、曾担任评审评价他人在该领域的工作，或在知名机构中担任重要或领导性职务。满足三项标准只是门槛，并不代表一定会获批。',
  },
  {
    title: '最终综合评估',
    desc: '移民局还会综合评估申请人的整体材料，判断是否确实体现出持续性的国家级或国际级声誉，以及申请人是否属于该领域内已达到顶尖水平的少数人才——这是在满足基本标准之后的另一道审查。',
  },
]

const PROCESS = [
  { step: '01', title: '资格评估', desc: '对照移民局的评估标准，审视申请人的背景资料，判断其现有材料是否能够切实支持 EB-1A 申请。' },
  { step: '02', title: '递交 I-140 申请', desc: '提交移民申请，附上佐证材料、专家推荐信，以及说明材料与法律标准之间关联性的法律论述。' },
  { step: '03', title: '审理', desc: '移民局审理申请，期间可能会发出补充证据通知（Request for Evidence），要求提供进一步材料。' },
  { step: '04', title: '获得绿卡', desc: '申请获批且签证名额可用后，申请人可以通过身份调整或领事馆程序申请绿卡。' },
]

const FAQS = [
  { q: '什么是 EB-1A？', a: 'EB-1A 是职业移民第一优先类别，适用于在科学、艺术、教育、商业或体育领域具有杰出能力、并获得持续性国家级或国际级认可的申请人。' },
  { q: 'EB-1A 是否需要雇主担保？', a: '不需要。EB-1A 不要求提供工作机会或雇主担保，符合条件的申请人可以自行提出申请。' },
  {
    q: '履历出色是否就代表一定能获批？',
    a: '不一定。EB-1A 的审核标准较为严格，移民局会综合评估整体材料，而非仅凭一份成就清单，来判断是否确实体现出持续性的国家级或国际级声誉。想要了解自身背景与相关标准的契合度，建议通过咨询进一步评估。',
  },
  {
    q: '需要满足十项标准中的几项？',
    a: '大多数申请人需要满足十项标准中的至少三项，但满足三项只是一个门槛，并非自动获批——移民局还会综合评估整体材料。',
  },
  { q: '是否可以用中文咨询 EB-1A 案件？', a: '是的。Rockville Law Group 提供英文与普通话咨询服务。' },
]

export default function Eb1aZh() {
  useDocumentTitle(
    '纽约 EB-1A 杰出人才移民律师 | Rockville Law Group',
    'EB-1A 资格条件、证据准备与申请流程——由精通英文与普通话的纽约移民律师 Li Weng 为具有杰出能力的申请人讲解自行申请（self-petition）绿卡的途径。',
    { lang: 'zh-Hans', alternatePath: '/eb1a' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">EB-1A 杰出人才移民</span>
          <h1 className="service-hero__title">EB-1A 杰出人才移民</h1>
          <p className="lede service-hero__lede">
            EB-1A 是职业移民第一优先类别，适用于能够证明自己在所在领域具有杰出能力、并获得持续性国家级或国际级认可的申请人。Rockville Law Group 为符合条件的申请人提供资格评估及 EB-1A
            申请代理服务。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="基本概念" title="EB-1A 适用于哪些人" />
          <p className="lede lede--wide">
            EB-1A 是职业移民第一优先类别，适用于在科学、艺术、教育、商业或体育领域具有杰出能力的人才。与大多数职业移民类别不同，EB-1A
            不需要雇主提供工作机会，符合条件的申请人可以自行提出申请（Self-Petition）。此类别的设计初衷，是面向已在所在领域达到顶尖水平的少数人才，而非泛指表现优秀或成就出色的专业人士。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="评估标准" title="杰出能力如何被认定" />
          <div className="service-block">
            {CRITERIA.map((c, i) => (
              <Reveal as="article" key={c.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">{c.title}</h3>
                <p className="service-step__desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="证据准备" title="材料准备的重要性" />
          <p className="lede lede--wide">
            EB-1A
            申请很大程度上取决于佐证材料的充分性与针对性——包括第三方文件、能够具体说明申请人工作重要性（而非泛泛赞美）的专家推荐信，以及引用次数、媒体报道、获奖情况等客观指标。仅凭一般性的成就陈述、缺乏有力佐证，通常难以获得认可。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="一般办理流程" title="EB-1A 案件通常如何推进" />
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
          <SectionHeading eyebrow="律师的作用" title="为什么法律协助很重要" />
          <p className="lede lede--wide">
            由于 EB-1A 的审核标准较为严格，材料的整理方式与呈现逻辑，往往与申请人本身的实际成就同样重要。律师可以协助判断哪些标准最适合特定的申请背景，并协助规划如何呈现相关证据——但没有任何律师可以保证移民局一定会批准某一份申请。
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
        title="讨论您的 EB-1A 案件"
        description="EB-1A 的资格评估取决于申请人具体的成就记录。预约咨询，与我们的团队讨论您的背景。"
        primary={{ label: '预约移民咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '了解职业移民', to: '/zh/employment-based-green-cards' }}
      />
    </>
  )
}
