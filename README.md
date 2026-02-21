# Mission Control Admin Panel

Mission Control is a React + Vite admin panel with a custom login screen and a light-themed control room for managing crew data and missions.

The UI is built with Tailwind CSS v4 utilities and custom fonts (Poppins and Rajdhani). It is fully responsive for mobile, tablet, and desktop, with animated sidebars on the admin pages.

## Features

- Custom login screen
  - Astronaut hero background on the left
  - Login card with gradient “Mission To MARS” title
  - Social login buttons (Google, Facebook) as UI-only actions
  - Mobile-first layout where the form appears before the image

- Admin dashboard
  - Light theme with soft gradients and cards
  - Collapsible desktop sidebar with slide animation
  - Animated mobile sidebar with open/close transitions
  - Navigation items: Dashboard, Crew, Missions, Settings

- Crew management
  - Summary cards (total crew, admins, last update)
  - Crew table with name, email, role
  - Edit and delete actions in-place
  - “New Crew Member” button:
    - Opens a dedicated “New Crew Member” page showing only the form
    - After saving, returns to the list view with updated data

- Extra utilities
  - Data entries section on dashboard to store arbitrary text notes (local state only)
  - Missions section with example mission cards
  - Settings section with basic admin profile fields and theme indicator

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (@tailwindcss/vite)
- React Icons
- React Router
- ESLint (JS, React, React Hooks)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be available on the port shown in the terminal (typically http://localhost:5173).

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the code:

```bash
npm run lint
```

## Project Structure

- `src/main.jsx` – React entry, mounts the app
- `src/App.jsx` – Root component wiring router and global layout
- `src/router/AppRouter.jsx` – Defines routes for login and admin pages
- `src/pages/Login.jsx` – Custom login screen with astronaut background and social buttons
- `src/pages/Admin.jsx` – Mission Control admin panel (sidebar, dashboard, crew, missions, settings)
- `src/styles/style.css` – Tailwind import and global font utilities
- `src/assets/` – Background images and social icons

## Routing

- `/` – Login page
  - Contains username/password fields and social login buttons
  - Pure UI; there is no backend authentication wired yet

- `/admin` – Admin panel
  - Dashboard: summary stats, crew table + inline form, data entries section
  - Crew: same crew table + ability to navigate to a separate “New Crew Member” page
  - Missions: static mission cards showing example missions
  - Settings: admin profile and theme display

Routing is handled by `react-router`.

## Styling and Layout

- Tailwind utility classes applied directly in JSX
- Custom fonts:
  - Poppins as global body font
  - Rajdhani for headings and hero text (`rajdhani-font` class)
- Custom utility:
  - `.text-outline-white` for outlined “Private” heading on the login hero
- Responsive rules:
  - `lg:` breakpoint keeps the original wide layout
  - Mobile layout stacks the login card and astronaut image vertically

## Admin Sidebar Behavior

- Desktop:
  - Sidebar can be collapsed/expanded with an icon before the “Crew Management” title
  - Collapse/expand includes a smooth width and slide animation

- Mobile:
  - Hamburger icon opens a sliding sidebar overlay
  - Overlay fades in/out
  - Sidebar itself animates in/out from the left on open and close

## Crew Flow

- View existing crew members in a table
- Use **New Crew Member** in the header to:
  - Switch to the Crew section
  - Show a dedicated new crew form “page”
  - Saving the form returns to the list view and updates the table

All crew data is stored in React state only (no API calls).

## Future Improvements

- Connect authentication to a real backend
- Persist crew and mission data via an API
- Add route-level protection for `/admin`
- Expand missions and settings to be fully data-driven
