import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { BRAND } from "@/lib/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? BRAND.url;

/**
 * Fraunces — the display typeface. Variable serif with a workshop,
 * slightly literary feel. Used for the wordmark, headlines, hero type.
 * Weights per INSTRUCTIONS: 300/400/500/600 + italic.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

/**
 * Inter — the workhorse. Clean geometric sans. Body copy, UI, nav.
 * Weights per INSTRUCTIONS: 300/400/500/600.
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Set & Done — Event Production in Frederick, MD",
  description:
    "A community-rooted event house producing festivals, markets, milestones, and the occasional wedding. Frederick, Maryland.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Set & Done",
    url: SITE_URL,
    title: "Set & Done — Event Production in Frederick, MD",
    description:
      "A community-rooted event house producing the moments that make a town feel like a town. Festivals, markets, milestones, and the occasional wedding we couldn't say no to.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Set & Done — Event Production in Frederick, MD",
    description:
      "A community-rooted event house producing the moments that make a town feel like a town. Frederick, Maryland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-stone text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1 scroll-mt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
