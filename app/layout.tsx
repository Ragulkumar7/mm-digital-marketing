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

export const metadata: Metadata = {
  metadataBase: new URL("https://novacraft.example.com"),
  title: {
    default: "NovaCraft — Modern Digital Design & Development Studio",
    template: "%s | NovaCraft",
  },
  description:
    "NovaCraft is a premium digital design agency crafting stunning websites, branding, and digital products for ambitious startups and global brands.",
  keywords: [
    "design agency",
    "web development",
    "UI UX design",
    "branding",
    "digital marketing",
    "startup design",
    "SaaS landing page",
    "NovaCraft",
  ],
  authors: [{ name: "NovaCraft Agency" }],
  creator: "NovaCraft Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novacraft.example.com",
    siteName: "NovaCraft",
    title: "NovaCraft — Modern Digital Design & Development Studio",
    description:
      "Premium digital design agency crafting stunning websites, branding, and digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaCraft",
    description:
      "Premium digital design agency crafting stunning websites, branding, and digital products.",
    creator: "@novacraft",
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
