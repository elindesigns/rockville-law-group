// ============================================================
// PRERENDER (browserless)
// Runs after `vite build`. Writes one HTML file per route into dist/,
// each carrying that route's own title, description, canonical, Open
// Graph tags and hreflang links.
//
// WHY NO BROWSER
// This previously drove headless Chrome, which captured the fully
// rendered page including body content. Vercel's build container
// cannot launch Chromium (it lacks the system libraries Chrome needs),
// so that step silently degraded to nothing on every deploy. Pure Node
// always works, everywhere, in about a second.
//
// WHAT THIS DOES AND DOESN'T FIX
// Fixes the verified problem: without it every route served the same
// title and description, so Facebook, LinkedIn, X and WeChat — none of
// which run JavaScript when scraping — previewed all 42 pages as the
// homepage. Search engines also get per-route metadata in the raw HTML
// rather than only after rendering.
//
// Does not fix: page bodies are still client-rendered. Google runs
// JavaScript, so it indexes them; a non-rendering client sees an empty
// <div id="root">. Rendering bodies without a browser is possible via
// React 19's react-dom/static prerender API, but needs the metadata in
// this file's useDocumentTitle calls hoisted out of useEffect first.
//
// HOW METADATA IS FOUND
// Routes come from public/sitemap.xml. Each route is mapped to its page
// component through App.jsx, and the component's useDocumentTitle call
// is read from source. Article routes take their metadata from
// data/articles.js instead. Any route that cannot be resolved is
// reported and falls back to the default shell, so a parse failure
// degrades rather than ships something wrong.
// ============================================================

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const src = join(root, 'src')

const problems = []

/** Routes and the production origin, both from the sitemap. */
async function readSitemap() {
  const xml = await readFile(join(root, 'public', 'sitemap.xml'), 'utf8')
  const urls = [...xml.replace(/<!--[\s\S]*?-->/g, '').matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => {
      try {
        return new URL(m[1])
      } catch {
        return null
      }
    })
    .filter(Boolean)
  if (!urls.length) throw new Error('No usable <loc> entries in public/sitemap.xml')
  return { routes: [...new Set(urls.map((u) => u.pathname))].sort(), origin: urls[0].origin }
}

/** path -> page source file, read out of App.jsx's lazy imports and <Route> elements. */
async function readRouteMap() {
  const app = await readFile(join(src, 'App.jsx'), 'utf8')
  const files = {}
  // Lazy routes, which is most of them.
  for (const m of app.matchAll(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\('([^']+)'\)\)/g)) {
    files[m[1]] = m[2].replace(/^\.\//, '')
  }
  // The two homepages are imported eagerly rather than lazily, so they
  // need picking up separately — missing them left / and /zh on the
  // default shell, which are the two most important pages on the site.
  for (const m of app.matchAll(/^import\s+(\w+)\s+from\s+'(\.\/pages\/[^']+)'/gm)) {
    files[m[1]] = m[2].replace(/^\.\//, '')
  }
  const routes = {}
  for (const m of app.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<(\w+)\s*\/>\}/g)) {
    routes[m[1]] = files[m[2]] || null
  }
  return routes
}

/**
 * Pull the arguments out of a page's useDocumentTitle(...) call. The
 * calls are written to one shape across every page, so a targeted read
 * is enough and avoids adding a JSX parser to the build.
 */
function parseDocumentTitle(source) {
  const call = source.match(/useDocumentTitle\(([\s\S]*?)\n\s*\)/)
  if (!call) return null
  // Strip comments before reading strings. Several of these calls carry
  // an explanatory comment above the title, and quoted phrases inside
  // one ("Per diem" on ForAttorneys) were being picked up as the title.
  const body = call[1].replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
  const strings = [...body.matchAll(/(?<!\\)'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)]
    .map((m) => (m[1] ?? m[2]).replace(/\\'/g, "'").replace(/\\"/g, '"'))
    // Drop the option-object values so only title and description remain.
    .filter((s) => !/^(en-US|zh-Hans)$/.test(s))
  const alternate = body.match(/alternatePath:\s*'([^']+)'/)
  const lang = body.match(/lang:\s*'([^']+)'/)
  if (!strings.length) return null
  return {
    title: strings[0],
    description: strings[1] || null,
    lang: lang ? lang[1] : 'en-US',
    alternatePath: alternate ? alternate[1] : null,
  }
}

/** Article routes get their metadata from the articles data file. */
async function readArticleMeta() {
  const source = await readFile(join(src, 'data', 'articles.js'), 'utf8')
  const out = {}
  for (const m of source.matchAll(/slug:\s*'([^']+)'/g)) {
    const after = source.slice(m.index, m.index + 2000)
    const title = after.match(/metaTitle:\s*\n?\s*'((?:[^'\\]|\\.)*)'/)
    const desc = after.match(/metaDescription:\s*\n?\s*'((?:[^'\\]|\\.)*)'/)
    if (title) {
      out[`/resources/${m[1]}`] = {
        title: title[1].replace(/\\'/g, "'"),
        description: desc ? desc[1].replace(/\\'/g, "'") : null,
        lang: 'en-US',
        alternatePath: null,
      }
    }
  }
  return out
}

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Rewrite the shell's head for one route. */
function buildHtml(shell, { route, meta, origin }) {
  const canonical = `${origin}${route === '/' ? '/' : route}`
  let html = shell

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(meta.title)}</title>`)

  if (meta.description) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    )
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    )
  }
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
  )
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
  )

  // hreflang is emitted here as well as in the sitemap. Google documents
  // HTML tags, HTTP headers and sitemaps as the three supported methods
  // and does not mention JavaScript-injected tags, which is all the app
  // could offer before this.
  const head = []
  head.push(`<link rel="canonical" href="${escapeAttr(canonical)}" />`)
  head.push(`<meta property="og:url" content="${escapeAttr(canonical)}" />`)
  head.push(`<meta property="og:locale" content="${meta.lang === 'zh-Hans' ? 'zh_CN' : 'en_US'}" />`)
  if (meta.alternatePath) {
    const other = `${origin}${meta.alternatePath}`
    const otherLang = meta.lang === 'zh-Hans' ? 'en-US' : 'zh-Hans'
    head.push(`<link rel="alternate" hreflang="${meta.lang}" href="${escapeAttr(canonical)}" />`)
    head.push(`<link rel="alternate" hreflang="${otherLang}" href="${escapeAttr(other)}" />`)
    head.push(
      `<link rel="alternate" hreflang="x-default" href="${escapeAttr(meta.lang === 'zh-Hans' ? other : canonical)}" />`,
    )
  }
  html = html.replace('</head>', `  ${head.join('\n    ')}\n  </head>`)

  // The document language should match the page, not the shell default.
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${meta.lang === 'zh-Hans' ? 'zh-Hans' : 'en'}"`)

  return html
}

async function main() {
  const { routes, origin } = await readSitemap()
  const routeMap = await readRouteMap()
  const articleMeta = await readArticleMeta()
  const shell = await readFile(join(dist, 'index.html'), 'utf8')

  const metaCache = {}
  let written = 0

  for (const route of routes) {
    let meta = articleMeta[route]

    if (!meta) {
      const file = routeMap[route]
      if (!file) {
        problems.push(`${route}: no component found in App.jsx`)
        continue
      }
      if (!metaCache[file]) {
        const source = await readFile(join(src, file), 'utf8').catch(() => null)
        metaCache[file] = source ? parseDocumentTitle(source) : null
      }
      meta = metaCache[file]
      if (!meta) {
        problems.push(`${route}: could not read useDocumentTitle from ${file}`)
        continue
      }
    }

    const html = buildHtml(shell, { route, meta, origin })
    const outDir = route === '/' ? dist : join(dist, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(join(outDir, 'index.html'), html, 'utf8')
    written += 1
  }

  console.log(`Prerendered ${written}/${routes.length} routes.`)
  if (problems.length) {
    console.log('\nRoutes left on the default shell:')
    for (const p of problems) console.log(`  - ${p}`)
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
