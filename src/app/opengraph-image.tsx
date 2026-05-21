import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Default Open Graph / social-share image for the whole site.
 * 1200×630, Set & Done wordmark on Stone — per the deployment checklist.
 *
 * Brand-rendered with the real Fraunces (wordmark) + Inter (supporting
 * lines), bundled in ./_og as woff so generation has no runtime network
 * dependency. The period stays Oxblood.
 */

export const alt = "Set & Done — Event Production in Frederick, MD";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STONE = "#D9D2C2";
const INK = "#1A1814";
const OXBLOOD = "#6B2A2A";
const STONE_DARK = "#A89F8A";

// Read at build time — the route is static, so this runs during
// prerender (Node), not at runtime. fetch(file://) isn't supported by
// the prerender worker, so we read the bundled woff directly.
const fraunces = readFileSync(
  join(process.cwd(), "src/app/_og/fraunces-600.woff"),
);
const inter = readFileSync(join(process.cwd(), "src/app/_og/inter-400.woff"));

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: STONE,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontFamily: "Inter",
            fontSize: 26,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: OXBLOOD,
            marginBottom: 40,
          }}
        >
          Frederick · Maryland · Est. 2026
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 150,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: INK,
          }}
        >
          SET &amp; DONE<span style={{ color: OXBLOOD }}>.</span>
        </div>

        <div
          style={{
            width: 96,
            height: 1,
            background: STONE_DARK,
            margin: "44px 0",
          }}
        />

        <div
          style={{
            fontFamily: "Inter",
            fontSize: 34,
            color: STONE_DARK,
          }}
        >
          The work that makes the event work.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
      ],
    },
  );
}
