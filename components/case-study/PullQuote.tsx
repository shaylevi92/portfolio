import { ReactNode } from 'react'

interface PullQuoteProps {
  children: ReactNode
  attr?: string
  dark?: boolean
  className?: string
}

export default function PullQuote({ children, attr, dark = false, className = '' }: PullQuoteProps) {
  return (
    <section className={`case-section ${dark ? 'dark' : ''} ${className}`}>
      <div className="case-inner">
        <div className="pull reveal">{children}</div>
        {attr && (
          <div className="pull-attr reveal" style={dark ? { color: 'var(--fog-2)' } : undefined}>
            {attr}
          </div>
        )}
      </div>
    </section>
  )
}
