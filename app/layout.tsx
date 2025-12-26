import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"
import { company } from "./config/company"

const inter = Inter({ subsets: ["latin", "greek"] })

export const metadata: Metadata = {
  title: `${company.tradeName} ΙΚΕ - Επίσημη Ιστοσελίδα`,
  description: `Επίσημη ιστοσελίδα της ${company.tradeName} ΙΚΕ με πλήρη στοιχεία σύμφωνα με τον ν.4072/2012`,
  keywords: [
    "ΙΚΕ",
    "Ιδιωτική Κεφαλαιουχική Εταιρεία",
    "Εταιρεία",
    "Στοιχεία Εταιρείας",
    "Νομικά Στοιχεία",
    "Ελληνική Εταιρεία",
    "Σύσταση ΙΚΕ",
    "Εταιρικό Καταστατικό",
    "Διαχείριση Εταιρείας",
    "Σκοπός Εταιρείας",
    "Επικοινωνία Εταιρείας",
  ],
  authors: [{ name: company.tradeName, url: company.website }],
  generator: `v0.app`,
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96"
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${inter.className} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
