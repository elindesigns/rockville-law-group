import { useLocation } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { attorney, appearanceCourts } from '../data/firm.js'
import { JURISDICTION_ZH, COURT_ZH } from '../data/firmZh.js'
import './JurisdictionDisplay.css'

// Bar/federal admissions and "courts where Li can appear" are two
// different legal facts and must never be visually merged — this
// component keeps them in separate columns with an explicit note on
// each so neither list can be misread as the other. Same rule in
// Chinese: appearanceCourts is never described as 执业资格 (admission).
export default function JurisdictionDisplay() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  return (
    <div className="jurisdiction-display">
      <Reveal as="div" className="jurisdiction-display__col">
        <span className="eyebrow">{isZh ? '执业资格与联邦法院资格' : 'Bar & Federal Admissions'}</span>
        <ul className="jurisdiction-display__list">
          {attorney.bar.map((b) => (
            <li key={b.jurisdiction}>{isZh ? JURISDICTION_ZH[b.jurisdiction] || b.jurisdiction : b.jurisdiction}</li>
          ))}
          {attorney.federalCourts.map((c) => (
            <li key={c}>{isZh ? COURT_ZH[c] || c : c}</li>
          ))}
        </ul>
        <p className="jurisdiction-display__note">
          {isZh ? '在以下地区持有执业资格。' : 'Admitted to practice law in these jurisdictions.'}
        </p>
      </Reveal>

      <div className="jurisdiction-display__divider" aria-hidden="true" />

      <Reveal as="div" delay={0.08} className="jurisdiction-display__col">
        <span className="eyebrow">{isZh ? '可出庭代理的法院' : 'Courts Where Appearance Is Available'}</span>
        <ul className="jurisdiction-display__list">
          {appearanceCourts.map((c) => (
            <li key={c}>{isZh ? COURT_ZH[c] || c : c}</li>
          ))}
        </ul>
        <p className="jurisdiction-display__note">
          {isZh
            ? '以上为可代理出庭的法院范围（针对符合条件的案件），此列表并不代表在该地区持有执业资格。'
            : 'Appearance in these courts on qualifying matters. This list does not indicate bar admission.'}
        </p>
      </Reveal>
    </div>
  )
}
