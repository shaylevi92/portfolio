import type { Metadata } from 'next'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/layout/Cursor'
import ScrollInit from '@/components/ui/ScrollInit'
import HeroSection from '@/sections/home/HeroSection'
import WorkSection from '@/sections/home/WorkSection'
import { capabilities } from '@/data/capabilities'

export const metadata: Metadata = {
  title: 'Shay Levi — Product Designer',
  description: 'Product designer working at the intersection of strategy, craft, and behavior.',
}

export default function HomePage() {
  return (
    <>
      <ScrollInit />
      <Cursor />
      <NavBar />
      <HeroSection />

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {['Product Design', '· Interaction ·', 'Research', '· Systems ·', 'Prototyping', '· Strategy ·', 'Motion', '· Craft ·'].map((t, i) => (
            <span key={i} className={i % 2 === 1 ? 'it' : ''}>{t}<span className="dot" /></span>
          ))}
          {['Product Design', '· Interaction ·', 'Research', '· Systems ·', 'Prototyping', '· Strategy ·', 'Motion', '· Craft ·'].map((t, i) => (
            <span key={`d${i}`} className={i % 2 === 1 ? 'it' : ''}>{t}<span className="dot" /></span>
          ))}
        </div>
      </div>

      <WorkSection />

      {/* Philosophy */}
      <section className="section-quote">
        <div className="quote-inner">
          <div className="label reveal"><span>(03)</span> Philosophy</div>
          <blockquote className="reveal">
            <span className="sans">Good product design isn&apos;t decoration.</span> It&apos;s the{' '}
            <em>quiet</em> work of removing doubt, so people can move forward without thinking about
            the interface at all.
          </blockquote>
          <div className="quote-attr reveal">— Working principle, 2026</div>
        </div>
      </section>

      {/* About */}
      <section className="section-about" id="about">
        <div className="about-inner">
          <div className="label reveal" style={{ color: 'var(--fog-2)' }}>
            <span style={{ color: 'var(--fog-2)' }}>(04)</span> About
          </div>
          <div style={{ height: 60 }} />
          <p className="about-lede reveal">
            I design digital products <span className="it">from first principles</span> — combining a
            user-centered approach with solid product strategy.{' '}
            <span className="dim">Six years of work across consumer, retail, and IoT; a growing
            obsession with the moments between interactions — where trust is built or quietly lost.</span>
          </p>
          <div className="about-grid">
            <div className="reveal">
              <h4>(i) Background</h4>
              <p>Product designer based in Tel Aviv, currently focused on retail technology and consumer
              mobile products. Previously, I shipped work for IoT, fintech, and career platforms.</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
              <h4>(ii) Approach</h4>
              <p>I start with data and end with craft. Every design decision is traceable to a user
              behavior, a metric, or a strategic bet. I prototype early, measure often, and edit without ego.</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h4>(iii) Beyond work</h4>
              <p>Long-form writing, film photography, and the constant, amused study of how people
              actually use things — versus how we imagine they do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-cap" id="capabilities">
        <div className="cap-inner">
          <div className="cap-head">
            <h2 className="reveal">Capabilities <span className="it">/</span><br />what I practice.</h2>
            <p className="reveal">A compressed index of the craft. The deeper work happens where these
            overlap — between research, interface, and the code that makes it real.</p>
          </div>
          <div className="cap-grid">
            {capabilities.map((cap, i) => (
              <div key={cap.num} className="cap-row reveal" style={i % 2 === 1 ? { transitionDelay: '0.1s' } : undefined}>
                <div className="cap-num">{cap.num}</div>
                <div className="cap-title">{cap.title}<span className="it">{cap.titleItalic}</span></div>
                <p className="cap-desc">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
