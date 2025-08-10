# Next Clean Starter (Next.js 14 + Tailwind + TypeScript)

A minimal, production-ready starter that **builds cleanly on Vercel**. It fixes common pitfalls like missing `globals.css`, bad import paths, and case-sensitivity issues on Linux.

## What's inside
- Next.js **14.2.4** (App Router)
- TypeScript (strict)
- Tailwind CSS
- Friendly component aliasing: `@components/*`

## Quick start (local)
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel
1. Create a new GitHub repo and push this project.
2. In Vercel: **Add New → Project → Import** your repo.
3. Leave defaults (Framework: Next.js). No custom build/output settings required.
4. Ensure Node >= **18.17** (Project Settings → General).
5. Deploy.

## Migrating your existing app into this structure
- Put global styles in `app/globals.css` and keep `import "./globals.css"` in `app/layout.tsx`.
- Place reusable UI in `/components` and import using `@/components/...` or `@components/...`.
- Move images to `/public` and reference them like `/logo.png`.
- Create routes by adding files under `/app` (e.g., `app/about/page.tsx`).
- **Fix case and paths** (Linux is case-sensitive). Ensure the filename exactly matches your import (e.g., `Card.tsx` vs `card.tsx`). Prefer `@/components/Card` over deep relative paths like `../../components/Card`.
- Add any environment variables to a local `.env.local` and in Vercel → Project → Settings → Environment Variables.

## Common gotchas that break Vercel builds
- Importing `./globals.css` from `app/layout.tsx` when `globals.css` is actually missing or living in a different folder.
- Import paths that don't match filename case.
- Using `pages/` and `app/` together incorrectly. Prefer one (this starter uses **App Router**).
- Missing TypeScript types or unusual `tsconfig` settings; this starter ships with a sane config.

---

Happy shipping! 🚀
