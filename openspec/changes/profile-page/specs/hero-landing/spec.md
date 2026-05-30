## ADDED Requirements

### Requirement: Hero displays name and title
The landing page SHALL display the user's name (蔡時富 / Seafood) and professional title (Software Engineer at TSMC) as the primary hero content.

#### Scenario: Initial page load
- **WHEN** user navigates to `/`
- **THEN** the hero section SHALL display the name "蔡時富" in large typography
- **THEN** the hero section SHALL display subtitle "Software Engineer @ TSMC"
- **THEN** both text elements SHALL animate in with staggered fade-up

### Requirement: Hero includes call-to-action navigation
The hero SHALL include navigation cues directing users to other sections of the site.

#### Scenario: Hero CTA links visible
- **WHEN** user views the hero section
- **THEN** a minimal navigation bar SHALL be visible
- **THEN** links to /about, /experience, /awards, /contact SHALL be present

### Requirement: Hero has animated entry
The hero section SHALL animate on page load using staggered reveal transitions.

#### Scenario: Staggered animation plays on mount
- **WHEN** the page loads
- **THEN** the name SHALL fade and slide up first (delay: 0s)
- **THEN** the subtitle SHALL fade and slide up second (delay: ~0.15s)
- **THEN** navigation cues SHALL appear last (delay: ~0.3s)
- **THEN** all animations SHALL complete within 0.8 seconds
