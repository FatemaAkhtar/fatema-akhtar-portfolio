# Fatema Akhtar, Portfolio

Personal portfolio site. Next.js 15 (App Router) + TypeScript. Fully static, no
backend, no CSS framework, no animation library.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
npm run start    # serve the production build
```

---

## The two things you need to add

### 1. Your résumé

Drop the PDF here, with this exact name:

```
public/fatema-akhtar-resume.pdf
```

The `/resume` page detects it and switches from "Request the résumé by email"
to an inline preview with working **View** and **Download** buttons. No code
change needed.

### 2. Your Power BI screenshots

**Copy each project's screenshot folder into the matching folder below. No renaming.**

```
public/dashboards/logistics/     <- Last-Mile Delivery images
public/dashboards/mortgage/      <- Mortgage-Backed Securities images
public/dashboards/startup/       <- Startup Outcome Prediction images
public/dashboards/callcenter/    <- Call Center images
public/dashboards/sales/         <- Sales Insights (Additional Work) preview
```

Any file names work: `Dashboard 1.png`, `delay analysis.PNG`,
`Screenshot 2025-08-14.jpg`. Formats: `.png .jpg .jpeg .webp .avif`.

**Order** is natural sort, so numbering your files controls the sequence:

```
1 overview.png
2 delay analysis.png
3 courier.png
10 summary.png      <- correctly sorts after 3, not after 1
```

**Captions attach in order.** The 1st image gets the 1st written caption, 2nd gets
the 2nd. So either order your files to match, or edit the captions to match your
files. They live in `lib/content.ts` in each project's `shots` array.

Extra images beyond the written captions still display, titled from the file
name, with a visible reminder to write one. Write them before deploying.

Until a folder has images, the case study shows tidy labelled placeholders and
still reads properly.

### Which screenshot appears on the Work page

Each project shows **one** dashboard on `/work`, above its write-up, so a
visitor sees real work before clicking into anything. That choice lives in
`lib/content.ts` under the project's `preview` key:

```ts
preview: {
  file: "1 executive-operations-overview.png",
  caption: "Power BI, executive view: 66.11% SLA compliance across ...",
},
```

- `file` must match a real file in that project's `public/dashboards/` folder.
- If the name does not match (you renamed or replaced screenshots), the first
  image in the folder is used instead, so the page never breaks.
- `caption` is required, and should answer "what should I notice here?" It
  doubles as the image's alt text for screen readers.

To feature a different dashboard, change `file` to that file's name. Only one
image per project belongs here: the full set stays in the case study.

---

## Where the content lives

**Everything you'd want to edit is in `lib/content.ts`.** One file. No copy is
hardcoded in components.

| Export | Controls |
| --- | --- |
| `PERSON` | Name, email, LinkedIn, GitHub, résumé path |
| `PROOF` | The four homepage numbers |
| `SOLVES` | "What I solve" cards |
| `PROCESS` / `CHAIN` | The 06-step method and the Question→Action sequence |
| `PROJECTS` | All four case studies, section by section |
| `SKILLS` | Capability categories on About |
| `EXPERIENCE` / `EDUCATION` | About-page timeline |
| `REPOS` | The curated GitHub list |
| `MY_DOMAIN` | Only used when self-hosting. On Vercel/Netlify the address is detected automatically |

To add a project: append an object to `PROJECTS`. The route, sitemap entry and
case-study page generate automatically. Set `featured: true` to surface it on
the homepage.

---

## Routes

```
/                              Home
/work                          All work + curated repositories
/work/logistics-analytics      Hero project
/work/mortgage-risk-analytics
/work/startup-outcome-prediction
/work/call-center-analytics    Additional work
/about                         Story, experience, capabilities, LinkedIn
/contact
/resume
/sitemap.xml  /robots.txt      Generated
```

---

## Verified

- **Accessibility:** axe-core WCAG 2.1 A/AA: **0 violations on all 9 pages.**
  Skip link, visible focus rings, semantic landmarks, one `<h1>` per page,
  correct ARIA on the mobile menu, alt text carrying each figure's caption.
- **Contrast:** every text colour computed to ≥4.5:1 against all three
  background tones.
- **Responsive:** no horizontal overflow at 320 / 390 / 768 / 1024 / 1440px.
- **Performance:** ~107 kB First Load JS, all 14 routes prerendered as static
  HTML. Self-hosted fonts (no external requests), lazy-loaded images with
  intrinsic dimensions set to avoid layout shift.
- **Motion:** fade-and-rise on scroll only, fully disabled under
  `prefers-reduced-motion`.

## Deploying

Any static host. On Vercel or Netlify, push the repo and it builds as-is.
the site reads its own public address from the platform, so the sitemap, the
canonical links and the social-preview image all point at the right place with
no configuration.

Two cases where you do need to act:

- **Custom domain on Vercel/Netlify:** after attaching it, redeploy once so the
  new address is baked in, or set `NEXT_PUBLIC_SITE_URL` in the dashboard.
- **Self-hosting anywhere else:** edit `MY_DOMAIN` at the top of
  `lib/content.ts`, or set `NEXT_PUBLIC_SITE_URL` (see `.env.example`).

Resolution order: `NEXT_PUBLIC_SITE_URL` → Vercel → Netlify → localhost in dev →
`MY_DOMAIN`.
