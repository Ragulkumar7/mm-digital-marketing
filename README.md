# MM Brandvista — Website

> A modern, responsive digital agency website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Live Demo

| | Link |
|---|---|
| **Live site** | _Add your production URL here_ |
| **GitHub** | _Add your repository URL here_ |

> If the Vercel project still uses the previous project name in its subdomain,
> rename the Vercel project or attach the final custom domain before sharing.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.x | App Router, SSR/SSG |
| [React](https://react.dev/) | 19.x | UI components |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.x | Scroll & entrance animations |
| [Lucide React](https://lucide.dev/) | 0.460+ | Icons |
| [EmailJS](https://www.emailjs.com/) | 5.x | Browser-based contact-form email |
| `next/image` | — | Optimized remote images |
| `next/font` | — | Syne + DM Sans + DM Mono (Google Fonts) |

---

## Assignment Requirements Checklist

### Required sections (4)

| Section | Status | Location |
|---|---|---|
| **Hero** — agency name, tagline, CTA, gradient background | ✅ | `components/Hero.tsx` |
| **Services** — 4 cards with icon, title, description | ✅ | `components/Services.tsx` |
| **Portfolio** — 6 projects, image + title, hover effects | ✅ | `components/Portfolio.tsx` |
| **Contact** — name, email, message, submit + validation | ✅ | `components/Contact.tsx` |

### Technical requirements

| Requirement | Status |
|---|---|
| Next.js 13+ (App Router) | ✅ Next.js 16 |
| Functional components only | ✅ |
| Separate component per section | ✅ `components/` |
| Proper folder structure | ✅ See below |
| Fully responsive | ✅ Mobile / tablet / desktop |
| Clean, readable code | ✅ Typed props, semantic HTML |
| No heavy pre-built templates | ✅ Custom-built UI |

### Bonus features

| Bonus | Status |
|---|---|
| Tailwind CSS | ✅ |
| Basic animations (Framer Motion) | ✅ Fade-up, stagger, hover, counters |
| SEO metadata | ✅ `app/layout.tsx` |
| Image optimization (`next/image`) | ✅ Portfolio and hero background |
| Dark mode toggle | ❌ Not implemented — the site uses a single dark theme by design |

---

## Additional Features (beyond brief)

These sections demonstrate initiative without bloating the core task:

- **Navbar** — sticky header, blur-on-scroll, mobile hamburger menu, smooth anchor navigation
- **About** — “Why Choose Us” with 3 feature highlights + an honest team/services summary
- **Team** — founder profile and four team members with role descriptions
- **Partnership principles** — replaces unverified client reviews with honest copy about how we work
- **Footer** — multi-column links, contact details, social links, gradient top border

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout, fonts, SEO metadata
│   ├── icon.svg             # MM favicon
│   └── page.tsx             # Homepage — composes all sections
├── components/
│   ├── Navbar.tsx           # Sticky nav + mobile menu
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services section
│   ├── Portfolio.tsx        # Portfolio section
│   ├── About.tsx            # About + honest team/services summary
│   ├── Team.tsx             # Founder + team profiles
│   ├── Testimonials.tsx     # Partnership principles (no fake reviews)
│   ├── Contact.tsx          # Contact form + EmailJS submission
│   ├── CtaBanner.tsx        # Call-to-action banner
│   ├── StatsStrip.tsx       # Capability strip
│   ├── Logo.tsx             # Shared logo image
│   └── Footer.tsx           # Site footer
├── lib/
│   └── site.ts              # Shared contact + social data
├── styles/
│   └── globals.css          # Tailwind layers + custom utilities
├── public/
│   └── images/              # Logo and local static images
├── .env.example             # Required environment variables (no secrets)
├── eslint.config.mjs        # ESLint flat config for Next.js 16
├── tailwind.config.ts       # Theme tokens, animations
├── next.config.ts           # Image remote patterns
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (or pnpm / yarn)

### Install & run

```bash
# Clone your repository
git clone <your-repo-url>
cd mm-digital-marketing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

---

## Contact form email setup (EmailJS)

The contact form sends directly from the browser with the official
`@emailjs/browser` SDK. Only the EmailJS service ID, template ID, and public key
are exposed to the browser. Never put the Gmail password, a private EmailJS
key, or any other private credential in this project.

### EmailJS dashboard setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add a **Gmail** email service and connect the account that receives
   enquiries: `mmdigitalmarketing786@gmail.com`. Complete Google's consent flow.
3. Create an email template and use these settings:
   - **To Email:** `mmdigitalmarketing786@gmail.com`
   - **From Name:** `MM Brandvista`
   - **Reply To:** `{{email}}`
   - **Subject:** `MM Brandvista enquiry: {{subject}}`
   - **Body:** include `{{name}}`, `{{email}}`, `{{phone}}`, `{{subject}}`,
     and `{{message}}`.
4. Copy the **Service ID**, **Template ID**, and **Public Key** from the EmailJS
   dashboard.
5. Copy `.env.example` to `.env.local` and fill in the three public values.
   `.env.local` is gitignored and must never be committed:

   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

6. Restart `npm run dev` after changing environment variables.
7. In Vercel, open **Project → Settings → Environment Variables**, add the three
   variables above for Production (and Preview if needed), then redeploy.

Because these variables start with `NEXT_PUBLIC_`, Next.js inlines them at build
time. Set or change them before deploying, and redeploy after any change.

The form passes exactly `name`, `email`, `phone`, `subject`, and `message` to
the template. The recipient and sender display name are configured in the
EmailJS dashboard, not in client-side code.

`NEXT_PUBLIC_SITE_URL` is optional but recommended so metadata and Open Graph
tags use the real production domain.

> **Client-side protection is limited.** The form includes a honeypot and a
> browser-stored rate limit (5 submissions per 10 minutes), but both run in the
> visitor's browser and can be bypassed. They are not a substitute for
> server-side rate limiting. For stronger protection, restrict allowed origins
> in EmailJS and add a server-side or edge rate limiter in front of the site.

> EmailJS delivery was verified with a real browser form submission. EmailJS
> returned success and the form displayed the success message. Confirm receipt
> once in the `mmdigitalmarketing786@gmail.com` inbox.

## Deploy to Vercel

1. Push the project to a **public GitHub repository**
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo — Vercel auto-detects Next.js
4. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables from the section above
5. Set `NEXT_PUBLIC_SITE_URL` to the final production URL
6. Click **Deploy**
7. Submit a real test enquiry and confirm delivery before sharing the site

---

## Design Decisions

| Decision | Rationale |
|---|---|
| **MM Brandvista brand** | The supplied logo image is used in the navbar and footer |
| **Dark editorial theme** | Near-black surfaces with a red accent, generous spacing, and glass cards |
| **Syne + DM Sans** | Geometric display headings with a clean neutral body face |
| **Soft surface cards** | White cards with subtle shadows instead of dark glassmorphism |
| **Framer Motion** | Subtle scroll-reveal and stagger — improves perceived quality without hurting performance |
| **Unsplash imagery** | Portfolio thumbnails and the hero background are decorative placeholders via `next/image` |
| **Client-side form validation** | The form validates all fields before sending, prevents duplicate submissions, and shows success only after EmailJS confirms the send |
| **Client-side abuse deterrence** | A honeypot and localStorage rate limit reduce casual spam, but are documented as a deterrent rather than a replacement for server-side rate limiting |
| **No invented social proof** | Removed unverified awards, client counts, testimonial photos, and review claims |

---

## Assumptions

1. **Email backend** — the contact form requires the three `NEXT_PUBLIC_EMAILJS_*` variables and a matching EmailJS Gmail service/template before it can deliver mail. Without them, the UI shows the generic retry message. Delivery is not verified until a real test is sent.
2. **Team content** — founder and team details are limited to the roles and responsibilities supplied for this update. No photographs, qualifications, awards, or client numbers were invented.
3. **External images** — portfolio thumbnails and the hero background use Unsplash.
4. **Single page** — all sections live on `/`; no multi-page routing is required.
5. **No testimonials** — because no verified client reviews were available, the former review cards were replaced with honest partnership copy.

---

## Color Palette

| Token | Hex |
|---|---|
| Background (near-black) | `#0B0D12` |
| Surface (card) | `#15181F` |
| Muted block | `#1C2029` |
| Primary (red) | `#E63946` |
| Primary light | `#F25762` |
| Primary dark | `#C22833` |
| Body text | `#C9CED6` |
| Border | `#262A35` |

---

## Author

_Submit your name and contact details with the assignment._

**Submitted for:** Next.js Developer Internship — Design Agency Homepage Task
