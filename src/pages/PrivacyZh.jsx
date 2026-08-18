import Breadcrumbs from '../components/Breadcrumbs.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema } from '../lib/structuredData.js'
import { contact } from '../data/firm.js'
import './ServicePage.css'
import './Article.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '隐私政策', path: '/zh/privacy' },
]

export default function PrivacyZh() {
  useDocumentTitle(
    '隐私政策 | Rockville Law Group',
    'Rockville Law Group 如何处理通过本网站提交的信息——预约咨询表单及律师出庭代理申请表单所收集的内容、使用方式，以及如何就隐私问题与我们联系。',
    { lang: 'zh-Hans', alternatePath: '/privacy' },
  )
  useStructuredData(breadcrumbSchema(BREADCRUMB_ITEMS))

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">隐私</span>
          <h1 className="service-hero__title">隐私政策</h1>
          <p className="lede service-hero__lede">
            本页说明 Rockville Law Group LLC 如何处理通过本网站提交的信息。若您通过电话或面谈等网站以外的方式与本所联系，则不适用本页内容。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <div className="article-block">
            <h2 className="article-block__heading">我们收集的信息</h2>
            <p className="article-body-text">
              当您提交预约咨询表单或律师出庭代理申请表单时，我们会收集您填写的信息——通常包括姓名、电子邮箱、电话号码，以及关于您事务或请求的简要说明。本网站无需注册账户，也不会收集任何付款信息。
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">表单提交的处理方式</h2>
            <p className="article-body-text">
              本网站的表单提交通过第三方表单处理服务 Formspree 发送；若某个表单尚未连接该服务，则会以预先填写好内容的电子邮件形式，由您通过自己的邮箱应用发送。无论采用哪种方式，您提交的信息仅用于回复您的请求。
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">网站数据分析</h2>
            <p className="article-body-text">
              本网站可能使用 Google Analytics 了解访客使用网站的总体、汇总趋势，例如哪些页面被浏览。此类分析工具可能会使用 Cookie。这些信息不会用于识别您的个人身份，也与您通过联系表单提交的内容无关。
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">我们如何使用您的信息</h2>
            <p className="article-body-text">
              我们使用您提交的信息来回复您的咨询、安排预约咨询，或讨论律师出庭代理申请。我们不会出售您的个人信息，也不会将其提供给第三方用于其自身的营销目的。
            </p>
          </div>

          <div className="article-callout">
            <h3 className="article-block__heading">关于保密信息的说明</h3>
            <p>请勿通过网站表单提交保密、受特权保护或敏感的案件信息。在与您取得联系后，我们会通过适当、安全的沟通方式讨论具体案件细节。</p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">有关本政策的问题</h2>
            <p className="article-body-text">
              如果您对本网站如何处理您的信息有任何疑问，可通过 <a href={`mailto:${contact.email}`}>{contact.email}</a> 与我们联系。
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">政策更新</h2>
            <p className="article-body-text">本政策可能会不定期更新，本页所发布的版本为当前有效版本。最近更新时间：2026 年 8 月。</p>
          </div>
        </div>
      </section>
    </>
  )
}
