import Link from 'next/link'

interface NextCaseProps {
  title: string
  href: string
}

export default function NextCase({ title, href }: NextCaseProps) {
  return (
    <section className="next-case">
      <div className="next-inner">
        <div className="label reveal">Next case</div>
        <Link className="next-title reveal" href={href}>
          {title} <span className="it">↗</span>
        </Link>
        <Link className="next-cta reveal" href="/">
          Back to index <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}
