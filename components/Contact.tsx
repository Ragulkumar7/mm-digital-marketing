"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { CONTACT, SOCIAL_LINKS, type SocialKey } from "@/lib/site";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{7,30}$/;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_STORAGE_KEY = "mm-contact-submission-times";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT.email,
    href: CONTACT.emailHref,
  },
  {
    icon: Phone,
    label: "Call us",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
];

const SOCIAL_ICONS: Record<SocialKey, typeof Facebook> = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
};

const SERVICE_OPTIONS = [
  "Content Creation",
  "Social Media Management",
  "Graphic Designing",
  "Video Editing",
  "Cinematography",
  "Meta Ads Management",
  "Website Development",
  "Google Ads Management",
  "SaaS Solutions",
  "Personal Branding",
  "B2B, B2C & D2C Business Development",
  "Artificial Intelligence Agency",
  "Other",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const subject = data.subject.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name is too short.";
  } else if (name.length > 100) {
    errors.name = "Name must be 100 characters or fewer.";
  }

  if (!email) {
    errors.email = "Please enter your email.";
  } else if (email.length > 254 || !EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (phone && !PHONE_RE.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (subject.length > 150) {
    errors.subject = "Please keep the subject under 150 characters.";
  }

  if (!message) {
    errors.message = "Please write a short message.";
  } else if (message.length < 10) {
    errors.message = "Message should be at least 10 characters.";
  } else if (message.length > 5000) {
    errors.message = "Message must be 5000 characters or fewer.";
  }

  return errors;
}

function getRecentSubmissions(): number[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const cutoff = Date.now() - RATE_LIMIT_WINDOW_MS;
    return parsed.filter(
      (value): value is number =>
        typeof value === "number" &&
        Number.isFinite(value) &&
        value > cutoff
    );
  } catch {
    return [];
  }
}

function recordSubmission() {
  if (typeof window === "undefined") return;

  try {
    const next = [...getRecentSubmissions(), Date.now()];
    window.localStorage.setItem(
      RATE_LIMIT_STORAGE_KEY,
      JSON.stringify(next)
    );
  } catch {
    return;
  }
}

export default function Contact() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const submittingRef = useRef(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === "success" || status === "error") {
      setStatus("idle");
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading" || submittingRef.current) return;

    const validation = validate(data);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setStatus("idle");
      setErrorMessage(null);
      return;
    }

    if (data.website.trim()) {
      setStatus("error");
      setErrorMessage(null);
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
      );
      setStatus("error");
      setErrorMessage(null);
      return;
    }

    if (getRecentSubmissions().length >= RATE_LIMIT_MAX) {
      setStatus("error");
      setErrorMessage(
        `You have reached the submission limit. Please try again later or contact us directly at ${CONTACT.email}.`
      );
      return;
    }

    submittingRef.current = true;
    setStatus("loading");
    setErrorMessage(null);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone.trim() || "Not provided",
          subject: data.subject.trim() || "Not provided",
          message: data.message.trim(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      if (result.status !== 200) {
        throw new Error(`EmailJS returned status ${result.status}`);
      }

      recordSubmission();
      setStatus("success");
      setData(INITIAL);
    } catch (error) {
      console.error("EmailJS contact submission failed.", error);
      setStatus("error");
      setErrorMessage(null);
    } finally {
      submittingRef.current = false;
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contact" className="section relative">
      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="pill">Get in touch</span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="mt-5 text-secondary text-base md:text-lg leading-relaxed">
            Have a project in mind? Send us a message and we&apos;ll get back to
            you as soon as possible.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Info column */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {CONTACT_INFO.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4 glass-card gradient-border p-5 transition-all hover:-translate-y-0.5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary/20 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-widest text-secondary">
                      {info.label}
                    </p>
                    <p className="mt-1 font-medium text-white break-all">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="glass-card p-5">
              <p className="text-[11px] uppercase tracking-widest text-secondary">
                Follow us
              </p>
              <div className="mt-3 flex items-center gap-2">
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
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-busy={isLoading}
              className="glass-card gradient-border p-7 md:p-10"
            >
              {/* Honeypot - hidden from real visitors and checked before sending */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={data.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    required
                    value={data.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="input-modern"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-xs text-red-400"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    value={data.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@company.com"
                    className="input-modern"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-xs text-red-400"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Phone Number{" "}
                    <span className="font-normal text-secondary">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    value={data.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 00000 00000"
                    className="input-modern"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-2 text-xs text-red-400"
                      role="alert"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Service of Interest{" "}
                    <span className="font-normal text-secondary">
                      (optional)
                    </span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={data.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className="input-modern appearance-none [&>option]:bg-surface [&>option]:text-white"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="mt-2 text-xs text-red-400"
                      role="alert"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={5000}
                  required
                  value={data.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us a little about your project, goals, and timeline..."
                  className="input-modern resize-none"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-xs text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-secondary">
                  We&apos;ll only use your details to respond to this enquiry.
                </p>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary min-w-[170px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div aria-live="polite">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-6 flex items-start gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-sm"
                      role="status"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>
                        Thank you for contacting us! Your message has been
                        submitted successfully. We&apos;ll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-6 flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>
                        {errorMessage ?? (
                          <>
                            We couldn&apos;t send your message right now. Please
                            try again or contact us directly at{" "}
                            <a
                              href={CONTACT.emailHref}
                              className="font-medium underline underline-offset-2 hover:text-white break-all"
                            >
                              {CONTACT.email}
                            </a>
                            .
                          </>
                        )}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
