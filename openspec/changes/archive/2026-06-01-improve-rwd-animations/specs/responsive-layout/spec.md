## ADDED Requirements

### Requirement: Section width adapts to viewport
The shared Section component SHALL constrain content width with responsive breakpoints: `max-w-3xl` on mobile, `lg:max-w-5xl` on large screens, `xl:max-w-6xl` on extra-large screens. Horizontal padding SHALL remain `px-6` on all breakpoints.

#### Scenario: Section renders at correct width on desktop
- **WHEN** viewport width is >= 1024px (lg)
- **THEN** the section content width SHALL be `max-w-5xl` (1024px)

#### Scenario: Section renders at correct width on ultrawide desktop
- **WHEN** viewport width is >= 1280px (xl)
- **THEN** the section content width SHALL be `max-w-6xl` (1152px)

#### Scenario: Section renders at current width on mobile
- **WHEN** viewport width is < 1024px
- **THEN** the section content width SHALL remain `max-w-3xl` (768px)

### Requirement: Timeline adapts to wider layout
The Timeline component SHALL expand to fill the full content width of its parent section — no fixed max-width on the timeline itself.

#### Scenario: Timeline matches parent width
- **WHEN** section width increases via responsive breakpoint
- **THEN** timeline items SHALL use the full available width, maintaining the alternating left/right layout proportionally spaced

### Requirement: Text and spacing scale naturally
Section headings, body text, and vertical spacing (gap/space-y values) SHALL remain unchanged — only the outer content wrapper width changes.

#### Scenario: Font sizes remain unchanged on desktop
- **WHEN** viewport increases to lg or xl
- **THEN** all text within sections SHALL render at the same font size as on mobile

#### Scenario: Vertical spacing remains unchanged on desktop
- **WHEN** viewport increases to lg or xl
- **THEN** vertical gap values between elements within a section SHALL remain identical to mobile
