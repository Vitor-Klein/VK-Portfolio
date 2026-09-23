import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0908",
          backgroundImage:
            "radial-gradient(circle at 12% 15%, rgba(240,173,15,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,201,74,0.22), transparent 50%)",
          color: "#f4f1ea",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#ffc94a",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 48, height: 2, background: "#ffc94a" }} />
          Portfólio
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#b4afa4", marginTop: 16 }}>
          {profile.role} · Node.js · React.js · Flutter · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
