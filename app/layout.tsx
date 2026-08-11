import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-heading" })

const siteTitle = "Scott Guthart — Software Engineer"
const siteDescription =
  "Full-stack, AI/LLMs, and data science engineer based in New York, delivering solutions for Fortune 100 companies. Let's build something — get in touch at scott@guth.art."

export const metadata: Metadata = {
  metadataBase: new URL("https://guth.art"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Scott Guthart",
    "Software Engineer",
    "Full-Stack Engineer",
    "AI Engineer",
    "LLMs",
    "Data Science",
    "New York",
  ],
  authors: [{ name: "Scott Guthart" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://guth.art",
    siteName: "Scott Guthart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
