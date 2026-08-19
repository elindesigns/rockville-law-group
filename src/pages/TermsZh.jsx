import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema } from '../lib/structuredData.js'
import { contact } from '../data/firm.js'
import { disclaimerZh, confidentialityNoticeZh } from '../data/firmZh.js'
import './ServicePage.css'
import './Article.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '条款与免责声明', path: '/zh/terms' },
]

export default function TermsZh() {
  useDocumentTitle(
    '条款与免责声明 | Rockville Law Group',
    'Rockville Law Group 网站使用条款，包括委托代理关系、律师广告及保密信息相关声明。',
    { lang: 'zh-Hans', alternatePath: '/terms' },
  )
  useStructuredData(breadcrumbSchema(BREADCRUMB_ITEMS))

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">条款</span>
          <h1 className="service-hero__title">条款与免责声明</h1>
          <p className="lede service-hero__lede">
            以下条款适用于您对本网站的使用，请一并阅读 <Link to="/zh/privacy">隐私政策</Link>。
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <div className="article-block">
            <h2 className="article-block__heading">无委托代理关系</h2>
            <p className="article-body-text">
              {disclaimerZh} 提交表单、发送电子邮件，或拨打本网站列出的电话号码，本身并不构成委托代理关系；只有在本所与您直接确认代理关系后（通常以书面形式），委托代理关系方才成立。
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">不保证结果</h2>
            <p className="article-body-text">
              每一宗法律事务均取决于其自身的具体事实。本网站上的任何内容——包括所述案件类型、业务领域说明或律师背景——均不构成对任何事务结果的保证、担保或预测。
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">不能替代具体法律意见</h2>
            <p className="article-body-text">
              本网站内容仅为有关 Rockville Law Group 及其执业领域的一般性信息，并非针对您具体情况的法律意见，不应作为就您自身事务咨询律师的替代方式。
            </p>
          </div>

          <div className="article-callout">
            <h3 className="article-block__heading">保密信息</h3>
            <p>{confidentialityNoticeZh}</p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">律师广告声明</h2>
            <p className="article-body-text">
              在部分司法管辖区，本网站可能被视为律师广告。本网站中如涉及以往案例结果的描述或引用，并不保证未来事务能获得相似结果。
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">外部链接</h2>
            <p className="article-body-text">
              本网站链接至少量外部资料页面，例如 Justia 及 LinkedIn，以便访客独立核实律师资质。Rockville Law Group
              不对该等第三方网站的内容进行控制，亦不承担相关责任。
            </p>
          </div>

          <div className="article-block">
            <h2 className="article-block__heading">联系方式</h2>
            <p className="article-body-text">
              如对本条款有任何疑问，请通过 <a href={`mailto:${contact.email}`}>{contact.email}</a> 与我们联系。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
