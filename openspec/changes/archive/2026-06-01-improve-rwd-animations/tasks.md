## 1. Shared animation preset

- [x] 1.1 Create `lib/animation.ts` with `fadeUp` motion preset object (`initial`, `whileInView`, `transition`) and export it
- [x] 1.2 Verify the preset can be spread (`{...fadeUp}`) on any motion element and overridden per-element

## 2. Remove `viewport={{ once: true }}` from all scroll-triggered elements

- [x] 2.1 In `shared.tsx`: remove `viewport` prop from `SectionHeading`
- [x] 2.2 In `AboutSection.tsx`: remove `viewport` from bio paragraph, Education h3, education entries, Skills h3 — apply `fadeUp` preset where appropriate
- [x] 2.3 In `ExperienceSection.tsx`: remove `viewport` from subtitle paragraph
- [x] 2.4 In `AwardsSection.tsx`: remove `viewport` from subtitle paragraph
- [x] 2.5 In `ContactSection.tsx`: remove `viewport` from subtitle paragraph and links div
- [x] 2.6 In `SkillTag.tsx`: remove `viewport` prop
- [x] 2.7 In `AwardCard.tsx`: remove `viewport` prop
- [x] 2.8 In `Timeline.tsx`: change `viewport={{ once: true, margin: "-60px" }}` to `viewport={{ margin: "-60px" }}` — keep margin

## 3. Widen desktop layout

- [x] 3.1 In `shared.tsx`: change `max-w-3xl` to `max-w-3xl lg:max-w-5xl xl:max-w-6xl` on the `Section` component

## 4. Verify animation not replaying on HeroSection

- [x] 4.1 Confirm HeroSection uses `animate` prop (not `whileInView`) — already the case, no changes needed
