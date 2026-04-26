'use client'
import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function update() {
      const bar = barRef.current
      if (!bar) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={barRef}
      className="case-progress"
      id="progress"
    />
  )
}
