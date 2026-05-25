"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amelia Carter",
    role: "Founder, Lumora Studio",
    image: "https://i.pravatar.cc/200?img=47",
    text: "NovaCraft completely transformed our brand. From the first call to launch day, the team was thoughtful, fast, and obsessed with quality. Our conversions doubled within a month.",
  },
  {
    name: "Daniel Reyes",
    role: "CEO, Northwind Labs",
    image: "https://i.pravatar.cc/200?img=12",
    text: "Working with NovaCraft felt like having an in-house design team. They get product, they get business, and they ship beautiful, polished work — every single time.",
  },
  {
    name: "Sofia Nakamura",
    role: "Head of Marketing, Pixelplane",
    image: "https://i.pravatar.cc/200?img=32",
    text: "The level of craft is unreal. Animations, motion, micro-interactions — it all feels premium. Customers tell us our website is the reason they trusted us.",
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
            Loved by teams worldwide
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="mt-4 text-secondary text-base md:text-lg">
            Don&apos;t just take our word for it — here&apos;s what founders
            and product leaders say about working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative glass-card gradient-border p-7 md:p-8 flex flex-col"
            >
              <Quote
                className="absolute top-6 right-6 w-8 h-8 text-primary/30"
                aria-hidden
              />

              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="mt-5 text-secondary text-base leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-7 pt-6 border-t border-white/10 flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={`${t.name} profile`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-white/15"
                />
                <div>
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-xs text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
