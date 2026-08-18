import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button.jsx'
import SealMark from '../components/SealMark.jsx'
import { ArrowIcon } from '../components/shared/Icons.jsx'
import './NotFound.css'

const LINKS = [
  { label: 'Practice Areas', zh: '业务领域', to: '/practice-areas' },
  { label: 'Immigration Law', zh: '移民法', to: '/immigration-services' },
  { label: 'About Li Weng', zh: '关于律师', to: '/about' },
  { label: 'For Attorneys', zh: '律师专区', to: '/for-attorneys' },
  { label: 'Contact', zh: '联系我们', to: '/contact' },
]

const LINKS_ZH = [
  { label: '业务领域', to: '/zh/practice-areas' },
  { label: '移民法', to: '/zh/immigration-services' },
  { label: '关于律师', to: '/zh/about' },
  { label: '律师专区', to: '/zh/attorney-hearing-coverage' },
  { label: '联系我们', to: '/zh/contact' },
]

// A path that matches no route. Distinct from Home so a mistyped or
// broken URL doesn't silently serve duplicate homepage content under
// its own (non-existent) address — this sets its own title and a
// noindex tag rather than using useDocumentTitle, since none of that
// hook's canonical/hreflang machinery is meaningful for a 404. The
// catch-all route stays last in App.jsx's route list, after every
// real route, so this can never shadow an actual page.
export default function NotFound() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  useEffect(() => {
    const previousTitle = document.title
    document.title = isZh ? '未找到页面 | Rockville Law Group' : 'Page Not Found | Rockville Law Group'

    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, follow'
    document.head.appendChild(meta)

    return () => {
      document.title = previousTitle
      document.head.removeChild(meta)
    }
  }, [isZh])

  const links = isZh ? LINKS_ZH : LINKS

  return (
    <section className="section not-found">
      <div className="container container--narrow">
        <SealMark tone="ink" size={52} className="not-found__seal" />
        <span className="eyebrow">404</span>
        <h1 className="not-found__title">{isZh ? '未找到该页面' : 'Page Not Found'}</h1>
        <p className="lede not-found__lede">
          {isZh
            ? '您访问的页面不存在，或链接已失效。'
            : "The page you're looking for doesn't exist, or the link that brought you here may be broken."}
        </p>

        <Button to={isZh ? '/zh' : '/'} variant="primary" className="not-found__home">
          {isZh ? '返回首页' : 'Return to Homepage'}
        </Button>

        <div className="not-found__popular">
          <h2 className="not-found__popular-heading">{isZh ? '常用页面' : 'Popular Pages'}</h2>
          <ul className="not-found__links">
            {links.map((l) => (
              <li key={l.to}>
                <Button to={l.to} variant="quiet" className="not-found__link">
                  {l.label} <ArrowIcon width={16} height={16} />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
