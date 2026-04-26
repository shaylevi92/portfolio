interface VideoBlockProps {
  src: string | string[]
  poster?: string
  className?: string
}

export default function VideoBlock({ src, poster, className = '' }: VideoBlockProps) {
  const sources = Array.isArray(src) ? src : [src]

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className={className}
    >
      {sources.map((s, i) => (
        <source key={i} src={s} type={s.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
      ))}
    </video>
  )
}
