import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-heading" })

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
    <html lang="en" className={cn("bg-background font-sans", geist.variable, geistMono.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
