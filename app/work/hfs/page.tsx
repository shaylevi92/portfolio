import type { Metadata } from 'next'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/layout/Cursor'
import ProgressBar from '@/components/layout/ProgressBar'
import ScrollInit from '@/components/ui/ScrollInit'
import CoverSection from '@/components/case-study/CoverSection'
import ChapterHead from '@/components/case-study/ChapterHead'
import Story2Col from '@/components/case-study/Story2Col'
import PullQuote from '@/components/case-study/PullQuote'
import MetricsGrid from '@/components/case-study/MetricsGrid'
import StrategyRow from '@/components/case-study/StrategyRow'
import NextCase from '@/components/case-study/NextCase'
import PhoneMockup from '@/components/ui/PhoneMockup'
import VideoBlock from '@/components/ui/VideoBlock'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Dropit · Hands-Free Shopping — Shay Levi',
  description: 'Rebuilding the Hands-Free Shopping experience for Dropit — turning a fragmented hub-based flow into a single continuous path.',
}

const CDN = 'https://cdn.prod.website-files.com/68a99d547e65bfdde9c33430'
const CDN2 = 'https://shaylevi.b-cdn.net'

const navLinks = [
  { label: 'Context', href: '#context' },
  { label: 'Problem', href: '#problem' },
  { label: 'Approach', href: '#approach' },
  { label: 'Solution', href: '#solution' },
  { label: 'Impact', href: '#impact' },
]

export default function HFSPage() {
  return (
    <>
      <ScrollInit />
      <Cursor />
      <ProgressBar />
      <NavBar links={navLinks} showBrand={false} />

      <CoverSection
        num="001 of 04"
        client="Dropit"
        year="2026"
        title={[
          [{ text: 'Shopping' }],
          [{ text: 'without' }, { text: 'carrying', isItalic: true }],
          [{ text: 'bags.', isItalic: true }],
        ]}
        sub={<>Rebuilding the <em>Hands-Free Shopping</em> experience for Dropit — turning a fragmented hub-based flow into a single continuous path that earns the trust it asks for.</>}
        heroImage={{ url: `${CDN}/69a6d979631d2c5bb52effaa_acdefdf0fe020902a7e1579014750a38_Hands%20free%20shopping%20-%20hero.png`, alt: 'Dropit Hands-Free Shopping' }}
        coverFoot={[
          { label: 'Role', value: 'Product Designer · UX/UI' },
          { label: 'Timeframe', value: '3 Weeks · Q1 2026' },
          { label: 'Tools', value: 'Figma · Amplitude' },
          { label: 'Tags', value: 'Retail · Consumer' },
          { label: 'Outcome', value: '0 hub returns · Complete flow' },
        ]}
      />

      {/* Overview */}
      <section className="case-section" id="context">
        <div className="case-inner">
          <ChapterHead num="01" label="Overview" title={<>The product logic existed.<br /><span className="it">The experience felt fragmented.</span></>} />
          <Story2Col
            left={<p className="story-lead">Dropit&apos;s <span className="it">Hands-Free Shopping</span> app lets mall customers send their purchases directly home — so they can keep shopping without carrying bags.</p>}
            right={<><p>The process is simple on paper: scan a QR at checkout, create a &ldquo;Drop&rdquo;, leave bags at the store, and the system handles collection and delivery.</p><p>Despite the concept&apos;s clarity, behavioral data told a different story. Many users who opened the app never completed their first Drop.</p></>}
          />
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginTop: 60 }}>
            <img src={`${CDN}/69bfbc4d4b7ee23abf7b4113_Overview.png`} alt="App overview" style={{ width: '100%' }} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Problem */}
      <section className="case-section tint" id="problem">
        <div className="case-inner">
          <ChapterHead num="02" label="The problem" title={<>Abandonment at <span className="it">critical moments.</span></>} />
          <p className="story-lead reveal" style={{ maxWidth: 1100, marginBottom: 80 }}>
            Amplitude told a consistent story: drop-off points weren&apos;t random — they clustered around moments users needed <span className="it">reassurance</span>, and didn&apos;t get it.
          </p>
          <div className="problem-list reveal">
            <div className="problem-row">
              <div className="stat">52<span style={{ fontSize: '0.5em', color: 'var(--fog)' }}>%</span></div>
              <div><div className="label-small">Conversion</div><div className="what">First-Drop completion rate</div></div>
              <div className="detail">Only about half of users who entered the app completed their first Drop — despite the mechanic being functionally sound.</div>
            </div>
            <div className="problem-row">
              <div className="stat">34<span style={{ fontSize: '0.5em', color: 'var(--fog)' }}>%</span></div>
              <div><div className="label-small">Friction peak</div><div className="what">Abandoned at receipt scan</div></div>
              <div className="detail">The scan stage lacked feedback. Without confirmation the capture worked, users hesitated — and many didn&apos;t come back.</div>
            </div>
            <div className="problem-row">
              <div className="stat">21<span style={{ fontSize: '0.5em', color: 'var(--fog)' }}>%</span></div>
              <div><div className="label-small">Backtrack</div><div className="what">Exited the destination step</div></div>
              <div className="detail">The hub forced users to re-enter context they&apos;d just established. The return trip felt like regression, not progress.</div>
            </div>
          </div>
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginTop: 60 }}>
            <img src={`${CDN}/69e77548d062043eea062d67_Frame%202608791.png`} alt="Abandonment pattern" style={{ width: '100%' }} />
          </RevealOnScroll>
          <RevealOnScroll style={{ marginTop: 60, display: 'flex', justifyContent: 'center' }}>
            <PhoneMockup>
              <VideoBlock src={`${CDN2}/Handsfree/Hub_screen_confusion_record.mov`} poster={`${CDN}/69a6d979631d2c5bb52effaa_acdefdf0fe020902a7e1579014750a38_Hands%20free%20shopping%20-%20hero.png`} />
            </PhoneMockup>
          </RevealOnScroll>
          <p className="img-caption reveal" style={{ textAlign: 'center', marginTop: 16 }}>Hub navigation — users repeatedly backtrack instead of progressing</p>
        </div>
      </section>

      <PullQuote attr="Core insight — from user interviews &amp; session replay" dark>
        <span className="sans">The system required users to relinquish physical control of their belongings.</span> When you ask that of someone, you owe them a structured, transparent,{' '}
        <span style={{ color: 'var(--accent)' }}>continuously reassuring</span> experience in return.
      </PullQuote>

      {/* Approach */}
      <section className="case-section" id="approach">
        <div className="case-inner">
          <ChapterHead num="03" label="Understanding the existing flow" title={<>A <span className="it">hub</span> at the center<br />of every decision.</>} />
          <Story2Col
            left={<><p>The original experience was built around a <strong>Hub Navigation</strong> pattern. After scanning a QR to initiate a Drop, users landed on a central screen prompted to complete each step from there.</p><p>After every step, they returned to the hub to choose what next. For repeat users, fine. For first-timers, a maze.</p></>}
            right={<><p>The structure created three compounding UX failures:</p><p>— <strong>Progress was invisible.</strong> Users lost track of which step they were on.<br />— <strong>Decisions were forced.</strong> Every return to the hub asked &ldquo;what now?&rdquo;<br />— <strong>Reassurance was absent.</strong> After handing over bags, the interface went quiet.</p></>}
          />
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginTop: 60 }}>
            <img src={`${CDN}/69e7733520b9e8fff4fc442b_Linear%20flow.png`} alt="Hub vs linear flow" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal">Before (hub) → After (guided linear flow)</p>
        </div>
      </section>

      {/* Solution */}
      <section className="case-section tint" id="solution">
        <div className="case-inner">
          <ChapterHead num="04" label="The redesign" title={<>One continuous flow.<br /><span className="it">No hub returns.</span></>} />
          <Story2Col
            left={<p className="story-lead">I replaced the hub with a <span className="it">guided linear flow</span> — a single path where each step leads directly to the next.</p>}
            right={<p>Three changes carried most of the weight, each mapped directly to a friction peak in the data.</p>}
            className="reveal"
            style={{ marginBottom: 40 }}
          />
          <StrategyRow
            step="01 — Transparency"
            title={<>Transparency at <span className="it">critical moments.</span></>}
            body={<p>I introduced explicit state: <em>Scanning → Detected → Extracted</em>. Every step confirms itself, so the interface never goes silent during the moments that matter most.</p>}
            mediaType="phone"
            mediaSrc={`${CDN2}/Handsfree/Screen%20Recording%202026-04-21%20at%2016.40.34.mov`}
            poster={`${CDN}/69a6d979631d2c5bb52effaa_acdefdf0fe020902a7e1579014750a38_Hands%20free%20shopping%20-%20hero.png`}
          />
          <StrategyRow
            step="02 — Visible progress"
            title={<>Making progress <span className="it">visible.</span></>}
            body={<p>I added real-time drop tracking so users always know their belongings are secured and in motion.</p>}
            mediaType="phone"
            mediaSrc={`${CDN2}/Handsfree/Screen%20Recording%202026-04-21%20at%2016.49.17.mov`}
            poster={`${CDN}/69a6d979631d2c5bb52effaa_acdefdf0fe020902a7e1579014750a38_Hands%20free%20shopping%20-%20hero.png`}
            reverse
          />
          <StrategyRow
            step="03 — Entry friction"
            title={<>Removing <span className="it">entry friction.</span></>}
            body={<p>I added a nearby-store list to the home screen. One tap to start. No scanning required.</p>}
            mediaType="phone"
            mediaSrc={`${CDN2}/Handsfree/Screen%20Recording%202026-04-21%20at%2017.15.04.mov`}
            poster={`${CDN}/69a6d979631d2c5bb52effaa_acdefdf0fe020902a7e1579014750a38_Hands%20free%20shopping%20-%20hero.png`}
          />
        </div>
      </section>

      {/* Impact */}
      <section className="case-section dark" id="impact">
        <div className="case-inner">
          <ChapterHead num="05" label="Impact & outcomes" dark title={<>Three metrics defined the problem.<br /><span className="it">Each directly drove a design decision.</span></>} />
          <p className="story-lead reveal" style={{ color: 'rgba(242,239,234,0.8)', maxWidth: 1100, marginBottom: 80 }}>
            Post-redesign testing with in-store associates showed <span className="it" style={{ color: 'var(--accent)' }}>complete flow completion</span> — zero hub returns.
          </p>
          <MetricsGrid metrics={[
            { value: '48', unit: '%', label: 'abandoned before completing a Drop', description: 'Baseline from Amplitude: only 52% completed their first Drop — the defining metric for this project.' },
            { value: '5', suffix: '×', label: 'avg. hub returns per drop', description: 'Pre-redesign — repeated backtracking that made progress feel invisible. Reduced to zero.' },
            { value: '0', label: 'hub returns post-redesign', description: 'In-store testing confirmed complete end-to-end flow completion — no user returned to the hub mid-Drop.' },
          ]} />
          <div className="pull reveal" style={{ marginTop: 100 }}>
            In the end, the fix <span className="sans">wasn&apos;t a new feature.</span> It was the removal of a pattern that had stopped serving the product — and the quiet confidence to replace it with something simpler.
          </div>
          <div className="pull-attr reveal" style={{ color: 'var(--fog-2)' }}>— Reflection</div>
        </div>
      </section>

      <NextCase title="Rule Builder" href="/work/dropit-rules" />
      <Footer />
    </>
  )
}
