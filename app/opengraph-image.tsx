import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Scott Guthart — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const headshotData = await readFile(join(process.cwd(), "public", "headshot.png"))
  const headshotSrc = `data:image/png;base64,${headshotData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#faf9f7",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left accent bar */}
        <div style={{ width: 16, height: "100%", backgroundColor: "#f97316" }} />

        {/* Text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 64px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#f97316",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              color: "#1c1917",
              lineHeight: 1.05,
              marginTop: 12,
            }}
          >
            Scott Guthart
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#57534e",
              marginTop: 20,
              lineHeight: 1.3,
              maxWidth: 560,
            }}
          >
            Full-Stack · AI/LLMs · Data Science
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              backgroundColor: "#f97316",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 600,
              padding: "16px 32px",
              borderRadius: 9999,
            }}
          >
            Get in touch — scott@guth.art
          </div>
        </div>

        {/* Headshot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: 72,
          }}
        >
          <img
            src={headshotSrc}
            width={220}
            height={275}
            style={{
              width: 220,
              height: 275,
              objectFit: "cover",
              borderRadius: 20,
              border: "4px solid #f97316",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  )
}
