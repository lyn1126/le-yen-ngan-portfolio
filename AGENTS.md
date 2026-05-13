<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project Instructions

This is a simple one-page CV/portfolio website for Lê Yến Ngân, a second-year student applying for E-commerce Operations intern/part-time roles.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- Vercel deployment

## Design Direction

- Clean, modern, professional
- Light minimal style
- Blue accent color
- Fully responsive
- Mobile-first
- No complex animations for MVP

## Page Structure

Build a one-page landing page with these sections:

1. Header
2. Hero
3. About
4. Career Objective
5. Skills
6. Education
7. Practice Projects
8. Why Me
9. Contact
10. Footer

## Content

Store portfolio content in:

`data/profile.ts`

Components should read from this data file where possible.

## UI Libraries

Use:

- shadcn/ui for Button, Card, Badge, Separator, Avatar
- lucide-react for icons
- cn utility from lib/utils.ts for className composition

## Code Style

- Use reusable components
- Keep sections clean and separated
- Use semantic HTML
- Prioritize readability
- Avoid unnecessary dependencies
- Make sure the site works well on mobile

## Commands

Use these commands to check the project:

```bash
npm run lint
npm run build
```
