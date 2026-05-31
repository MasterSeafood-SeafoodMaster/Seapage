## ADDED Requirements

### Requirement: Experience timeline displays work history
The experience page SHALL display work experience entries in reverse-chronological order with company, role, duration, and description.

#### Scenario: Timeline renders work entries
- **WHEN** user navigates to `/experience`
- **THEN** work entries SHALL be listed in reverse-chronological order
- **THEN** each entry SHALL display company name, job title, date range, and location
- **THEN** each entry SHALL include a brief description of responsibilities

### Requirement: Experience timeline includes education
The experience page SHALL display education entries as part of the timeline.

#### Scenario: Education entries in timeline
- **WHEN** user views the experience page
- **THEN** education entries SHALL be displayed in the timeline
- **THEN** each education entry SHALL display institution, degree, and date range

### Requirement: Timeline entries animate on scroll
Timeline items SHALL animate into view as the user scrolls.

#### Scenario: Timeline entry scroll animation
- **WHEN** user scrolls to a timeline entry
- **THEN** the entry SHALL fade and slide in from alternating sides (odd from left, even from right)
- **THEN** a connecting line SHALL progressively draw as entries appear
- **THEN** each entry SHALL stagger by ~0.1s after the previous
