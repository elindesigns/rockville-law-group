import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import TrustBar from '../components/shared/TrustBar.jsx'
import JurisdictionDisplay from '../components/JurisdictionDisplay.jsx'
import AttorneyCoverageForm from '../components/AttorneyCoverageForm.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { QuestionIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema, faqPageSchema } from '../lib/structuredData.js'
import { attorney, contact } from '../data/firm.js'
import { remoteCaveatZh } from '../data/firmZh.js'
import '../pages/ServicePage.css'
import '../pages/ForAttorneys.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '律师出庭代理', path: '/zh/attorney-hearing-coverage' },
]

const HEARING_TYPES_ZH = ['主审听证', '主日历听证', 'BIA 听证']

const PROCESS_ZH = [
  { step: '01', title: '提交代理申请', desc: '通过下方申请表格，或直接以电话、邮件的方式，告知我们听证的基本信息。' },
  { step: '02', title: '提供听证相关信息', desc: '法院、听证类型、日期，以及评估该请求所需的相关后勤信息。' },
  { step: '03', title: 'Rockville Law Group 审核', desc: '我们会确认时间是否可行，以及该案件是否属于我们可以代理的范围。' },
  { step: '04', title: '讨论代理范围与可行性', desc: '在确认之前，我们会与您沟通具体的后勤安排、代理范围，以及需要厘清的问题。' },
  { step: '05', title: '确认代理安排', desc: '双方就条款达成一致后，我们会以书面方式确认，并为听证做好准备。' },
]

const FAQS = [
  {
    q: '可以代理哪些类型的听证？',
    a: '主审听证（个案实质审理）、主日历听证，以及移民上诉委员会（BIA）相关事务，具体须视代理范围、时间安排及可行性而定。',
  },
  {
    q: '可以在哪些法院代理出庭？',
    a: '美国纽约南区联邦地区法院（SDNY）、美国纽约东区联邦地区法院（EDNY）、马里兰州联邦法院、纽约州法院，以及哥伦比亚特区法院。请参见上方"执业资格与出庭法院"部分，了解出庭法院与执业资格之间的区别。',
  },
  { q: '是否提供远程出庭服务？', a: '远程出庭适用于符合条件的案件，具体须遵循相关法院的规则及授权——我们会在审核每一份申请时确认相关细节。' },
  {
    q: '如何申请代理？',
    a: `请填写下方的申请表格，或直接致电 ${contact.phone}，或发送邮件至 ${contact.email} 与我们联系。代理安排需逐案确认，须视代理范围、时间安排及可行性而定。`,
    aNode: (
      <>
        请填写下方的申请表格，或直接致电{' '}
        <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>，或发送邮件至{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>{' '}
        与我们联系。代理安排需逐案确认，须视代理范围、时间安排及可行性而定。
      </>
    ),
  },
]

export default function AttorneyHearingCoverageZh() {
  useDocumentTitle(
    '移民法庭出庭代理 | Rockville Law Group 律师专区',
    '为需要移民法庭听证代理的律师提供协助，涵盖主审听证、主日历听证及 BIA 事务，符合条件的案件可提供远程出庭服务。Li Weng 律师持有纽约州及哥伦比亚特区执业资格。',
    { lang: 'zh-Hans', alternatePath: '/for-attorneys' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section section--ink for-attorneys-hero">
        <div className="container">
          <span className="eyebrow eyebrow--on-ink">律师专区</span>
          <h1 className="for-attorneys-hero__title">需要移民法庭出庭代理？</h1>
          <p className="lede lede--wide for-attorneys-hero__lede">
            Rockville Law Group 为律师提供移民法庭出庭代理（special appearance），涵盖主审听证、主日历听证及 BIA
            事务——包括 SDNY（纽约南区联邦法院）及 EDNY（纽约东区联邦法院）在内的法院。
          </p>
          <div className="for-attorneys-hero__actions">
            <Button href="#request-coverage" variant="primary">
              申请出庭代理
            </Button>
            <Button to="/zh/about" variant="outline-on-ink">
              了解 Li Weng 律师背景
            </Button>
          </div>
          <TrustBar className="for-attorneys-hero__trust" />
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="代理服务" title="远程移民法庭听证代理" />
          <ul className="for-attorneys__hearing-list">
            {HEARING_TYPES_ZH.map((h, i) => (
              <Reveal as="li" key={h} delay={i * 0.05} className="for-attorneys__hearing-chip">
                {h}
              </Reveal>
            ))}
          </ul>
          <p className="field-note for-attorneys__caveat">{remoteCaveatZh}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="执业资格与出庭法院" title="执业资格与可出庭代理的法院" align="center" />
          <JurisdictionDisplay />
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="申请流程" title="代理申请流程" />
          <div className="service-block for-attorneys__process">
            {PROCESS_ZH.map((step, i) => (
              <Reveal as="article" key={step.step} delay={i * 0.05} className="service-step">
                <span className="service-step__index">{step.step}</span>
                <h3 className="service-step__title">{step.title}</h3>
                <p className="service-step__desc">{step.desc}</p>
              </Reveal>
            ))}
          </div>
          <p className="field-note for-attorneys__caveat">代理安排需逐案确认，须视代理范围、时间安排及可行性而定。提交申请并不代表代理请求已被接受。</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="资历背景" title="律师为什么选择与 Rockville Law Group 合作" />
          <div className="service-block service-block--2col">
            <Reveal className="card about-credentials__card">
              <h3>经验与执业资格</h3>
              <ul>
                <li>{attorney.yearsExperience} 年执业经验</li>
                <li>执业资格：纽约州（自 2012 年起）</li>
                <li>执业资格：哥伦比亚特区（自 2017 年起）</li>
                <li>美国纽约南区联邦地区法院（SDNY）</li>
                <li>美国纽约东区联邦地区法院（EDNY）</li>
              </ul>
            </Reveal>
            <Reveal delay={0.06} className="card about-credentials__card">
              <h3>直接核实</h3>
              <ul>
                <li>
                  <a href={attorney.profiles.justia} target="_blank" rel="noreferrer">
                    Justia 律师档案 ↗
                  </a>
                </li>
                <li>
                  <a href={attorney.profiles.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn 档案 ↗
                  </a>
                </li>
                <li>英文、普通话</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section service-faq">
        <div className="container container--narrow">
          <SectionHeading eyebrow="常见问题" title="您可能想了解的问题" align="center" icon={QuestionIcon} />
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section id="request-coverage" className="section section--deep for-attorneys__form-section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="申请代理" title="申请出庭代理" lede="请提供基本信息，Rockville Law Group 将与您联系，讨论具体的可行性与代理范围。" align="center" />
          <AttorneyCoverageForm />
        </div>
      </section>
    </>
  )
}
