"use client";

import { motion, type Variants } from "framer-motion";
import {
  PenLine,
  Share2,
  Palette,
  Clapperboard,
  Camera,
  Megaphone,
  Code2,
  Search,
  Cloud,
  Crown,
  Handshake,
  Bot,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    icon: PenLine,
    title: "Content Creation",
    description:
      "Social media content, marketing copywriting, and creative content strategy crafted in your brand's voice.",
    features: [
      "Social media content",
      "Marketing copywriting",
      "Creative content strategy",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Complete social media account management, content scheduling and publishing, and audience engagement.",
    features: [
      "Social media account management",
      "Content scheduling and publishing",
      "Audience engagement",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description:
      "Brand identity and visual design, marketing creatives, and social media graphics that stay on-brand.",
    features: [
      "Brand identity and visual design",
      "Marketing creatives",
      "Social media graphics",
    ],
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    description:
      "Promotional video editing, reels and short-form videos, and corporate and marketing videos.",
    features: [
      "Promotional video editing",
      "Reels and short-form videos",
      "Corporate and marketing videos",
    ],
  },
  {
    icon: Camera,
    title: "Cinematography",
    description:
      "Professional video production, brand and product shoots, and promotional visual storytelling.",
    features: [
      "Professional video production",
      "Brand and product shoots",
      "Promotional visual storytelling",
    ],
  },
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    description:
      "Facebook and Instagram advertising with campaign setup, optimization, audience targeting, and performance monitoring.",
    features: [
      "Facebook and Instagram advertising",
      "Campaign setup and optimization",
      "Audience targeting and performance monitoring",
    ],
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Business websites, landing pages, and responsive website development built to convert.",
    features: [
      "Business websites",
      "Landing pages",
      "Responsive website development",
    ],
  },
  {
    icon: Search,
    title: "Google Ads Management",
    description:
      "Google Search advertising, display advertising, and campaign optimization for measurable reach.",
    features: [
      "Google Search advertising",
      "Display advertising",
      "Campaign optimization",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description:
      "Software-as-a-Service solutions, business workflow digitization, and web-based software built around your operations.",
    features: [
      "Software-as-a-Service solutions",
      "Business workflow digitization",
      "Web-based software solutions",
    ],
  },
  {
    icon: Crown,
    title: "Personal Branding",
    description:
      "Personal brand strategy, professional digital presence, and content and profile positioning that builds trust.",
    features: [
      "Personal brand strategy",
      "Professional digital presence",
      "Content and profile positioning",
    ],
  },
  {
    icon: Handshake,
    title: "B2B, B2C & D2C Business Development",
    description:
      "Business growth strategies for B2B, B2C, and D2C models — customer acquisition, digital business development, and brand positioning.",
    features: [
      "Business growth strategies",
      "Customer acquisition",
      "Digital business development",
      "Brand and market positioning",
    ],
  },
  {
    icon: Bot,
    title: "Artificial Intelligence Agency",
    description:
      "AI-powered business solutions, AI workflow automation, and intelligent AI integration for modern digital operations.",
    features: [
      "AI-powered business solutions",
      "AI workflow automation",
      "AI integration and implementation",
      "Intelligent digital solutions",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative glass-card gradient-border p-6 md:p-7 overflow-hidden h-full flex flex-col"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"
      />

      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon className="w-5 h-5" strokeWidth={2} aria-hidden />
      </div>

      <h3 className="mt-5 font-display font-semibold text-xl text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-body leading-relaxed">
        {service.description}
      </p>

      <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-xs text-body leading-relaxed"
          >
            <span
              aria-hidden
              className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function SectionHeading() {
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
        Digital marketing services designed to grow your business — content
        creation, social media management, graphic design, video production,
        Meta Ads, Google Ads, website development, SaaS solutions, and AI
        business solutions, all under one roof.
      </p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="section-container relative z-10">
        <SectionHeading />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn-primary group">
            Let&apos;s Discuss Your Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
