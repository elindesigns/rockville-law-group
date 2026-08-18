import { ImageIcon } from './Icons.jsx'
import './PlaceholderImage.css'

/**
 * Swappable image slot. Marks exactly where a real photo should drop
 * in later without changing layout — replace with an <img> using the
 * same className when photography is available.
 */
export default function PlaceholderImage({ label = 'Image pending', aspect = 'portrait', className = '' }) {
  return (
    <div className={`placeholder-img placeholder-img--${aspect} ${className}`}>
      <div className="placeholder-img__inner">
        <ImageIcon className="placeholder-img__icon" aria-hidden="true" />
        <span className="placeholder-img__label">{label}</span>
      </div>
    </div>
  )
}
