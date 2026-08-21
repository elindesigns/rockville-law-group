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
  { name: '亲属移民', path: '/zh/family-based-green-cards' },
]

const PATHWAYS = [
  {
    title: '配偶绿卡（婚姻移民）',
    desc: '美国公民的配偶属于"直系亲属"类别，通常没有名额限制，办理相对较快；绿卡持有人的配偶则属于 F2A 亲属类别，可能需要等待签证名额。无论哪种情况，婚姻关系都必须真实，以共同生活为目的，而非主要为了获得移民身份。',
  },
  {
    title: '父母、子女与兄弟姐妹',
    desc: '21 岁以上的美国公民可以为父母申请移民。为成年子女（无论已婚或未婚）及兄弟姐妹提出的申请，通常属于亲属移民类别，等待时间因类别及受益人出生地而异。绿卡持有人可以为配偶及未婚子女提出申请。',
  },
  {
    title: '未婚夫妻签证（K-1）',
    desc: '若美国公民计划在未婚夫妻入境后 90 天内完婚，可为其申请 K-1 签证；未婚夫妻未满 21 岁的未婚子女，也可能符合申请 K-2 签证的条件。此类申请通常要求双方在递交申请前两年内曾当面见过面，但在有限情形下可申请豁免。',
  },
]

const PROCESS = [
  { step: '01', title: '递交申请', desc: '美国公民或绿卡持有人的亲属首先递交移民申请（通常为 I-130 表格），证明双方的亲属关系。' },
  { step: '02', title: '等待签证名额', desc: '直系亲属类别通常在申请获批后即可继续下一步；亲属移民类别则还需等待所属类别及原籍国的签证名额开放。' },
  { step: '03', title: '身份调整或领事馆程序', desc: '已在美国境内的受益人可能可以申请身份调整、无需离开美国；身处海外的受益人则通常需通过美国领事馆完成相关程序。' },
  { step: '04', title: '面谈与结果', desc: '多数案件需经过面谈，身份调整案件由移民局安排，海外案件在领事馆进行，之后才会作出绿卡的最终决定。' },
]

const FAQS = [
  {
    q: '与美国公民结婚，是否就能获得绿卡？',
    a: '与美国公民结婚通常可以使配偶具备以"直系亲属"身份申请绿卡的资格，前提是婚姻关系真实，且符合其他相关要求。移民局会仔细审查此类案件，能否获批无法保证，具体情况建议通过咨询进一步了解。',
  },
  {
    q: '身份调整与领事馆程序有什么区别？',
    a: '身份调整适用于已在美国境内、符合条件的受益人，可以不必离开美国即可申请绿卡；领事馆程序则是在海外的美国大使馆或领事馆完成相关手续。具体适用哪一种，通常取决于受益人所在地及其移民历史。',
  },
  {
    q: '亲属移民绿卡通常需要多长时间？',
    a: '办理时间因类别、受益人出生地及当前签证名额情况而有很大差异。直系亲属类别通常比亲属移民类别更快，后者可能需要等待数年才有签证名额。想要了解具体案件的合理时间预期，咨询是最可靠的方式。',
  },
]

export default function FamilyBasedGreenCardsZh() {
  useDocumentTitle(
    '纽约亲属移民律师 | Rockville Law Group',
    '婚姻绿卡、亲属移民申请、身份调整与领事馆程序，由精通英文与普通话的纽约移民律师 Li Weng 为您讲解。',
    { lang: 'zh-Hans', alternatePath: '/family-based-green-cards' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">亲属移民</span>
          <h1 className="service-hero__title">亲属移民</h1>
          <p className="lede service-hero__lede">
            美国公民或永久居民（绿卡持有人）可以为符合条件的亲属申请移民美国。Rockville Law Group
            协助申请人及受益人处理亲属移民案件的每一个阶段，从最初递交申请到最终的绿卡面谈。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="基本概念" title="亲属移民如何运作" />
          <p className="lede lede--wide">
            亲属移民允许美国公民或绿卡持有人为特定亲属申请绿卡。移民法将这些亲属关系分为两大类：美国公民的"直系亲属"（Immediate
            Relative），此类别没有年度名额限制；以及"亲属移民类别"（Family Preference
            Category），此类别受到国别配额限制，可能需要等待一段时间才能获得签证名额。具体适用哪一类别、需要等待多久，取决于申请人与担保人之间的关系，以及担保人本身的身份。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="常见亲属移民类别" title="哪些亲属关系可能符合条件" />
          <div className="service-block">
            {PATHWAYS.map((p, i) => (
              <Reveal as="article" key={p.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">{p.title}</h3>
                <p className="service-step__desc">{p.desc}</p>
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
          <SectionHeading eyebrow="需要留意的细节" title="两年期「有条件绿卡」" />
          <p className="lede lede--wide">
            许多家庭容易忽略的一点是：如果在绿卡获批时，婚姻关系维持时间不满两年，受益人通常会先获得"有条件永久居民"身份：即有效期为两年（而非十年）的绿卡。在该绿卡到期前的
            90
            天内，夫妻双方通常需共同递交 I-751
            表格，申请解除条件，并提供婚姻关系持续真实存在的最新证明。错过这一申请窗口可能会影响身份，建议在拿到有条件绿卡后就记下到期日期，而不要等到临近到期才处理。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="何时需要法律协助" title="什么情况下建议咨询律师" />
          <p className="lede lede--wide">
            多数亲属移民案件可以顺利推进，但也有一些情况会更为复杂，例如此前有过婚姻但未妥善终止、曾有移民身份违规记录、收到补充证据通知（Request for
            Evidence），或在面谈中被问及婚姻真实性相关的问题。由于每个案件的具体情况不同，网络上的一般性资讯无法替代针对个人情况的具体评估。
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
        title="讨论您的亲属移民案件"
        description="每个家庭的情况都不同。预约咨询，与我们的团队直接讨论您的具体情况。"
        primary={{ label: '预约移民咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '浏览全部移民服务', to: '/zh/immigration-services' }}
      />
    </>
  )
}
