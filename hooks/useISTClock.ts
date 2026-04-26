'use client'
import { useState, useEffect } from 'react'

export function useISTClock(): string {
  const [time, setTime] = useState('00:00')

  useEffect(() => {
    function tick() {
      const ist = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Jerusalem',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      setTime(ist)
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  return time
}
