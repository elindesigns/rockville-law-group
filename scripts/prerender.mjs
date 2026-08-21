// ============================================================
// PRERENDER
// Runs after `vite build`. Serves dist/ locally, loads every route
// in a real headless Chrome, and writes the finished HTML back into
// dist/ as <route>/index.html.
//
// Why a real browser rather than renderToString: this app sets its
// title, description, canonical, Open Graph and hreflang tags from
// inside useEffect (lib/useDocumentTitle.js), and effects do not run
// during server rendering. A browser runs them, so what gets captured
// is exactly what a visitor sees — metadata included.
//
// The routes come from public/sitemap.xml so there is one list to keep
// current, and it is already the list submitted to Search Console.
//
// Vercel serves these files directly: its docs state "precedence is
// given to the filesystem prior to rewrites being applied", so the
// SPA catch-all in vercel.json only handles paths with no prerendered
// file (and the client router renders NotFound for those).
// ============================================================

import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const PORT = 5273

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
}

/**
 * Static server over dist/ with SPA fallback, so the client router can
 * resolve any route.
 *
 * `shell` is the ORIGINAL index.html, read once before prerendering
 * starts. It must be held in memory: prerendering "/" overwrites
 * dist/index.html, and if the fallback were re-read from disk every
 * later route would boot from the homepage's already-rendered DOM and
 * inherit its title and hreflang tags on top of its own.
 */
function serve(shell) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0])
      const filePath = join(dist, urlPath)
      try {
        if (extname(urlPath) && existsSync(filePath)) {
          res.writeHead(200, { 'Content-Type': MIME[extname(urlPath)] || 'application/octet-stream' })
          res.end(await readFile(filePath))
          return
        }
        res.writeHead(200, { 'Content-Type': MIME['.html'] })
        res.end(shell)
      } catch {
        res.writeHead(404).end('Not found')
      }
    })
    server.listen(PORT, () => resolve(server))
  })
}

/**
 * Routes and the production origin both come from the sitemap, so there
 * is a single list to keep current and the canonical URLs written here
 * cannot drift from the ones submitted to Search Console.
 */
async function readSitemap() {
  const xml = await readFile(join(root, 'public', 'sitemap.xml'), 'utf8')
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const urls = locs
    .map((loc) => {
      try {
        return new URL(loc)
      } catch {
        return null
      }
    })
    .filter(Boolean)
  if (!urls.length) throw new Error('No usable <loc> entries in public/sitemap.xml')
  const routes = [...new Set(urls.map((u) => u.pathname))].sort()
  return { routes, origin: urls[0].origin }
}

async function main() {
  const { routes, origin } = await readSitemap()

  // useDocumentTitle builds canonical, og:url and hreflang from
  // window.location.origin, which during prerendering is this local
  // server. Those three have to become absolute production URLs —
  // shipping localhost canonicals would point Google at nothing.
  //
  // Everything else carrying the local origin is an asset reference the
  // browser absolutised while rendering (modulepreload links, injected
  // stylesheets). Those must go back to root-relative, NOT to the
  // production domain: hardcoding the domain into asset URLs would make
  // preview deployments and local runs fetch production assets
  // cross-origin, with mismatched build hashes.
  const localOrigin = `http://localhost:${PORT}`
  const ABSOLUTE_URL_TAGS = /<(?:link|meta)\b[^>]*>/gi
  const NEEDS_ABSOLUTE = /rel="canonical"|rel="alternate"|property="og:url"/i

  const toProductionOrigin = (html) => {
    const withAbsoluteSeoUrls = html.replace(ABSOLUTE_URL_TAGS, (tag) =>
      NEEDS_ABSOLUTE.test(tag) ? tag.split(localOrigin).join(origin) : tag,
    )
    // Any remaining occurrence is an asset path.
    return withAbsoluteSeoUrls.split(localOrigin).join('')
  }

  const shell = await readFile(join(dist, 'index.html'))
  const server = await serve(shell)

  // Chromium needs system libraries (libnss3 and friends) that are not
  // guaranteed to exist in every CI image — Vercel's build container has
  // broken this exact pattern for other projects. A missing browser
  // should not fail the deploy: the SPA build in dist/ is already valid
  // and is what the site shipped before prerendering existed. So warn
  // loudly, leave that build in place, and carry on.
  //
  // Set PRERENDER_STRICT=1 to turn this into a hard failure instead.
  let browser
  try {
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] })
  } catch (err) {
    server.close()
    const message = [
      '',
      '='.repeat(72),
      'PRERENDER SKIPPED — could not launch Chromium.',
      '',
      `  ${err.message.split('\n')[0]}`,
      '',
      'dist/ still contains a valid single-page build, so the deploy is',
      'usable, but every route will serve the same title and an empty body',
      'to crawlers and social scrapers.',
      '',
      'Verify after deploying:',
      '  curl -s https://www.rockvillelawgroup.com/estate-planning | grep -o "<title>[^<]*"',
      '  Expect: Estate Planning Lawyer in New York',
      '  If it says "New York Law Firm", prerendering did not run.',
      '='.repeat(72),
      '',
    ].join('\n')
    if (process.env.PRERENDER_STRICT === '1') {
      throw new Error(message)
    }
    console.warn(message)
    return
  }

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })

  let written = 0
  const problems = []

  for (const route of routes) {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 45000 })

    // The route chunk is lazy-loaded and useDocumentTitle sets the title
    // in an effect, so wait for real content rather than a fixed delay.
    await page
      .waitForFunction(
        () => {
          const main = document.querySelector('main') || document.getElementById('root')
          return document.querySelector('h1') && main && main.textContent.trim().length > 100
        },
        { timeout: 20000 },
      )
      .catch(() => problems.push(`${route}: content did not settle`))

    // Every below-fold section starts at opacity 0 until its
    // IntersectionObserver fires, so a naive snapshot would hand crawlers
    // a page of invisible text. Scroll the whole page to trigger the
    // observers naturally, then mark anything still unrevealed — a real
    // visitor reaches that state by scrolling, and the fully-revealed
    // page is the honest thing to serialize.
    await page.evaluate(async () => {
      const height = () => document.documentElement.scrollHeight
      const step = Math.round(window.innerHeight * 0.75)
      for (let y = 0; y < height(); y += step) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 90))
      }
      window.scrollTo(0, 0)

      // Reveals use a transition with a per-item delay; give the ones
      // triggered late a chance to finish before forcing the rest.
      await new Promise((r) => setTimeout(r, 900))

      // Suppress the transition while forcing the stragglers, so opacity
      // lands on 1 immediately instead of easing over 0.6s. The override
      // is removed again before serializing — the snapshot must not ship
      // a style tag that disables the animation for real visitors.
      const override = document.createElement('style')
      override.textContent = '.reveal{transition:none !important}'
      document.head.appendChild(override)

      for (const el of document.querySelectorAll('.reveal:not(.is-visible)')) {
        el.classList.add('is-visible')
      }
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
      override.remove()
      await new Promise((r) => setTimeout(r, 50))
    })

    const hidden = await page.evaluate(
      () => [...document.querySelectorAll('.reveal')].filter((el) => parseFloat(getComputedStyle(el).opacity) < 0.9).length,
    )
    if (hidden > 0) problems.push(`${route}: ${hidden} element(s) still at opacity 0`)

    const raw = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML)
    const html = toProductionOrigin(raw)

    if (html.includes('localhost')) problems.push(`${route}: localhost URL survived rewriting`)
    // Asset references must stay origin-less so previews and local runs
    // load their own build, not production's.
    const absoluteAssets = (html.match(new RegExp(`${origin}/assets/`, 'g')) || []).length
    if (absoluteAssets) problems.push(`${route}: ${absoluteAssets} asset URL(s) hardcoded to the production domain`)
    const hreflangCount = (html.match(/rel="alternate"/g) || []).length
    if (hreflangCount > 3) problems.push(`${route}: ${hreflangCount} hreflang tags (expected at most 3)`)
    const titleCount = (html.match(/<title>/g) || []).length
    if (titleCount !== 1) problems.push(`${route}: ${titleCount} <title> tags`)

    const outDir = route === '/' ? dist : join(dist, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(join(outDir, 'index.html'), html, 'utf8')
    written += 1
    process.stdout.write(`  ${route}\n`)
  }

  await browser.close()
  server.close()

  console.log(`\nPrerendered ${written}/${routes.length} routes.`)
  if (problems.length) {
    console.log('\nWarnings:')
    for (const p of problems) console.log(`  - ${p}`)
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
