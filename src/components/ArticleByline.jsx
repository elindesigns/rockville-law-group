import './ArticleByline.css'

function formatDate(iso) {
  if (!iso) return null
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

/**
 * Reusable author/review/date line for articles. The review line only
 * renders when `reviewedBy` is actually set — never claim attorney
 * review that hasn't happened yet.
 */
export default function ArticleByline({ author, reviewedBy, reviewDate, datePublished, dateModified }) {
  return (
    <div className="article-byline">
      {author && <span className="article-byline__item">Written by {author}</span>}
      {reviewedBy && (
        <span className="article-byline__item">
          Attorney review: {reviewedBy}
          {reviewDate ? ` (${formatDate(reviewDate)})` : ''}
        </span>
      )}
      {(dateModified || datePublished) && (
        <span className="article-byline__item">Last updated: {formatDate(dateModified || datePublished)}</span>
      )}
    </div>
  )
}
