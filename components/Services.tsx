"use client";

import { motion, type Variants } from "framer-motion";
import {
  LayoutGrid,
  Code2,
  Palette,
  Megaphone,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type ServicePos = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  pos: ServicePos;
};

const SERVICES: Service[] = [
  {
    pos: "top-left",
    icon: LayoutGrid,
    title: "UI/UX Design",
    description:
      "Modern, user-friendly, and visually appealing interface designs crafted around real user behavior.",
  },
  {
    pos: "top-right",
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive, and scalable web applications built with modern frameworks and best practices.",
  },
  {
    pos: "bottom-left",
    icon: Palette,
    title: "Branding",
    description:
      "Strong brand identity and creative visual strategy that makes your business unforgettable.",
  },
  {
    pos: "bottom-right",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Improve online presence and increase customer engagement with data-driven growth campaigns.",
  },
];

/** Cards converge toward the center from their corner direction */
function getInitialOffset(pos: ServicePos) {
  switch (pos) {
    case "top-left":
      return { x: -60, y: -40 };
    case "top-right":
      return { x: 60, y: -40 };
    case "bottom-left":
      return { x: -60, y: 40 };
    case "bottom-right":
      return { x: 60, y: 40 };
  }
}

const cardVariants: Variants = {
  hidden: ({ x, y }: { x: number; y: number }) => ({
    opacity: 0,
    x,
    y,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.article
      custom={getInitialOffset(service.pos)}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative glass-card gradient-border p-6 md:p-7 overflow-hidden cursor-pointer h-full"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"
      />

      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>

      <h3 className="mt-5 font-display font-semibold text-xl text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-body leading-relaxed">
        {service.description}
      </p>

      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-primary transition-colors">
        Learn more
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.article>
  );
}

function CenterHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center justify-center text-center px-4"
    >
      {/* Decorative red rotating dashed ring */}
      <div
        aria-hidden
        className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full border-2 border-dashed border-primary/25 animate-spin-slow"
      />

      <div className="relative max-w-xs">
        <span className="pill">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          What we do
        </span>
        <h2 className="mt-4 font-display font-bold text-4xl xl:text-5xl tracking-tight text-white leading-tight">
          Our <span className="text-gradient">Services</span>
        </h2>
        <div className="section-title-line mx-auto" />
        <p className="mt-4 text-body text-sm xl:text-base">
          Creative solutions designed to grow your business and elevate your
          brand experience.
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* === Mobile / tablet layout: stacked === */}
        <div className="lg:hidden">
          <CenterHeadingMobile />
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>

        {/* === Desktop layout: cross / plus around center heading === */}
        <div className="hidden lg:block relative">
          {/* SVG connecting lines (drawn behind cards) */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Top-left → center */}
            <motion.line
              x1="16.5"
              y1="25"
              x2="50"
              y2="50"
              stroke="rgba(230, 57, 70, 0.4)"
              strokeWidth="0.15"
              strokeDasharray="0.5 0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            {/* Top-right → center */}
            <motion.line
              x1="83.5"
              y1="25"
              x2="50"
              y2="50"
              stroke="rgba(230, 57, 70, 0.4)"
              strokeWidth="0.15"
              strokeDasharray="0.5 0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            {/* Bottom-left → center */}
            <motion.line
              x1="16.5"
              y1="75"
              x2="50"
              y2="50"
              stroke="rgba(230, 57, 70, 0.4)"
              strokeWidth="0.15"
              strokeDasharray="0.5 0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            {/* Bottom-right → center */}
            <motion.line
              x1="83.5"
              y1="75"
              x2="50"
              y2="50"
              stroke="rgba(230, 57, 70, 0.4)"
              strokeWidth="0.15"
              strokeDasharray="0.5 0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </svg>

          {/* 3-column grid: [card] [heading-spans-both-rows] [card] */}
          <div className="relative z-10 grid grid-cols-[1fr_auto_1fr] gap-x-10 xl:gap-x-16 gap-y-10">
            <ServiceCard service={SERVICES[0]} index={0} />
            <div className="row-span-2 w-[340px] xl:w-[380px] flex items-center justify-center">
              <CenterHeading />
            </div>
            <ServiceCard service={SERVICES[1]} index={1} />
            <ServiceCard service={SERVICES[2]} index={2} />
            <ServiceCard service={SERVICES[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mobile heading (same content, not centered between cards) */
function CenterHeadingMobile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <span className="pill">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        What we do
      </span>
      <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
        Our <span className="text-gradient">Services</span>
      </h2>
      <div className="section-title-line mx-auto" />
      <p className="mt-4 text-body text-base md:text-lg">
        Creative solutions designed to grow your business and elevate your
        brand experience.
      </p>
    </motion.div>
  );
}
