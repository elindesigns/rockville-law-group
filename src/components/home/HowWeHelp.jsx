import { useLocation } from 'react-router-dom'
import SectionHeading from '../SectionHeading.jsx'
import Reveal from '../Reveal.jsx'
import Button from '../Button.jsx'
import { ArrowIcon } from '../shared/Icons.jsx'
import './HowWeHelp.css'

const AUDIENCES = [
  {
    title: 'Individuals & Families',
    zh: '个人与家庭',
    description:
      'Immigration, family law, and estate planning matters affecting you and the people you love — from family-based petitions to wills and custody matters.',
    cta: { label: 'Explore Practice Areas', to: '/practice-areas' },
  },
  {
    title: 'Businesses',
    zh: '企业客户',
    description:
      'Business formation, contracts, and immigration support for the people your business depends on, alongside securities law counsel.',
    cta: { label: 'Business & Corporate Law', to: '/business-law' },
  },
  {
    title: 'Attorneys',
    zh: '律师合作',
    description: 'Need qualifying immigration court hearing coverage, or a professional immigration-law collaborator?',
    cta: { label: 'Attorney Coverage', to: '/for-attorneys' },
    muted: true,
  },
]

const AUDIENCES_ZH = [
  {
    title: '个人与家庭',
    description: '移民、家庭法及遗产规划相关事务，涉及您与所爱之人——从亲属移民申请，到遗嘱与监护权安排。',
    cta: { label: '查看全部业务领域', to: '/zh/practice-areas' },
  },
  {
    title: '企业客户',
    description: '为您企业所依赖的相关人员提供公司设立、合同事务及移民协助，并提供证券法方面的咨询。',
    cta: { label: '了解商业与公司法', to: '/zh/business-law' },
  },
  {
    title: '律师合作',
    description: '需要符合条件的移民法庭出庭代理，或寻找专业的移民法律合作伙伴？',
    cta: { label: '律师出庭代理', to: '/zh/attorney-hearing-coverage' },
    muted: true,
  },
]

export default function HowWeHelp() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')
  const audiences = isZh ? AUDIENCES_ZH : AUDIENCES

  return (
    <section className="section how-help">
      <div className="container">
        {isZh ? (
          <SectionHeading eyebrow="服务对象" title="我们能如何帮助您？" align="center" />
        ) : (
          <SectionHeading eyebrow="Who We Serve" title="How Can We Help?" zh="我们能如何帮助您？" align="center" />
        )}

        <div className="how-help__grid">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} className={`how-help__card ${a.muted ? 'how-help__card--muted' : ''}`}>
              <h3 className="how-help__title">
                {a.title}
                {!isZh && <span className="zh-label how-help__title-zh">{a.zh}</span>}
              </h3>
              <p className="how-help__desc">{a.description}</p>
              <Button to={a.cta.to} variant="quiet">
                {a.cta.label} <ArrowIcon width={16} height={16} />
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
