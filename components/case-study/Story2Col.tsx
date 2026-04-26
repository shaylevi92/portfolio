import { ReactNode, CSSProperties } from 'react'

interface Story2ColProps {
  left: ReactNode
  right: ReactNode
  className?: string
  style?: CSSProperties
}

export default function Story2Col({ left, right, className = '', style }: Story2ColProps) {
  return (
    <div className={`story-2 reveal ${className}`} style={style}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}
