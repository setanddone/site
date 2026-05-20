/**
 * Project data — the case studies behind The Work and the Home preview.
 *
 * ⚠️ PLACEHOLDER CONTENT. Per site_copy.md "Notes for the Build":
 * all client/event names in brackets are placeholders, and the brief /
 * outcome copy below is illustrative in-voice filler to be replaced with
 * real case studies once the portfolio exists. No real numbers are
 * asserted — the launch note on The Work page is honest about being new.
 *
 * Photography: `hero` and `gallery` are intentionally empty for launch.
 * The ImageFrame component renders a branded fallback when no image is
 * present, and the real photo activates the full-bleed treatment once a
 * file is dropped into /public/images and wired here.
 */

export type ProjectType =
  | "Community Event"
  | "Milestone"
  | "Wedding"
  | "Custom";

export type Project = {
  slug: string;
  title: string;
  client: string;
  type: ProjectType;
  date: string;
  location: string;
  /** Image path under /public, or "" to use the branded fallback. */
  hero: string;
  oneLineDescription: string;
  brief: string;
  scope: string[];
  outcome: string;
  /** Image paths under /public; empty for launch. */
  gallery: string[];
  credits: {
    client: string;
    photographer: string;
    venue: string;
    year: string;
  };
  /** Surface on the Home page preview grid. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "carroll-creek-holiday-market-vol-i",
    title: "Carroll Creek Holiday Market — Vol. I",
    client: "Downtown Frederick Partnership",
    type: "Community Event",
    date: "December 2026",
    location: "Carroll Creek Park, Frederick MD",
    hero: "",
    oneLineDescription:
      "Four weekends. Forty vendors. One very cold Saturday.",
    brief:
      "The Partnership wanted a holiday market along Carroll Creek that felt like the town's own — not a pop-up dropped in from somewhere else. Four weekends, a working budget, and a hard date that wasn't moving.",
    scope: [
      "Vendor recruitment and contracts (40 vendors across 4 weekends)",
      "Layout and traffic-flow design for Carroll Creek Park",
      "Permitting and city coordination",
      "Marketing campaign and event PR",
      "Day-of staffing and run-of-show",
      "Sponsor activation",
    ],
    outcome:
      "Four weekends ran on schedule, rain and cold included. Vendors asked to come back before the last weekend was over. We're already planning Vol. II.",
    gallery: [],
    credits: {
      client: "Downtown Frederick Partnership",
      photographer: "TBD",
      venue: "Carroll Creek Park",
      year: "2026",
    },
    featured: true,
  },
  {
    slug: "the-patterson-50th",
    title: "The Patterson 50th",
    client: "The Patterson family",
    type: "Milestone",
    date: "September 2026",
    location: "Springfield Manor, Thurmont MD",
    hero: "",
    oneLineDescription:
      "A fiftieth anniversary that felt like a wedding the second time around.",
    brief:
      "Fifty years, two hundred people who mattered, and a couple who wanted to be guests at their own party. The family had the venue and the date. They needed someone to run the rest.",
    scope: [
      "Full-service planning and design",
      "Vendor sourcing and management",
      "Timeline and run-of-show",
      "Day-of coordination and staffing",
    ],
    outcome:
      "The Pattersons spent the evening at their table, not in the kitchen. That was the whole assignment.",
    gallery: [],
    credits: {
      client: "The Patterson family",
      photographer: "TBD",
      venue: "Springfield Manor",
      year: "2026",
    },
    featured: true,
  },
  {
    slug: "hannah-and-marco",
    title: "Hannah & Marco",
    client: "Hannah & Marco",
    type: "Wedding",
    date: "October 2026",
    location: "Linganore Winecellars, Mount Airy MD",
    hero: "",
    oneLineDescription: "Thirty-eight guests. One long table. No regrets.",
    brief:
      "A wedding that sounded more like a Saturday than a production. One long table, the people they actually wanted there, and a winery they already loved. Casual on purpose, but nothing left to chance.",
    scope: [
      "Partial planning and design",
      "Vendor coordination",
      "Timeline and run-of-show",
      "Day-of coordination",
    ],
    outcome:
      "Dinner ran long because nobody wanted to leave the table. The best kind of overtime.",
    gallery: [],
    credits: {
      client: "Hannah & Marco",
      photographer: "TBD",
      venue: "Linganore Winecellars",
      year: "2026",
    },
    featured: true,
  },
  {
    slug: "tenth-ward-spring-festival",
    title: "Tenth Ward Spring Festival",
    client: "Tenth Ward Distilling Co.",
    type: "Community Event",
    date: "May 2027",
    location: "Tenth Ward Distilling, Frederick MD",
    hero: "",
    oneLineDescription:
      "An afternoon of cocktails, live music, and a pretty good crowd.",
    brief:
      "A distillery that had become a community living room wanted an afternoon that felt the same way — open, easy, and full. Cocktails, a band, and room for the neighborhood to show up.",
    scope: [
      "Production management end-to-end",
      "Vendor and entertainment sourcing",
      "Permitting and alcohol coordination",
      "Marketing and signage",
      "Day-of staffing",
    ],
    outcome:
      "A good crowd, a good band, and a bar that never quite caught its breath. We'd call that a spring well started.",
    gallery: [],
    credits: {
      client: "Tenth Ward Distilling Co.",
      photographer: "TBD",
      venue: "Tenth Ward Distilling",
      year: "2027",
    },
    featured: false,
  },
];

/** Look up a single project by slug. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** All project slugs — for generateStaticParams on the case-study route. */
export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** The featured projects for the Home preview, capped at `count`. */
export function getFeatured(count = 3): Project[] {
  const featured = projects.filter((p) => p.featured);
  return (featured.length ? featured : projects).slice(0, count);
}
