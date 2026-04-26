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
import HorizontalGallery from '@/components/ui/HorizontalGallery'

export const metadata: Metadata = {
  title: 'Careery · Paths to Clarity — Shay Levi',
  description: 'Designing Careery — a mobile app that helps people navigate career transitions through personalized assessments and expert mentorship.',
}

const WP = 'https://shaylevi.com/wp-content/uploads'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Research', href: '#research' },
  { label: 'Design', href: '#design' },
  { label: 'Prototype', href: '#prototype' },
]

export default function CareeryPage() {
  return (
    <>
      <ScrollInit />
      <Cursor />
      <ProgressBar />
      <NavBar links={navLinks} showBrand={false} />

      <CoverSection
        num="004 of 04"
        client="Personal Project"
        year="2023–2024"
        title={[
          [{ text: 'Paths' }],
          [{ text: 'to' }],
          [{ text: 'clarity.', isItalic: true }],
        ]}
        sub={<>Designing <em>Careery</em> — a mobile app that helps people navigate career transitions through personalized assessments, path comparisons, expert mentorship, and curated learning resources.</>}
        coverFoot={[
          { label: 'Role', value: 'Product Designer · UX/UI' },
          { label: 'Timeframe', value: '12 Weeks · 2023–2024' },
          { label: 'Type', value: 'Personal project' },
          { label: 'Tags', value: 'Consumer · Mobile' },
          { label: 'Platform', value: 'iOS · Mobile-first' },
        ]}
        heroSlot={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 32, marginTop: 56, flexWrap: 'wrap' }}>
            <div style={{ width: 220, marginBottom: 40, opacity: 0.85 }}>
              <PhoneMockup>
                <img src={`${WP}/2024/04/iPhone-14-Pro-Silver-scaled.webp`} alt="Careery app" style={{ width: '100%' }} />
              </PhoneMockup>
            </div>
            <div style={{ width: 260 }}>
              <PhoneMockup>
                <img src={`${WP}/2024/04/iPhone-14-Pro-Silver-1-scaled.webp`} alt="Careery app" style={{ width: '100%' }} />
              </PhoneMockup>
            </div>
            <div style={{ width: 220, marginBottom: 40, opacity: 0.85 }}>
              <PhoneMockup>
                <img src={`${WP}/2024/04/Frame-1948754694.webp`} alt="Careery comparison" style={{ width: '100%' }} />
              </PhoneMockup>
            </div>
          </div>
        }
      />

      {/* Overview */}
      <section className="case-section" id="overview">
        <div className="case-inner">
          <ChapterHead num="01" label="Overview" title={<>The information is out there.<br /><span className="it">The clarity isn&apos;t.</span></>} />
          <Story2Col
            left={<p className="story-lead">Careery is a mobile application designed to help individuals navigate career paths — moving from generic advice to genuinely <span className="it">personalized guidance.</span></p>}
            right={<><p>People don&apos;t struggle with career decisions because there&apos;s too little guidance — there&apos;s too much, with no way to filter it for who they actually are. Careery solves this through a combination of skills assessment, curated path comparison, expert mentorship, and personalized learning.</p><p>The design challenge: make a high-stakes, anxiety-inducing decision feel structured and human — not overwhelming.</p></>}
          />
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginTop: 80 }}>
            <img src={`${WP}/2024/04/Frame-1000000734-1.png`} alt="Careery overview" style={{ width: '100%' }} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Research */}
      <section className="case-section tint" id="research">
        <div className="case-inner">
          <ChapterHead num="02" label="Research" title={<>Three methods.<br /><span className="it">Four key insights.</span></>} />

          <div style={{ borderTop: '1px solid rgba(11,11,10,0.12)', marginBottom: 80 }}>
            {[
              { n: '01', title: 'Competitors analysis', body: 'Mapped LinkedIn Learning, Coursera, 80,000 Hours, and others. Common pattern: they optimized for content delivery, not decision-making. Users were left to connect the dots themselves.' },
              { n: '02', title: 'User interviews', body: "Interviewed people mid-career-change across age groups and industries. The consistent theme: they knew they needed a change, but couldn't evaluate options fairly or know which resources were worth their time." },
              { n: '03', title: 'Synthesis & insights', body: 'Four insights shaped the design direction — moving Careery from a resource platform to a decision platform.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="reveal" style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 60, padding: '60px 0', borderBottom: '1px solid rgba(11,11,10,0.12)' }}>
                <div style={{ fontSize: 'clamp(40px,5vw,64px)', fontWeight: 500, letterSpacing: '-0.04em', color: 'var(--fog-2)', lineHeight: 1 }}>{n}</div>
                <div>
                  <h4 style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.015em', marginBottom: 12 }}>{title}</h4>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fog)' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 20 }}>
            {[
              `${WP}/2024/03/Frame427319366-ezgif.com-png-to-webp-converter.webp`,
              `${WP}/2024/03/Frame427319363-ezgif.com-png-to-webp-converter.webp`,
              `${WP}/2024/03/Frame427319364-ezgif.com-png-to-webp-converter.webp`,
              `${WP}/2024/03/Frame427319369-ezgif.com-png-to-webp-converter.webp`,
            ].map((src, i) => (
              <RevealOnScroll key={i} variant="clip" className="img-parallax-wrap" style={{ transitionDelay: `${i * 0.08}s` }}>
                <img src={src} alt="Interview" style={{ width: '100%' }} />
              </RevealOnScroll>
            ))}
          </div>
          <p className="img-caption reveal" style={{ marginBottom: 60 }}>User interviews — 4 participants across career transition stages</p>

          <RevealOnScroll variant="clip" className="img-parallax-wrap">
            <img src={`${WP}/2024/03/Group-2608812.svg`} alt="Competitors and system map" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal">Competitors analysis &amp; system map</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 80 }}>
            {[
              { n: '01', text: 'Personal consultation integrated into the app can provide significant value for users needing initial professional direction.' },
              { n: '02', text: 'Personalized proposals, recommendations, and tailor-made content deliver meaningfully better experiences than generic resources.' },
              { n: '03', text: 'Apps providing solutions for changing fields and new niches have broad reach — career transitions are near-universal.' },
              { n: '04', text: "User-feedback ratings provide excellent signal on service quality — trust signals matter most at the decision layer." },
            ].map(({ n, text }) => (
              <div key={n} className="reveal" style={{ background: 'var(--paper-3)', borderRadius: 4, padding: 40 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Insight {n}</div>
                <p style={{ fontSize: 18, lineHeight: 1.5, letterSpacing: '-0.01em' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PullQuote attr="Design principle — from research synthesis" dark>
        <span className="sans">Career guidance isn&apos;t about more information.</span> It&apos;s about a{' '}
        <span style={{ color: 'var(--accent)' }}>trustworthy framework</span> for turning what you know about yourself into a decision you can act on.
      </PullQuote>

      {/* Design */}
      <section className="case-section" id="design">
        <div className="case-inner">
          <ChapterHead num="03" label="Design" title={<>Map → Wireframes<br /><span className="it">→ UI Design.</span></>} />
          <Story2Col
            style={{ marginBottom: 80 }}
            left={<p>The information architecture centers on a single north-star flow: <strong>assess → compare → decide → act.</strong> Every screen exists to move the user closer to a confident decision — not to show them more content.</p>}
            right={<p>The key structural choice: the career comparison view, where users see two paths side by side with their own skills mapped against requirements. This surface became the emotional core — where abstract possibilities become concrete personal choices.</p>}
          />
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginBottom: 32 }}>
            <img src={`${WP}/2023/11/Group-427319403-4-1536x1205.png`} alt="Information architecture" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal" style={{ marginBottom: 60 }}>Information architecture — assess → compare → decide → act</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <RevealOnScroll variant="clip" className="img-parallax-wrap">
              <img src={`${WP}/2024/04/Frame-1000000735-2.png`} alt="Wireframes" style={{ width: '100%' }} />
            </RevealOnScroll>
            <RevealOnScroll variant="clip" className="img-parallax-wrap">
              <img src={`${WP}/2023/12/Frame-2609606.png`} alt="Design" style={{ width: '100%' }} />
            </RevealOnScroll>
          </div>
          <p className="img-caption reveal" style={{ marginBottom: 60 }}>Wireframes → UI screens</p>
          <RevealOnScroll variant="clip" className="img-parallax-wrap">
            <img src={`${WP}/2024/03/Frame-5-1-scaled.webp`} alt="Full UI layout" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal">Full layout — career path screens</p>
        </div>
      </section>

      {/* Core screen — dark */}
      <section className="case-section dark">
        <div className="case-inner">
          <ChapterHead num="04" label="The core screen" dark title={<>The moment abstract<br />possibilities become <span className="it">real choices.</span></>} />
          <Story2Col
            style={{ marginBottom: 80 }}
            left={<p className="story-lead">The career <span className="it">comparison view</span> is the emotional center of Careery — the screen every other screen builds toward.</p>}
            right={<><p>Users see two paths side by side, with their assessed skills mapped against the requirements of each. The gap becomes visible. The decision becomes concrete.</p><p>No career counselor required.</p></>}
          />
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            {[
              { src: `${WP}/2024/04/Frame-1948754694.webp`, w: 260, mb: 40 },
              { src: `${WP}/2024/04/Frame-1948754694-1.png`, w: 290, mb: 0 },
              { src: `${WP}/2024/04/Group-1597880442.webp`, w: 260, mb: 40 },
            ].map(({ src, w, mb }, i) => (
              <RevealOnScroll key={i} delay={i * 0.15} style={{ width: w, marginBottom: mb }}>
                <PhoneMockup>
                  <img src={src} alt="Career comparison screen" style={{ width: '100%' }} />
                </PhoneMockup>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype flows — dark */}
      <section className="case-section dark" id="prototype">
        <div className="case-inner">
          <ChapterHead num="05" label="Prototype flows" dark title={<>Four flows.<br /><span className="it">One complete experience.</span></>} />
          <Story2Col
            style={{ marginBottom: 80 }}
            left={<p className="story-lead">The prototype covers the full user journey: onboarding → assessment → path comparison → decision.</p>}
            right={<p>Each flow was tested separately and then end-to-end. The goal: does a person who has never heard of Careery know exactly what to do next — at every step?</p>}
          />
        </div>

        <div className="case-inner">
          <StrategyRow
            step="01 — Onboarding"

            title={<>A <span className="it">friendly</span> personality assessment.</>}
            body={<><p>The onboarding questionnaire establishes who you are — your current skills, career interests, and risk appetite. The tone is warm, not clinical. It feels like a conversation, not a form.</p><p>By the end of onboarding, Careery already knows enough to show you something personal.</p></>}
            mediaType="phone"
            mediaSrc={`${WP}/2024/03/Onboarding-Careery-ezgif.com-video-speed.mov`}
            poster={`${WP}/2024/04/Group-1597880441.webp`}
          />
          <StrategyRow
            step="02 — Exploration"
            title={<>Browsing <span className="it">career paths.</span></>}
            body={<><p>Paths are surfaced based on assessment results — but users can explore freely. Each path shows salary ranges, required skills, growth potential, and available learning resources.</p><p>The interface is designed for comparison, not just browsing.</p></>}
            mediaType="phone"
            mediaSrc={`${WP}/2024/03/ScreenRecording2024-03-10at23.24.06-ezgif.com-video-speed.mov`}
            poster={`${WP}/2024/04/Frame-1948754694.webp`}
            reverse
          />
          <StrategyRow
            step="03 — Comparison"
            title={<>Two paths, <span className="it">side by side.</span></>}
            body={<><p>The comparison view is the emotional core of Careery. Your assessed skills are mapped directly against the requirements of each path — the gap becomes visible, the decision becomes concrete.</p><p>This is the screen that turns &ldquo;I should change careers&rdquo; into &ldquo;I know what to do next.&rdquo;</p></>}
            mediaType="phone"
            mediaSrc={`${WP}/2024/03/Compare-careery.mov`}
            poster={`${WP}/2024/04/Frame-1948754694-1.png`}
          />
          <StrategyRow
            step="04 — Action"
            title={<>From decision <span className="it">to next step.</span></>}
            body={<><p>Once a path is chosen, Careery surfaces curated learning resources, expert mentors in that field, and a personalized roadmap — so the decision immediately connects to action.</p><p>Clarity, not just information.</p></>}
            mediaType="phone"
            mediaSrc={`${WP}/2024/05/ScreenRecording2024-05-17at1.29.22-ezgif.com-video-speed.mov`}
            poster={`${WP}/2024/04/Group-1597880442.webp`}
            reverse
          />
        </div>
      </section>

      {/* Full UI — tint */}
      <section className="case-section tint">
        <div className="case-inner">
          <ChapterHead num="06" label="Full prototype" title={<>Friendly, personal,<br /><span className="it">and decisively useful.</span></>} />
          <Story2Col
            style={{ marginBottom: 80 }}
            left={<p className="story-lead">The final UI carries a warm, approachable tone — designed to feel like a trusted advisor, not a corporate platform.</p>}
            right={<><p>The onboarding questionnaire establishes personality and skills. The home screen surfaces the most relevant paths. The comparison view makes the choice concrete. Expert mentorship is one tap away.</p><p>Every screen reduces anxiety. Not adds to it.</p></>}
          />
        </div>

        <div style={{ background: 'var(--ink)', margin: 0, padding: '60px var(--gutter)', display: 'flex', justifyContent: 'center' }}>
          <RevealOnScroll variant="blur" style={{ width: 340 }}>
            <PhoneMockup>
              <VideoBlock src={`${WP}/2024/02/mobilee.mp4`} poster={`${WP}/2024/04/iPhone-14-Pro-Silver-scaled.webp`} />
            </PhoneMockup>
          </RevealOnScroll>
        </div>
        <p className="img-caption reveal" style={{ textAlign: 'center', padding: '16px var(--gutter) 0', background: 'var(--ink)', color: 'rgba(242,239,234,0.5)' }}>Full product demo — Careery mobile</p>

        <div style={{ padding: '0 var(--gutter)' }}>
          <HorizontalGallery>
            {[
              { src: `${WP}/2024/04/Group-1597880441.webp`, caption: 'Questionnaire & skills assessment' },
              { src: `${WP}/2024/04/Group-1597880442.webp`, caption: 'Results & key insights' },
              { src: `${WP}/2024/04/Frame-1948754694.webp`, caption: 'Career path comparison' },
              { src: `${WP}/2024/04/Frame-1948754694-1.png`, caption: 'Path detail & mentorship' },
            ].map(({ src, caption }) => (
              <div key={caption} className="h-gallery-item" style={{ height: 600, background: 'transparent' }}>
                <img src={src} alt={caption} style={{ height: 600, width: 'auto', borderRadius: 32 }} />
                <div className="caption">{caption}</div>
              </div>
            ))}
          </HorizontalGallery>
        </div>

        <div className="case-inner">
          <RevealOnScroll variant="clip" className="img-parallax-wrap" style={{ marginTop: 80 }}>
            <img src={`${WP}/2024/04/Frame-1948754691.webp`} alt="Careery full UI spread" style={{ width: '100%' }} />
          </RevealOnScroll>
          <p className="img-caption reveal">Full UI spread — Careery v1</p>
        </div>
      </section>

      {/* Validation — dark */}
      <section className="case-section dark">
        <div className="case-inner">
          <ChapterHead num="07" label="Validation" dark title={<>Tested with real<br /><span className="it">career-changers.</span></>} />
          <p className="story-lead reveal" style={{ color: 'rgba(242,239,234,0.8)', maxWidth: 1100, marginBottom: 80 }}>
            I tested the prototype with 6 participants — people actively considering or mid-way through a career change. The sessions focused on whether the comparison view actually helped them feel more confident about a decision.
          </p>
          <MetricsGrid metrics={[
            { value: '5', suffix: '/ 6', label: 'made a clearer decision after one session', description: '5 of 6 participants could articulate a specific next step after using Careery — vs. 1 of 6 after browsing LinkedIn Learning for the same task.' },
            { value: '8.4', unit: '/10', label: 'avg. clarity score post-session', description: '"How clear is your next career step?" Average 8.4/10 after using Careery vs. 3.8/10 after the same task on a competitor platform.' },
            { value: '100', unit: '%', label: 'would recommend to a friend in transition', description: 'All 6 participants said they\'d share the app with someone they know who is navigating a career decision.' },
          ]} />
          <div className="pull reveal" style={{ marginTop: 100 }}>
            <span className="sans">&ldquo;This is the first tool that actually helped me</span> think about what I want — not just what&apos;s available.&rdquo; <span style={{ color: 'var(--accent)' }}>↗</span>
          </div>
          <div className="pull-attr reveal" style={{ color: 'var(--fog-2)' }}>— Participant 4, usability session</div>
        </div>
      </section>

      <NextCase title="Dropit HFS" href="/work/hfs" />
      <Footer />
    </>
  )
}
