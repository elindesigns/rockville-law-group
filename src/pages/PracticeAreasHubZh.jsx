import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CTABand from '../components/CTABand.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { ArrowIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { breadcrumbSchema } from '../lib/structuredData.js'
import { mainPracticeAreas } from '../data/firmZh.js'
import './ServicePage.css'
import './PracticeAreasHub.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '业务领域', path: '/zh/practice-areas' },
]

export default function PracticeAreasHubZh() {
  useDocumentTitle(
    '业务领域 | Rockville Law Group',
    'Rockville Law Group 是一家位于纽约的律师事务所，为个人、家庭及企业提供移民法、家庭法、遗产规划、商业与公司法及证券法方面的法律服务，由 Li Weng 律师主理。',
    { lang: 'zh-Hans', alternatePath: '/practice-areas' },
  )
  useStructuredData(breadcrumbSchema(BREADCRUMB_ITEMS))

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section service-hero">
        <div className="container container--narrow">
          <span className="eyebrow">业务领域</span>
          <h1 className="service-hero__title">业务领域</h1>
          <p className="zh-label service-hero__zh">Practice Areas</p>
          <p className="lede service-hero__lede">
            Rockville Law Group 是一家位于纽约的律师事务所，为个人、家庭及企业提供法律服务。执业领域涵盖移民法、家庭法、遗产规划及商业与证券法——以下每个领域均有专属页面，说明具体服务内容。
          </p>
        </div>
      </section>

      <section className="section priority-detail">
        <div className="container">
          <div className="priority-detail__list">
            {mainPracticeAreas.map((area, i) => (
              <Reveal as="article" key={area.id} id={area.id} delay={(i % 2) * 0.06} className="priority-detail__item">
                <span className="priority-detail__index">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="priority-detail__title">{area.nameZh}</h2>
                <p className="priority-detail__desc">
                  {area.id === 'immigration' && '亲属移民、庇护、EB-1A 杰出人才移民、职业移民，以及移民法庭代理。'}
                  {area.id === 'family-law' && '收养、子女监护权与抚养费、亲子关系确认、婚前协议、监护事务等家庭法相关事宜。'}
                  {area.id === 'estate-planning' && '遗嘱、信托、医疗指示、监护安排，以及遗产管理。'}
                  {area.id === 'business-law' && '公司设立、合同事务、并购交易，以及合伙与股东争议。'}
                  {area.id === 'ipo-securities' && '为非上市公司提供证券法相关咨询，包括融资及公司交易中涉及的证券事务。'}
                  {area.id === 'escrow-services' && '为商业及房地产交易担任托管代理人，保管资金或文件，直至成交条件达成。'}
                </p>
                <Button to={area.to.replace(/^\//, '/zh/')} variant="quiet" className="priority-detail__cta">
                  了解{area.nameZh} <ArrowIcon width={16} height={16} />
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container container--narrow">
          <SectionHeading eyebrow="律师" title="一家律所，多元业务领域" align="center" />
          <p className="lede lede--wide practice-hub__attorney-lede">
            移民、家庭、遗产规划与商业法律事务之间常常相互关联——例如一宗绿卡申请可能同时涉及遗嘱安排，一项商业事务也可能牵涉家庭事务。由于 Rockville Law Group
            同时执业于以上各领域，相关需求可以一并处理，无需另寻他人重新说明背景。
          </p>
          <div className="practice-hub__attorney-cta">
            <Button to="/zh/about" variant="quiet">
              了解 Li Weng 律师 <ArrowIcon width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="立即开始"
        title="讨论您的法律事务"
        description="预约咨询，与我们的团队直接讨论您的情况，或联系我们了解出庭代理服务。"
        primary={{ label: '预约咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '律师专区', to: '/zh/attorney-hearing-coverage' }}
      />
    </>
  )
}
