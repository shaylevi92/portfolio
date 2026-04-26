'use client'
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-clip, .reveal-blur').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
