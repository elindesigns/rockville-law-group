import { Link, useLocation } from 'react-router-dom'
import ContactLink from './shared/ContactLink.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { firm, attorney, contact, offices, disclaimer } from '../data/firm.js'
import { disclaimerZh } from '../data/firmZh.js'
import logoMark from '../assets/rockville-logo-mark-white.png'
import './Footer.css'

const practiceLinks = [
  { label: 'Practice Areas', zh: '业务领域', to: '/practice-areas' },
  { label: 'Immigration Law', zh: '移民法', to: '/immigration-services' },
  { label: 'Family Law', zh: '家庭法', to: '/family-law' },
  { label: 'Estate Planning', zh: '遗产规划', to: '/estate-planning' },
  { label: 'Business & Corporate Law', zh: '商业与公司法', to: '/business-law' },
  { label: 'Securities Law', zh: '证券法', to: '/ipo-securities' },
  { label: 'Escrow Services', zh: '托管服务', to: '/escrow-services' },
  { label: 'For Attorneys: Hearing Coverage', zh: '律师出庭代理', to: '/for-attorneys' },
  { label: 'Resources & Guides', zh: '资源与指南', to: '/resources' },
]

const practiceLinksZh = [
  { label: '业务领域', to: '/zh/practice-areas' },
  { label: '移民法', to: '/zh/immigration-services' },
  { label: '家庭法', to: '/zh/family-law' },
  { label: '遗产规划', to: '/zh/estate-planning' },
  { label: '商业与公司法', to: '/zh/business-law' },
  { label: '证券法', to: '/zh/ipo-securities' },
  { label: '托管服务', to: '/zh/escrow-services' },
  { label: '律师出庭代理', to: '/zh/attorney-hearing-coverage' },
]

const firmLinks = [
  { label: 'About Li Weng', zh: '关于律师', to: '/about' },
  { label: 'Contact', zh: '联系我们', to: '/contact' },
]

const firmLinksZh = [
  { label: '关于律师', to: '/zh/about' },
  { label: '联系我们', to: '/zh/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to={isZh ? '/zh' : '/'} className="footer__brand-mark" aria-label={`${firm.legalName}, home`}>
            <img src={logoMark} alt="" width={44} height={44} className="footer__seal" />
            <span className="footer__wordmark">Rockville Law Group</span>
          </Link>
          {isZh ? (
            <p className="footer__tagline">{firm.taglineZh}</p>
          ) : (
            <>
              <p className="footer__tagline">{firm.tagline}</p>
              <p className="zh-label zh-label--on-ink footer__tagline-zh">{firm.taglineZh}</p>
            </>
          )}
          <p className="footer__led-by">
            {isZh ? (
              <>
                由创始律师 <Link to="/zh/about">{attorney.name}</Link> 主理
              </>
            ) : (
              <>
                Led by founding attorney <Link to="/about">{attorney.name}</Link>
              </>
            )}
          </p>
        </div>

        <nav className="footer__col" aria-label={isZh ? '业务领域' : 'Practice areas'}>
          <h3 className="footer__heading">
            {isZh ? (
              '业务领域'
            ) : (
              <>
                Practice <span className="zh-label footer__heading-zh">业务领域</span>
              </>
            )}
          </h3>
          <ul>
            {(isZh ? practiceLinksZh : practiceLinks).map((l) => (
              <li key={l.to}>
                <Link to={l.to}>
                  {l.label} {l.zh && <span className="zh-label footer__link-zh">{l.zh}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label={isZh ? '律所信息' : 'Firm'}>
          <h3 className="footer__heading">
            {isZh ? (
              '律所信息'
            ) : (
              <>
                Firm <span className="zh-label footer__heading-zh">律所信息</span>
              </>
            )}
          </h3>
          <ul>
            {(isZh ? firmLinksZh : firmLinks).map((l) => (
              <li key={l.to}>
                <Link to={l.to}>
                  {l.label} {l.zh && <span className="zh-label footer__link-zh">{l.zh}</span>}
                </Link>
              </li>
            ))}
            <li>
              <a href={attorney.profiles.justia} target="_blank" rel="noreferrer">
                {isZh ? 'Justia 律师档案 ↗' : 'Justia Attorney Profile ↗'}
              </a>
            </li>
            <li>
              <a href={attorney.profiles.linkedin} target="_blank" rel="noreferrer">
                {isZh ? 'LinkedIn 档案 ↗' : 'LinkedIn Profile ↗'}
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__heading">
            {isZh ? (
              '联系方式'
            ) : (
              <>
                Contact <span className="zh-label footer__heading-zh">联系方式</span>
              </>
            )}
          </h3>
          <ul className="footer__contact">
            <li>
              <ContactLink type="phone" value={contact.phone} source="footer" />
            </li>
            <li>
              <ContactLink type="email" value={contact.email} source="footer" />
            </li>
            <li>
              <ContactLink type="address" value={offices[0].address} source="footer" />
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__disclaimer">{isZh ? disclaimerZh : disclaimer}</p>
        <div className="footer__utility">
          <p className="footer__copyright">
            © {year} {firm.legalName}. {isZh ? '保留所有权利。' : 'All rights reserved.'}
          </p>
          <div className="footer__utility-links">
            <Link to={isZh ? '/zh/privacy' : '/privacy'}>{isZh ? '隐私政策' : 'Privacy Policy'}</Link>
            <span aria-hidden="true">·</span>
            <Link to={isZh ? '/zh/terms' : '/terms'}>{isZh ? '条款与免责声明' : 'Terms & Disclaimer'}</Link>
            <span aria-hidden="true">·</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}
