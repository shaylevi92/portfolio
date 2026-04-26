import type { Metadata } from 'next'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/layout/Cursor'
import ProgressBar from '@/components/layout/ProgressBar'
import ScrollInit from '@/components/ui/ScrollInit'

export const metadata: Metadata = {
  title: 'About — Shay Levi',
  description: 'Product designer with six years of experience across retail tech, IoT, and consumer mobile. Currently at Dropit.',
}

const aboutLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Contact', href: '/#contact' },
]

export default function AboutPage() {
  return (
    <>
      <ScrollInit />
      <Cursor />
      <NavBar links={aboutLinks} />

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-inner">
          <div className="about-hero-eyebrow">
            <span>(A) About <span className="arrow">↳</span> Shay Levi</span>
            <span>Tel Aviv / Remote</span>
          </div>
          <h1 className="about-hero-title reveal" id="heroTitle">
            <span className="line">
              <span className="word" style={{ '--i': 0 } as React.CSSProperties}><span>Curious</span></span>{' '}
              <span className="word" style={{ '--i': 1 } as React.CSSProperties}><span>about</span></span>
            </span>
            <span className="line">
              <span className="word" style={{ '--i': 2 } as React.CSSProperties}><span>systems.</span></span>
            </span>
            <span className="line">
              <span className="it word" style={{ '--i': 3 } as React.CSSProperties}><span>Focused</span></span>{' '}
              <span className="word" style={{ '--i': 4 } as React.CSSProperties}><span>on</span></span>
            </span>
            <span className="line">
              <span className="word" style={{ '--i': 5 } as React.CSSProperties}><span>people.</span></span>
            </span>
          </h1>
        </div>
        <div className="about-hero-intro">
          <div />
          <p className="reveal" style={{ transitionDelay: '0.5s' }}>
            I&apos;m Shay. I specialize in designing <span className="it">data-driven, complex systems</span> and
            transforming them into intuitive, scalable experiences that empower people to make confident decisions.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="about-profile">
        <div className="about-profile-inner">
          <div className="about-photo-col">
            <img src="/me.png" alt="Shay Levi — Product Designer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div className="about-bio-col">
            <div className="label reveal"><span>(01)</span> A bit about me</div>
            <h2 className="about-bio-headline reveal" style={{ transitionDelay: '0.1s' }}>
              UX that&apos;s <span className="it">structure,</span><br />not decoration.
            </h2>
            <div className="about-bio-body">
              <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                I&apos;m a product designer with six years of experience across retail tech, IoT, and consumer
                mobile. Currently leading UX at <strong>Dropit</strong> — a SaaS platform that manages inventory
                allocation for major retail brands — where I design systems used daily by operations teams across
                hundreds of stores.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.25s' }}>
                Before Dropit, I shipped products for <strong>iPlant</strong> (IoT greenhouse automation),{' '}
                <strong>Careery</strong> (career decision-making), and independent founders in fintech and edtech.
                My background in Learning Technologies means I think about friction, adoption curves, and long-term
                behavior — not just how something looks on day one.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.35s' }}>
                Outside of work: long walks, film photography, cooking experiments, and an ongoing obsession with
                how people actually use things versus how we imagine they will.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="about-details">
        <div className="about-details-inner">
          <div className="about-details-head">
            <div className="label reveal" style={{ color: 'var(--fog-2)' }}>
              <span style={{ color: 'var(--fog-2)' }}>(02)</span> Background
            </div>
            <h2 className="reveal" style={{ transitionDelay: '0.1s' }}>
              How I got<br />here — and <span className="it">why it matters.</span>
            </h2>
          </div>
          <div className="about-details-grid">
            <div className="about-detail-col reveal">
              <h4>(i) Experience</h4>
              <p>6 years in product design. Currently at <strong>Dropit</strong> — retail inventory SaaS —
              designing for operational scale. Previously: iPlant (IoT), Careery (consumer mobile), fintech
              and edtech startups.</p>
              <p>Shipped work used in 100+ retail locations across Europe and the US.</p>
            </div>
            <div className="about-detail-col reveal" style={{ transitionDelay: '0.12s' }}>
              <h4>(ii) Approach</h4>
              <p>I start with Amplitude data and end with Figma craft. Every design decision traces back to a
              user behavior, a funnel metric, or a strategic bet. I prototype in days, not weeks — and edit
              without ego.</p>
              <p>Fluent in front-end context. I can read the PR and make the thing ship.</p>
            </div>
            <div className="about-detail-col reveal" style={{ transitionDelay: '0.24s' }}>
              <h4>(iii) Education</h4>
              <p>B.A. in Learning Technologies — which turned out to be the most useful design education
              possible. It&apos;s a discipline about how people actually change behavior, not just how they
              behave in a usability test.</p>
              <p>That lens lives in every product decision I make.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="about-quote">
        <div className="about-quote-inner">
          <div className="label reveal" style={{ marginBottom: 60 }}><span>(03)</span> Working principle</div>
          <blockquote className="reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="sans">Design, for me, is a way of thinking</span> — not just a role. The craft
            matters. The <em>intent</em> behind it matters more.
          </blockquote>
          <div className="about-quote-attr reveal" style={{ transitionDelay: '0.2s' }}>— Shay Levi, 2026</div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <div className="label reveal" style={{ color: 'var(--fog-2)', justifyContent: 'center', marginBottom: 60 }}>
            <span style={{ color: 'var(--fog-2)' }}>(04)</span> Contact
          </div>
          <h2 className="reveal" style={{ transitionDelay: '0.1s' }}>
            Have an idea?<br /><span className="it">Let&apos;s talk.</span>
          </h2>
          <div className="about-cta-links">
            <a href="mailto:levishay92@gmail.com" className="reveal" style={{ transitionDelay: '0.2s' }}>
              levishay92@gmail.com <span className="arrow">→</span>
            </a>
            <a href="/shay-levi-cv.pdf" target="_blank" rel="noopener noreferrer" className="reveal" style={{ transitionDelay: '0.3s' }}>
              Download CV <span className="arrow">→</span>
            </a>
            <a href="/#work" className="reveal" style={{ transitionDelay: '0.4s' }}>
              View work <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-meta" style={{ marginTop: 0 }}>
            <span>© 2026 Shay Levi. All rights reserved.</span>
            <a href="mailto:levishay92@gmail.com" style={{ color: 'var(--paper)' }}>levishay92@gmail.com</a>
            <span>Designed &amp; built by Shay Levi</span>
          </div>
        </div>
      </footer>
    </>
  )
}
