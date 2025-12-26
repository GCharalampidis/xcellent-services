"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "../app/config/company"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Αρχική" },
    { href: "/company-info", label: "Στοιχεία Εταιρείας" },
    { href: "/purpose", label: "Σκοπός" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[oklch(0.98_0_0)] border-b border-[oklch(0.85_0_0)] shadow-sm">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-[oklch(0.25_0.02_240)] hover:text-[oklch(0.35_0.02_240)] transition-colors"
          >
            <img src="/favicon.svg" alt="Bread and Flavors Logo" className="w-8 h-8" />
            <span className="hidden sm:inline">{company.tradeName}</span>
            <span className="sm:hidden">ΙΚΕ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[oklch(0.35_0_0)] hover:text-[oklch(0.25_0.02_240)] hover:bg-[oklch(0.95_0_0)] rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[oklch(0.25_0.02_240)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[oklch(0.85_0_0)]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[oklch(0.35_0_0)] hover:text-[oklch(0.25_0.02_240)] hover:bg-[oklch(0.95_0_0)] rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
