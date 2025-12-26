import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "greek"] })

export const metadata: Metadata = {
  title: "Επωνυμία Εταιρείας ΙΚΕ - Ιδιωτική Κεφαλαιουχική Εταιρία",
  description: "Επίσημη ιστοσελίδα της Επωνυμία Εταιρείας ΙΚΕ με πλήρη στοιχεία σύμφωνα με τον ν.4072/2012",
  keywords: "ΙΚΕ, Ιδιωτική Κεφαλαιουχική Εταιρία, Ελλάδα, ΓΕΜΗ",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el">
      <body className={`${inter.className} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
