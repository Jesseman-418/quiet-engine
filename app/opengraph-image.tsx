import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Listing Engine — Resurrect dormant CRM leads";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, #1a1520 0%, #08070a 70%)",
          color: "#f4f1ea",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#b8a87a",
            fontWeight: 500,
          }}
        >
          The Listing Engine
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            marginTop: 40,
          }}
        >
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              fontWeight: 500,
              color: "#f4f1ea",
              maxWidth: 900,
            }}
          >
            Resurrect dormant{" "}
            <span style={{ color: "#d4b86a", fontStyle: "italic" }}>
              CRM leads.
            </span>
          </div>

          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#a8a09a",
              marginTop: 36,
              maxWidth: 820,
              letterSpacing: "-0.01em",
            }}
          >
            For top-producing real estate agents. Installed in 7 days. You own
            the system.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(244, 241, 234, 0.12)",
            paddingTop: 28,
            fontSize: 18,
            color: "#88807a",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>FUB</span>
            <span>·</span>
            <span>Lofty</span>
            <span>·</span>
            <span>Chime</span>
            <span>·</span>
            <span>kvCORE</span>
            <span>·</span>
            <span>Sierra</span>
            <span>·</span>
            <span>BoldTrail</span>
          </div>
          <div style={{ color: "#d4b86a" }}>15-min call →</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
