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
  { name: '庇护', path: '/zh/asylum' },
]

const TRACKS = [
  {
    title: '主动申请庇护（Affirmative Asylum）',
    desc: '尚未进入遣返程序的申请人，可直接向移民局（USCIS）递交申请，由庇护官员进行面谈，并在行政程序中作出决定，无需经过法庭。',
  },
  {
    title: '法庭辩护式庇护（Defensive Asylum）',
    desc: '已处于遣返程序中的申请人，可以在移民法庭中以庇护作为对抗遣返的辩护理由。由移民法官（而非庇护官员）在听证后作出裁决，政府一方也会派代表出席。',
  },
]

const PROCESS = [
  { step: '01', title: '递交 I-589 表格', desc: '申请通常须在入境美国一年内提出，若情况发生变化或存在特殊情况导致延误，可能存在有限的例外。' },
  { step: '02', title: '面谈或听证', desc: '主动申请案件需接受移民局庇护官员的面谈；法庭辩护式案件则在移民法庭听证后由移民法官作出裁决。' },
  { step: '03', title: '结果', desc: '主动申请案件可能获批、被转入移民法庭，或在有限情形下被直接拒绝；法庭辩护式案件由移民法官裁决，符合条件时可能提出上诉。' },
  { step: '04', title: '获批之后', desc: '获得庇护身份的人士可在美国合法工作，并在一年后申请绿卡。在特定情形下，配偶及子女也可能被一并纳入申请。' },
]

const FAQS = [
  {
    q: '主动申请与法庭辩护式庇护有什么区别？',
    a: '主动申请是尚未进入遣返程序的人士直接向移民局提出的申请；法庭辩护式庇护则是已处于遣返程序中的人士，在移民法庭以庇护作为辩护理由提出——包括某些主动申请被转入法庭的情形。两者的审理场所、裁决方式及程序都不相同。',
  },
  {
    q: '申请庇护是否有时间限制？',
    a: '申请人通常须在最后一次入境美国一年内提出申请。若因情况发生变化或存在特殊情况导致延误，可能存在有限的例外——具体是否适用，建议通过咨询进一步评估。',
  },
  {
    q: '获得庇护是否意味着一定能留在美国？',
    a: '并不一定。庇护属于自由裁量性的救济方式，需根据每个案件的具体事实与证据逐案审理。即使符合基本定义，也不能保证获批，任何律师都无法承诺具体结果。',
  },
  {
    q: '配偶及子女是否可以一并列入庇护申请？',
    a: '在特定情形下，未满 21 岁且未婚的子女及配偶可能可以一并列入庇护申请——无论他们目前是否已在美国，还是之后再申请团聚。具体是否适用，取决于每个家庭的实际情况。',
  },
  {
    q: '是否提供中文庇护咨询？',
    a: '是的。Rockville Law Group 提供英文与普通话咨询服务。',
  },
]

export default function AsylumZh() {
  useDocumentTitle(
    '纽约庇护律师 | Rockville Law Group',
    '主动申请与法庭辩护式庇护代理——由精通英文与普通话的纽约移民律师 Li Weng 讲解庇护资格、办理流程及移民法庭相关事宜。',
    { lang: 'zh-Hans', alternatePath: '/asylum' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">庇护</span>
          <h1 className="service-hero__title">庇护</h1>
          <p className="lede service-hero__lede">
            庇护为因遭受迫害、或有合理理由恐惧遭受迫害而无法安全返回原籍国的人士，提供法律保护。Rockville Law Group
            协助当事人处理庇护申请——无论是向移民局主动提出申请，还是在移民法庭中作为辩护提出。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="基本概念" title="庇护保护的对象" />
          <p className="lede lede--wide">
            如果申请人曾因种族、宗教、国籍、政治观点，或属于某一特定社会群体而遭受迫害，或有合理理由恐惧将来会因此遭受迫害，则可能符合申请庇护的条件。一旦获批，庇护身份可使申请人合法留在美国，并在一年后申请绿卡。庇护属于"自由裁量性"（Discretionary）的救济方式——即使申请人的情况符合基本定义，也不代表案件一定会获批。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="两种申请途径" title="主动申请与法庭辩护式庇护" />
          <div className="service-block service-block--2col">
            {TRACKS.map((t, i) => (
              <Reveal as="article" key={t.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">{t.title}</h3>
                <p className="service-step__desc">{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="一般办理流程" title="庇护案件通常如何推进" />
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
          <SectionHeading eyebrow="移民法庭相关事宜" title="庇护案件何时会进入移民法庭" />
          <p className="lede lede--wide">
            如果主动申请被拒绝，或是在收到出庭通知书（Notice to
            Appear）之后才提出庇护申请，此类案件通常会转由<Link to="/zh/immigration-court">移民法庭</Link>
            审理，而非由移民局处理。这一阶段的代理方式与主动申请程序有所不同——需要经过正式的听证程序，政府一方也会派代表出席。Rockville Law Group 同时代理这两种类型的案件。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="律师的作用" title="为什么法律代理很重要" />
          <p className="lede lede--wide">
            庇护案件的成败往往取决于具体事实的呈现、佐证材料的充分性，以及严格的申请时限。律师可以协助确认最适合的法律主张、收集有力的佐证证据，并协助准备陈述内容——但没有任何律师可以保证庇护案件的最终结果。
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
        title="讨论您的庇护案件"
        description="庇护案件具有时效性，且高度依赖具体事实。预约咨询，与我们的团队直接讨论您的情况。"
        primary={{ label: '预约移民咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '了解移民法庭', to: '/zh/immigration-court' }}
      />
    </>
  )
}
