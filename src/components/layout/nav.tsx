"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/site";
import { Wordmark } from "@/components/brand/wordmark";

/**
 * Nav — top navigation on every page.
 *
 * Brand discipline: Stone background, Ink links, Oxblood reserved for the
 * active link's underline + the wordmark period. No shadows; a single
 * Stone Dark hairline appears beneath the bar once the user scrolls.
 *
 * Desktop: Wordmark left, links right.
 * Mobile:  Wordmark left, hamburger right → full-screen Stone overlay.
 *
 * Client Component: needs usePathname (active link), useState (mobile
 * menu), and a scroll listener (hairline-on-scroll).
 */
export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hairline appears once the page is scrolled past the hero edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-stone/95 backdrop-blur-sm transition-colors",
        scrolled ? "border-b-[0.5px] border-rule" : "border-b-[0.5px] border-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-20 md:px-12"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="shrink-0"
          aria-label={`${"Set & Done"} — home`}
        >
          <Wordmark size="sm" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative font-body text-sm font-medium tracking-small-cap-tight uppercase transition-colors",
                  "text-ink hover:text-oxblood",
                  // Active link gets a 0.5px Oxblood underline.
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-oxblood after:transition-opacity",
                  isActive(link.href) ? "after:opacity-100" : "after:opacity-0",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center justify-center text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-stone px-6 pb-12 pt-8 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block border-b-[0.5px] border-rule py-5 font-display text-3xl",
                    isActive(link.href) ? "text-oxblood" : "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
