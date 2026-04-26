import { ReactNode } from 'react'

interface BrowserMockupProps {
  children?: ReactNode
  className?: string
}

export default function BrowserMockup({ children, className = '' }: BrowserMockupProps) {
  return (
    <div className={`browser-mockup ${className}`}>
      {children}
    </div>
  )
}
