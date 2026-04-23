# William A. Presti Center — Next.js Site

Production-ready Next.js 14 (App Router) site for the William A. Presti Center For Families And Youth (Brighton, MI).

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy

This project is optimized for **Vercel** (zero-config). Push to a Git repo and import into Vercel, or:

```bash
npm i -g vercel
vercel
```

It will also deploy fine to Netlify, Cloudflare Pages, or any Node host.

## What's inside

- **Next.js 14 App Router** with TypeScript
- **18 pages** total: home, about, services index, 11 service detail pages, staff, contact, teletherapy, family workshop, privacy
- **SEO**: per-page metadata, canonical URLs, Open Graph / Twitter cards, JSON-LD schema (LocalBusiness, MedicalBusiness, MedicalTherapy, FAQPage), `sitemap.xml` and `robots.txt` generated automatically by Next.js
- **AEO (Answer Engine Optimization)**: structured FAQ blocks on home page and every service page, semantic HTML throughout, question-format headings for LLM/voice retrieval
- **Conversion-optimized**: persistent phone CTA in nav, sidebar appointment form on every page, sticky mobile call bar, trust badges (creds strip), social proof testimonial section
- **Design system** (rust + stone palette, Cormorant Garamond + Karla) preserved from the approved preview, extended consistently across all pages

## Project structure

```
app/
  layout.tsx          ← root layout, JSON-LD business schema, fonts
  globals.css         ← full design system (~1400 lines, organized by section)
  page.tsx            ← home page
  about/              ← about page
  services/
    page.tsx          ← services index
    [slug]/page.tsx   ← dynamic service detail (renders all 11)
  staff/              ← staff overview
  contact/            ← contact + inline form
  teletherapy/        ← teletherapy detail
  family-workshop/    ← groups & workshops
  privacy/            ← privacy policy
  sitemap.ts          ← generates /sitemap.xml
  robots.ts           ← generates /robots.txt
components/
  Nav, Footer, Sidebar (form), MobileCTA  ← layout chrome
  Hero, CredsBar, FinalCTA, AreasServed   ← reusable sections
  FAQSection, ContactForm                  ← interactive
  RequestButton, RevealOnMount, ScrollObserver ← UI helpers
lib/
  site.ts             ← site constants (phone, address, hours, areas, image URLs)
  services-content.ts ← detailed copy for all 11 services (edit here)
  sidebar.ts          ← sidebar event helper
```

## Things you'll want to wire up

### 1. Form submissions

The appointment form (sidebar) and contact form currently just show the "thank you" state on submit. To make them actually send:

- **Formspree** (easiest): Create a form at formspree.io, then in `components/Sidebar.tsx` and `components/ContactForm.tsx` find the `// TODO: wire to Formspree...` comment and replace `setSubmitted(true)` with:
  ```ts
  const data = new FormData(e.currentTarget);
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' },
  });
  setSubmitted(true);
  ```
- **Netlify Forms**: Add `data-netlify="true"` to the form tags, then deploy on Netlify.
- **Custom**: Build a Next.js API route at `app/api/contact/route.ts`.

### 2. Replace the logo placeholder

`components/Nav.tsx` shows a serif "P" in a rust circle as the logo placeholder. Replace with the actual logo by swapping that `<div className="nav-logo">P</div>` for an `<img>` (drop the file in `/public/logo.png` first).

### 3. Replace placeholder images

All images currently load directly from Unsplash CDN URLs (defined in `lib/site.ts`). To swap to your own:

1. Put images in `/public/images/`
2. Update the `IMAGES` object in `lib/site.ts` to point to local paths (e.g., `/images/hero.jpg`)
3. The Next.js Image component is set up but currently using `<img>` for simplicity — you can switch to `next/image` if you want automatic optimization for local images.

### 4. Real staff bios

`app/staff/page.tsx` currently shows category-level placeholders. Replace the `STAFF` array with real people, photos, and bios.

### 5. Update phone, address, hours

All site-wide info lives in `lib/site.ts` — change once, updates everywhere.

### 6. Add a real favicon

Drop `favicon.ico` (and ideally `apple-touch-icon.png` and `og-image.jpg`) into `/public/`.

## SEO notes

- **Domain**: Update `SITE.url` in `lib/site.ts` to the live domain. Canonical URLs and the sitemap depend on this.
- **Submit sitemap**: After deploy, submit `https://yourdomain.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- **Google Business Profile**: This is the single highest-leverage SEO move for a local therapy practice. Make sure GBP listing matches the address/phone/hours used in the site exactly.
- **Reviews**: Implement a soft post-session review request flow (Google reviews especially) — the schema is already set up to display rich review snippets if/when reviews come in.

## Customization

- **Colors**: edit the CSS variables at the top of `app/globals.css` (`--rust`, `--stone`, etc.)
- **Fonts**: swap the Google Fonts link in `app/layout.tsx` and the `--serif` / `--sans` variables in `globals.css`
- **Service content**: every service page reads from `lib/services-content.ts`. Edit there.

## Notes on the build

- All images load from Unsplash by direct URL. They're CDN-hosted, fast, and free to use under the Unsplash license, but if you want full control / offline-safety / your own asset pipeline, swap them for local files.
- The site is fully statically generated — `next build` produces a fast static site that can deploy to any static host or run on Vercel/Netlify edge.
- All animations use CSS transitions + IntersectionObserver. No heavy animation libraries.

---

Built with care. Questions? john@brightontherapytreatment.com
