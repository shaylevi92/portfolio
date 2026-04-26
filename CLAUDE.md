# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (runs type-check + lint)
npm run start    # Serve production build
npm run lint     # ESLint via next lint
```

No test suite exists. Validate correctness with `npm run build` — it catches TypeScript errors and ESLint violations.

## Stack

- **Next.js 13.5** (App Router, `app/` directory) — Node 16 compatible; do not upgrade to Next 14+ without upgrading Node to 18+
- **React 18 / TypeScript 5** — strict mode enabled
- **Tailwind CSS 3** — used for layout utilities; design tokens live in CSS variables, not Tailwind classes
- **Framer Motion 12** — for scroll-linked animations and parallax
- **No test framework, no state management library**

## Architecture

### Styling system — two layers

All visual design is driven by **CSS variables** defined in `app/globals.css`, not Tailwind utility classes. Tailwind is used for layout (`flex`, `grid`, `gap-*`, etc.) but design decisions (colors, typography, spacing, animations) use the CSS variable system:

```css
--ink: #0B0B0A      --paper: #F2EFEA    --accent: #D2552B
--fog: #8A847B      --font-serif: ...   --font-mono: ...
--max: 1440px       --gutter: 48px      --ease: cubic-bezier(0.22,1,0.36,1)
```

Typography classes (`.h-display`, `.h-xl`, `.h-lg`, `.story-lead`, `.label`, etc.) and animation primitives (`.reveal`, `.reveal-clip`, `.reveal-blur`) are all defined in `globals.css`. Apply them as `className` strings on elements — do not recreate them with Tailwind.

### Reveal animation pattern

There are two approaches — pick based on context:

1. **`<RevealOnScroll>` component** (`components/ui/RevealOnScroll.tsx`) — wraps any element, attaches its own `IntersectionObserver`. Use for one-off reveals.
2. **`className="reveal"`** + `useScrollReveal()` hook — applies the CSS class; the hook registers a single observer for all `.reveal` elements on the page. More performant when many elements need revealing.

`variant="clip"` → `clip-path` wipe-up. `variant="blur"` → blur+scale entry. `delay={0.1}` sets `transitionDelay`.

### Server vs Client components

Pages (`app/**/page.tsx`) are **Server Components** by default. Mark a file `'use client'` only when it uses browser APIs (scroll, mouse, IntersectionObserver) or React hooks. The split:

- Server: all page files, `Footer`, `ChapterHead`, `Story2Col`, `PullQuote`, `NextCase`
- Client: `Cursor`, `NavBar` (uses `useISTClock`), `ProgressBar`, `RevealOnScroll`, `HorizontalGallery`, `MetricsGrid` (uses counter animation), `VideoBlock`

### Content management

All project content lives in `data/projects.ts` (4 projects) and `data/capabilities.ts` (6 capabilities). To add or update a project, edit the typed arrays — no other files need changing if the page already maps over them.

### Media handling

- **External CDN images** (`cdn.prod.website-files.com`, `shaylevi.com`, `shaylevi.b-cdn.net`) — allowed domains are in `next.config.js`. Use `<img>` tags with these URLs, or `<Image>` from `next/image` with `unoptimized`.
- **Videos** — use `<VideoBlock src="..." poster="..." />`. Accepts a single URL or an array of fallback URLs. MOV files from `shaylevi.b-cdn.net` are served as `video/quicktime`; browsers that don't support it fall back to the poster image.
- **Local assets** — `public/me.png` (profile photo) and `public/shay-levi-cv.pdf` are referenced as `/me.png` and `/shay-levi-cv.pdf`.

### Case study page structure

Every case study page (`app/work/*/page.tsx`) follows the same composition:

```
CoverSection          → dark cover with animated title + hero image + metadata strip
ChapterHead(n)        → chapter number + title, 2-col grid layout
Story2Col             → left/right narrative columns
RevealOnScroll clip   → full-width images
StrategyRow           → 2-col: copy + media (phone | browser | image)
PullQuote             → large serif italic pull quote
MetricsGrid           → 3-col dark metrics with counter animation
HorizontalGallery     → drag-to-scroll image strip
NextCase              → "next case" CTA footer
```

`StrategyRow` handles the media frame automatically: `mediaType="phone"` wraps in `PhoneMockup`, `mediaType="browser"` wraps in `BrowserMockup`. Use **browser** for SaaS/desktop interfaces, **phone** for mobile apps.

### NavBar links

`NavBar` accepts an optional `links` prop. Case study pages pass section-anchor links (`#overview`, `#problem`, etc.). The home page uses the default links pointing to hash sections on `/`. The `showBrand` prop (default `true`) hides the brand name on case study pages.

## Adding a New Case Study

1. Add the project to `data/projects.ts`
2. Create `app/work/[id]/page.tsx` using the existing pages as templates
3. Add the project's `previewImage` — it appears in the home page cursor-follow work list automatically
4. No routing config needed — the App Router picks up the new directory automatically
