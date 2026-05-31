## ADDED Requirements

### Requirement: Awards page lists all honors
The awards page SHALL display all 8 awards with consistent formatting including award name, issuing organization, and date.

#### Scenario: Award entries render
- **WHEN** user navigates to `/awards`
- **THEN** each award SHALL display the award title, issuing organization, and date
- **THEN** awards SHALL be grouped under a section header

### Requirement: Awards stagger-animate into view
Award cards SHALL animate in with staggered fade-up on scroll.

#### Scenario: Award card animation
- **WHEN** user scrolls to the awards section
- **THEN** award cards SHALL fade and slide up one by one
- **THEN** stagger delay between cards SHALL be ~0.08s

### Requirement: Awards have hover interaction
Award cards SHALL respond to hover with a subtle visual effect.

#### Scenario: Card hover effect
- **WHEN** user hovers over an award card
- **THEN** the card SHALL subtly lift (translateY: -2px) or show a border highlight
