# Sailtik B2B Matcha Homepage

Single-page B2B homepage for Sailtik built with Next.js (App Router) and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to view the site.

## Project Structure

- `app/page.tsx` – main homepage composed of section components.
- `components/` – reusable UI sections.
- `app/api/contact/route.ts` – contact form endpoint that logs leads and attempts to store them in `data/leads.json` (dev-friendly).
- `data/leads.json` – local lead storage used in development where file writes are allowed.

## Notes

- Form submissions return `{ success: true }` and display a success message in the UI.
- The design avoids pricing, MOQ numbers, and “free sample” messaging per requirements.
- Vercel-friendly: if file writes are blocked, leads are logged to the server console.
