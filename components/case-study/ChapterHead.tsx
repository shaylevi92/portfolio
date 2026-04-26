interface ChapterHeadProps {
  num: string
  label: string
  title: React.ReactNode
  className?: string
  dark?: boolean
}

export default function ChapterHead({ num, label, title, className = '', dark = false }: ChapterHeadProps) {
  return (
    <div className={`chapter-head reveal ${className}`}>
      <div className="chapter-num" style={dark ? { color: 'var(--fog-2)' } : undefined}>
        <span>{num}</span> {label}
      </div>
      <h2 className="chapter-title">{title}</h2>
    </div>
  )
}
