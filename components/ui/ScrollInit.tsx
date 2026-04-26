'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/** Registers the global IntersectionObserver for all .reveal elements on the page. */
export default function ScrollInit() {
  useScrollReveal()
  return null
}
