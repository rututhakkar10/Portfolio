# Portfolio — rutu.in

Personal portfolio for **Rutu Lathiya**. Currently a warm, hand-drawn "coming soon"
landing page, built to grow into a full portfolio later.

Built with [Next.js 15](https://nextjs.org) (App Router) + TypeScript. The landing
page is fully static, so it deploys anywhere.

## Requirements

- Node.js **18.18+** (this repo is developed on Node 20 LTS).
  If you use nvm: `nvm use 20`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # optimized production build
npm run start    # serve the production build locally
```

## Editing your links

Open [app/page.tsx](app/page.tsx) and update the constants at the top:

```ts
const LINKEDIN_URL = "https://www.linkedin.com/in/rutu--lathiya";
const EMAIL = "rutu.thakkar.work@gmail.com";
```

The margin notes ("hello, world :)", "since '22") and the six stack doodles
(Frontend, Backend, Databases, Cloud, Craft, Say hello) live in the same file.

## Deploying to rutu.in

The site is a static Next.js app. Easiest paths:

- **Vercel** — import the repo, deploy, then add `rutu.in` as a custom domain
  (Vercel gives you the DNS records to set at your registrar).
- **Cloudflare Pages / Netlify** — connect the repo, build command `npm run build`,
  and point `rutu.in` at the project.

Set the deploy platform's Node version to 20 to match local dev.
