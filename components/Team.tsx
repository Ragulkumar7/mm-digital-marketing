"use client";

import { motion, type Variants } from "framer-motion";
import {
  ClipboardList,
  Code2,
  Megaphone,
  Palette,
  Search,
  ChartColumn,
  type LucideIcon,
} from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  icon: LucideIcon;
  summary: string;
  responsibilities: string[];
};

const FOUNDER: TeamMember = {
  name: "Praveen Kumar A",
  role: "Founder",
  initials: "PK",
  icon: Megaphone,
  summary:
    "Leads content, social channels, paid campaigns, and day-to-day digital marketing coordination across client projects.",
  responsibilities: [
    "Content writing",
    "Social media page management",
    "Meta Ads campaign management",
    "Digital marketing coordination",
    "Data Collection",
    "Data Visualization",
    "Coordination of data-related activities",
  ],
};

const TEAM: TeamMember[] = [
  {
    name: "Viswa",
    role: "Full Stack Developer",
    initials: "V",
    icon: Code2,
    summary:
      "Builds and ships responsive front-end interfaces and reliable back-end systems.",
    responsibilities: [
      "Full-stack web development",
      "Frontend implementation",
      "Backend implementation",
    ],
  },
  {
    name: "Ragul Kumar",
    role: "Senior Digital Marketing & SEO Specialist",
    initials: "RK",
    icon: Search,
    summary:
      "Improves search visibility and shapes digital marketing strategy for lasting organic growth.",
    responsibilities: [
      "Search engine optimization (SEO)",
      "Digital marketing strategy",
      "Website optimization & search visibility",
    ],
  },
  {
    name: "Abdul Rahuman",
    role: "Senior Graphic Designer & Video Editor",
    initials: "AR",
    icon: Palette,
    summary:
      "Creates visual identities, campaign assets, and edited video content that carry the brand consistently.",
    responsibilities: [
      "Graphic design",
      "Creative assets & branding",
      "Video editing",
    ],
  },
  {
    name: "Durkesh",
    role: "Admin & Marketing Head",
    initials: "D",
    icon: ClipboardList,
    summary:
      "Keeps administration, marketing operations, and team coordination moving in the same direction.",
    responsibilities: [
      "Administrative coordination",
      "Marketing operations",
      "Team coordination",
    ],
  },
  {
    name: "Harish Kumar",
    role: "Data Collection & Data Visualization",
    initials: "HK",
    icon: ChartColumn,
    summary:
      "Collects, organizes, and presents data — turning collected information into clear visual insights for the team and clients.",
    responsibilities: [
      "Data Collection",
      "Data Visualization",
      "Data Analysis and presentation of collected information",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function InitialsAvatar({
  initials,
  icon: Icon,
  size = "md",
}: {
  initials: string;
  icon: LucideIcon;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={`relative shrink-0 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow ${
        size === "lg" ? "w-20 h-20" : "w-14 h-14"
      }`}
      aria-hidden
    >
      <span
        className={`font-display font-bold text-white ${
          size === "lg" ? "text-2xl" : "text-lg"
        }`}
      >
        {initials}
      </span>
      <span className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-surface border border-white/15 flex items-center justify-center text-primary">
        <Icon className="w-3.5 h-3.5" />
      </span>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="section relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Team
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            The People Behind{" "}
            <span className="text-gradient">MM Digital Marketing</span>
          </h2>
          <div className="section-title-line mx-auto" />
          <p className="mt-4 text-secondary text-base md:text-lg leading-relaxed">
            A small, hands-on team covering development, search, design, video,
            content, and marketing operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-14 glass-card gradient-border p-7 md:p-10"
        >
          <div className="grid lg:grid-cols-[auto_1fr] gap-7 lg:gap-10 items-start">
            <div className="flex items-center gap-5">
              <InitialsAvatar
                initials={FOUNDER.initials}
                icon={FOUNDER.icon}
                size="lg"
              />
              <div className="lg:hidden">
                <p className="font-display font-bold text-xl text-white">
                  {FOUNDER.name}
                </p>
                <p className="mt-1 text-sm text-primary font-medium">
                  {FOUNDER.role}
                </p>
              </div>
            </div>

            <div>
              <div className="hidden lg:block">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display font-bold text-2xl text-white">
                    {FOUNDER.name}
                  </h3>
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-primary">
                    {FOUNDER.role}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-secondary text-base leading-relaxed max-w-3xl">
                {FOUNDER.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {FOUNDER.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs border border-white/15 bg-white/5 text-body"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {TEAM.map((member) => (
            <motion.article
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card gradient-border p-6 md:p-7 flex flex-col h-full"
            >
              <InitialsAvatar initials={member.initials} icon={member.icon} />

              <h3 className="mt-5 font-display font-semibold text-xl text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-secondary leading-relaxed">
                {member.summary}
              </p>

              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                {member.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-body leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
