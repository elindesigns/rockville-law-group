import './VerifyTag.css'

/** Visible "pending attorney confirmation" flag for unverified claims. */
export default function VerifyTag({ children }) {
  return <span className="verify-tag">{children}</span>
}
