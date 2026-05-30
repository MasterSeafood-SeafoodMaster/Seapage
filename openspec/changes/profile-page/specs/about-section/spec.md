## ADDED Requirements

### Requirement: About page displays personal bio
The about page SHALL present a personal introduction with bio text and background summary.

#### Scenario: About page loads
- **WHEN** user navigates to `/about`
- **THEN** a brief personal bio paragraph SHALL be displayed
- **THEN** the education summary SHALL be displayed (Central University MS, Dong Hwa BS)
- **THEN** content sections SHALL animate in via scroll-triggered fade-up

### Requirement: About page shows skill tags
The about page SHALL display technical skills as tagged items inferred from work experience and projects.

#### Scenario: Skill tags visible
- **WHEN** user views the about page
- **THEN** skill tags SHALL be displayed in a flex-wrap layout
- **THEN** each tag SHALL contain a technology name
- **THEN** tags SHALL enter with staggered spring animation on scroll into view
- **THEN** tags SHALL have a hover effect (subtle darkening or border change)
