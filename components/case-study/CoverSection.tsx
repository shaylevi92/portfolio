import Image from 'next/image'

interface TitleWord {
  text: string
  isItalic?: boolean
}

interface CoverFoot {
  label: string
  value: string
}

interface CoverSectionProps {
  num: string
  title: TitleWord[][]
  sub: React.ReactNode
  heroImage?: { url: string; alt: string }
  heroSlot?: React.ReactNode
  coverFoot: CoverFoot[]
  client?: string
  year?: string
}

export default function CoverSection({ num, title, sub, heroImage, heroSlot, coverFoot, client, year }: CoverSectionProps) {
  return (
    <section className="cover">
      <div className="cover-glow"></div>
      <div className="cover-inner">
        <div className="cover-meta">
          <span>Case Study <span className="arrow">↳</span> {num}</span>
          {client && <span>Client · {client}</span>}
          {year && <span>{year}</span>}
        </div>
        <h1 className="cover-title reveal">
          {title.map((line, lineIdx) => (
            <span key={lineIdx} className="line">
              {line.map((word, wordIdx) => (
                <span
                  key={wordIdx}
                  className={`word${word.isItalic ? ' it' : ''}`}
                  style={{ '--i': lineIdx * 2 + wordIdx } as React.CSSProperties}
                >
                  <span>{word.text}</span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="cover-sub reveal" style={{ transitionDelay: '0.6s' }}>{sub}</p>
      </div>

      {heroSlot ?? (heroImage && (
        <div className="cover-hero">
          <img src={heroImage.url} alt={heroImage.alt} style={{ width: '100%', display: 'block', borderRadius: 8 }} />
        </div>
      ))}

      <div className="cover-foot">
        {coverFoot.map((item, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${0.5 + i * 0.1}s` }}>
            <h5>{item.label}</h5>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
