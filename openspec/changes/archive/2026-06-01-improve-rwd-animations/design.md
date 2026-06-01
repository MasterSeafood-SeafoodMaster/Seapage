## Context

All sections use `max-w-3xl` (768px) via the shared `Section` component in `shared.tsx`. On a 1920px+ desktop this leaves ~60% of horizontal space unused. Scroll animations on every `motion` element use `viewport={{ once: true }}`, which means they fire exactly once — scrolling up does not reverse the animation, and scrolling back down does not replay it.

## Goals / Non-Goals

**Goals:**
- Desktop sections (lg breakpoint and up) should scale to use wider content width
- All scroll-triggered animations (fade+slide-up) should visibly replay each time the element enters the viewport, from either direction
- HeroSection's single-entry entrance animation (not scroll-triggered) should remain unchanged
- Mobile layout must be pixel-identical to current

**Non-Goals:**
- No layout restructuring (flex → grid reflow, multi-column, etc.)
- No new animation types (parallax, stagger, etc.) — only re-trigger behavior
- No dark mode or theme changes

## Decisions

1. **Responsive width via Tailwind breakpoint classes on Section**
   - Change `Section` from `max-w-3xl` to `max-w-3xl lg:max-w-5xl xl:max-w-6xl`
   - Desktop gets progressively wider; mobile stays at `max-w-3xl`
   - **Why not container queries?** Tailwind's responsive prefixes are zero-cost, already available, and consistent with the rest of the codebase.
   - **Alternative considered:** CSS `max-width` custom property per breakpoint — functionally equivalent but adds a new layer of abstraction for no gain.

2. **Remove `viewport={{ once: true }}` from every motion element**
   - Motion's `whileInView` with `once: false` (the default) naturally animates in on viewport entry and resets to `initial` on exit.
   - No `AnimatePresence` or `exit` props needed — the default reversal is sufficient for opacity + translateY.
   - **Why not `viewport={{ once: false }}`?** That is the default, so we can simply delete the `viewport` prop entirely from all scroll elements to reduce noise.
   - **Exception:** Timeline entries keep `viewport={{ margin: "-60px" }}` to prevent adjacent timeline dots from triggering simultaneously.

3. **Shared animation preset (optional)**
   - Extract the common `initial={{ opacity: 0, y: 20 }}` / `whileInView={{ opacity: 1, y: 0 }}` / `transition={{ duration: 0.5, ease: "easeOut" }}` pattern into a reusable `fadeUp` object or a small wrapper component to reduce repetition.
   - **Why not make it a component?** Motion's `motion()` factory can create a pre-configured `motion.div`:
     ```ts
     const FadeIn = motion.div;
     // used as <FadeIn initial={{...}} whileInView={{...}} ... />
     ```
     But this doesn't cleanly support `as="span"` for SkillTag. A simple preset object is more flexible.
   - **Decision:** Export a `fadeUp` motion preset object from a shared file so components spread only the props, not duplicate the object literals.

## Risks / Trade-offs

- **Animation replay on every scroll** → If the user scrolls rapidly up-and-down, elements may flash in/out repeatedly. *Mitigation:* The 0.4–0.5s transition duration feels natural and is fast enough to avoid visual stutter; we do not add a debounce.
- **Wider layout on huge screens (>1920px)** could look sparse. *Mitigation:* Capped at `max-w-6xl` (1152px). Beyond that, the eye has too much travel distance; content should remain readable.
