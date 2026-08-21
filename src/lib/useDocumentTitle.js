import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from './analytics.js'

function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  const previous = el.getAttribute('content')
  if (content != null) el.setAttribute('content', content)
  return { el, previous }
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  const previous = el.getAttribute('href')
  el.setAttribute('href', href)
  return { el, previous }
}

function addHreflangLink(hreflang, href) {
  const el = document.createElement('link')
  el.setAttribute('rel', 'alternate')
  el.setAttribute('hreflang', hreflang)
  el.setAttribute('href', href)
  document.head.appendChild(el)
  return el
}

/**
 * Site-relative paths are canonicalized without a trailing slash
 * (except the root itself), so "/about/" and "/about" never produce
 * two distinct canonical URLs for the same page.
 */
function normalizePath(pathname) {
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

/**
 * Sets the per-route title, meta description, canonical link, Open
 * Graph title/description/url, and (when this page has a real
 * cross-language counterpart) hreflang alternate links + the <html
 * lang> attribute — then restores everything on unmount so route
 * changes never leak stale metadata.
 *
 * `options.lang`: 'en-US' (default) or 'zh-Hans' — the language of
 * *this* page. `options.alternatePath`: the site-relative path of
 * the equivalent page in the other language, or omitted if none
 * exists (no hreflang is emitted for pages without a real
 * counterpart — never claim an alternate that doesn't exist).
 */
export default function useDocumentTitle(title, description, options = {}) {
  const { lang = 'en-US', alternatePath } = options
  const location = useLocation()

  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    trackPageView(location.pathname, title)

    const canonicalUrl = `${window.location.origin}${normalizePath(location.pathname)}`
    const { el: canonicalEl, previous: previousCanonical } = upsertCanonical(canonicalUrl)

    const descMeta = document.querySelector('meta[name="description"]')
    const previousDescription = descMeta?.getAttribute('content')
    if (description && descMeta) descMeta.setAttribute('content', description)

    const { el: ogTitleEl, previous: previousOgTitle } = upsertMeta('property', 'og:title', title)
    const { el: ogDescEl, previous: previousOgDesc } = description
      ? upsertMeta('property', 'og:description', description)
      : { el: null, previous: null }
    const { el: ogUrlEl, previous: previousOgUrl } = upsertMeta('property', 'og:url', canonicalUrl)

    const previousHtmlLang = document.documentElement.lang
    document.documentElement.lang = lang

    // Take ownership of any hreflang links already in the document.
    // Prerendered pages ship with their own set baked into the HTML
    // (scripts/prerender.mjs), and this effect only ever removes the
    // elements it created — so without this, the build-time tags would
    // survive alongside the runtime ones, and would still be there after
    // navigating to a page they no longer describe.
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())

    let hreflangEls = []
    if (alternatePath) {
      const otherLang = lang === 'zh-Hans' ? 'en-US' : 'zh-Hans'
      const alternateUrl = `${window.location.origin}${normalizePath(alternatePath)}`
      hreflangEls = [
        addHreflangLink(lang, canonicalUrl),
        addHreflangLink(otherLang, alternateUrl),
        addHreflangLink('x-default', lang === 'zh-Hans' ? alternateUrl : canonicalUrl),
      ]
    }

    return () => {
      document.title = previousTitle
      document.documentElement.lang = previousHtmlLang
      if (previousCanonical != null) canonicalEl.setAttribute('href', previousCanonical)
      if (description && descMeta && previousDescription != null) descMeta.setAttribute('content', previousDescription)
      if (previousOgTitle != null) ogTitleEl.setAttribute('content', previousOgTitle)
      if (ogDescEl && previousOgDesc != null) ogDescEl.setAttribute('content', previousOgDesc)
      if (previousOgUrl != null) ogUrlEl.setAttribute('content', previousOgUrl)
      hreflangEls.forEach((el) => el.remove())
    }
  }, [title, description, location.pathname, lang, alternatePath])
}
