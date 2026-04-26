'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let x = 0, y = 0, tx = 0, ty = 0
    let rafId: number

    function onMouseMove(e: MouseEvent) {
      tx = e.clientX
      ty = e.clientY
    }

    function loop() {
      x += (tx - x) * 0.16
      y += (ty - y) * 0.16
      cursor!.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(loop)

    function onEnter() { cursor!.classList.add('is-link') }
    function onLeave() { cursor!.classList.remove('is-link') }

    function attachListeners() {
      document.querySelectorAll('a, button, [data-link], .work').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachListeners()

    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return <div className="cursor" ref={cursorRef} id="cursor" />
}
