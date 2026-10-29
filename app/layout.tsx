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
  "MM Digital Marketing is a founder-led digital studio building thoughtful websites, branding, SEO, and marketing with a small, hands-on team.";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "MM Digital Marketing — Digital Design, Development & Marketing",
    template: "%s | MM Digital Marketing",
  },
  description: siteDescription,
  keywords: [
    "design agency",
    "web development",
    "UI UX design",
    "branding",
    "digital marketing",
    "SEO",
    "social media management",
    "MM Digital Marketing",
  ],
  authors: [{ name: "MM Digital Marketing" }],
  creator: "MM Digital Marketing",
  openGraph: {
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: "MM Digital Marketing",
    title: "MM Digital Marketing — Digital Design, Development & Marketing",
    description:
      "A founder-led digital studio building websites, branding, SEO, and marketing with a hands-on team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MM Digital Marketing",
    description:
      "A founder-led digital studio building websites, branding, SEO, and marketing with a hands-on team.",
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
