import { Link, useLocation } from 'react-router-dom'
import { getZhEquivalent, getEnEquivalent } from '../data/firmZh.js'
import './LanguageSwitcher.css'

/** "中文 | English" — links to the equivalent page in the other language, not just the homepage. */
export default function LanguageSwitcher({ className = '' }) {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  const zhTarget = isZh ? location.pathname : getZhEquivalent(location.pathname)
  const enTarget = isZh ? getEnEquivalent(location.pathname) : location.pathname

  return (
    <div className={`lang-switch ${className}`.trim()} aria-label="Language">
      <Link to={zhTarget} className={isZh ? 'is-active' : ''} aria-current={isZh ? 'true' : undefined}>
        中文
      </Link>
      <span aria-hidden="true">|</span>
      <Link to={enTarget} className={!isZh ? 'is-active' : ''} aria-current={!isZh ? 'true' : undefined}>
        English
      </Link>
    </div>
  )
}
