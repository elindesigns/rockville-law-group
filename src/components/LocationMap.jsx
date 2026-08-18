import { useLocation } from 'react-router-dom'
import { PinIcon } from './shared/Icons.jsx'
import Button from './Button.jsx'
import { offices } from '../data/firm.js'
import './LocationMap.css'

// Keyless Google Maps embed (maps.google.com/maps?...&output=embed) —
// no API key/billing dependency, just a query string.
export default function LocationMap() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')
  const office = offices[0]
  const encodedQuery = encodeURIComponent(office.mapQuery)
  const embedSrc = `https://maps.google.com/maps?q=${encodedQuery}&z=15&output=embed`
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`

  return (
    <div className="location-map">
      <div className="location-map__frame">
        <iframe src={embedSrc} title={isZh ? `地图：${office.address}` : `Map showing ${office.address}`} loading="lazy" />
      </div>
      <div className="location-map__info">
        <PinIcon className="location-map__icon" aria-hidden="true" />
        <div>
          <p className="location-map__address">{office.address}</p>
          {isZh ? (
            <p className="location-map__desc">{office.descriptionZh || office.description}</p>
          ) : (
            <>
              <p className="location-map__desc">{office.description}</p>
              {office.descriptionZh && <p className="zh-label location-map__desc-zh">{office.descriptionZh}</p>}
            </>
          )}
          <Button href={directionsUrl} variant="outline" size="sm" className="location-map__directions">
            {isZh ? '查看路线' : 'Get Directions'}
          </Button>
        </div>
      </div>
    </div>
  )
}
