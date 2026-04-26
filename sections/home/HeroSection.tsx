'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Immediate title reveal
    const t = setTimeout(() => titleRef.current?.classList.add('is-in'), 100)

    // Hero parallax on scroll
    const onScroll = () => {
      const y = window.scrollY
      if (y > window.innerHeight) return
      if (glowRef.current)
        glowRef.current.style.transform = `translate(-50%, -50%) translateY(${y * 0.3}px)`
      if (titleRef.current)
        titleRef.current.style.transform = `translateY(${y * -0.08}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-glow" ref={glowRef} />
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span>(01) Index — Portfolio <span className="arrow">↳</span> 2026</span>
          <span>Tel Aviv / Remote</span>
        </div>
        <h1 className="hero-title reveal" ref={titleRef}>
          <span className="line">
            <span className="word" style={{ '--i': 0 } as React.CSSProperties}><span>Designing</span></span>
          </span>
          <span className="line">
            <span className="it word" style={{ '--i': 1 } as React.CSSProperties}><span>calm</span></span>{' '}
            <span className="word" style={{ '--i': 2 } as React.CSSProperties}><span>inside</span></span>
          </span>
          <span className="line">
            <span className="word" style={{ '--i': 3 } as React.CSSProperties}><span>complexity.</span></span>
          </span>
        </h1>
      </div>

      <div className="hero-foot">
        <div className="hero-foot-col reveal" style={{ transitionDelay: '0.6s' }}>
          <h5>(A) Introduction</h5>
          <p>Shay Levi — <span className="it">product designer</span> working at the intersection of strategy, craft, and behavior.</p>
        </div>
        <div className="hero-foot-col reveal" style={{ transitionDelay: '0.75s' }}>
          <h5>(B) Current</h5>
          <p>Leading UX for consumer &amp; retail products. Open to senior product roles, select collaborations, and the occasional impossible brief.</p>
        </div>
        <div className="hero-foot-col reveal" style={{ transitionDelay: '0.9s' }}>
          <h5>(C) Selected clients</h5>
          <p>Dropit · iPlant · Careery · independent studios and early-stage founders.</p>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </section>
  )
}
