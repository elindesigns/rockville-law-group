import { useLocation } from 'react-router-dom'
import { attorney } from '../../data/firm.js'
import './TrustBar.css'

const JURISDICTION_ZH = {
  'New York': '纽约州',
  'District of Columbia': '哥伦比亚特区',
}

const LANGUAGE_ZH = {
  English: '英文',
  'Mandarin Chinese': '普通话',
}

export default function TrustBar({ tone = 'onInk', className = '' }) {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  const barList = attorney.bar.map((b) => (isZh ? JURISDICTION_ZH[b.jurisdiction] || b.jurisdiction : b.jurisdiction)).join(isZh ? '、' : ' · ')
  const languages = attorney.languages.map((l) => (isZh ? LANGUAGE_ZH[l] || l : l)).join(isZh ? '、' : ' / ')

  return (
    <ul className={`trust-bar ${tone === 'light' ? 'trust-bar--light' : ''} ${className}`.trim()}>
      <li className="trust-bar__item">{isZh ? `执业资格：${barList}` : `Admitted: ${barList}`}</li>
      <li className="trust-bar__item">{languages}</li>
      <li className="trust-bar__item">{isZh ? `${attorney.yearsExperience} 年执业经验` : `${attorney.yearsExperience} Years Experience`}</li>
    </ul>
  )
}
