"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Headphones,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "@/components/Logo";
import { CONTACT, SOCIAL_LINKS, type SocialKey } from "@/lib/site";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_ICONS: Record<SocialKey, typeof Facebook> = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-white/10 shadow-card"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobile}
          className="group shrink-0 transition-transform hover:scale-[1.03]"
          aria-label="MM Brandvista home"
        >
          <Logo />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster — socials + phone + CTA + mobile toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Social icons (desktop) */}
          <div className="hidden xl:flex items-center gap-3 pr-4 border-r border-white/15">
            {SOCIAL_LINKS.map((s) => {
              const Icon = SOCIAL_ICONS[s.key];
              return (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Phone */}
          <a
            href={CONTACT.phoneHref}
            className="hidden md:flex items-center gap-2.5 text-white"
          >
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Headphones className="w-4 h-4 text-white" />
            </span>
            <span className="hidden lg:flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-widest text-secondary">
                Call us
              </span>
              <span className="text-sm font-semibold">
                {CONTACT.phoneDisplay}
              </span>
            </span>
          </a>

          {/* Quote CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5 rounded-md"
          >
            Get A Quote
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-11 h-11 rounded-xl glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden mx-6 mb-4 glass-card overflow-hidden"
          >
            <ul className="flex flex-col py-3">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMobile}
                    className="block px-6 py-3 text-base text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="px-5 pt-3 pb-4 space-y-3">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Headphones className="w-4 h-4 text-white" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-secondary">
                      Call us
                    </p>
                    <p className="text-sm font-semibold">
                      {CONTACT.phoneDisplay}
                    </p>
                  </div>
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-3 text-white break-all"
                >
                  <span className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-secondary">
                      Email us
                    </p>
                    <p className="text-sm font-semibold break-all">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-2 pt-1">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = SOCIAL_ICONS[social.key];
                    return (
                      <a
                        key={social.key}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.label} (opens in a new tab)`}
                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="btn-primary w-full text-sm"
                >
                  Get A Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
