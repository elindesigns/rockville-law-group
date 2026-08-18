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
import { remoteCaveatZh } from '../data/firmZh.js'
import './ServicePage.css'
import './ImmigrationCourt.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '业务领域', path: '/zh/practice-areas' },
  { name: '移民服务', path: '/zh/immigration-services' },
  { name: '移民法庭', path: '/zh/immigration-court' },
]

const HEARING_TYPES = [
  { index: '排期', title: '主日历听证（Master Calendar Hearing）', desc: '一种较为简短的初步听证，法官会在此确认基本案件信息、处理排期事宜，并安排后续听证日期。' },
  { index: '实质审理', title: '主审听证（Individual Hearing）', desc: '一场时间较长的听证，双方在此提交证据、进行陈述，移民法官会依据案件的实质内容作出裁决。' },
  { index: '上诉', title: '移民上诉委员会听证（BIA）', desc: '移民上诉委员会（Board of Immigration Appeals）负责审查移民法官作出的裁决。' },
]

const AFTER_NTA = [
  {
    title: '出庭通知书（Notice to Appear）',
    desc: '出庭通知书是启动遣返程序的文件，其中列明政府的指控及所援引的移民法条款。收到出庭通知书，并不代表一定会被遣返——这意味着案件将由移民法官作出裁决。',
  },
  {
    title: '可能适用的救济方式',
    desc: '根据具体情况，可能适用的救济方式包括庇护、撤销遣返（Cancellation of Removal）、身份调整，或其他豁免。具体适用哪些救济方式，很大程度上取决于移民历史、家庭关系，以及案件所涉及的具体指控。',
  },
  {
    title: '缺席听证的后果',
    desc: '缺席已排定的听证，可能导致法官作出缺席遣返令——即在当事人未出庭的情况下作出的裁决。缺席后申请重新开庭的时限通常很短，因此及时寻求法律建议非常重要。',
  },
]

const FAQS = [
  {
    q: '出庭是否需要律师？',
    a: '您有权自行委托律师代理（费用自理），但政府不会免费提供律师。由于遣返程序可能影响当事人能否继续留在美国，许多人会选择委托律师代理。',
  },
  {
    q: '缺席移民法庭听证会怎样？',
    a: '缺席听证可能导致法官作出缺席遣返令——即在当事人未出庭的情况下作出的裁决，这也可能影响将来申请其他救济的资格。如果已经缺席听证，应尽快寻求法律建议，因为申请重新开庭的时限通常很短。',
  },
  {
    q: '遣返程序通常需要多长时间？',
    a: '办理时间因移民法庭的案件积压情况、所寻求的救济类型，以及案件复杂程度而有很大差异——程序可能持续数月，也可能长达数年。',
  },
  {
    q: '是否可以对移民法官的裁决提出上诉？',
    a: '在许多情况下可以——通常须在裁决作出后 30 天内向移民上诉委员会递交上诉通知。并非所有事项都可以上诉，具体某一裁决之后有哪些选择，建议通过咨询进一步了解。',
  },
  { q: '是否可以用中文代理案件？', a: '是的。Rockville Law Group 提供英文与普通话咨询服务。' },
]

export default function ImmigrationCourtZh() {
  useDocumentTitle(
    '纽约移民法庭律师 | Rockville Law Group',
    '移民法庭代理、遣返辩护及移民上诉——由精通英文与普通话的纽约移民律师 Li Weng 讲解主日历听证、主审听证及 BIA 上诉的相关事宜。',
    { lang: 'zh-Hans', alternatePath: '/immigration-court' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">移民法庭</span>
          <h1 className="service-hero__title">移民法庭代理</h1>
          <p className="lede service-hero__lede">移民法庭的审理有其自身的排期与规则。Rockville Law Group 代理当事人出席遣返程序，并在案件的每个阶段，为您说明可能面对的情况。</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="听证类型" title="移民法庭的听证程序" />
          <div className="service-block">
            {HEARING_TYPES.map((h, i) => (
              <Reveal as="article" key={h.title} delay={i * 0.06} className="service-step">
                <span className="service-step__index">{h.index}</span>
                <h3 className="service-step__title">{h.title}</h3>
                <p className="service-step__desc">{h.desc}</p>
              </Reveal>
            ))}
          </div>
          <p className="field-note immigration-court__caveat">{remoteCaveatZh}</p>
        </div>
      </section>

      <section className="section section--ink court-pullquote">
        <div className="container container--narrow">
          <Reveal>
            <SealMark tone="paper" size={32} className="court-pullquote__seal" />
            <p className="court-pullquote__text">每一场听证都有其自身的规则与时间安排——了解将会发生什么，往往是应对听证最重要的一步。</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="常见问题" title="移民法庭与移民局（USCIS）的区别" />
          <p className="lede lede--wide">
            移民法庭——属于行政复审办公室（Executive Office for Immigration Review,
            EOIR）的一部分——与美国公民及移民服务局（USCIS）是两个不同的机构。USCIS
            负责处理各类申请，例如绿卡、入籍及签证申请；移民法庭则负责审理遣返程序及相关的救济申请，由移民法官（而非 USCIS 的官员）作出裁决。
          </p>
        </div>
      </section>

      <section className="section" id="removal-defense">
        <div className="container">
          <SectionHeading eyebrow="遣返程序" title="遣返辩护" />
          <p className="lede lede--wide">
            遣返程序始于国土安全部（DHS）向移民法庭递交出庭通知书。Rockville Law Group
            代理当事人处理此类程序——审查政府提出的指控、评估可能适用的救济方式，并代理出席移民法官前的听证。
          </p>
          <div className="service-block">
            {AFTER_NTA.map((item, i) => (
              <Reveal as="article" key={item.title} delay={i * 0.06} className="service-step">
                <h3 className="service-step__title">{item.title}</h3>
                <p className="service-step__desc">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep" id="appeals">
        <div className="container container--narrow">
          <SectionHeading eyebrow="裁决后的选择" title="移民上诉" />
          <p className="lede lede--wide">
            如果移民法官作出不利裁决，可能存在对该裁决提出异议的途径。向移民上诉委员会（BIA）提出上诉，通常须在法官作出裁决后 30
            天内提出。移民上诉委员会依据现有卷宗审查移民法官的裁决——这与听证程序不同，且并非所有事项都可以上诉。Rockville Law Group 可以协助评估是否适合提出上诉，或是否存在其他裁决后的救济途径。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="court-connector card">
            <BriefcaseIcon className="court-connector__icon" />
            <div>
              <h3>您是律师，且有听证需要代理出庭吗？</h3>
              <p>Rockville Law Group 为需要符合条件的移民法庭听证代理的律师提供协助。</p>
            </div>
            <Button to="/zh/attorney-hearing-coverage" variant="outline">
              律师专区 <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
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
        title="讨论您的移民法庭事务"
        description="预约咨询，讨论您的案件及可能面对的情况。"
        primary={{ label: '预约移民咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '浏览全部移民服务', to: '/zh' }}
      />
    </>
  )
}
