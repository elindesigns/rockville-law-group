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
  { name: '遗产规划', path: '/zh/estate-planning' },
]

const CATEGORIES = [
  {
    title: '遗嘱与信托',
    desc: '遗嘱与信托是大多数遗产规划的核心文件，说明个人资产应如何分配，而信托还会进一步规定资产在此过程中应如何管理。',
  },
  {
    title: '医疗指示与监护规划',
    desc: '医疗指示（Health Care Directive）与监护（Guardianship）规划，用于确定当本人无法自行做出决定时，由谁来做出医疗或财务方面的决定。',
  },
  {
    title: '遗产管理',
    desc: '当遗产规划真正需要落实执行时，遗产管理涉及按照个人意愿处理遗产及相关事务的具体流程。',
  },
]

const FAQS = [
  {
    q: '已经有信托了，还需要遗嘱吗？',
    a: '通常仍然需要，遗嘱与信托往往承担不同的功能，许多遗产规划会同时使用两者。具体应如何组合，取决于个人的资产状况与规划目标。',
  },
  {
    q: '医疗指示与监护（Guardianship）有什么区别？',
    a: '医疗指示是本人提前安排好的文件，指定在需要时由谁代为做出医疗决定。而监护则是一项法庭程序，在没有此类提前安排、或安排不足以应对的情况下，由法院指定决策人。',
  },
  {
    q: '什么时候应该开始做遗产规划？',
    a: '并没有统一的最佳时间，结婚、生育子女或购置房产等重要人生阶段，通常是许多人开始制定或重新审视遗产规划的契机。通过咨询可以进一步明确适合自身情况的安排。',
  },
]

export default function EstatePlanningZh() {
  useDocumentTitle(
    // 遗嘱 / 信托 lead the title on purpose: they are the terms
    // Chinese-speaking clients actually search. 遗产规划 is closer to a
    // literal rendering of "estate planning" and pulls far less search
    // traffic on its own, so it stays in the description instead.
    '纽约遗嘱与信托律师 | 遗产规划 | Rockville Law Group',
    '遗嘱、信托、医疗指示与遗产管理，Rockville Law Group 提供中英文遗产规划咨询，办公室位于纽约法拉盛。',
    { lang: 'zh-Hans', alternatePath: '/estate-planning' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">遗产规划</span>
          <h1 className="service-hero__title">遗产规划</h1>
          <p className="zh-label service-hero__zh">Estate Planning</p>
          <p className="lede service-hero__lede">
            遗产规划是将个人对财产、医疗，以及未来可能需要代为决策的人选的意愿，正式落实为书面文件。Li
            Weng 律师协助纽约的个人及家庭制定这些安排，并在需要时协助家庭处理遗产管理事宜。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="服务范围" title="遗产规划相关服务" />
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
        <div className="container container--narrow">
          <SectionHeading eyebrow="律师的作用" title="为什么法律协助会有帮助" />
          <p className="lede lede--wide">
            遗产规划文件需要相互配合，并符合纽约州法律，才能真正实现个人的意愿，若在起草遗嘱或信托时未充分考虑家庭的具体情况，日后可能会引发困惑或不符合预期的结果。法律协助可以帮助确认哪些文件适合具体情况，并在需要时协助家庭落实遗产规划。
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
        title="预约遗产规划咨询"
        description="每一份遗产规划都应结合个人的具体情况。预约咨询，与我们的团队直接讨论您的安排。"
        primary={{ label: '预约遗产规划咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '业务领域', to: '/zh/practice-areas' }}
      />
    </>
  )
}
