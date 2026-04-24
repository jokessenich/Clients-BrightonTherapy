# William A. Presti Center — Next.js Site

Production-ready Next.js 14 (App Router) site for the William A. Presti Center For Families And Youth (Brighton, MI).

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy

```bash
npm i -g vercel
vercel
```

Or push to a Git repo and import into Vercel. Also deploys fine to Netlify, Cloudflare Pages, or any Node host.

## What's inside

- **18 pages**: home, about, services index, 11 service detail pages, staff, contact, teletherapy, family workshop, privacy
- **All 8 client photos** in `/public/images/` served through Next.js `<Image>` — automatic AVIF/WebP, responsive srcset, lazy loading, explicit dimensions to prevent CLS
- **Real logo** in the nav (`/public/images/logo.png`)
- **Navy blue accent** (`#1e4d8c`, from the Presti Center logo) on a warm cream/stone bed
- **SEO**: per-page metadata, canonical URLs, Open Graph / Twitter cards, JSON-LD (LocalBusiness + MedicalBusiness root schema, MedicalTherapy per service, FAQPage on home + every service), auto-generated `sitemap.xml` + `robots.txt`
- **AEO**: structured FAQ blocks, semantic HTML, question-format headings
- **Conversion**: persistent phone CTA, sidebar form on every page, sticky mobile call bar, trust badges, free-consult value prop

## Performance baked in

- `priority` on hero images → Next.js injects `<link rel="preload">` for LCP
- Explicit `width`/`height` or `fill` on every image → zero layout shift
- `sizes` hints on every responsive image → browser loads only the variant it needs
- Below-the-fold images lazy-load by default
- Fonts use `display=swap`
- Images pre-compressed: hero 1.2MB, photos 90-140KB each (Next.js further compresses to WebP/AVIF on serve)
- ScrollObserver uses native `IntersectionObserver`, route-change-aware, with a 1.5s fallback timer
- CSS variables for theming → one-line color changes

## Project structure

```
app/
  layout.tsx              ← root layout, JSON-LD schema, fonts
  globals.css             ← full design system (~1500 lines)
  page.tsx                ← home
  about/  services/  services/[slug]/  staff/  contact/
  teletherapy/  family-workshop/  privacy/
  sitemap.ts  robots.ts   ← auto-generated SEO files
components/
  Nav, Footer, Sidebar, MobileCTA
  Hero, CredsBar, FinalCTA, AreasServed, FAQSection, ContactForm
  RequestButton, RevealOnMount, ScrollObserver
  SmartImage              ← next/image wrapper using the IMAGES registry
lib/
  site.ts                 ← site constants + IMAGES registry with dimensions
  services-content.ts     ← copy for all 11 services
  sidebar.ts              ← sidebar event helper
public/
  images/                 ← client photos, all compressed
```

## Things to wire up after deploy

### Form submissions
Find `// TODO: wire to Formspree...` in `components/Sidebar.tsx` and `components/ContactForm.tsx`. Easiest:

```ts
const data = new FormData(e.currentTarget);
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: data,
  headers: { Accept: 'application/json' },
});
setSubmitted(true);
```

### Real staff bios
`app/staff/page.tsx` currently shows category-level placeholders. Replace the `STAFF` array with real people.

### Update site constants
Phone, address, hours, and production URL all live in `lib/site.ts`. Update `SITE.url` to your live domain before deploying — canonical URLs and sitemap depend on it.

### Favicon
Drop `favicon.ico` (and ideally `apple-touch-icon.png`, `og-image.jpg`) into `/public/`.

### Further image compression (optional)
`public/images/hero.jpg` is 1.2MB at 1920×2878. A tool like Squoosh or TinyPNG could trim it to 700-800KB. Next.js will serve smaller responsive variants automatically.

## Color system

One-line theming. Edit the top of `app/globals.css`:

```css
:root {
  --rust: #1e4d8c;        /* primary accent (still named "rust" in code, navy in value) */
  --rust-hover: #17407a;
  --rust-light: #5a84bc;  /* used on dark backgrounds */
  --rust-soft: #e4ecf7;
}
```

## SEO next steps

- Submit `/sitemap.xml` to Google Search Console + Bing Webmaster Tools
- Set up Google Business Profile with matching NAP (name/address/phone)
- Ask new clients for Google reviews — the schema is ready to display them

---

Questions? john@brightontherapytreatment.com
