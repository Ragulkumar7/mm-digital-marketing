"use client";

import { motion, type Variants } from "framer-motion";
import { Compass, Handshake, MessagesSquare } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Handshake,
    title: "Direct collaboration",
    description:
      "You work with the people doing the work. No layers of account management and no hand-offs that lose the details.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    description:
      "Expect straightforward updates, honest timelines, and a shared understanding of what success looks like at every stage.",
  },
  {
    icon: Compass,
    title: "Long-term thinking",
    description:
      "We build for where your brand is going, not just for launch day — with foundations that are easy to maintain and grow.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section relative section-alt">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            How we partner
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Building Stronger{" "}
            <span className="text-gradient">Brands Together</span>
          </h2>
          <p className="mt-4 text-secondary text-base md:text-lg leading-relaxed">
            Good work comes from a good working relationship. We keep projects
            collaborative, communication direct, and decisions grounded in your
            goals — from the first conversation to launch and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid md:grid-cols-3 gap-6"
        >
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <motion.article
                key={principle.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative glass-card gradient-border p-7 md:p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="mt-5 font-display font-semibold text-xl text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-secondary text-base leading-relaxed">
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 text-center text-sm text-secondary"
        >
          Want to talk through your project first? We&apos;re happy to
          have a straightforward conversation about fit, scope, and next steps.
        </motion.p>
      </div>
    </section>
  );
}
