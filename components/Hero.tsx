"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-32 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Grayscale background photo */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Subtle dotted pattern */}
        <div className="absolute inset-0 dotted-grid opacity-20" />
      </div>

      {/* Top wavy red line decoration */}
      <svg
        aria-hidden
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute top-16 left-0 right-0 w-full h-32 md:h-44 pointer-events-none"
      >
        <path
          d="M0,100 C240,40 480,160 720,90 C960,30 1200,150 1440,80"
          stroke="#E63946"
          strokeWidth="2"
          fill="none"
          opacity="0.9"
        />
      </svg>

      {/* Bottom red wavy fill */}
      <svg
        aria-hidden
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-0 right-0 w-full h-32 md:h-40 pointer-events-none"
      >
        <path
          d="M0,160 C240,80 480,200 720,140 C960,80 1200,200 1440,140 L1440,200 L0,200 Z"
          fill="#E63946"
          opacity="0.9"
        />
        <path
          d="M0,180 C240,120 480,210 720,170 C960,120 1200,210 1440,170 L1440,200 L0,200 Z"
          fill="#C22833"
          opacity="0.6"
        />
      </svg>

      {/* Decorative red dotted circle (top-right of content) */}
      <div
        aria-hidden
        className="hidden md:block absolute right-[28%] top-[30%] w-32 h-32 lg:w-44 lg:h-44 rounded-full border-2 border-dashed border-primary/70 animate-spin-slow"
      />

      {/* Side carousel arrows (decorative) */}
      <button
        type="button"
        aria-label="Previous slide"
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white items-center justify-center shadow-glow hover:bg-primary-dark transition-colors z-20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white items-center justify-center shadow-glow hover:bg-primary-dark transition-colors z-20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero content (left-aligned on desktop, like Bixos) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <span className="eyebrow">Premium Digital Studio</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.05] text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]"
          >
            We Build <span className="text-primary">Stunning</span>{" "}
            <br className="hidden sm:block" />
            Digital Experiences.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-7 text-base md:text-lg text-body max-w-xl leading-relaxed"
          >
            We help startups and businesses create modern websites, branding,
            and powerful digital products that stand out from the crowd.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex items-center gap-4 flex-wrap"
          >
            <a href="#contact" className="btn-primary group">
              Get In Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              aria-label="Watch showreel"
              className="btn-circle group"
            >
              <Play className="w-4 h-4 fill-current ml-0.5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-body text-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://i.pravatar.cc/80?img=12",
                  "https://i.pravatar.cc/80?img=32",
                  "https://i.pravatar.cc/80?img=47",
                ].map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Client avatar"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="font-medium">Trusted by 200+ teams</span>
            </div>
            <div className="h-6 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9 / 5 rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
