import { ImageResponse } from "next/og";

/**
 * Apple touch icon — the Mark at 180×180. Same composition as the
 * favicon, scaled up: Cream field, hairline circle, Oxblood period.
 */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
            width: 124,
            height: 124,
            borderRadius: "50%",
            border: "5px solid #A89F8A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
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
