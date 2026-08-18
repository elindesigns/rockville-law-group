import { Link } from 'react-router-dom'

const VARIANT_CLASS = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  'outline-on-ink': 'btn-outline btn-outline--on-ink',
  quiet: 'btn-quiet',
}

/**
 * Universal CTA button. Renders a router <Link> for internal paths,
 * a plain <a> for external/tel/mailto hrefs, or a <button> when given
 * an onClick with no href (e.g. form submit).
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size,
  className = '',
  ...rest
}) {
  const cls = `btn ${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${size === 'sm' ? 'btn-sm' : ''} ${className}`.trim()

  if (to) {
    return (
      <Link className={cls} to={to} onClick={onClick} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href)
    return (
      <a
        className={cls}
        href={href}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={cls} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
