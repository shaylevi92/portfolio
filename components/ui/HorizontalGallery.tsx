'use client'
import { ReactNode, useRef } from 'react'

interface HorizontalGalleryProps {
  children: ReactNode
  className?: string
}

export default function HorizontalGallery({ children, className = '' }: HorizontalGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true
    startX.current = e.pageX - (galleryRef.current?.offsetLeft ?? 0)
    scrollLeft.current = galleryRef.current?.scrollLeft ?? 0
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !galleryRef.current) return
    e.preventDefault()
    const x = e.pageX - (galleryRef.current.offsetLeft ?? 0)
    const walk = (x - startX.current) * 1.5
    galleryRef.current.scrollLeft = scrollLeft.current - walk
  }

  function onMouseUp() { isDragging.current = false }

  return (
    <div
      ref={galleryRef}
      className={`h-gallery reveal-blur ${className}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {children}
    </div>
  )
}
