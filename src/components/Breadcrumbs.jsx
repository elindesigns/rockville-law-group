import { Link } from 'react-router-dom'
import './Breadcrumbs.css'

/**
 * items: [{ name, path }] — the same array each page already builds for
 * its breadcrumbSchema() call. Pass the identical reference to both so
 * the visible trail and the JSON-LD can never drift apart.
 */
export default function Breadcrumbs({ items }) {
  const last = items.length - 1

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumbs__list">
          {items.map((item, i) => (
            <li key={item.path} className="breadcrumbs__item">
              {i === last ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <Link to={item.path}>{item.name}</Link>
                  <span className="breadcrumbs__sep" aria-hidden="true">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
