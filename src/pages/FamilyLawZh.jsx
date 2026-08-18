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
  { name: '家庭法', path: '/zh/family-law' },
]

const CATEGORIES = [
  {
    title: '监护权、抚养费与亲子关系',
    desc: '子女监护权与抚养费事宜、亲子关系确认，以及父亲权益相关事务——协助家长了解自身的权利与义务，无论案件是双方协议还是存在争议。',
  },
  {
    title: '家庭组建与协议',
    desc: '收养、婚前及婚姻协议，以及同性伴侣家庭相关的法律事宜——为家庭关系的建立或正式化提前做好规划。',
  },
  {
    title: '保护令与监护事务',
    desc: '人身保护令的申请，以及针对未成年子女或行为能力受限家庭成员的监护（Guardianship）安排。',
  },
]

const FAQS = [
  {
    q: '存在争议的监护权案件也可以代理吗？',
    a: '可以。无论是协议监护还是存在争议的监护与抚养费案件，Rockville Law Group 均可代理。具体采取哪种方式，取决于家庭的实际情况——建议通过咨询进一步讨论。',
  },
  {
    q: '监护权（Custody）与监护（Guardianship）有什么区别？',
    a: '监护权（Custody）通常涉及父母对自己子女的权利与义务；而监护（Guardianship）是另一项法律程序，赋予某人对非其亲生子女的未成年人、或行为能力受限成年家庭成员的照管权，两者的要求与程序有所不同。',
  },
  {
    q: '婚前协议一定很复杂吗？',
    a: '不一定——协议的具体范围取决于夫妻双方的资产、目标及具体情况。通过咨询可以进一步明确一份协议应当涵盖哪些内容。',
  },
  {
    q: '家庭法事务是否可以用中文办理？',
    a: '是的。Rockville Law Group 提供英文与普通话咨询服务。',
  },
]

export default function FamilyLawZh() {
  useDocumentTitle(
    '纽约家庭法律师 | Rockville Law Group',
    '子女监护权与抚养费、亲子关系确认、收养、婚前协议及监护事务——由精通英文与普通话的纽约律师 Li Weng 为您讲解家庭法相关事宜。',
    { lang: 'zh-Hans', alternatePath: '/family-law' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">家庭法</span>
          <h1 className="service-hero__title">家庭法</h1>
          <p className="zh-label service-hero__zh">Family Law</p>
          <p className="lede service-hero__lede">
            家庭法事务往往关系到最亲近的人，也常常具有一定的紧迫性。Rockville Law Group 在纽约代理个人及家庭处理监护权、抚养费与亲子关系事宜，家庭组建与协议，以及保护令与监护相关的法律程序。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="业务范围" title="家庭法相关事务" />
          <div className="service-block service-block--2col">
            {CATEGORIES.map((c, i) => (
              <Reveal as="article" key={c.title} delay={(i % 3) * 0.06} className="service-step">
                <h3 className="service-step__title">{c.title}</h3>
                <p className="service-step__desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="律师的作用" title="为什么法律代理很重要" />
          <p className="lede lede--wide">
            家庭法事务会直接影响到您最亲近的人，最终结果也高度取决于案件的具体事实——包括纽约当地适用的法律、家庭的具体情况，以及各方所寻求的目标。法律代理可以协助确认可行的选项、准备并提交所需文件，并在协议或需要法庭裁决时为当事人的立场进行辩护。任何律师都无法保证案件的具体结果。
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
        title="讨论您的家庭法事务"
        description="每个家庭的情况都不同。预约咨询，与我们的团队直接讨论您的具体情况。"
        primary={{ label: '预约家庭法咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '业务领域', to: '/zh/practice-areas' }}
      />
    </>
  )
}
