"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5 yrs", label: "Years of Experience" },
];

export default function StatsStrip() {
  return (
    <section
      aria-label="Company statistics"
      className="relative border-y border-white/10 bg-card/50 backdrop-blur-md"
    >
      <div className="section-container px-6 md:px-10 lg:px-16 py-10 md:py-12">
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center"
        >
          {STATS.map((stat, i) => (
            <li
              key={stat.label}
              className={`relative ${
                i < STATS.length - 1
                  ? "sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:-translate-y-1/2 sm:after:h-12 sm:after:w-px sm:after:bg-white/10"
                  : ""
              }`}
            >
              <p className="font-display font-bold text-4xl md:text-5xl text-gradient">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
                {stat.label}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
