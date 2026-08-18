import { unsplashUrl } from '../../data/images.js'
import './Photo.css'

const WIDTHS = [480, 768, 1080, 1440, 1920, 2400]

/**
 * Responsive photograph. Generates a srcset across breakpoints and
 * lets Unsplash negotiate AVIF/WebP via `auto=format`. Use `priority`
 * only for above-the-fold images (hero); everything else lazy-loads.
 */
export default function Photo({ photo, aspect = '16 / 9', sizes = '100vw', priority = false, className = '' }) {
  const srcSet = WIDTHS.map((w) => `${unsplashUrl(photo.id, { w })} ${w}w`).join(', ')

  return (
    <img
      className={`photo ${className}`.trim()}
      src={unsplashUrl(photo.id, { w: 1200 })}
      srcSet={srcSet}
      sizes={sizes}
      alt={photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ aspectRatio: aspect }}
    />
  )
}
