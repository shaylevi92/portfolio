'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function WorkSection() {
  const [activeIdx, setActiveIdx] = useState(-1)
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (previewRef.current) {
        previewRef.current.style.left = `${e.clientX}px`
        previewRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="section-work" id="work">
      <div className="section-head">
        <div className="label reveal"><span>(02)</span> Selected Work</div>
        <h2 className="reveal">
          A curated index of products —<br />
          <span className="it">considered, shipped, measured.</span>
        </h2>
      </div>

      <div className="works" id="works">
        {projects.map((p, i) => (
          <Link
            key={p.id}
            className="work"
            href={p.href}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(-1)}
          >
            <div className="work-num">{p.num} / {p.year}</div>
            <div className="work-title">
              {p.title} — <span className="it">{p.subtitle}</span>
            </div>
            <div className="work-meta">
              <span>{p.meta.tags}</span>
              <span>{p.tags.join(' · ')}</span>
            </div>
            <div className="work-cta">Read <span>↗</span></div>
          </Link>
        ))}
      </div>

      <div
        ref={previewRef}
        className={`work-preview ${activeIdx >= 0 ? 'is-on' : ''}`}
      >
        {projects.map((p, i) => (
          <div key={p.id} className={`slot ${i === activeIdx ? 'is-on' : ''}`}>
            <img
              src={p.previewImage}
              alt={p.subtitle}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
