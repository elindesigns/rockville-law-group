import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Button from './Button.jsx'
import ContactLink from './shared/ContactLink.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { MenuIcon, CloseIcon } from './shared/Icons.jsx'
import { firm, nav, ctas, contact, practiceAreaActivePaths } from '../data/firm.js'
import { navZh, ctasZh } from '../data/firmZh.js'
import logoMark from '../assets/rockville-logo-mark-white.png'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuToggleRef = useRef(null)
  const firstMobileLinkRef = useRef(null)
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  const activeNav = isZh ? navZh : nav
  const consultation = isZh ? ctasZh.consultation : ctas.consultation
  const attorneyLink = isZh ? { label: '律师专区', to: '/zh/attorney-hearing-coverage' } : { label: 'For Attorneys', to: '/for-attorneys' }

  // "Practice Areas" is a flat link, but its children live at sibling
  // URLs (e.g. /estate-planning), not nested under /practice-areas —
  // so React Router's own prefix matching won't mark it active there.
  const normalizedPath = isZh ? location.pathname.replace(/^\/zh/, '') || '/' : location.pathname
  const isPracticeAreaActive = practiceAreaActivePaths.some((p) => normalizedPath === p || normalizedPath.startsWith(`${p}/`))

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    // Move focus into the panel on open, same pattern as the WeChat
    // lightbox. Escape explicitly returns focus to the toggle button —
    // but closing via a nav-link click (which also sets open=false,
    // through the pathname effect above) must NOT also steal focus
    // back to the header once the browser's already navigating away.
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        menuToggleRef.current?.focus()
      }
    }
    firstMobileLinkRef.current?.focus()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="header">
      <div className="header__inner">
        <Link to={isZh ? '/zh' : '/'} className="header__brand" aria-label={`${firm.legalName} — home`}>
          <img src={logoMark} alt="" width={40} height={40} className="header__seal" />
          <span className="header__wordmark">Rockville Law Group</span>
        </Link>

        <nav className="header__nav" aria-label="Primary">
          {activeNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `header__link${isActive || (item.to.endsWith('/practice-areas') && isPracticeAreaActive) ? ' is-active' : ''}`
              }
              end={item.to === '/' || item.to === '/zh'}
            >
              <span className="header__link-en">{item.label}</span>
              {item.zh && <span className="header__link-zh">{item.zh}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSwitcher className="header__lang" />
          <ContactLink type="phone" value={contact.phone} className="header__phone" source="header" />
          <Button to={consultation.to} variant="primary" size="sm">
            {consultation.label}
          </Button>
        </div>

        <button
          ref={menuToggleRef}
          className="header__menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`header__mobile${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal={open ? 'true' : undefined}
        aria-label={isZh ? '导航菜单' : 'Navigation menu'}
      >
        <nav className="header__mobile-nav" aria-label="Mobile">
          {activeNav.map((item, i) => (
            <NavLink
              key={item.to}
              ref={i === 0 ? firstMobileLinkRef : undefined}
              to={item.to}
              className={({ isActive }) =>
                `header__mobile-link${isActive || (item.to.endsWith('/practice-areas') && isPracticeAreaActive) ? ' is-active' : ''}`
              }
              end={item.to === '/' || item.to === '/zh'}
              tabIndex={open ? 0 : -1}
            >
              <span>{item.label}</span>
              {item.zh && <span className="header__mobile-link-zh">{item.zh}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="header__mobile-actions">
          <Button to={consultation.to} variant="primary" tabIndex={open ? 0 : -1}>
            {isZh ? consultation.label : 'Schedule a Consultation'}
          </Button>
          <Button to={attorneyLink.to} variant="outline-on-ink" tabIndex={open ? 0 : -1}>
            {attorneyLink.label}
          </Button>
          <ContactLink
            type="phone"
            value={contact.phone}
            className="header__mobile-phone"
            source="header_mobile_menu"
            tabIndex={open ? 0 : -1}
          />
          <LanguageSwitcher className="header__mobile-lang" />
        </div>
      </div>
    </header>
  )
}
