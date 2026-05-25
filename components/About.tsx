"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import { CheckCircle2, Rocket, ShieldCheck, Sparkles } from "lucide-react";

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
      "Battle-tested process, transparent communication, and on-time delivery — always.",
  },
  {
    icon: Sparkles,
    title: "Crafted experiences",
    description:
      "We obsess over micro-interactions, motion, and feel — the details users remember.",
  },
];

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: " yrs", label: "Years of Experience" },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, to, count, rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

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
            About NovaCraft
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white">
            Why <span className="text-gradient">Choose Us?</span>
          </h2>
          <p className="mt-5 text-secondary text-base md:text-lg leading-relaxed">
            We combine creativity, strategy, and technology to build digital
            experiences that help brands grow and succeed online. From bold
            startups to enterprise teams, we partner with companies who care
            about craft.
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
            <span>NDA-friendly · Transparent process · Global team</span>
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
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`glass-card gradient-border p-6 md:p-8 ${
                  i === 0 ? "col-span-2" : ""
                }`}
              >
                <div className="font-display font-bold text-4xl md:text-5xl text-gradient">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm md:text-base text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="col-span-2 glass-card p-6 md:p-7 flex items-center gap-5"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-display font-semibold text-lg text-white">
                  Award-winning craftsmanship
                </p>
                <p className="mt-1 text-sm text-secondary">
                  Our favorite award is happy clients — but recognition from
                  the design community is a nice bonus.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
