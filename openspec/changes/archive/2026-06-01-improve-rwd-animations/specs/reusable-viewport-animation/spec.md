## ADDED Requirements

### Requirement: All scroll-triggered animations replay on every viewport entry
Every motion element that uses `whileInView` for scroll-triggered animation SHALL NOT use `viewport={{ once: true }}`. On each viewport entry the element SHALL animate from `initial` to `whileInView`, and on viewport exit SHALL revert to `initial`.

#### Scenario: Animation replays on scroll-back-down
- **WHEN** user scrolls past a section, then scrolls back up so it re-enters viewport from above
- **THEN** all motion elements in that section SHALL animate from their `initial` state to `whileInView` state

#### Scenario: Animation reverses on scroll-up
- **WHEN** user scrolls down past an animated element, then scrolls back up
- **THEN** the element SHALL visibly return to its `initial` state (opacity 0, translated down) as it exits the viewport

### Requirement: Reusable fade-up animation preset
The codebase SHALL export a shared `fadeUp` motion preset object containing `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, and `transition={{ duration: 0.5, ease: "easeOut" }}`. Components MAY spread this preset and override individual properties as needed.

#### Scenario: Preset applies default animation
- **WHEN** a component uses `{...fadeUp}` on a motion element without overrides
- **THEN** the element SHALL fade in and slide up 20px over 0.5s with easeOut timing on each viewport entry

#### Scenario: Component overrides preset duration
- **WHEN** a component spreads `fadeUp` and provides a custom `transition` object
- **THEN** the custom `transition` SHALL merge with or override the default transition properties

### Requirement: HeroSection entrance animation preserved
The HeroSection SHALL retain its current animation behavior — not scroll-triggered and not affected by the replay requirement.

#### Scenario: Hero section renders once on page load
- **WHEN** the page loads or refreshes
- **THEN** the HeroSection children SHALL animate in with their current (staggered, one-time) animation
- **AND** subsequent scrolling past and back to the hero section SHALL NOT retrigger the animation
