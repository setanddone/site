import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

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
  title: "Set & Done — Event Production in Frederick, MD",
  description:
    "A community-rooted event house producing festivals, markets, milestones, and the occasional wedding. Frederick, Maryland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-stone text-ink antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
