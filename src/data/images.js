// ============================================================
// PHOTOGRAPHY
// Hand-picked, verified-free NYC photography (Unsplash License —
// free for commercial use). Served via Unsplash's imgix-based URL
// API for on-the-fly responsive sizing + automatic AVIF/WebP.
// Hotlinked from Unsplash's CDN for this design phase; for a
// permanent production launch, consider downloading/self-hosting or
// licensing a dedicated set so the site has zero third-party runtime
// dependency.
// ============================================================

// Kept deliberately to one photo sitewide (the hero) — real photography
// only where it earns its place; everywhere else uses typography and
// layout instead.
export const photos = {
  hero: {
    id: '1543716091-a840c05249ec',
    alt: 'Aerial view of Manhattan at golden hour, the Empire State Building at the center of the skyline',
    credit: { name: 'Triston Dunn', url: 'https://unsplash.com/@tristondunn' },
  },
}

/** Build an Unsplash delivery URL with responsive sizing + auto format (AVIF/WebP where supported). */
export function unsplashUrl(id, { w = 1200, h, q = 75 } = {}) {
  const params = new URLSearchParams({ auto: 'format', fit: 'crop', w: String(w), q: String(q) })
  if (h) params.set('h', String(h))
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`
}
