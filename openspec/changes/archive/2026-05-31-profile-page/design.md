## Context

Personal profile site for Seafood (蔡時富), a software engineer at TSMC. Built on a fresh Next.js 16 scaffold with Tailwind CSS v4. Zero existing custom components or pages. Geist font pre-configured.

The site presents education (Central University MS, Dong Hwa BS), work experience (TSMC, HPE Aruba, research assistantships), and 8 awards across a multi-page structure with premium black/white aesthetics.

## Goals / Non-Goals

**Goals:**
- Elegant monochrome design with generous whitespace and refined typography
- Smooth page transitions and scroll-triggered animations using Motion
- Multi-page structure: `/` (hero), `/about`, `/experience`, `/awards`, `/contact`
- Persistent header with navigation + footer on all pages
- Static data-driven content for easy maintenance
- Light theme only for initial launch

**Non-Goals:**
- Dark mode (future request)
- CMS or backend integration
- Blog or dynamic content
- Contact form backend (UI only if included)
- SEO optimization (can be added later)

## Decisions

### Animation Library: Motion (framer-motion)
Motion is the best fit for React/Next.js UI animations — declarative props, built-in `AnimatePresence` for page transitions, `whileInView` for scroll reveals. GSAP would be overkill for this scope.

### Multi-page with shared layout
Each section gets its own route under `next/app/`. The root layout wraps children with a persistent `Header` + `Footer`. Page transitions use `AnimatePresence` with a shared wrapper component.

### Monochrome palette via CSS variables
Keep it in Tailwind's `@theme` inline block:
- `--color-bg`: `#FAFAFA` (warm off-white)
- `--color-fg`: `#1A1A1A` (near-black)
- `--color-muted`: `#888` / `#CCC` for secondary text/borders
- `--color-accent`: `#000` for emphasis

### Static data file
All profile content lives in `next/lib/profile-data.ts` — structured TypeScript exports. Pages import from there. Easy to update without touching markup.

### Animation patterns
- **Hero**: Staggered fade-up on mount (name → title → subtitle → CTA)
- **Page transitions**: Fade + slight slide between routes via `AnimatePresence`
- **Timeline**: Items animate in via `whileInView` with stagger, alternating slide direction
- **Awards**: Staggered fade-up grid
- **Skill tags**: Spring-enter on scroll into view
- **Navigation**: Active indicator underline slide

### No routing library needed
Next.js App Router handles all routing natively.

## Risks / Trade-offs

- **[Motion bundle size]** Motion adds ~30KB gzipped. Acceptable for a profile site where first impression matters → tree-shake unused features
- **[Static data]** Content changes require a code deploy. Acceptable for personal site with infrequent updates → easy to re-deploy
- **[No dark mode in initial build]** Adding dark mode later requires CSS variable refactoring → use CSS custom properties from day one to ease migration
- **[Next.js 16 breaking changes]** Some APIs differ from earlier Next.js versions → consult `next/node_modules/next/dist/docs/` before writing code
