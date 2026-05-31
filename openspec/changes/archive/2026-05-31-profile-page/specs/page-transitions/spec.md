## ADDED Requirements

### Requirement: Page transitions animate between routes
Navigating between pages SHALL trigger a smooth animated transition.

#### Scenario: Route change animation
- **WHEN** user clicks a navigation link to a different page
- **THEN** the current page content SHALL fade out (duration: ~0.2s)
- **THEN** the new page content SHALL fade in (duration: ~0.3s)
- **THEN** a subtle vertical slide SHALL accompany the fade

### Requirement: Transition does not affect shared layout
The header and footer SHALL remain stable during page transitions.

#### Scenario: Persistent layout during navigation
- **WHEN** a page transition occurs
- **THEN** the header SHALL NOT re-animate or flicker
- **THEN** the footer SHALL NOT re-animate or flicker
- **THEN** only the page content area SHALL transition
