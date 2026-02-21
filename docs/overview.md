# Mission Control Admin Panel – Overview

This document describes the structure and behavior of the Mission Control admin panel, focusing on the main pages and key UX decisions.

## Pages

### Login

- Background image with an astronaut on the left
- Gradient “Mission To MARS” headline over the astronaut
- Login card with:
  - Username and password fields
  - Primary login button
  - “Login with Others” divider
  - Google and Facebook buttons (UI only)
- Mobile behavior:
  - Form appears before the astronaut image
  - Backgrounds are non-repeating, sized to avoid white gaps

### Admin (/admin)

The admin panel has a two-part layout:

- Collapsible sidebar (desktop)
- Main content area with header and page content

#### Sidebar

- Entries:
  - Dashboard
  - Crew
  - Missions
  - Settings
- Desktop:
  - Can be collapsed/expanded using the icon before the “Control Room” header
  - Collapse uses width and slide animation
- Mobile:
  - Hamburger icon opens a sliding sidebar overlay
  - Overlay and panel both animate on open and close

#### Header

- Shows section label “Control Room”
- Shows dynamic title (Crew Management, Crew, Missions, Settings)
- Right side:
  - “New Crew Member” button (Dashboard and Crew only)
  - Mobile hamburger icon for the sidebar

## Dashboard

- Three summary cards:
  - Total crew
  - Admin count
  - Last update label
- Crew list section:
  - Table with crew members (name, email, role)
  - Inline form on the right for quick add/edit
- Data entries section:
  - Free-form notes stored in local React state
  - Simple input + list display

## Crew Flow

There are two main views controlled in state:

- `list` – default view with:
  - Summary cards (when on dashboard)
  - Table of crew members with edit/delete
  - Side form for inline editing/adding
- `form` – dedicated “New Crew Member” page:
  - Centered card with the full form
  - “Back to list” button
  - Submit returns to `list` view and updates state

## Missions

- Static cards representing example missions (Mission To MARS, Lunar Outpost, Deep Space Probe)
- Each card shows:
  - Mission name
  - Status (Active, Planning, In Review)

This page is intended as a starting point for connecting real mission data later.

## Settings

- Simple form for:
  - Admin name
  - Contact email
- Static indicator for current theme:
  - “Light Theme” pill

The settings page is a visual placeholder that can be wired to real configuration in the future.

