import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
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
  { name: '证券法', path: '/zh/ipo-securities' },
]

const FAQS = [
  {
    q: '证券法律师具体协助哪些事务？',
    a: '证券法规范企业股权（股票、股权权益及类似金融工具）的发行与出售方式——包括这类发行应如何构建及披露，无论是依据联邦法还是州法。只要企业通过出让股权（而非例如贷款）的方式融资，就可能涉及证券法问题。',
  },
  {
    q: '这只适用于上市公司，非上市（私营）公司也适用吗？',
    a: '证券法问题并不仅限于上市公司——非上市及私营企业同样经常会遇到，例如企业通过非公开发行（Private Offering）向投资人融资时。',
  },
  {
    q: '什么是非公开发行（Private Placement）或豁免发行？',
    a: '许多私营企业依据相关法律的豁免条款进行融资，无需按照公开发行的要求进行完整注册——这类做法通常被称为非公开发行或豁免发行。即便如此，这类发行仍须满足特定的法律要求。',
  },
  {
    q: '证券法事务是否可以用中文讨论？',
    a: '是的。Rockville Law Group 提供英文与普通话咨询服务。',
  },
]

export default function IpoSecuritiesZh() {
  useDocumentTitle(
    '纽约证券法律师 | Rockville Law Group',
    '为非上市企业提供证券法咨询，涵盖非公开发行及公司交易中涉及的证券事务——由精通英文与普通话的纽约律师 Li Weng 为您讲解。',
    { lang: 'zh-Hans', alternatePath: '/ipo-securities' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">证券法</span>
          <h1 className="service-hero__title">证券法</h1>
          <p className="zh-label service-hero__zh">Securities Law</p>
          <p className="lede service-hero__lede">
            只要企业通过出让股权——股票、股权权益或类似金融工具——的方式融资，就可能涉及证券法问题。Rockville Law Group
            为非上市企业在处理相关事务时提供证券法咨询。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="基本概念" title="证券法涵盖的内容" />
          <p className="lede lede--wide">
            证券法规范企业股权的发行与出售方式，以及向投资人应披露的信息。这并不仅限于上市公司——只要一家私营或非上市企业通过出让股权向投资人融资（无论投资人数量多少），就可能适用相关规定。许多非公开发行依据特定的豁免条款进行，正确满足这些豁免条件的要求十分重要。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="业务关联" title="商业事务中的证券问题" />
          <p className="lede lede--wide">
            证券法问题经常与其他商业事务同时出现——例如引入新投资人、调整股权结构，或作为更大交易的一部分进行融资。Rockville Law Group
            的证券法业务与<Link to="/zh/business-law">商业与公司法业务</Link>协同办理此类事宜。每项委托都会根据具体交易情况进行评估——预约咨询是了解某项事务是否适合委托本所处理的最佳方式。
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
        title="讨论您的证券法事务"
        description="预约咨询，与我们的团队讨论您的交易，确认是否适合委托办理。"
        primary={{ label: '讨论您的证券法事务', to: '/zh/contact#consultation' }}
        secondary={{ label: '商业与公司法', to: '/zh/business-law' }}
      />
    </>
  )
}
