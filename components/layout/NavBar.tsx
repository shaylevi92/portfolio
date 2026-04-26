'use client'
import Link from 'next/link'
import { useISTClock } from '@/hooks/useISTClock'

interface NavLink {
  label: string
  href: string
}

interface NavBarProps {
  links?: NavLink[]
  showBrand?: boolean
}

const defaultLinks: NavLink[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Contact', href: '/#contact' },
]

export default function NavBar({ links = defaultLinks, showBrand = true }: NavBarProps) {
  const time = useISTClock()

  return (
    <header className="nav">
      <Link className="brand" href="/" style={{ visibility: showBrand ? 'visible' : 'hidden' }}>
        <span>Shay Levi<em>°</em></span>
      </Link>
      <nav className="nav-links">
        {links.map((l) => (
          <Link key={l.href} href={l.href} data-link>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="nav-clock">
        <span className="dot"></span>
        <span>Available · {time} IST</span>
      </div>
    </header>
  )
}
