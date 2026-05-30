## ADDED Requirements

### Requirement: Contact page shows social/professional links
The contact page SHALL display links to professional and social profiles.

#### Scenario: Contact links render
- **WHEN** user navigates to `/contact`
- **THEN** a LinkedIn link SHALL be displayed
- **THEN** a GitHub link SHALL be displayed (if available)
- **THEN** an email link SHALL be displayed
- **THEN** each link SHALL have a hover animation effect

### Requirement: Contact page has animated entry
Contact page elements SHALL animate in on page load.

#### Scenario: Contact page animation
- **WHEN** user navigates to `/contact`
- **THEN** heading SHALL fade in first
- **THEN** contact links SHALL stagger in after heading
