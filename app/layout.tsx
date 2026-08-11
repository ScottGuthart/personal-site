import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "Scott Guthart — Software Engineer",
  description:
    "Software engineer with full-stack, AI/LLMs, and data science experience, delivering solutions for Fortune 100 companies including CVS, Johnson & Johnson, Procter & Gamble, Progressive, and L'Oréal.",
  openGraph: {
    title: "Scott Guthart — Software Engineer",
    description:
      "Full-stack, AI/LLMs, and data science engineer based in New York.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivo.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
