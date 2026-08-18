import { isPlaceholder } from '../../data/firm.js'
import { trackEvent } from '../../lib/analytics.js'
import { PhoneIcon, MailIcon, PinIcon, WeChatIcon } from './Icons.jsx'

const ICONS = { phone: PhoneIcon, email: MailIcon, address: PinIcon, wechat: WeChatIcon }
const HREF_PREFIX = { phone: 'tel:', email: 'mailto:' }

/**
 * Renders a contact value as a clickable link once verified, or as
 * inert placeholder text (still visible, not linked) until then.
 * `context` ("consumer" | "attorney") tags the click event so the two
 * funnels can be measured separately even though phone/email are shared.
 */
export default function ContactLink({ type, value, showIcon = true, className = '', context = 'consumer', source, ...rest }) {
  const Icon = ICONS[type]
  const pending = isPlaceholder(value)
  const prefix = HREF_PREFIX[type]

  const content = (
    <>
      {showIcon && Icon && <Icon aria-hidden="true" />}
      <span>{value}</span>
    </>
  )

  if (pending || !prefix) {
    return (
      <span
        className={`contact-link contact-link--pending ${className}`.trim()}
        title={pending ? 'Pending verification' : undefined}
        {...rest}
      >
        {content}
      </span>
    )
  }

  const hrefValue = type === 'phone' ? value.replace(/[^\d+]/g, '') : value

  function handleClick() {
    if (type === 'phone' || type === 'email') {
      trackEvent(`${context}_${type}_click`, { source: source || 'unspecified' })
    }
  }

  return (
    <a className={`contact-link ${className}`.trim()} href={`${prefix}${hrefValue}`} onClick={handleClick} {...rest}>
      {content}
    </a>
  )
}
