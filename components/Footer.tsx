"use client";

import {
  Sparkles,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";

const FOOTER_LINKS: { title: string; links: { label: string; href: string }[] }[] =
  [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "UI/UX Design", href: "#services" },
        { label: "Web Development", href: "#services" },
        { label: "Branding", href: "#services" },
        { label: "Digital Marketing", href: "#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#portfolio" },
        { label: "Careers", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ];

const SOCIALS = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="relative bg-background/60 backdrop-blur-xl border-t border-white/5">
        <div className="section-container px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <a
                href="#home"
                className="inline-flex items-center gap-2"
                aria-label="NovaCraft Agency"
              >
                <span className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Sparkles className="w-5 h-5 text-white" strokeWidth={2.4} />
                </span>
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  Nova<span className="text-gradient">Craft</span>
                </span>
              </a>

              <p className="mt-5 text-secondary text-sm leading-relaxed max-w-md">
                A premium digital design studio helping ambitious brands launch
                stunning websites, products, and identities that win hearts and
                customers.
              </p>

              <div className="mt-6 flex items-center gap-2">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {FOOTER_LINKS.map((col) => (
                <div key={col.title}>
                  <h4 className="font-display font-semibold text-white">
                    {col.title}
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-secondary hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary text-center sm:text-left">
              © {year} NovaCraft Agency. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-sm text-secondary">
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a
                href="#home"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                Back to top
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
