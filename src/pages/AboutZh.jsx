import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CTABand from '../components/CTABand.jsx'
import Testimonials from '../components/Testimonials.jsx'
import JurisdictionDisplay from '../components/JurisdictionDisplay.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { personSchema, breadcrumbSchema } from '../lib/structuredData.js'
import { attorney } from '../data/firm.js'
import headshot from '../assets/li-weng-headshot.jpg'
import './About.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '关于律师', path: '/zh/about' },
]

const BIO_ZH = [
  'Li Weng 律师是 Rockville Law Group 的创始合伙人，这是一家位于纽约的律师事务所，为个人、家庭及企业提供移民法、家庭法、遗产规划及商业与证券法方面的法律服务。她的执业经验超过 14 年，其中包括处理跨境及国际相关法律事务的丰富经验。',
  '来美国之前，Li Weng 律师曾在中国武汉执业，为个人及企业提供跨境法律与财务规划方面的咨询。此后，她在德克萨斯大学奥斯汀分校（University of Texas at Austin）取得法学硕士（LL.M.）学位，并以这段国际化的执业背景为基础，建立起目前涵盖移民、家庭法、遗产规划及商业法律的执业方向。对于与中国有关联的客户而言，这意味着与一位真正了解中美两地法律体系的律师合作，而不仅仅是能用中文沟通。',
  'Li Weng 律师精通英文与普通话，提供面对面及电话咨询服务。',
]

const EDUCATION_ZH = {
  'University of Texas at Austin': '德克萨斯大学奥斯汀分校',
  'Soochow University': '苏州大学',
}

export default function AboutZh() {
  useDocumentTitle(
    'Li Weng 律师 — 纽约律师简介 | Rockville Law Group',
    'Li Weng 律师是 Rockville Law Group 的创始人，执业于纽约法拉盛，从业超过 14 年，业务涵盖移民法、家庭法、遗产规划及商业法律事务，持有纽约州及哥伦比亚特区执业资格，精通英文与普通话。',
    { lang: 'zh-Hans', alternatePath: '/about' },
  )
  useStructuredData([personSchema(), breadcrumbSchema(BREADCRUMB_ITEMS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <span className="eyebrow">关于律师</span>
            <h1 className="about-hero__title">{attorney.name}</h1>
            <p className="about-hero__subtitle">Rockville Law Group 创始合伙人</p>
            <p className="lede about-hero__lede">Li Weng 律师在 Rockville Law Group 位于纽约法拉盛（皇后区）的办公室执业，代理纽约市及周边地区个人、家庭与企业的法律事务。</p>
          </div>
          <Reveal delay={0.1} className="about-hero__media">
            <img src={headshot} alt={`${attorney.name}，Rockville Law Group 创始合伙人`} className="photo-frame photo-frame--lg about-hero__photo" />
          </Reveal>
        </div>
      </section>

      <section className="section about-profile">
        <div className="container container--narrow">
          <Reveal>
            {BIO_ZH.map((paragraph, i) => (
              <p key={i} className="about-profile__paragraph">
                {paragraph}
              </p>
            ))}
            <div className="about-profile__links">
              <Button href={attorney.profiles.justia} variant="outline">
                查看 Justia 律师档案
              </Button>
              <Button href={attorney.profiles.linkedin} variant="outline">
                查看 LinkedIn 档案
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep about-credentials">
        <div className="container">
          <SectionHeading eyebrow="资历背景" title="执业资格与背景" align="center" />

          <JurisdictionDisplay />

          <div className="about-credentials__grid about-credentials__grid--secondary">
            <Reveal as="div" delay={0.1} className="card about-credentials__card">
              <h3>教育背景</h3>
              <ul>
                {attorney.education.map((e) => (
                  <li key={e.degree + e.school}>
                    {e.degree}，{EDUCATION_ZH[e.school] || e.school}
                    {e.location ? `（${e.location}）` : ''} <span className="about-credentials__since">{e.year} 年</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="div" delay={0.15} className="card about-credentials__card">
              <h3>语言</h3>
              <ul>
                <li>英文</li>
                <li>普通话</li>
              </ul>
            </Reveal>

            <Reveal as="div" delay={0.2} className="card about-credentials__card about-credentials__card--wide">
              <h3>执业领域</h3>
              <ul className="about-credentials__tags">
                <li>移民法</li>
                <li>遗产规划</li>
                <li>商业法律</li>
                <li>证券法律</li>
                <li>家庭法</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTABand
        eyebrow="联系律师"
        title="预约咨询"
        description="直接与 Li Weng 律师讨论您的法律事务，或联系我们了解出庭代理服务。"
        primary={{ label: '预约咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '律师专区', to: '/zh/attorney-hearing-coverage' }}
      />
    </>
  )
}
