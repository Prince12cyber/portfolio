<!-- prettier-ignore -->
# Prince12cyber — Personal Portfolio

![Portfolio Preview](public/placeholder.jpg)

A clean, modern, and accessible developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and subtle motion. It's designed to showcase projects, experience, and an easy contact flow.

---

## ✨ Highlights

- Responsive, accessible UI with Radix primitives and Tailwind.
- Sections: Hero, About, Skills, Projects, Education, Experience, Contact.
- Client-only visual features (particle background, custom cursor) respect reduced-motion settings.
- Project cards with GitHub links and media previews.
- Theme toggle (light/dark) powered by `next-themes`.
- Simple contact form that POSTs to a serverless API route.

---

## 🛠️ Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI primitives
- pnpm

---

## 🚀 Quick start (Windows / PowerShell)

1. Install dependencies

```powershell
pnpm install
```

2. Run locally

```powershell
pnpm dev
```

3. Visit http://localhost:3000

Build for production

```powershell
pnpm build; pnpm start
```

---

## 📁 Project structure (high level)

- `app/` — Next.js pages & layout
- `components/` — UI and layout components
- `content/` — Site data (projects, contact)
- `public/` — Static assets
- `styles/` — Global CSS

---

## ✏️ Customization

- Edit `content/site.ts` to update name, bio, projects, and contact links.
- Replace images in `public/` with your own.
- Customize theme/colors via Tailwind utility classes and tokens.

---

## 💡 Notes & tips

- Client-only features are dynamically imported or guarded with `useEffect` to avoid hydration mismatches.
- If you see strange attributes in the browser console during development (e.g. `fdprocessedid`), try disabling browser extensions first — some inject attributes into the DOM and cause React warnings.

---

## 🤝 Contributing

PRs welcome. For bigger changes, open an issue first.

---

If you'd like, I can add:
- A screenshot or animated GIF to the README
- Badges (build, license, packages)
- A GitHub Actions workflow for deployments

---

© 2025 • Prince12cyber
