// SnapInvoice logo, from docs/brand/. Icon as inline SVG, wordmark as live text
// so it uses the brand font (Space Grotesk).
export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="var(--green)" />
      <g fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round">
        <path d="M11 21 V15 Q11 11 15 11 H21" />
        <path d="M43 11 H49 Q53 11 53 15 V21" />
        <path d="M11 43 V49 Q11 53 15 53 H21" />
        <path d="M53 43 V49 Q53 53 49 53 H43" />
      </g>
      <path d="M23 18 H35 L42 25 V46 H23 Z" fill="#fff" />
      <path d="M35 18 V25 H42" fill="none" stroke="var(--green)" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="27" y="30" width="11" height="2.6" rx="1.3" fill="var(--green)" />
      <rect x="27" y="35" width="11" height="2.6" rx="1.3" fill="var(--green)" />
      <rect x="27" y="40" width="6" height="2.6" rx="1.3" fill="var(--green)" />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="logo">
      <LogoIcon />
      <span className="wordmark">
        Snap<span className="wordmark-accent">Invoice</span>
      </span>
    </span>
  )
}
