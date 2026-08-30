# Malik Hamza Portfolio

A modern personal portfolio website built with React, TypeScript, Vite, and Tailwind-inspired styling. The site showcases professional background, technical skills, project experience, education, and contact information in a polished single-page format.

## Overview

This portfolio is designed to present Malik Hamza as a full-stack developer and computer science graduate with experience across:

- Frontend web development
- Backend systems and APIs
- Android app interfaces
- Cloud and infrastructure-oriented engineering
- Product and platform development

The site uses subtle motion effects, dark theme styling, animated sections, and strong typography to create a premium developer portfolio experience.

## Features

- Responsive single-page portfolio layout
- Dark mode toggle with smooth theme switching
- Smooth anchor navigation between sections
- Animated hero and section transitions
- Skills, experience, education, and project sections
- Downloadable CV/PDF resume link
- Contact section with copy-to-clipboard email action
- Social links for GitHub and LinkedIn
- Mobile-friendly navigation menu

## Tech Stack

- React 19
- TypeScript
- Vite
- GSAP for motion effects
- Motion library for section animations
- Lucide React for icons
- Tailwind CSS via Vite plugin

## Project Structure

```bash
Hamza-Portfolio/
├── assets/
│   └── Hamza-Cv.pdf
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Interests.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── lib/
│       └── utils.ts
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/haseebjaved4212/Hamza-Portfolio.git
cd Hamza-Portfolio
```

2. Install dependencies:

```bash
npm install
```

### Run the Project

Start the development server:

```bash
npm run dev
```

This runs the app on:

- http://localhost:3000

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # Start Vite dev server on port 3000
npm run build    # Build the production bundle
npm run preview  # Preview the built app locally
npm run lint     # Type-check the project using TypeScript
npm run clean    # Remove dist output and temporary files
```

## Customization Guide

### Personal Information

Update your public information in the component files, especially:

- Navbar branding and links
- About section content
- Skills section
- Experience timeline
- Projects
- Education
- Contact email and social links

### Resume / CV

The project includes a downloadable PDF in the `assets` folder:

```bash
assets/Hamza-Cv.pdf
```

To change the resume file, replace the PDF in that folder and keep the same filename or update the import path in the relevant component.

### Theme and Styling

The visual styling is driven by custom CSS classes and utility patterns located in:

- `src/index.css`
- component-level class names

If you want to update branding colors, sizing, or spacing, that is typically done in the CSS file and the JSX class names.

## Deployment

This project is a standard Vite app and can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Cloudflare Pages

For static hosting, use the generated `dist` folder produced by:

```bash
npm run build
```

## Notes

- The portfolio is structured as a modern personal landing page rather than a CMS-driven site.
- It is best suited for a single-person portfolio or developer profile.
- The design emphasizes minimalism, clarity, and strong visual hierarchy.

## License

This project is a portfolio website and is intended for personal or educational use unless otherwise specified by the owner.

## Contact

For questions or collaboration opportunities, use the contact methods available in the website itself.
