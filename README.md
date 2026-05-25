# NovaCraft Agency — Design Agency Homepage

> **Next.js Developer Internship Task** — A modern, responsive design agency landing page built from scratch (no pre-built templates).

## Live Demo

| | Link |
|---|---|
| **Live site** | _Add your Vercel URL here after deploy_ |
| **GitHub** | _Add your repository URL here_ |

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.x | App Router, SSR/SSG, routing |
| [React](https://react.dev/) | 19.x | UI components |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.x | Scroll & entrance animations |
| [Lucide React](https://lucide.dev/) | 0.460+ | Icons |
| `next/image` | — | Optimized remote images |
| `next/font` | — | Inter + Poppins (Google Fonts) |

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
| Next.js 13+ (App Router) | ✅ Next.js 15 |
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
| Image optimization (`next/image`) | ✅ Portfolio, Hero avatars, Testimonials |
| Dark mode toggle | ❌ Not implemented — bright editorial theme by design |

---

## Additional Features (beyond brief)

These sections demonstrate initiative without bloating the core task:

- **Navbar** — sticky header, blur-on-scroll, mobile hamburger menu, smooth anchor navigation
- **About** — “Why Choose Us” with 3 feature highlights + animated stat counters (120+ projects, 50+ clients, 5 yrs)
- **Testimonials** — 3 client review cards with glassmorphism styling
- **Footer** — multi-column links, social icons, gradient top border

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   └── page.tsx            # Homepage — composes all sections
├── components/
│   ├── Navbar.tsx          # Sticky nav + mobile menu
│   ├── Hero.tsx            # Hero section (required)
│   ├── Services.tsx        # Services section (required)
│   ├── Portfolio.tsx       # Portfolio section (required)
│   ├── About.tsx           # Extra — about + stats
│   ├── Testimonials.tsx    # Extra — client reviews
│   ├── Contact.tsx         # Contact section (required)
│   └── Footer.tsx          # Site footer
├── styles/
│   └── globals.css         # Tailwind layers + custom utilities
├── public/
│   └── images/             # Local static assets (optional)
├── tailwind.config.ts      # Theme tokens, animations
├── next.config.ts          # Image remote patterns
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
cd novacraft-agency

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

## Deploy to Vercel

1. Push the project to a **public GitHub repository**
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo — Vercel auto-detects Next.js
4. Click **Deploy** (no env variables needed)
5. Copy the production URL into this README and your submission email

---

## Design Decisions

| Decision | Rationale |
|---|---|
| **Fictional brand “NovaCraft”** | Original creative work — not copied from any live agency site |
| **Bright editorial theme** | Inspired by professional Wix-style layouts — cream background, navy + warm coral accents |
| **Playfair Display serif** | Elegant headings; Inter for body copy |
| **Soft surface cards** | White cards with subtle shadows instead of dark glassmorphism |
| **Framer Motion** | Subtle scroll-reveal and stagger — improves perceived quality without hurting performance |
| **Unsplash + pravatar** | Placeholder portfolio/testimonial images via `next/image` remote patterns |
| **Client-side form validation** | Meets optional validation requirement; simulates submit with loading + success states (no backend — out of scope for a static homepage task) |

---

## Assumptions

1. **No backend** — contact form validates on the client and shows a success message after a simulated delay. A real API route can be added later.
2. **Placeholder content** — agency name, stats, testimonials, and project names are fictional demo content.
3. **External images** — portfolio thumbnails use Unsplash; testimonial avatars use pravatar.cc (allowed in `next.config.ts`).
4. **Single page** — all sections live on `/`; no multi-page routing required by the brief.

---

## Color Palette

| Token | Hex |
|---|---|
| Background (cream) | `#FBF8F3` |
| Surface (white) | `#FFFFFF` |
| Muted (beige) | `#F2EDE4` |
| Primary (navy) | `#14213D` |
| Accent (coral) | `#E8A87C` |
| Gold | `#D4A24C` |
| Body text | `#3C4658` |
| Border | `#E7E1D6` |

---

## Author

_Submit your name and contact details with the assignment._

**Submitted for:** Next.js Developer Internship — Design Agency Homepage Task
