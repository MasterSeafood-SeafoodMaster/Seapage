## Why

The current layout is optimized for mobile but wastes horizontal space on desktop (content constrained to `max-w-3xl` / 768px). Scroll-triggered animations use `once: true`, so they play only on first scroll-down and never replay — scrolling up then down again shows no animation feedback.

## What Changes

- Increase desktop content width limits and use responsive padding so the page fills available screen real estate on wide monitors
- Configure `SkillTag` and `AwardCard` to visibly animate on every viewport entry (not just the first)
- Remove `viewport={{ once: true }}` from all `motion` elements so animations reverse when scrolling up and replay when scrolling down again
- Keep HeroSection's single-entry entrance animation as-is (it's a welcome effect, not a scroll-triggered reveal)

## Capabilities

### New Capabilities

- `responsive-layout`: Responsive width breakpoints and padding that scale from mobile to ultrawide desktop
- `reusable-viewport-animation`: Drop-in animation preset (opacity + translateY) that triggers on every viewport entry, usable across sections

### Modified Capabilities

*(none — no existing specs to modify)*

## Impact

- **Files touched**: `shared.tsx` (Section component), all section files, `SkillTag.tsx`, `AwardCard.tsx`, `Timeline.tsx`, `globals.css`
- **No dependencies added** — pure CSS + Motion config changes
- **No visual regression on mobile** — mobile viewport unchanged, only desktop breakpoints widen
