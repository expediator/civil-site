<div align="center">

# 🏗️ Plinth Civil Consultancy

**Professional civil engineering consultancy website**

[![Live](https://img.shields.io/badge/Live-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://civil-site-gray.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-expediator%2Fcivil--site-181717?style=flat-square&logo=github)](https://github.com/expediator/civil-site)
[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

A professional, mobile-first marketing website for a civil engineering consultancy. 10 sections, WhatsApp button, Resend contact form, currency selector, Google Calendar booking, SEO meta tags. All content in one file.

</div>

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build && npm start
```

---

## Editing Content & Pricing

**All site text, prices, and contact info live in one file:**

```
data/content.ts
```

### Key fields to update

| What | Where in content.ts |
|------|---------------------|
| Phone / WhatsApp | `business.phone` + `business.whatsappNumber` |
| Email | `business.email` |
| Service area | `business.serviceArea` |
| All pricing numbers | `pricing.items[].startingAt` |
| SEO title/description | `seo.title` + `seo.description` |
| Google Analytics ID | `ga.measurementId` |
| Web3Forms key | `web3formsKey` |
| Testimonials | `testimonials.items[]` |
| Projects | `projects.items[]` |

---

## Adding Real Project Photos

1. Put photos (JPEG/PNG/WebP) in `/public/images/`
2. Open `data/content.ts`, find `projects.items`
3. Set `imageFile` to the filename, e.g. `"project-kanpur.jpg"`

---

## Web3Forms Contact Setup

1. [web3forms.com](https://web3forms.com) → sign up → create access key
2. In `data/content.ts`: `web3formsKey: "YOUR_KEY"`
3. Form submissions go to the email linked to your account

---

## Google Analytics

1. GA4 property at [analytics.google.com](https://analytics.google.com) → Measurement ID (`G-XXXXXXXXXX`)
2. In `data/content.ts`: `ga: { measurementId: "G-XXXXXXXXXX" }`

---

## Deploy to Vercel

```bash
npm i -g vercel && vercel login && vercel --prod
```

Or connect GitHub repo in [vercel.com](https://vercel.com) for auto-deploy on every push.

---

## File Structure

```
civil-site/
├── app/
│   ├── layout.tsx         # Root layout, SEO meta, fonts, GA
│   ├── page.tsx           # Main page — assembles all sections
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── Projects.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── data/
│   └── content.ts         ← ALL CONTENT HERE
└── public/images/         ← Put project photos here
```

---

## Customisation Tips

- **Colors**: Edit `tailwind.config.ts` brand navy palette
- **Fonts**: Change `Inter` in `app/layout.tsx` to any Google Font
- **Instagram**: Fill `business.social.instagram` in `data/content.ts`

---

## 🆙 Update 1 — November 2026

| What | Detail |
|------|--------|
| Contact form | Replaced broken Web3Forms placeholder with internal Resend API route → `app/api/contact/route.ts` |
| Primary email | Switched from HBTU college email (expires at graduation) to `akshanshyadav26220.dpskln@gmail.com` |
| Google Calendar | "Book a Consultation" button in Contact section opens pre-filled Google Calendar invite |
| Currency selector | First-visit modal lets users pick their country/currency (INR/USD/GBP/EUR/AED/SGD/AUD/CAD); prices in Pricing section adapt instantly |
| Branding | Copyright updated to `© Plinth Civil Consultancy™ · Expediator Inc.` |

---

<div align="center">
Built by <strong><a href="https://expediator.github.io/resume/">Akshansh Yadav</a></strong> · <strong>Expediator Inc.</strong> · © 2026
</div>