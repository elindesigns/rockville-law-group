// ============================================================
// ANALYTICS
// GA4-ready, but inert until a real Measurement ID is supplied.
//
// Set VITE_GA4_MEASUREMENT_ID in a local .env file (see .env.example)
// to activate — nothing loads or sends data until that exists. This
// file must never be edited to hardcode a real ID; that value is
// environment-specific and belongs in .env, not source control.
// ============================================================

const MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID

let initialized = false

/** Loads gtag.js and configures GA4 — only if a Measurement ID is actually set. Safe to call multiple times. */
export function initAnalytics() {
  if (initialized || !MEASUREMENT_ID) return
  initialized = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // Default SPA page_view is disabled here — useDocumentTitle sends an
  // explicit page_view on every route change instead, since GA4's
  // automatic pageview only fires once on initial script load.
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

/**
 * Fires a GA4 event. Safe to call unconditionally anywhere in the
 * app — no-ops silently if analytics was never initialized (no
 * Measurement ID configured). Never pass matter descriptions, names,
 * emails, or any other form content — event params are for
 * navigation/interaction context only.
 */
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

export function trackPageView(path, title) {
  trackEvent('page_view', { page_path: path, page_title: title })
}
