'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  variant?: 'default' | 'clip' | 'blur'
  delay?: number
  className?: string
  style?: React.CSSProperties
  as?: keyof JSX.IntrinsicElements
}

export default function RevealOnScroll({
  children,
  variant = 'default',
  delay = 0,
  className = '',
  style,
  as: Tag = 'div',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null)

  const variantClass =
    variant === 'clip' ? 'reveal-clip' : variant === 'blur' ? 'reveal-blur' : 'reveal'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-in')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const El = Tag as React.ElementType
  return (
    <El
      ref={ref}
      className={`${variantClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}
    >
      {children}
    </El>
  )
}
