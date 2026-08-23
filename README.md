# Akshansh Yadav — Civil Engineering Consultancy Website

A professional, mobile-first marketing website built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**, deployable free on Vercel.

---

## Quick Start

```bash
# Install dependencies (already done)
npm install

# Run locally
npm run dev
# → open http://localhost:3000

# Build for production
npm run build
npm start
```

---

## Editing Content & Pricing

**All site text, prices, and contact info live in one file:**

```
data/content.ts
```

Open that file and edit freely — no need to touch any component.

### Key things to update:

| What | Where in content.ts |
|------|---------------------|
| Phone / WhatsApp | `business.phone` + `business.whatsappNumber` |
| Email | `business.email` |
| Service area | `business.serviceArea` |
| Social links | `business.social.linkedin` / `.github` / `.instagram` |
| All pricing numbers | `pricing.items[].startingAt` |
| SEO title/description | `seo.title` + `seo.description` |
| Google Analytics ID | `ga.measurementId` |
| Web3Forms key | `web3formsKey` |
| Testimonials | `testimonials.items[]` |
| Projects | `projects.items[]` |

---

## Adding Real Project Photos

1. Put your photo files (JPEG/PNG/WebP) in `/public/images/`
2. Open `data/content.ts`
3. Find `projects.items` and set `imageFile` to the filename, e.g.:

```ts
{ imageFile: "project-kanpur-layout.jpg" }
```

The site will automatically display the image instead of the placeholder.

---

## Setting Up Web3Forms (Contact Form)

1. Go to https://web3forms.com
2. Sign up free and create an access key
3. Open `data/content.ts` and replace:
   ```ts
   web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
   ```
   with your actual key.
4. Form submissions will be emailed to the address linked to your Web3Forms account.

---

## Activating Google Analytics

1. Create a GA4 property at analytics.google.com
2. Get your Measurement ID (starts with `G-`)
3. Open `data/content.ts` and update:
   ```ts
   ga: { measurementId: "G-XXXXXXXXXX" },
   ```
4. Analytics will activate automatically on next build.

---

## Deploying to Vercel (Free)

### Option A — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally (once)
npm i -g vercel

# Login
vercel login

# Deploy from project folder
vercel

# For production deploy
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub (see below)
2. Go to vercel.com -> New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click Deploy
5. Every `git push` to `main` auto-deploys

---

## Pushing to GitHub

```bash
# First time (repo already initialised)
git remote add origin https://github.com/expediator/civil-site.git
git push -u origin main

# Subsequent pushes
git add .
git commit -m "Update: <what you changed>"
git push
```

---

## File Structure

```
civil-site/
├── app/
│   ├── layout.tsx         # Root layout — SEO meta tags, fonts, GA
│   ├── page.tsx           # Main page — assembles all sections
│   └── globals.css        # Global styles, scroll behaviour
├── components/
│   ├── Navbar.tsx         # Fixed navigation bar with mobile menu
│   ├── Hero.tsx           # Full-screen hero with CTA
│   ├── About.tsx          # Bio, stats, coursework
│   ├── Services.tsx       # 6 service cards
│   ├── Pricing.tsx        # 9 pricing cards
│   ├── Expertise.tsx      # 3-phase curriculum timeline
│   ├── Projects.tsx       # Past work grid
│   ├── Process.tsx        # 4-step how-it-works
│   ├── Testimonials.tsx   # Client quote cards
│   ├── Contact.tsx        # Web3Forms contact form + contact info
│   ├── Footer.tsx         # Site footer
│   └── WhatsAppButton.tsx # Floating WhatsApp button
├── data/
│   └── content.ts         # ALL CONTENT & PRICING HERE
├── public/
│   └── images/            # Put project photos here
├── tailwind.config.ts
└── next.config.mjs
```

---

## Customisation Tips

- **Colors**: Edit `tailwind.config.ts` to change the brand navy palette
- **Fonts**: Change `Inter` in `app/layout.tsx` to any Google Font
- **Add your photo**: In `components/About.tsx`, replace the placeholder div with `<Image src="/images/akshansh.jpg" ... />`
- **Add Instagram**: Fill in `business.social.instagram` in `data/content.ts`

---

*Built with Next.js 14 · Tailwind CSS · Lucide Icons · Web3Forms*
