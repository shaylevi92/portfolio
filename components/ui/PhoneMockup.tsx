import { ReactNode } from 'react'

interface PhoneMockupProps {
  children?: ReactNode
  width?: number
  className?: string
  style?: React.CSSProperties
}

export default function PhoneMockup({ children, width = 280, className = '', style }: PhoneMockupProps) {
  return (
    <div
      className={`phone-mockup ${className}`}
      style={{ width: `${width}px`, ...style }}
    >
      {children}
    </div>
  )
}
