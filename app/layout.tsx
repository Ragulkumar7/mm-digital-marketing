import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "@/styles/globals.css";

// Body font — clean, neutral sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

// Display font — bold geometric for headings
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Mono accent — used for eyebrow labels & small captions
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteDescription =
  "MM Brandvista is a founder-led digital marketing agency offering content creation, social media management, graphic design, video production, Meta Ads, Google Ads, website development, SaaS solutions, and AI business solutions with a small, hands-on team.";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default:
      "MM Brandvista — Digital Marketing Services & Creative Studio",
    template: "%s | MM Brandvista",
  },
  description: siteDescription,
  keywords: [
    "digital marketing services",
    "social media management",
    "content creation",
    "graphic design",
    "video production",
    "Meta Ads management",
    "Google Ads management",
    "website development",
    "SaaS solutions",
    "AI business solutions",
    "personal branding",
    "business development",
    "data visualization",
    "MM Brandvista",
  ],
  authors: [{ name: "MM Brandvista" }],
  creator: "MM Brandvista",
  openGraph: {
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: "MM Brandvista",
    title: "MM Brandvista — Digital Marketing Services & Creative Studio",
    description:
      "A founder-led digital marketing agency offering content creation, social media management, graphic design, video production, Meta Ads, Google Ads, website development, SaaS, and AI business solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MM Brandvista",
    description:
      "A founder-led digital marketing agency offering content creation, social media management, graphic design, video production, Meta Ads, Google Ads, website development, SaaS, and AI business solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
