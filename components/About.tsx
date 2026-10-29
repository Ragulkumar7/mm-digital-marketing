"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: typeof Rocket;
};

const FEATURES: Feature[] = [
  {
    icon: Rocket,
    title: "Strategy-led design",
    description:
      "Every pixel is intentional — guided by research, business goals, and conversion.",
  },
  {
    icon: ShieldCheck,
    title: "Quality you can trust",
    description:
      "A clear process, transparent communication, and careful delivery from start to finish.",
  },
  {
    icon: Sparkles,
    title: "Crafted experiences",
    description:
      "We obsess over micro-interactions, motion, and feel — the details users remember.",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            About MM Digital Marketing
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white">
            Why <span className="text-gradient">Choose Us?</span>
          </h2>
          <p className="mt-5 text-secondary text-base md:text-lg leading-relaxed">
            We combine creativity, strategy, and technology to build digital
            experiences that help brands grow and succeed online. From bold
            startups to growing teams, we partner with companies who care about
            craft.
          </p>

          <ul className="mt-8 space-y-5">
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <motion.li
                  key={feat.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-primary/20 border border-white/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {feat.title}
                    </h3>
                    <p className="mt-1 text-sm text-secondary leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-secondary">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>NDA-friendly · Transparent process · Collaborative team</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"
          />

          <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 glass-card gradient-border p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-xl text-white">
                    Founder-led. Specialist-driven.
                  </p>
                  <p className="mt-2 text-sm text-secondary leading-relaxed">
                    MM Digital Marketing is led by founder Praveen Kumar A and
                    supported by a compact team of developers, marketers, and
                    creatives. You work directly with the people doing the work.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="glass-card gradient-border p-6 md:p-8"
            >
              <div className="font-display font-bold text-4xl md:text-5xl text-gradient">
                5
              </div>
              <p className="mt-2 text-sm md:text-base text-secondary">
                Team members
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card gradient-border p-6 md:p-8"
            >
              <div className="font-display font-bold text-4xl md:text-5xl text-gradient">
                4
              </div>
              <p className="mt-2 text-sm md:text-base text-secondary">
                Core services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="col-span-2 glass-card p-6 md:p-7 flex items-center justify-between gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg text-white">
                    Meet the team
                  </p>
                  <p className="mt-1 text-sm text-secondary">
                    See the people behind every project.
                  </p>
                </div>
              </div>
              <a
                href="#team"
                aria-label="Meet the MM Digital Marketing team"
                className="shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
