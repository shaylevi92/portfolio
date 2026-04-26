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
import NextCase from '@/components/case-study/NextCase'
import BrowserMockup from '@/components/ui/BrowserMockup'
import VideoBlock from '@/components/ui/VideoBlock'
import HorizontalGallery from '@/components/ui/HorizontalGallery'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Dropit · Inventory Rule Builder — Shay Levi',
  description: 'Redesigning the Inventory Rule Builder — replacing a fragmented interface with a structured, AI-assisted flow.',
}

const CDN = 'https://cdn.prod.website-files.com/68a99d547e65bfdde9c33430'
const CDN2 = 'https://shaylevi.b-cdn.net'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Directions', href: '#directions' },
  { label: 'Redesign', href: '#redesign' },
  { label: 'Prototype', href: '#prototype' },
  { label: 'More work', href: '#more' },
]

const galleryScreens = [
  { src: `${CDN}/69a0e7c1b18f032eb6a878fd_Season%20planning_Season%20Projection.png`, caption: 'Season Planning · Projection' },
  { src: `${CDN}/69a0d4d90f16f1ea425e9e32_Season%20planning_Catalog%20Mix.png`, caption: 'Season Planning · Catalog Mix' },
  { src: `${CDN}/69a0d4d91b34abcc0a6e2a8f_Season%20planning_Geo%20Analysis.png`, caption: 'Season Planning · Geo Analysis' },
  { src: `${CDN}/69a0dbbeca329db010f6e4f2_Comparison.png`, caption: 'Inventory · Comparison' },
  { src: `${CDN}/69a0e558b1caa0e96705e11b_46d6329817f640f1e35b8b1828099ed5_Inventory%20allocations_filters.png`, caption: 'Inventory · Allocations & Filters' },
]

export default function DropitRulesPage() {
  return (
    <>
      <ScrollInit />
      <Cursor />
      <ProgressBar />
      <NavBar links={navLinks} showBrand={false} />

      <CoverSection
        num="002 of 04"
        client="Dropit"
        year="2024"
        title={[
          [{ text: 'Rules' }],
          [{ text: 'that' }],
          [{ text: 'scale.', isItalic: true }],
        ]}
        sub={<>Redesigning Dropit&apos;s <em>Inventory Rule Builder</em> — replacing a fragmented, technical interface with a structured, AI-assisted flow that lets operational teams build complex logic without friction.</>}
        heroImage={{ url: `${CDN}/699b615daba0955bebf4a319_hero-screen-dropit.png`, alt: 'Dropit Inventory Rule Builder' }}
        coverFoot={[
          { label: 'Role', value: 'Product Designer · UX/UI' },
          { label: 'Timeframe', value: '1 Week · Q4 2024' },
          { label: 'Tools', value: 'Figma · After Effects' },
          { label: 'Tags', value: 'SaaS · Retail ops' },
          { label: 'Domain', value: 'Enterprise · Inventory' },
        ]}
      />

      {/* Overview */}
      <section className="case-section" id="overview">
        <div className="case-inner">
          <ChapterHead num="01" label="Overview" title={<>Operational power.<br /><span className="it">Without operational friction.</span></>} />
          <Story2Col
            left={<p className="story-lead">Dropit is a <span className="it">SaaS platform</span> helping retail brands optimize inventory allocation at scale — managing stock, financial exposure, and operational efficiency across hundreds of locations.</p>}
            right={<><p>The Rule Builder is the engine beneath: operations managers define the logic governing how inventory moves. When the interface is wrong, every decision downstream is harder.</p><p>The brief: make complex conditional logic buildable by any ops user, not just engineers.</p></>}
          />
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginTop: 60 }}>
            <img src={`${CDN}/69a2e5a806e5ca2829c80b06_b26ea52e3f4308eb43f5581dd3ce2f4a_Task-Dropit.png`} alt="Existing Rulebook screen" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal">The starting point — existing Rulebook screen</p>
        </div>
      </section>

      {/* Requirements */}
      <section className="case-section tint">
        <div className="case-inner">
          <ChapterHead num="02" label="Requirements" title={<>Enterprise systems fall<br />into <span className="it">two extremes.</span></>} />
          <Story2Col
            left={<p>Overly technical interfaces give power users everything — and leave everyone else behind. Oversimplified flows can&apos;t handle real operational complexity. The rule builder needed to sit precisely in the middle.</p>}
            right={<p>Required functionality: rule names &amp; tags · conditional AND/OR nesting · toggle on/off · edit, duplicate, remove · creation timestamps · non-technical navigation.</p>}
          />
        </div>
      </section>

      {/* Directions */}
      <section className="case-section" id="directions">
        <div className="case-inner">
          <ChapterHead num="03" label="Architectural directions" title={<>Two approaches.<br /><span className="it">One clear answer.</span></>} />
          <RevealOnScroll style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 60 }}>
            <div style={{ borderRadius: 6, overflow: 'hidden', background: 'var(--paper-2)' }}>
              <img src={`${CDN}/699b6f9c4a3becea45e09766_Concept%201%20-%20Canvas%20view.png`} alt="Canvas builder" style={{ width: '100%' }} />
              <div style={{ padding: '28px 28px 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>Direction 01</div>
                <h4 style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.015em', marginBottom: 12 }}>Visual Canvas Builder</h4>
                <p style={{ fontSize: 14, color: 'var(--fog)' }}><strong>Pros:</strong> Expressive, visually comprehensive.<br /><strong>Cons:</strong> High cognitive load, breaks at scale.</p>
              </div>
            </div>
            <div style={{ borderRadius: 6, overflow: 'hidden', background: 'var(--paper-2)', outline: '2px solid var(--accent)' }}>
              <img src={`${CDN}/699b6f9c86edc5d556741def_Concept%202%20-%20Step%20by%20step.png`} alt="Structured interface" style={{ width: '100%' }} />
              <div style={{ padding: '28px 28px 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>Direction 02 — Selected ↗</div>
                <h4 style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.015em', marginBottom: 12 }}>Structured Text-Guided Interface</h4>
                <p style={{ fontSize: 14, color: 'var(--fog)' }}><strong>Pros:</strong> Focused, simple, scalable.<br /><strong>Cons:</strong> Requires clear system framing.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Decision */}
      <PullQuote attr="Decision rationale" dark>
        <span className="sans">In operational systems, clarity must scale.</span> At scale, visual expressiveness is{' '}
        <span style={{ color: 'var(--accent)' }}>secondary to logical sustainability.</span>
      </PullQuote>
      <section className="case-section dark">
        <div className="case-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderTop: '1px solid rgba(242,239,234,0.14)' }}>
            {[
              { icon: `${CDN}/69a2d72e74922dca270da20e_67fc454a5d4003f7e7a9f937550c17cb_Group%201597880793.svg`, title: 'Cognitive efficiency', body: 'Operational users manage high-volume tasks daily. The interface must reduce mental overhead — not amplify it.' },
              { icon: `${CDN}/69a2d8c75296074d54b04c62_9e173f3027380be507d28322581a256c_Speed.svg`, title: 'Speed at scale', body: 'Rule creation must be fast and repeatable. Managers don\'t have time for exploratory visual construction.' },
              { icon: `${CDN}/69a2dac81a9224ce19263d11_Logic.svg`, title: 'Sustainable logic', body: 'As rules grow in complexity, the system must remain stable — structurally and cognitively.' },
            ].map((p, i) => (
              <div key={i} className="reveal" style={{ padding: '52px 40px', borderRight: i < 2 ? '1px solid rgba(242,239,234,0.14)' : undefined, transitionDelay: `${i * 0.12}s` }}>
                <img src={p.icon} alt="" style={{ width: 44, height: 44, marginBottom: 24, filter: 'invert(1) sepia(1) saturate(3) hue-rotate(340deg)' }} />
                <h4 style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.015em', marginBottom: 12 }}>{p.title}</h4>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fog-2)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesign */}
      <section className="case-section tint" id="redesign">
        <div className="case-inner">
          <ChapterHead num="04" label="Structural redesign" title={<>A static overview becomes<br />a <span className="it">dynamic control layer.</span></>} />
          <Story2Col
            left={<p>The existing rulebook was read-only — editing meant navigating away, losing context, and returning to a screen that had reset.</p>}
            right={<p>The redesign transforms the rule list into an active control surface. Every rule is inline-editable. Toggle states are visible at a glance. The table becomes the workspace — not a summary.</p>}
          />
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginTop: 60 }}>
            <img src={`${CDN}/699b73e459a7e89b280eb756_Wireframes%20-%201.png`} alt="Wireframes" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal">Wireframes — structural redesign</p>
        </div>
      </section>

      {/* Prototype — 4 browser-frame videos */}
      <section className="case-section" id="prototype">
        <div className="case-inner">
          <ChapterHead num="05" label="Prototype" title={<>Four strategies.<br /><span className="it">One seamless flow.</span></>} />
          {[
            { step: '01 — Rule creation', title: 'Simplifying rule creation.', body: 'Users begin with intent rather than rigid fields. They supply a natural language description; the system parses input, extracts variables, and prepares logic automatically.', src: `${CDN2}/Dropit%20case%20study%20-%20Rule%20builder/01_Simplifying%20Rule%20Creation.mov`, reverse: false },
            { step: '02 — AI-assisted structuring', title: 'AI-assisted logic building.', body: 'Modular, editable logic blocks let users add nested conditions, switch AND/OR operators, rearrange logic, and edit variables inline with autocomplete.', src: `${CDN2}/Dropit%20case%20study%20-%20Rule%20builder/02_AI-Assisted%20Rule%20Structuring.mov`, reverse: true },
            { step: '03 — Activation', title: 'Operational control & activation.', body: 'After publishing, a confirmation state appears. The rule becomes active, visible in the Stock Limits table. Activation toggles are one click away.', src: `${CDN2}/Dropit%20case%20study%20-%20Rule%20builder/03_Operational%20Control%20%26%20Activation.mov`, reverse: false },
            { step: '04 — Home & rule overview', title: 'The home view & rule assessment.', body: 'The redesigned home screen surfaces all active rules with their current status at a glance. Managers can assess, toggle, or enter edit mode without leaving the overview.', src: `${CDN2}/Dropit_Home_take_Assessment.mov`, reverse: true },
          ].map((row, i) => (
            <RevealOnScroll key={i} style={{ marginBottom: 80 }}>
              <span className="step-label" style={{ display: 'block', marginBottom: 12 }}>{row.step}</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', flexDirection: row.reverse ? 'row-reverse' : undefined } as React.CSSProperties}>
                {row.reverse ? (
                  <>
                    <div className="strategy-copy">
                      <h4>{row.title}</h4>
                      <p>{row.body}</p>
                    </div>
                    <BrowserMockup><VideoBlock src={row.src} poster={`${CDN}/699b615daba0955bebf4a319_hero-screen-dropit.png`} /></BrowserMockup>
                  </>
                ) : (
                  <>
                    <BrowserMockup><VideoBlock src={row.src} poster={`${CDN}/699b615daba0955bebf4a319_hero-screen-dropit.png`} /></BrowserMockup>
                    <div className="strategy-copy">
                      <h4>{row.title}</h4>
                      <p>{row.body}</p>
                    </div>
                  </>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="case-section dark">
        <div className="case-inner">
          <ChapterHead num="06" label="Outcomes" dark title={<>Tested with ops managers.<br /><span className="it">The numbers spoke clearly.</span></>} />
          <p className="story-lead reveal" style={{ color: 'rgba(242,239,234,0.8)', maxWidth: 1100, marginBottom: 60 }}>
            Moderated usability sessions with 4 Dropit operations managers using both the original Rulebook and the redesigned interface.
          </p>
          <MetricsGrid metrics={[
            { value: '4 / 4', label: 'ops managers completed rule creation', description: 'All 4 participants successfully built a conditional rule in the new interface. In the original, only 1 of 4 completed without assistance.' },
            { value: '3', suffix: '×', label: 'faster time-to-publish', description: 'Average rule creation dropped from ~9 minutes (old flow) to ~3 minutes — measured across the same rule complexity.' },
            { value: '0', label: 'navigation errors mid-task', description: 'The old interface averaged 5 navigation mistakes per session. The new structured flow recorded zero errors across all 4 sessions.' },
          ]} />
          <div className="pull reveal" style={{ marginTop: 80 }}>
            <span className="sans">&ldquo;I finally understand what I&apos;m building</span> — and I can actually see if it did what I wanted.&rdquo;
          </div>
          <div className="pull-attr reveal" style={{ color: 'var(--fog-2)' }}>— Ops manager, usability session 3</div>
        </div>
      </section>

      {/* More Dropit work */}
      <section className="case-section tint" id="more">
        <div className="case-inner">
          <ChapterHead num="07" label="More Dropit work" title={<>Other screens from<br /><span className="it">the same system.</span></>} />
          <Story2Col
            left={<p>Beyond the Rule Builder, I worked across the broader Dropit SaaS platform — contributing to season planning tools, geographic analysis views, catalog allocation interfaces, and comparison dashboards.</p>}
            right={<p>Each screen holds to the same principle: operational complexity made navigable. Dense data rendered readable. Decision-making made faster.</p>}
            style={{ marginBottom: 60 }}
          />
        </div>
        <div style={{ padding: '0 var(--gutter)' }}>
          <HorizontalGallery>
            {galleryScreens.map((s) => (
              <div key={s.src} className="h-gallery-item" style={{ height: 420 }}>
                <img src={s.src} alt={s.caption} style={{ height: 420, width: 'auto' }} />
                <div className="caption">{s.caption}</div>
              </div>
            ))}
          </HorizontalGallery>
        </div>
      </section>

      <NextCase title="iPlant" href="/work/iplant" />
      <Footer />
    </>
  )
}
