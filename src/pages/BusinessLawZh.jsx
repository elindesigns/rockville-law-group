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
import './ServicePage.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '业务领域', path: '/zh/practice-areas' },
  { name: '商业与公司法', path: '/zh/business-law' },
]

const CATEGORIES = [
  {
    title: '公司设立与发展',
    desc: '为在纽约新设立或正在扩展业务的企业主提供公司设立及特许经营（Franchising）相关事务的协助。',
  },
  {
    title: '合同与交易',
    desc: '商业合同、企业融资事务，以及并购交易——这些协议决定着一家企业的日常运作与发展方向。',
  },
  {
    title: '争议与解散',
    desc: '商业诉讼、合伙及股东争议，以及在需要终止业务关系时的公司解散事务。',
  },
]

const FAQS = [
  {
    q: '应该选择哪种公司类型？',
    a: '合适的公司架构——有限责任公司（LLC）、股份有限公司（Corporation）、合伙企业，或其他形式——取决于具体业务、股东情况及经营目标。通过咨询可以进一步明确适合具体业务的选项。',
  },
  {
    q: '签约前可以先请律师审核合同吗？',
    a: '可以。Rockville Law Group 为客户审核并协商商业合同条款，也可以为新的或现有的业务关系起草协议。',
  },
  {
    q: '合伙或股东出现争议时会怎样处理？',
    a: '具体情况因公司章程、各方关系及诉求不同而有很大差异——处理方式可能从协商到诉讼不等。通过咨询是评估具体情况的最佳方式。',
  },
  {
    q: '商业事务是否可以用中文办理？',
    a: '是的。Rockville Law Group 提供英文与普通话咨询服务。',
  },
]

export default function BusinessLawZh() {
  useDocumentTitle(
    '纽约商业律师 | Rockville Law Group',
    '公司设立、合同事务、并购交易，以及合伙与股东争议——由精通英文与普通话的纽约律师 Li Weng 为您讲解商业与公司法相关事宜。',
    { lang: 'zh-Hans', alternatePath: '/business-law' },
  )
  useStructuredData([breadcrumbSchema(BREADCRUMB_ITEMS), faqPageSchema(FAQS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">商业与公司法</span>
          <h1 className="service-hero__title">商业与公司法</h1>
          <p className="zh-label service-hero__zh">Business & Corporate Law</p>
          <p className="lede service-hero__lede">
            从公司设立开始，到日常运营中的合同、交易，乃至偶尔出现的争议，Rockville Law Group 为纽约的企业主提供全流程法律咨询。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="服务范围" title="商业法律服务" />
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
          <SectionHeading eyebrow="相关业务" title="商业交易中的证券事务" />
          <p className="lede lede--wide">
            部分商业交易——例如融资、引入新投资人，或调整股权结构——也会涉及证券法相关事务。
            <a href="/zh/ipo-securities">Rockville Law Group 的证券法业务</a>
            与商业法业务协同办理此类事宜。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="相关业务" title="商业交易中的托管事务" />
          <p className="lede lede--wide">
            并购、大型合同等商业交易，往往需要由中立的第三方保管资金或文件，直至成交条件达成。
            <a href="/zh/escrow-services">Rockville Law Group 的托管服务</a>
            与商业法业务协同办理此类事宜。
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
              <h3>考虑融资或引入投资人？</h3>
              <p>商业交易中经常会涉及证券法相关问题。</p>
            </div>
            <Button to="/zh/ipo-securities" variant="outline">
              证券法 <ArrowIcon width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="联系律师"
        title="讨论您的商业事务"
        description="预约咨询，与我们的团队直接讨论您企业的具体需求。"
        primary={{ label: '讨论您的商业事务', to: '/zh/contact#consultation' }}
        secondary={{ label: '业务领域', to: '/zh/practice-areas' }}
      />
    </>
  )
}
