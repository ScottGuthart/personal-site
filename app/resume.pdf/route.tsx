import { renderToBuffer } from "@react-pdf/renderer"
import QRCode from "qrcode"
import { ResumePdf } from "@/lib/resume-pdf"
import { contact } from "@/lib/resume-data"

export const runtime = "nodejs"
export const dynamic = "force-static"

// UTM params let Vercel Web Analytics attribute visits from the printed resume
// QR code (visible in the dashboard's referrer / UTM breakdown).
const SITE_QR_URL =
  "https://guth.art/?utm_source=resume&utm_medium=qr&utm_campaign=resume_pdf"

export async function GET() {
  const qrCodeDataUrl = await QRCode.toDataURL(SITE_QR_URL, {
    margin: 1,
    width: 264,
    errorCorrectionLevel: "M",
    color: { dark: "#1a1a1aff", light: "#ffffffff" },
  })

  const buffer = await renderToBuffer(<ResumePdf qrCodeDataUrl={qrCodeDataUrl} />)
  const fileName = `${contact.name.replace(/\s+/g, "-")}-Resume.pdf`

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${fileName}"`,
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  })
}
