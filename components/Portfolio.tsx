"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Crypto Dashboard",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    description:
      "Real-time crypto portfolio tracker with live price charts, AI-powered insights, and one-click trading. Built with Next.js, WebSockets and Recharts for a fintech startup. Increased daily active users by 4.2× in 3 months.",
    tags: ["Next.js", "WebSockets", "Charts"],
  },
  {
    title: "Restaurant Website",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    description:
      "A cinematic restaurant experience with online reservations, interactive menu, and gallery. Smooth scroll storytelling and CMS-driven content lets the owner update dishes daily. Bookings grew 68% post-launch.",
    tags: ["Webflow", "GSAP", "CMS"],
  },
  {
    title: "SaaS Landing Page",
    category: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    description:
      "High-converting SaaS landing page redesign with bold typography, social proof, and A/B-tested CTAs. Tailwind + Framer Motion for premium micro-interactions. Lifted trial signups from 1.8% to 4.6%.",
    tags: ["Tailwind", "A/B Testing", "CRO"],
  },
  {
    title: "Portfolio Website",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Editorial portfolio for an award-winning photographer. Full-bleed imagery, custom typography, and cursor-driven hover states. Built lightweight with Astro to keep Lighthouse scores at 100 across the board.",
    tags: ["Astro", "Editorial", "Branding"],
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Cross-platform fitness companion with workout plans, progress tracking, and social challenges. Built with React Native and a Node API. Featured by the App Store the week of launch — 50k downloads in month one.",
    tags: ["React Native", "Node API", "Health"],
  },
  {
    title: "Finance Web App",
    category: "Dashboard",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    description:
      "Personal finance dashboard with smart budgeting, recurring-bill detection, and investment overview. Designed mobile-first with accessible color contrast and clear data visualisations for confident decisions.",
    tags: ["TypeScript", "D3.js", "Fintech"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="section relative section-alt">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="pill">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Selected Work
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Our Latest <span className="text-gradient">Projects</span>
            </h2>
            <div className="section-title-line" />
            <p className="mt-4 text-secondary text-base md:text-lg">
              Some of our recent creative work — built from the ground up with
              craft, care, and conversion in mind.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-secondary self-start md:self-auto text-sm whitespace-nowrap"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card/30 backdrop-blur-md cursor-pointer aspect-[4/5] sm:aspect-[4/4.5]"
            >
              {/* Background image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Base dark gradient (always visible) */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Hover overlay — darkens whole card on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Subtle red wash on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top-right arrow indicator */}
              <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-glow z-10">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Default footer (always visible — category + title) */}
              <div className="absolute bottom-0 inset-x-0 p-6 transition-all duration-500 group-hover:translate-y-[-8px]">
                <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display font-bold text-xl md:text-2xl text-white leading-tight">
                  {project.title}
                </h3>

                {/* Description reveal on hover — 3–4 lines */}
                <div
                  className="
                    grid grid-rows-[0fr] group-hover:grid-rows-[1fr]
                    transition-[grid-template-rows] duration-500 ease-out
                  "
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-sm text-body leading-relaxed line-clamp-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border border-white/15 bg-white/5 text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View case study link */}
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors opacity-0 group-hover:opacity-100 duration-500 delay-200"
                    >
                      View Case Study
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
