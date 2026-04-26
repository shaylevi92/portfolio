import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shay Levi — Product Designer',
  description: 'Product designer working at the intersection of strategy, craft, and behavior. Leading UX for consumer & retail products.',
  openGraph: {
    title: 'Shay Levi — Product Designer',
    description: 'Product designer working at the intersection of strategy, craft, and behavior.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
