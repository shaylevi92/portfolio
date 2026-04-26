import { ReactNode } from 'react'
import PhoneMockup from '@/components/ui/PhoneMockup'
import BrowserMockup from '@/components/ui/BrowserMockup'
import VideoBlock from '@/components/ui/VideoBlock'

interface StrategyRowProps {
  step: string
  title: ReactNode
  body: ReactNode
  mediaType: 'phone' | 'browser' | 'image'
  mediaSrc: string | string[]
  mediaAlt?: string
  reverse?: boolean
  poster?: string
}

export default function StrategyRow({
  step,
  title,
  body,
  mediaType,
  mediaSrc,
  mediaAlt = '',
  reverse = false,
  poster,
}: StrategyRowProps) {
  const media =
    mediaType === 'phone' ? (
      <div className="phone-center reveal">
        <PhoneMockup>
          <VideoBlock src={mediaSrc} poster={poster} />
        </PhoneMockup>
      </div>
    ) : mediaType === 'browser' ? (
      <BrowserMockup>
        <VideoBlock src={mediaSrc} poster={poster} />
      </BrowserMockup>
    ) : (
      <img src={Array.isArray(mediaSrc) ? mediaSrc[0] : mediaSrc} alt={mediaAlt} />
    )

  const copy = (
    <div className="strategy-copy reveal" style={{ transitionDelay: '0.1s' }}>
      <span className="step-label">{step}</span>
      <h4>{title}</h4>
      {body}
    </div>
  )

  return (
    <div className={`strategy-row ${reverse ? 'reverse' : ''}`}>
      {media}
      {copy}
    </div>
  )
}
