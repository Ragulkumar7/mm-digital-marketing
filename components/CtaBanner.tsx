"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section aria-label="Call to action" className="section relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-card gradient-border p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="max-w-xl">
            <span className="pill">Get in touch</span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="mt-4 text-secondary leading-relaxed">
              Have a project in mind? Send us a message and we&apos;ll get back
              to you within 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary shrink-0 group self-start md:self-center"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
