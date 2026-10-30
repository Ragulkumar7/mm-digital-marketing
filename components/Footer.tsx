"use client";

import {
  Linkedin,
  Facebook,
  Instagram,
  ArrowUp,
  Mail,
  Phone,
} from "lucide-react";
import Logo from "@/components/Logo";
import { CONTACT, SOCIAL_LINKS, type SocialKey } from "@/lib/site";

const FOOTER_LINKS: { title: string; links: { label: string; href: string }[] }[] =
  [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Team", href: "#team" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Content Creation", href: "#services" },
        { label: "Social Media Management", href: "#services" },
        { label: "Graphic Designing", href: "#services" },
        { label: "Video Editing", href: "#services" },
        { label: "Meta Ads Management", href: "#services" },
        { label: "Google Ads Management", href: "#services" },
        { label: "Website Development", href: "#services" },
        { label: "SaaS Solutions", href: "#services" },
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

const SOCIAL_ICONS: Record<SocialKey, typeof Facebook> = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
};

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
                className="inline-flex items-center"
                aria-label="MM Digital Marketing"
              >
                <Logo />
              </a>

              <p className="mt-5 text-secondary text-sm leading-relaxed max-w-md">
                A digital studio helping ambitious brands launch thoughtful
                websites, products, and identities — led by a small team that
                values craft, clarity, and communication.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2.5 text-secondary hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" aria-hidden />
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.emailHref}
                    className="inline-flex items-center gap-2.5 text-secondary hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-primary" aria-hidden />
                    {CONTACT.email}
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.key];
                  return (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (opens in a new tab)`}
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
              © {year} MM Digital Marketing. All rights reserved.
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
