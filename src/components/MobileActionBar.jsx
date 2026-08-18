import { Link, useLocation } from 'react-router-dom'
import { PhoneIcon, BriefcaseIcon } from './shared/Icons.jsx'
import SealMark from './SealMark.jsx'
import { contact, isPlaceholder } from '../data/firm.js'
import { trackEvent } from '../lib/analytics.js'
import './MobileActionBar.css'

// Sticky bottom action bar, mobile only (hidden via CSS above the
// breakpoint). Most visitors arrive via TikTok/WeChat on a phone, so
// the three highest-intent actions stay one thumb-tap away at all times.
export default function MobileActionBar() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')
  const phonePending = isPlaceholder(contact.phone)

  return (
    <nav className="mobile-bar" aria-label="Quick actions">
      <a
        className={`mobile-bar__item${phonePending ? ' is-disabled' : ''}`}
        href={phonePending ? undefined : `tel:${contact.phone.replace(/[^\d+]/g, '')}`}
        aria-disabled={phonePending}
        onClick={() => !phonePending && trackEvent('consumer_phone_click', { source: 'mobile_action_bar' })}
      >
        <PhoneIcon />
        <span>{isZh ? '电话' : 'Call'}</span>
      </a>
      <Link
        className="mobile-bar__item mobile-bar__item--primary"
        to={isZh ? '/zh/contact#consultation' : '/contact#consultation'}
        onClick={() => trackEvent('consumer_consultation_click', { source: 'mobile_action_bar' })}
      >
        <SealMark tone="paper" size={18} rings={false} />
        <span>{isZh ? '预约咨询' : 'Consultation'}</span>
      </Link>
      <Link
        className="mobile-bar__item"
        to={isZh ? '/zh/attorney-hearing-coverage' : '/for-attorneys'}
        onClick={() => trackEvent('attorney_coverage_click', { source: 'mobile_action_bar' })}
      >
        <BriefcaseIcon />
        <span>{isZh ? '律师专区' : 'Attorneys'}</span>
      </Link>
    </nav>
  )
}
