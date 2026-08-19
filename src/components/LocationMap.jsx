import { useLocation } from 'react-router-dom'
import { PinIcon } from './shared/Icons.jsx'
import Button from './Button.jsx'
import { offices } from '../data/firm.js'
import './LocationMap.css'

// Keyless Google Maps embed (maps.google.com/maps?...&output=embed) —
// no API key/billing dependency, just a query string.
//
// Addressed by CID (the firm's Google Business Profile id) when one is
// set, which is what makes the map show the firm's own named pin
// instead of an anonymous marker. See the note on office.mapCid in
// data/firm.js for why a text query is not an acceptable substitute.
export default function LocationMap() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')
  const office = offices[0]
  const encodedQuery = encodeURIComponent(office.mapQuery)
  const embedSrc = office.mapCid
    ? `https://maps.google.com/maps?cid=${office.mapCid}&z=17&output=embed`
    : `https://maps.google.com/maps?q=${encodedQuery}&z=15&output=embed`
  const directionsUrl = office.mapCid
    ? `https://www.google.com/maps?cid=${office.mapCid}`
    : `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`

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
