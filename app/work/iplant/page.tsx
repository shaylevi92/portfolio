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
import PhoneMockup from '@/components/ui/PhoneMockup'
import VideoBlock from '@/components/ui/VideoBlock'
import HorizontalGallery from '@/components/ui/HorizontalGallery'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'iPlant · Smart IoT Greenhouse — Shay Levi',
  description: 'Designing an AI-based IoT greenhouse management system — turning the complexity of precision agriculture into an interface any farmer can operate.',
}

const CDN = 'https://cdn.prod.website-files.com/68a99d547e65bfdde9c33430'
const CDN2 = 'https://shaylevi.b-cdn.net'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Process', href: '#process' },
  { label: 'Prototype', href: '#prototype' },
]

const galleryScreens = [
  `${CDN}/68aa1bdb45a4cc39cc18a7b5_relume-333860.png`,
  `${CDN}/68aa1bdb605478a79ea38648_relume-333883.png`,
  `${CDN}/68aa1bdad526f30201efab0d_relume-333886.png`,
  `${CDN}/68aa1bd39107055055a41ae6_relume-333836.png`,
  `${CDN}/68aa240062f5d47407687499_relume-333928.png`,
  `${CDN}/68aa2403d526f30201f0b1f9_relume-333907.png`,
  `${CDN}/68aa240191a3501570c7b76b_relume-333929.png`,
  `${CDN}/68aa24006b0bff46fcfeb3bb_relume-333930.png`,
]

const autoVideos = [
  { step: '01 — Automation', title: 'Creating an automation rule.', body: 'Users define what should happen using natural language. The system extracts conditions, maps to sensors, and builds the logic layer — no coding required.', src: `${CDN2}/Craeting%20automation-1.mp4` },
  { step: '02 — Triggers', title: 'Editing a trigger condition.', body: 'Each trigger displays its state, sensor value, and threshold in plain language. Editing is inline — no modal, no navigation away.', src: `${CDN2}/triger%20editing.mp4` },
  { step: '03 — Prompts', title: 'Editing automation prompts.', body: 'Prompts can be refined without rebuilding the full rule. Partial edits are non-destructive — the underlying logic stays intact.', src: `${CDN2}/creating-automation2.mp4` },
]

export default function IPlantPage() {
  return (
    <>
      <ScrollInit />
      <Cursor />
      <ProgressBar />
      <NavBar links={navLinks} showBrand={false} />

      <CoverSection
        num="003 of 04"
        client="iPlant"
        year="2023"
        title={[
          [{ text: 'Smart' }],
          [{ text: 'farming,' }],
          [{ text: 'simplified.', isItalic: true }],
        ]}
        sub={<>Designing an <em>AI-based IoT greenhouse</em> management system — turning the complexity of precision agriculture into an interface any farmer can operate with confidence.</>}
        heroImage={{ url: `${CDN}/69b16bc0fc1ab10962efbea9_cbca3c0db6f3f9a4812cfcc162e02454_Image-container-iplant.png`, alt: 'iPlant Smart IoT Greenhouse' }}
        coverFoot={[
          { label: 'Role', value: 'Product Designer · UX/UI' },
          { label: 'Timeframe', value: '9 Weeks · Q3 2023' },
          { label: 'Tools', value: 'Figma · After Effects' },
          { label: 'Tags', value: 'IoT · AI · Automation' },
          { label: 'Platform', value: 'Web + Mobile' },
        ]}
      />

      {/* Overview */}
      <section className="case-section" id="overview">
        <div className="case-inner">
          <ChapterHead num="01" label="Overview" title={<>Agriculture is <span className="it">already smart.</span><br />The interfaces aren&apos;t.</>} />
          <Story2Col
            left={<p className="story-lead">iPlant is a <span className="it">Smart IoT Greenhouse</span> platform — connecting sensors, automation rules, and AI to give farmers real-time control over their growing environments.</p>}
            right={<><p>Precision agriculture has transformed what&apos;s possible — but the software controlling it lagged behind. Complex dashboards and opaque automation rules meant only tech-savvy operators could unlock the platform&apos;s power.</p><p>The goal: make AI-driven farming accessible to anyone managing a greenhouse.</p></>}
          />
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginTop: 60 }}>
            <img src={`${CDN}/68ac9682f14f97dac35a6c93_overview-2.webp`} alt="iPlant overview" style={{ width: '100%' }} />
          </RevealOnScroll>
          <RevealOnScroll style={{ marginTop: 40 }}>
            <BrowserMockup><VideoBlock src={`${CDN2}/tablet-v3.mp4`} /></BrowserMockup>
          </RevealOnScroll>
          <p className="img-caption reveal">Web platform — live dashboard &amp; automation management</p>
        </div>
      </section>

      {/* Problem */}
      <section className="case-section tint" id="problem">
        <div className="case-inner">
          <ChapterHead num="02" label="The problem" title={<>High cost, <span className="it">high friction,</span><br />low adoption.</>} />
          <Story2Col
            left={<p className="story-lead">Existing agricultural management systems were either too expensive for small operations, or too complicated for anyone without a technical background.</p>}
            right={<p>The hardware getting smarter was outpacing the software making sense of it. Two core problems defined the brief.</p>}
            style={{ marginBottom: 60 }}
          />
          <div className="problem-list reveal">
            <div className="problem-row">
              <div className="stat">0<span style={{ fontSize: '0.5em', color: 'var(--fog)' }}>/5</span></div>
              <div><div className="label-small">Competitor audit finding</div><div className="what">No guided setup in any existing system</div></div>
              <div className="detail">I audited 5 competing agricultural platforms. None offered guided onboarding, in-context help, or readable automation logic — all required manual documentation or training.</div>
            </div>
            <div className="problem-row">
              <div className="stat">6<span style={{ fontSize: '0.5em', color: 'var(--fog)' }}>+</span></div>
              <div><div className="label-small">Steps to set one automation</div><div className="what">Complexity buried behind technical menus</div></div>
              <div className="detail">In benchmark testing of the leading IoT greenhouse tool, setting a single conditional automation required 6+ screens, 3 dropdown menus, and manual sensor ID entry.</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 48 }}>
            <RevealOnScroll variant="clip" className="img-parallax-wrap">
              <img src={`${CDN}/68aa1bdc02e976cbdb3cffd6_relume-333758.png`} alt="Competitor analysis" style={{ width: '100%' }} />
            </RevealOnScroll>
            <RevealOnScroll variant="clip" className="img-parallax-wrap" delay={0.1}>
              <img src={`${CDN}/68aa1bd7817d335a0c5d6e97_relume-333820.jpeg`} alt="Market research" style={{ width: '100%' }} />
            </RevealOnScroll>
          </div>
          <p className="img-caption reveal">Competitor analysis — discovery phase</p>
        </div>
      </section>

      <PullQuote attr="Core insight — discovery phase" dark>
        <span className="sans">Precision agriculture is a revolution.</span> But revolutions stall when the tools require a{' '}
        <span style={{ color: 'var(--accent)' }}>computer science degree</span> to operate.
      </PullQuote>

      {/* Solution */}
      <section className="case-section" id="solution">
        <div className="case-inner">
          <ChapterHead num="03" label="Solution" title={<>AI management.<br /><span className="it">Automation anyone can set.</span></>} />
          <Story2Col
            left={<p className="story-lead">I designed an AI-powered platform with <span className="it">customized automations</span> behind a simple interface — so farmers focus on growing, not configuring.</p>}
            right={<p>The platform is built around six core modules. The key decision: automation rules use natural-language conditionals rather than code-like logic trees. The system reads intent — not syntax.</p>}
            style={{ marginBottom: 60 }}
          />
          <div className="cap-grid reveal">
            {[
              { num: '01', title: 'Automations', desc: 'Conditional rules that trigger actions automatically — watering, temperature control, nutrient dosing — without manual intervention.' },
              { num: '02', title: 'Real-time monitoring', desc: 'Live sensor readings across soil, air, humidity, and light. Actionable alerts when any parameter drifts outside the optimal range.' },
              { num: '03', title: 'Personalization', desc: 'Crop-specific profiles that configure baseline parameters automatically. Start optimized, refine over time.' },
              { num: '04', title: 'Plants & Reports', desc: 'Per-plant health tracking and growth reports. Data that closes the loop between automation decisions and measurable outcomes.' },
            ].map((c) => (
              <div key={c.num} className="cap-row">
                <div className="cap-num">{c.num}</div>
                <div className="cap-title">{c.title}</div>
                <p className="cap-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="case-section tint" id="process">
        <div className="case-inner">
          <ChapterHead num="04" label="Process" title={<>Discover → Define<br /><span className="it">→ Ideate → Build.</span></>} />
          <Story2Col
            left={<p className="story-lead"><em>Ehud Greenboim</em> — 42, family greenhouse. Eager to adopt technology, unwilling to spend a week on setup.</p>}
            right={<p>Ehud&apos;s friction points: confusing automation setup, no feedback after creating a rule, sensor data with no actionable interpretation. He needs the system to meet him where he is.</p>}
            style={{ marginBottom: 48 }}
          />
          <RevealOnScroll variant="clip" className="img-parallax-wrap">
            <img src={`${CDN}/68aa23fe0239577f5bac9b47_relume-333912.jpeg`} alt="User persona" style={{ maxHeight: 420, objectFit: 'contain', width: '100%', background: 'var(--paper-3)' }} />
          </RevealOnScroll>
          <p className="img-caption reveal" style={{ marginBottom: 60 }}>User persona — Ehud Greenboim, family greenhouse operator</p>
          <RevealOnScroll variant="clip" className="img-parallax-wrap">
            <img src={`${CDN}/68b1673350414f78b49e63d4_process-image.png`} alt="Architecture and wireframes" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal">Information architecture &amp; wireframes — automation creation flow</p>
        </div>
      </section>

      {/* Prototype */}
      <section className="case-section" id="prototype">
        <div className="case-inner">
          <ChapterHead num="05" label="Prototype" title={<>Three flows.<br /><span className="it">One continuous experience.</span></>} />
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginBottom: 16 }}>
            <img src={`${CDN}/68b19ae39115bae41c9422ae_Prototype-home.webp`} alt="Home dashboard prototype" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal" style={{ marginBottom: 60 }}>Home dashboard — the command layer</p>

          {/* 3 automation videos in browser frames */}
          <div style={{ display: 'grid', gap: 24, marginBottom: 60 }}>
            {autoVideos.map((v) => (
              <RevealOnScroll key={v.src}>
                <span className="step-label" style={{ display: 'block', marginBottom: 12 }}>{v.step}</span>
                <BrowserMockup><VideoBlock src={v.src} /></BrowserMockup>
                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.55, color: 'var(--fog)', maxWidth: 680 }}>{v.body}</p>
              </RevealOnScroll>
            ))}
          </div>

          {/* Mobile companion */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 60, alignItems: 'center', paddingTop: 60, borderTop: '1px solid rgba(11,11,10,0.12)' }}>
            <PhoneMockup width={240}>
              <VideoBlock src={`${CDN2}/mobile.mp4`} />
            </PhoneMockup>
            <div>
              <div className="label" style={{ marginBottom: 20 }}><span>Mobile companion</span></div>
              <h4 style={{ fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 16 }}>
                Same system,<br /><span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>adapted for the field.</span>
              </h4>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fog)', maxWidth: 480 }}>
                The mobile app brings key controls to the greenhouse floor — checking sensor readings, confirming automations, and receiving alerts — without needing to return to the web dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screens Gallery */}
      <section className="case-section tint">
        <div className="case-inner">
          <ChapterHead num="06" label="Internal screens" title={<>The parts that<br /><span className="it">make up the whole.</span></>} />
        </div>
        <div style={{ padding: '0 var(--gutter)' }}>
          <HorizontalGallery>
            {galleryScreens.map((src) => (
              <div key={src} className="h-gallery-item" style={{ height: 480 }}>
                <img src={src} alt="iPlant screen" style={{ height: 480, width: 'auto' }} />
              </div>
            ))}
          </HorizontalGallery>
        </div>
      </section>

      {/* Outcomes */}
      <section className="case-section dark">
        <div className="case-inner">
          <ChapterHead num="07" label="Outcomes" dark title={<>Tested. Validated.<br /><span className="it">Ready to grow.</span></>} />
          <p className="story-lead reveal" style={{ color: 'rgba(242,239,234,0.8)', maxWidth: 1100, marginBottom: 60 }}>
            Prototype testing with 5 farmers and greenhouse operators. The question: can a first-time user create a working automation rule without guidance?
          </p>
          <MetricsGrid metrics={[
            { value: '5 / 5', label: 'set an automation without help', description: 'All 5 participants created a conditional rule on the first attempt — no documentation, no guidance requested.' },
            { value: '4', suffix: 'min', label: 'average to first working rule', description: 'From opening the app to an active automation: 4 minutes. The benchmark competitor required 20+ minutes and external help.' },
            { value: '9', suffix: '/10', label: 'avg. confidence score post-task', description: '"How confident is your rule correct?" — 9/10 average vs. 4/10 on the benchmark tool.' },
          ]} />
          <div className="pull reveal" style={{ marginTop: 80 }}>
            <span className="sans">&ldquo;I didn&apos;t even realise I was building an automation.</span> I just answered questions and it was done.&rdquo;
          </div>
          <div className="pull-attr reveal" style={{ color: 'var(--fog-2)' }}>— Participant 3, testing session</div>
        </div>
      </section>

      <NextCase title="Careery" href="/work/careery" />
      <Footer />
    </>
  )
}
