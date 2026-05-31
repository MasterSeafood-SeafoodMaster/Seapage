## 1. Project Setup & Dependencies

- [x] 1.1 Install `motion` npm package
- [x] 1.2 Update Tailwind theme in `globals.css` with monochrome palette
- [x] 1.3 Create `next/lib/profile-data.ts` with all profile content (bio, experience, education, awards, skills)

## 2. Shared Layout Components

- [x] 2.1 Create `next/components/Header.tsx` — persistent navigation bar with active link indicator
- [x] 2.2 Create `next/components/Footer.tsx` — copyright and social links
- [x] 2.3 Create `next/components/PageTransition.tsx` — AnimatePresence wrapper for route transitions
- [x] 2.4 Update `next/app/layout.tsx` — integrate Header, Footer, PageTransition, update metadata

## 3. Home Page (Hero Landing)

- [x] 3.1 Rewrite `next/app/page.tsx` — hero section with name, title, tagline, staggered mount animation
- [x] 3.2 Add scroll indicator or minimal CTA directing to other pages

## 4. About Page

- [x] 4.1 Create `next/app/about/page.tsx` — bio text, education summary, scroll-triggered fade-up
- [x] 4.2 Create `next/components/SkillTag.tsx` — animated skill tag component with spring entrance

## 5. Experience Page

- [x] 5.1 Create `next/app/experience/page.tsx` — timeline layout with alternating entries
- [x] 5.2 Create `next/components/Timeline.tsx` — reusable timeline with scroll-animated entries and connecting line

## 6. Awards Page

- [x] 6.1 Create `next/app/awards/page.tsx` — awards grid/list with staggered reveal
- [x] 6.2 Create `next/components/AwardCard.tsx` — individual award card with hover effect

## 7. Contact Page

- [x] 7.1 Create `next/app/contact/page.tsx` — social/professional links with hover animations
- [x] 7.2 Ensure all links open in new tab with proper security attributes

## 8. Polish & Verification

- [x] 8.1 Run `npm run check` (Biome format + lint + organize imports)
- [x] 8.2 Run `npm run lint` (ESLint)
- [x] 8.3 Run `npm run build` to verify production build succeeds
- [x] 8.4 Test all navigation links and page transitions work smoothly
