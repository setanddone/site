# Placeholder Photography — Launch Brief

For the launch site, all images come from the **Visit Frederick press
library** (free, attribution required): https://www.visitfrederick.org/media/

Document the photographer credit for each file in the `credits` field of
the relevant entry in `src/lib/projects.ts` or directly in the page that
uses the image. Replace these with real event photography (Phase 2) once
the portfolio exists.

## Required for launch

Drop files in this folder with the exact names below. Each is referenced
from a specific page; if the file is missing the page will show a broken
image at build time, which is intentional — it forces the slot to be
filled before we ship.

| Filename                          | Where it appears                                        | Notes                                                                |
| --------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| `home-hero.jpg`                   | Home — full-bleed hero (Section 1)                      | Wide landscape, ≥ 2400 × 1600. Carroll Creek Park or downtown.       |
| `kimberly-portrait.jpg`           | Home — About Preview · About — Section 1                | Portrait. ~ 1200 × 1600 (3:4). Natural light. Documentary, not posed. |
| `holiday-market-hero.jpg`         | The Work — Tile 1 + case study `carroll-creek-holiday-market-vol-i` | 1600 × 1067 (3:2). Market crowd or evening lights.                  |
| `patterson-50th-hero.jpg`         | The Work — Tile 2 + case study `the-patterson-50th`     | 1600 × 1067 (3:2). Springfield Manor or similar barn venue.          |
| `hannah-marco-hero.jpg`           | The Work — Tile 3 + case study `hannah-and-marco`       | 1600 × 1067 (3:2). Winery long-table shot.                           |
| `tenth-ward-spring-hero.jpg`      | The Work — Tile 4 + case study `tenth-ward-spring-festival` | 1600 × 1067 (3:2). Distillery / cocktails / live music.          |
| `carroll-creek-evening.jpg`       | What We Do — Community Events section                   | Landscape. Stringlights / golden hour.                               |
| `frederick-main-street.jpg`       | About — Why Frederick section                           | Landscape. Downtown streetscape, daytime.                            |

## Art direction (Brand Book §12)

- **Natural light only.** Golden hour preferred. No flash.
- **Wide environmental → tight detail.** Skip the awkward middle-distance.
- **People doing things, not posing.** Real props. Real produce. Real hands.
- **Slight warm grade.** Lifted shadows. Never crushed blacks.
- **Forbidden:** drone wedding clichés · fisheye · heavy moody filters · posed group smiles.

## OG / favicon (not in this folder)

These live at `public/images/og-image.png` (1200 × 630, Set & Done
wordmark on Stone) and `public/favicon.ico` (Oxblood period in a hairline
circle). To be generated as part of Step 10.
