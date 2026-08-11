import { createElement } from "react"
import { renderToBuffer } from "@react-pdf/renderer"
import { ResumePdf } from "@/lib/resume-pdf"
import { contact } from "@/lib/resume-data"

export const runtime = "nodejs"
export const dynamic = "force-static"

export async function GET() {
  const buffer = await renderToBuffer(createElement(ResumePdf))
  const fileName = `${contact.name.replace(/\s+/g, "-")}-Resume.pdf`

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${fileName}"`,
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  })
}
