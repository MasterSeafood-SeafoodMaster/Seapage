## Why

Seafood needs a personal profile website to present his education, work experience, and awards in a polished, professional format. Currently there is no personal web presence — this fills that gap with a premium minimal design that reflects his background as a software engineer at TSMC.

## What Changes

- New Next.js routes: `/`, `/about`, `/experience`, `/awards`, `/contact`
- Shared layout with persistent navigation (header + footer)
- Motion (Framer Motion) for scroll-triggered and page-transition animations
- Static data files for profile content (experience, education, awards, skills)
- Light theme first; dark mode support as future enhancement
- Tailwind CSS v4 for styling — monochrome palette, Geist font, generous whitespace

## Capabilities

### New Capabilities

- `hero-landing`: Landing page with name, title, tagline, and animated entry
- `about-section`: About me page with bio, skills tags, and education summary
- `experience-timeline`: Work + education timeline with scroll-animated entries
- `awards-showcase`: Awards and honors grid/list with staggered reveal
- `contact-section`: Contact page with social links and optional contact form
- `shared-layout`: Persistent header navigation + footer across all pages
- `page-transitions`: Smooth route transition animations between pages

### Modified Capabilities

None — no existing specs to modify.

## Impact

- New files under `next/app/` — `page.tsx` (home rewrite), `about/page.tsx`, `experience/page.tsx`, `awards/page.tsx`, `contact/page.tsx`
- New components under `next/components/` — `Header`, `Footer`, `Timeline`, `AwardCard`, `SkillTag`, `HeroSection`
- New data file under `next/lib/` — `profile-data.ts` with structured profile content
- New dependency: `motion` (formerly framer-motion)
- Root layout updated to include Header/Footer and page transition wrapper
