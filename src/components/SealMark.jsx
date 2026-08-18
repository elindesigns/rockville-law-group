// Threshold/gateway mark — the firm's signature glyph. Legal
// representation is, at its core, about helping a client move from one
// status or circumstance into another; the arch stands in for that
// threshold instead of a gavel or scale.
export default function SealMark({ size = 40, tone = 'ink', rings = true, className = '' }) {
  const colors = {
    ink: { ring: 'currentColor', glyph: 'currentColor' },
    paper: { ring: 'var(--paper)', glyph: 'var(--paper)' },
    seal: { ring: 'var(--seal)', glyph: 'var(--seal)' },
  }
  const c = colors[tone] || colors.ink

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {rings && (
        <>
          <circle cx="32" cy="32" r="30.5" stroke={c.ring} strokeWidth="1" opacity="0.55" />
          <circle cx="32" cy="32" r="26.5" stroke={c.ring} strokeWidth="1" opacity="0.3" />
        </>
      )}
      <path
        d="M22 42 L22 29 A10 10 0 0 1 42 29 L42 42"
        stroke={c.glyph}
        strokeWidth="3.25"
        fill="none"
        strokeLinecap="round"
      />
      <line x1="17" y1="42" x2="47" y2="42" stroke={c.glyph} strokeWidth="3.25" strokeLinecap="round" />
    </svg>
  )
}
