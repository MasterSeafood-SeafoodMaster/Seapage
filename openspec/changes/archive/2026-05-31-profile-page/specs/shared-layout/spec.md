## ADDED Requirements

### Requirement: Header navigation is persistent across pages
A header navigation bar SHALL appear on every page, providing links to all main sections.

#### Scenario: Header renders on all pages
- **WHEN** user navigates to any page (/, /about, /experience, /awards, /contact)
- **THEN** a header SHALL be visible at the top of the viewport
- **THEN** the header SHALL contain navigation links to all other pages
- **THEN** the current page link SHALL be visually indicated as active

### Requirement: Footer is persistent across pages
A footer SHALL appear at the bottom of every page.

#### Scenario: Footer renders on all pages
- **WHEN** user views any page
- **THEN** a footer SHALL be visible at the bottom of the page
- **THEN** the footer SHALL display copyright and optional social links

### Requirement: Layout is responsive
The layout SHALL adapt to different viewport sizes.

#### Scenario: Mobile layout adjusts navigation
- **WHEN** viewport width is less than 768px
- **THEN** header navigation SHALL collapse to a minimal layout
