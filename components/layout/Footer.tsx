import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="label reveal" style={{ color: 'var(--fog-2)', marginBottom: '40px' }}>
          <span style={{ color: 'var(--fog-2)' }}>(05)</span> Contact
        </div>
        <h2 className="footer-cta reveal">
          Have an idea?<br />
          <span className="serif-it">Let&apos;s talk.</span>
        </h2>

        <div className="footer-grid">
          <div>
            <h5>Write</h5>
            <a href="mailto:levishay92@gmail.com">levishay92@gmail.com</a>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Schedule a 30-min call →</a>
          </div>
          <div>
            <h5>Elsewhere</h5>
            <a href="https://www.linkedin.com/in/shay-levi-ux" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://read.cv/shaylevi" target="_blank" rel="noopener noreferrer">Read.cv</a>
            <a href="https://dribbble.com/shaylevi" target="_blank" rel="noopener noreferrer">Dribbble</a>
          </div>
          <div>
            <h5>Index</h5>
            <Link href="/#top">Home</Link>
            <Link href="/#work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/#capabilities">Capabilities</Link>
          </div>
          <div>
            <h5>Get started</h5>
            <a href="/shay-levi-cv.pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
            <a href="mailto:levishay92@gmail.com">Open to opportunities →</a>
          </div>
        </div>

        <div className="footer-meta">
          <span>© 2026 Shay Levi. All rights reserved.</span>
          <span>Designed &amp; built by Shay Levi</span>
          <span>v. 2026.01 — <span className="serif-it" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>the calm edition</span></span>
        </div>
      </div>
    </footer>
  )
}
