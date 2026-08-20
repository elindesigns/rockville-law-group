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
import { priorityServices } from '../data/firmZh.js'
import './ServicePage.css'

// Chinese names/descriptions kept consistent with the SERVICES_ZH map on
// HomeZh.jsx — same phrasing wherever a visitor sees a given service
// teased, regardless of which page they land on.
const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '业务领域', path: '/zh/practice-areas' },
  { name: '移民服务', path: '/zh/immigration-services' },
]

const SERVICES_ZH = {
  'family-based-green-cards': {
    name: '亲属移民',
    desc: '为符合条件的家庭成员提供美国永久居留（绿卡）申请协助，包括婚姻绿卡及其他亲属类别的申请。',
    relevant: '您与美国公民或永久居民之间存在符合条件的亲属关系，并希望申请绿卡。',
    cta: '了解亲属移民',
  },
  asylum: {
    name: '庇护',
    desc: '为因遭受迫害、或有合理理由恐惧遭受迫害而无法安全返回原籍国的人士，提供庇护申请及移民法庭代理。',
    relevant: '您因担心返回原籍国的安全而希望留在美国，且目前已身处美国境内。',
    cta: '了解庇护申请',
  },
  eb1a: {
    name: 'EB-1A 杰出人才移民',
    desc: '适用于能够证明自己在所在领域具有杰出能力、并获得持续性国家级或国际级认可的申请人。',
    relevant: '您在所在领域拥有具体、可佐证的杰出成就，正在了解是否有机会以此申请永久居留。',
    cta: '了解 EB-1A',
  },
  'employment-based-green-cards': {
    name: '职业移民',
    desc: '协助符合条件的申请人办理雇主担保及其他职业类别的美国永久居留（绿卡）申请。',
    relevant: '您的雇主愿意为您担保绿卡申请，或您正在了解职业类别的永久居留途径。',
    cta: '了解职业移民',
  },
}

const OTHER_MATTERS = [
  {
    title: '移民法庭与遣返辩护',
    description: '代理当事人出席移民法官的听证——包括针对出庭通知书（Notice to Appear）的应对、评估可能适用的救济方式，以及法庭辩护式庇护申请。',
    to: '/zh/immigration-court',
    cta: '了解移民法庭代理',
  },
  {
    title: '移民上诉',
    description: '案件结果不如预期时，可能仍有上诉的空间——包括向移民上诉委员会（BIA）提出上诉。',
    to: '/zh/immigration-court#appeals',
    cta: '了解移民上诉',
  },
]

const FAQS = [
  {
    q: '联系 Rockville Law Group 是否会建立委托代理关系？',
    a: '不会。浏览本网站或提交联系表单，并不会建立委托代理（律师-客户）关系。该关系仅在双方明确同意后才会成立，通常是在完成咨询之后。',
  },
  {
    q: '咨询时会了解哪些内容？',
    a: '咨询是让您说明自身情况、并了解大致可行方向的机会。具体的下一步安排及委托条款，会在咨询中直接与您讨论。',
  },
  {
    q: '符合资格是否就代表案件一定会获批？',
    a: '不会。每个案件的资格认定都是逐案审查，任何律师都无法保证结果。预约咨询是了解您自身情况最直接的方式。',
  },
]

export default function ImmigrationServicesZh() {
  useDocumentTitle(
    '纽约移民服务 | Rockville Law Group',
    '亲属移民、庇护、EB-1A 杰出人才移民、职业移民及移民法庭代理——纽约法拉盛，可中文咨询。',
    { lang: 'zh-Hans', alternatePath: '/immigration-services' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">移民服务</span>
          <h1 className="service-hero__title">移民法律服务</h1>
          <p className="lede service-hero__lede">
            Rockville Law Group 专注于亲属移民、庇护、EB-1A 杰出人才移民及职业移民——为个人、家庭及职业申请人提供各阶段的法律代理。以下每个领域均有专属页面，详细说明申请资格、办理流程及常见问题。
          </p>
        </div>
      </section>

      <section className="section priority-detail">
        <div className="container">
          <div className="priority-detail__list">
            {priorityServices.map((service, i) => {
              const zhInfo = SERVICES_ZH[service.id]
              return (
                <Reveal
                  as="article"
                  key={service.id}
                  id={service.id}
                  delay={(i % 2) * 0.06}
                  className="priority-detail__item"
                >
                  <span className="priority-detail__index">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="priority-detail__title">{zhInfo.name}</h2>
                  <p className="priority-detail__desc">{zhInfo.desc}</p>
                  <p className="service-areas__relevant">
                    <strong>适用情况：</strong> {zhInfo.relevant}
                  </p>
                  <Button to={service.to.replace(/^\//, '/zh/')} variant="quiet" className="priority-detail__cta">
                    {zhInfo.cta} <ArrowIcon width={16} height={16} />
                  </Button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section service-areas">
        <div className="container">
          <SectionHeading eyebrow="其他事务" title="其他移民相关事务" />
          <div className="service-areas__list">
            {OTHER_MATTERS.map((area, i) => (
              <Reveal as="article" key={area.title} delay={(i % 3) * 0.05} className="service-areas__item">
                <h3 className="service-areas__title">{area.title}</h3>
                <p className="service-areas__desc">{area.description}</p>
                <Button to={area.to} variant="quiet" className="priority-detail__cta">
                  {area.cta} <ArrowIcon width={16} height={16} />
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-faq">
        <div className="container container--narrow">
          <SectionHeading eyebrow="常见问题" title="您可能想了解的问题" align="center" icon={QuestionIcon} />
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTABand
        eyebrow="下一步"
        title="讨论您的移民事务"
        description="每个案件的情况都不同。预约咨询，与我们的团队直接讨论您的具体情况。"
        primary={{ label: '预约移民咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '了解移民法庭', to: '/zh/immigration-court' }}
      />
    </>
  )
}
