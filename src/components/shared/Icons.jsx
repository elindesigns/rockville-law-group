const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.6 7-11.5a7 7 0 0 0-14 0C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function ImageIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5-9 9" />
    </svg>
  )
}

export function ChevronIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function BriefcaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M3 12h18" />
    </svg>
  )
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function QuestionIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.3 9.3a2.7 2.7 0 1 1 3.9 2.4c-.7.4-1.2.9-1.2 1.8v.3" />
      <circle cx="12" cy="16.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BuildingIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="10" height="18" rx="1" />
      <rect x="15" y="10" width="6" height="11" rx="1" />
      <path d="M8.5 7h1M8.5 10.5h1M8.5 14h1M11.5 7h1M11.5 10.5h1M11.5 14h1M17.5 13.5h1M17.5 17h1" />
    </svg>
  )
}

export function WeChatIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 4.5C4.9 4.5 2 7 2 10.1c0 1.8 1 3.4 2.5 4.4l-.6 2 2.2-1.1c.7.2 1.5.3 2.4.3h.3a5.9 5.9 0 0 1-.2-1.6c0-3.5 3.3-6.3 7.4-6.3h.2c-.8-2.6-3.7-4.3-7.7-4.3z" />
      <path d="M22 15c0-2.6-2.6-4.7-5.8-4.7S10.4 12.4 10.4 15s2.6 4.7 5.8 4.7c.7 0 1.3-.1 1.9-.3l1.8.9-.5-1.7c1-.8 1.6-1.9 1.6-3.2v-.4z" />
    </svg>
  )
}
