import { Link } from 'react-router-dom'
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
import { contact } from '../data/firm.js'
import './ServicePage.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '业务领域', path: '/zh/practice-areas' },
  { name: '托管服务', path: '/zh/escrow-services' },
]

const CATEGORIES = [
  {
    title: '商业与交易托管',
    desc: '适用于并购、股权收购及其他商业协议中的托管安排——保管资金或文件，直至尽职调查、赔偿保留金等交易成交条件达成。',
  },
  {
    title: '房地产托管',
    desc: '在房地产交易中担任托管代理人——保管定金、契据及成交资金，直至融资、验房及其他合同约定条件达成。',
  },
]

const PROCESS = [
  { step: '01', title: '托管协议', desc: '托管的具体条款——保管内容、释放条件，以及各方的责任——作为交易的一部分，会以书面托管协议的形式列明。' },
  { step: '02', title: '存入资金或文件', desc: '相关资金、契据或其他文件交由托管代理人保管。' },
  { step: '03', title: '核实条件', desc: '托管代理人确认约定的条件——融资、验房、成交要求或其他条件——是否已经达成。' },
  { step: '04', title: '释放', desc: '条件达成后，托管代理人依照协议释放资金或文件。' },
]

const FAQS = [
  {
    q: 'Rockville Law Group 是否提供托管服务？',
    a: '是的。Rockville Law Group 可以在商业及房地产交易中担任托管代理人，保管资金或文件，直至交易约定的条件达成。',
  },
  {
    q: '什么是托管（Escrow）？它如何运作？',
    a: '托管是一种安排，由中立的第三方代表交易各方保管资金、文件或财产，仅在约定条件达成后才予以释放。这一安排对交易双方都是一种保护——任何一方都无需在交易真正具备成交条件之前，就交出资金或文件。',
  },
  {
    q: '托管是否只适用于房地产交易？',
    a: '并不是。托管常见于房地产成交，但在商业交易中同样常见——例如并购、股权收购及其他需要在成交条件达成前保管资金或文件的协议。',
  },
  {
    q: '如何安排托管服务？',
    a: `托管通常是更大交易的一部分。了解是否适合具体交易，最直接的方式是与我们联系——可致电 ${contact.phone}，或发送邮件至 ${contact.email}——也可以直接预约咨询。`,
  },
  {
    q: '托管事务是否可以用中文办理？',
    a: '是的。Rockville Law Group 提供英文与普通话咨询服务。',
  },
]

export default function EscrowServicesZh() {
  useDocumentTitle(
    '纽约托管服务律师 | Rockville Law Group',
    '为商业及房地产交易提供托管代理服务——保管资金、契据或交易文件，直至融资、验房或其他交易条件达成——由精通英文与普通话的纽约律师 Li Weng 为您讲解托管服务相关事宜。',
    { lang: 'zh-Hans', alternatePath: '/escrow-services' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">托管服务</span>
          <h1 className="service-hero__title">托管服务</h1>
          <p className="zh-label service-hero__zh">Escrow Services</p>
          <p className="lede service-hero__lede">
            托管是保护交易双方的一种安排——由中立的第三方保管资金、文件或财产，直至约定的条件达成。Rockville Law Group
            在纽约为商业及房地产交易提供托管代理服务。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="服务范围" title="托管服务" />
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
          <SectionHeading eyebrow="办理流程" title="托管安排通常如何推进" />
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
          <SectionHeading eyebrow="相关业务" title="商业交易中的托管事务" />
          <p className="lede lede--wide">
            并购、大型合同等商业交易，往往需要由中立的第三方保管资金或文件，直至成交条件达成。
            <Link to="/zh/business-law">Rockville Law Group 的商业法业务</Link>
            与托管服务协同办理此类事宜。
          </p>
        </div>
      </section>

      <section className="section service-faq">
        <div className="container container--narrow">
          <SectionHeading eyebrow="常见问题" title="您可能想了解的问题" align="center" icon={QuestionIcon} />
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="court-connector card">
            <div>
              <h3>正在筹备涉及托管安排的交易？</h3>
              <p>托管通常是更大交易的一部分——预约咨询是最直接的了解方式。</p>
            </div>
            <Button to="/zh/contact#consultation" variant="outline">
              预约咨询 <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="联系律师"
        title="讨论您的托管事务"
        description="托管通常与具体交易相关联。预约咨询，与我们的团队讨论您的安排。"
        primary={{ label: '讨论您的托管事务', to: '/zh/contact#consultation' }}
        secondary={{ label: '商业与公司法', to: '/zh/business-law' }}
      />
    </>
  )
}
