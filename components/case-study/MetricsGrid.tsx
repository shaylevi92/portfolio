interface Metric {
  value: string
  suffix?: string
  unit?: string
  label: string
  description: string
}

interface MetricsGridProps {
  metrics: Metric[]
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="metrics">
      {metrics.map((m, i) => (
        <div key={i} className="metric reveal" style={i > 0 ? { transitionDelay: `${i * 0.15}s` } : undefined}>
          <div className="val">
            {m.value}{m.unit && <span className="unit">{m.unit}</span>}
            {m.suffix}
          </div>
          <h4>{m.label}</h4>
          <p>{m.description}</p>
        </div>
      ))}
    </div>
  )
}
