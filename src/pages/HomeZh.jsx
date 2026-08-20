import SealMark from '../components/SealMark.jsx'
import Button from '../components/Button.jsx'
import TrustBar from '../components/shared/TrustBar.jsx'
import Photo from '../components/shared/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import JurisdictionDisplay from '../components/JurisdictionDisplay.jsx'
import CTABand from '../components/CTABand.jsx'
import Testimonials from '../components/Testimonials.jsx'
import HowWeHelp from '../components/home/HowWeHelp.jsx'
import WeChatSection from '../components/home/WeChatSection.jsx'
import { ArrowIcon, CheckIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { legalServiceSchema, websiteSchema } from '../lib/structuredData.js'
import { attorney } from '../data/firm.js'
import { mainPracticeAreas } from '../data/firmZh.js'
import { photos } from '../data/images.js'
import headshot from '../assets/li-weng-headshot.jpg'
import './HomeZh.css'

// Mirrors the EN homepage's WhyRockville.jsx point-for-point — every
// item traces to a specific fact in data/firm.js, not a general trust
// claim. Kept as a plain array here (not imported from the shared
// component) to match this file's established pattern of hand-written
// Chinese copy rather than reused JSX.
const WHY_POINTS = [
  {
    kicker: '跨境背景',
    title: '移民法执业前，曾在中国执业',
    desc: '在攻读美国德克萨斯大学奥斯汀分校法学硕士学位、并在美国建立执业之前，Li Weng 律师曾在中国武汉执业，为个人及企业提供跨境法律与财务规划方面的咨询。客户面对的是一位真正了解中美两地法律体系的律师，而不仅仅是会讲中文。',
  },
  {
    kicker: '直接沟通，无需传译',
    title: '双语代理，非经传译',
    desc: '咨询与代理均可直接以英文或普通话进行，案件细节可以直接传达给负责您案件的律师，避免因翻译产生偏差。',
  },
  {
    kicker: '一站式法律服务',
    title: '移民、家庭、遗产与商业法律一并处理',
    desc: '移民案件之外，若同时涉及遗嘱、家庭事务或公司业务等相关需求，可一并处理，无需另寻他人重新说明背景。',
  },
  {
    kicker: '活跃的出庭执业',
    title: '具有实际出庭经验',
    desc: 'Li Weng 律师出庭移民法庭，并在纽约州及马里兰州的联邦法院、以及纽约州法院与哥伦比亚特区法院代理案件，同时也为其他律师提供移民听证出庭代理。',
  },
  {
    kicker: '交通便利的办公地点',
    title: '法拉盛办公室，紧邻交通枢纽',
    desc: '办公室位于法拉盛市中心，步行即可到达法拉盛地铁站及长岛铁路车站，并提供面谈及电话咨询，方便您选择合适的沟通方式。',
  },
]

export default function HomeZh() {
  useDocumentTitle(
    '纽约律师事务所 | Rockville Law Group',
    '纽约法拉盛律师事务所，提供移民、家庭法、遗产规划及商业法律服务，可直接以中文咨询。',
    { lang: 'zh-Hans', alternatePath: '/' },
  )
  useStructuredData([legalServiceSchema(), websiteSchema()])

  return (
    <>
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <SealMark tone="ink" size={40} className="hero__seal" />
            <span className="eyebrow hero__eyebrow">Rockville Law Group LLC</span>
            <h1 className="hero__title">纽约律师事务所</h1>

            <div className="hero__rule" />

            <p className="lede hero__lede">
              Rockville Law Group 是一家位于纽约法拉盛的律师事务所，协助个人、家庭与企业处理移民法、家庭法、遗产规划及商业法律事务，可直接以英文及普通话为您提供咨询。
            </p>

            <div className="hero__actions">
              <Button to="/zh/contact#consultation" variant="primary">
                预约咨询
              </Button>
              <Button to="/zh/attorney-hearing-coverage" variant="outline">
                律师专区
              </Button>
            </div>

            <TrustBar tone="light" className="hero__trust" />
          </div>

          <div className="hero__media">
            <Photo photo={photos.hero} aspect="3 / 4" sizes="(max-width: 900px) 100vw, 42vw" priority className="hero__photo" />
            <div className="scrim-side hero__media-scrim" aria-hidden="true" />
            <span className="photo-caption hero__caption">纽约市</span>
          </div>
        </div>
      </section>

      <HowWeHelp />

      <section className="section priority-services">
        <div className="container">
          <SectionHeading eyebrow="业务领域" title="Rockville Law Group 可以如何协助您" lede="Rockville Law Group 是一家位于纽约的律师事务所，为个人、家庭及企业提供以下领域的法律服务。" />

          <ol className="priority-services__list">
            {mainPracticeAreas.map((area, i) => (
              <Reveal as="li" key={area.id} delay={i * 0.06} className="priority-services__row">
                <span className="priority-services__index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="priority-services__name">{area.nameZh}</h3>
                <p className="priority-services__desc">
                  {area.id === 'immigration' && '亲属移民、庇护、EB-1A 杰出人才移民、职业移民，以及移民法庭代理。'}
                  {area.id === 'family-law' && '收养、子女监护权与抚养费、亲子关系确认、婚前协议、监护事务等家庭法相关事宜。'}
                  {area.id === 'estate-planning' && '遗嘱、信托、医疗指示、监护安排，以及遗产管理。'}
                  {area.id === 'business-law' && '公司设立、合同事务、并购交易，以及合伙与股东争议。'}
                  {area.id === 'ipo-securities' && '为非上市公司提供证券法相关咨询，包括融资及公司交易中涉及的证券事务。'}
                  {area.id === 'escrow-services' && '为商业及房地产交易担任托管代理人，保管资金或文件，直至成交条件达成。'}
                </p>
                <Button to={area.to.replace(/^\//, '/zh/')} variant="quiet" className="priority-services__cta">
                  了解{area.nameZh} <ArrowIcon width={16} height={16} />
                </Button>
              </Reveal>
            ))}
          </ol>

          <Button to="/zh/practice-areas" variant="quiet" className="priority-services__all">
            查看全部业务领域 <ArrowIcon width={16} height={16} />
          </Button>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container attorneyZh__inner">
          <Reveal>
            <img src={headshot} alt={`${attorney.name}，Rockville Law Group 创始律师`} className="photo-frame photo-frame--lg attorneyZh__photo" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">创始律师</span>
            <h2 className="attorneyZh__name">{attorney.name}</h2>
            <p className="attorneyZh__desc">
              Li Weng 律师是 Rockville Law Group 的创始人，执业范围涵盖移民法、家庭法、遗产规划及商业法律事务。她的执业经验超过 14
              年，其中包括处理跨境及国际相关法律事务的经验。来美国之前，Li Weng 律师曾在中国武汉执业，为个人及企业提供跨境法律与财务规划方面的咨询。
            </p>
            <ul className="attorneyZh__facts">
              <li>{attorney.yearsExperience} 年执业经验</li>
              <li>执业资格：纽约州、哥伦比亚特区</li>
              <li>英文、普通话</li>
            </ul>
            <div className="attorneyZh__actions">
              <Button to="/zh/about" variant="quiet">
                了解 Li Weng 律师的完整经历 <ArrowIcon width={16} height={16} />
              </Button>
              <div className="attorneyZh__profiles">
                <a href={attorney.profiles.justia} target="_blank" rel="noreferrer">
                  Justia 档案 ↗
                </a>
                <a href={attorney.profiles.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-block service-block--2col">
            <Reveal as="article" className="card matterZh__card">
              <span className="eyebrow">移民法</span>
              <h3 className="matterZh__title">移民法律代理</h3>
              <p className="matterZh__desc">
                亲属移民、庇护、EB-1A 杰出人才移民及职业移民，直至移民法官前的出庭代理。Rockville Law Group 协助处理移民案件的各个阶段，从最初递交申请到最终听证。
              </p>
              <div className="matterZh__actions">
                <Button to="/zh/immigration-services" variant="primary" size="sm">
                  了解移民法
                </Button>
                <Button to="/zh/immigration-court" variant="quiet">
                  移民法庭 <ArrowIcon width={16} height={16} />
                </Button>
              </div>
            </Reveal>

            <Reveal as="article" delay={0.06} className="card matterZh__card">
              <span className="eyebrow">商业与公司法</span>
              <h3 className="matterZh__title">商业与公司法律顾问</h3>
              <p className="matterZh__desc">
                从公司设立到合同、交易，乃至偶尔出现的争议，Rockville Law Group 为纽约的企业主提供全流程法律咨询。
              </p>
              <div className="matterZh__actions">
                <Button to="/zh/business-law" variant="primary" size="sm">
                  了解商业与公司法
                </Button>
                <Button to="/zh/ipo-securities" variant="quiet">
                  证券法 <ArrowIcon width={16} height={16} />
                </Button>
              </div>
            </Reveal>

            <Reveal as="article" delay={0.12} className="card matterZh__card">
              <span className="eyebrow">遗产规划</span>
              <h3 className="matterZh__title">为您的家庭做好规划</h3>
              <p className="matterZh__desc">
                遗嘱、信托、医疗指示，以及遗产管理——Rockville Law Group 协助个人及家庭为最重要的人与事提前做好安排。
              </p>
              <div className="matterZh__actions">
                <Button to="/zh/estate-planning" variant="primary" size="sm">
                  了解遗产规划
                </Button>
                <Button to="/zh/family-law" variant="quiet">
                  家庭法 <ArrowIcon width={16} height={16} />
                </Button>
              </div>
            </Reveal>

            {/* 托管服务 rather than a second 证券法 card — 证券法 is already
                cross-linked from the 商业与公司法 card above, and 托管服务 was
                the only practice area with no presence on this page. */}
            <Reveal as="article" delay={0.18} className="card matterZh__card">
              <span className="eyebrow">托管服务</span>
              <h3 className="matterZh__title">交易托管服务</h3>
              <p className="matterZh__desc">
                商业及房地产交易往往需要中立的第三方保管资金或文件。Rockville Law Group 可担任托管代理人，直至各项成交条件达成后再行交付。
              </p>
              <div className="matterZh__actions">
                <Button to="/zh/contact#consultation" variant="primary" size="sm">
                  咨询托管事务
                </Button>
                <Button to="/zh/escrow-services" variant="quiet">
                  了解托管服务 <ArrowIcon width={16} height={16} />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="执业地区与法院" title="Rockville Law Group 的执业范围" align="center" />
          <JurisdictionDisplay />
        </div>
      </section>

      <section className="section section--deep why-rlg">
        <div className="container">
          <SectionHeading eyebrow="为什么选择 Rockville Law Group" title="律所的不同之处" align="center" icon={CheckIcon} />
          <div className="why-rlg__grid">
            {WHY_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="why-rlg__item">
                <span className="why-rlg__stat">{p.kicker}</span>
                <h3 className="why-rlg__title">{p.title}</h3>
                <p className="why-rlg__desc">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <WeChatSection />

      {/* 结尾行动号召置于最后：微信是另一种联系方式，而非本页最终的引导。 */}
      <CTABand
        eyebrow="立即开始"
        title="准备好讨论您的情况了吗？"
        description="预约咨询，直接与我们讨论您的法律事务；也可以先了解主理律师的背景与执业经历。"
        primary={{ label: '预约咨询', to: '/zh/contact#consultation' }}
        secondary={{ label: '关于律师', to: '/zh/about' }}
      />
    </>
  )
}
