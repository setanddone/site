import { ImageResponse } from "next/og";

/**
 * Favicon — the Mark. Cream field, a hairline circle, and the Oxblood
 * period at center. Rendered as pure CSS shapes (no font dependency).
 */

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4EEE0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "2px solid #A89F8A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#6B2A2A",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
