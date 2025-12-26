import Link from "next/link"
import { Building2, Mail } from "lucide-react"
import { company } from "../app/config/company"

export function Footer() {
  return (
    <footer className="bg-[oklch(0.25_0.02_240)] text-[oklch(0.85_0.02_240)] mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[oklch(0.98_0_0)] flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              {company.tradeName}
            </h3>
            <p className="text-sm leading-relaxed">
              Νομική Μορφή: {company.legalForm}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[oklch(0.98_0_0)]">Πληροφορίες</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company-info" className="hover:text-[oklch(0.98_0_0)] transition-colors">
                  Στοιχεία Εταιρείας
                </Link>
              </li>
              <li>
                <Link href="/purpose" className="hover:text-[oklch(0.98_0_0)] transition-colors">
                  Σκοπός Εταιρείας
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-[oklch(0.98_0_0)]">Νομικά Στοιχεία</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Αρ. Γ.Ε.ΜΗ.:</strong>
                <br />
                {company.gemiNumber}
              </li>
              <li>
                <strong>Κατάσταση:</strong>
                <br />
                {company.status}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Disclosure Bar */}
      <div className="border-t border-[oklch(0.35_0.02_240)] bg-[oklch(0.20_0.02_240)] text-[oklch(0.85_0.02_240)]">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="text-xs leading-relaxed space-y-2">
            <p>
              <strong>Επωνυμία Εταιρείας {company.legalForm}</strong> |<strong> Νομική Μορφή:</strong> {company.legalForm} |
              <strong> Αρ. Γ.Ε.ΜΗ.:</strong> {company.gemiNumber}
            </p>
            <p>
              <strong>Ιστοσελίδα:</strong> {company.website}
            </p>
            <p className="pt-2 text-[oklch(0.75_0.02_240)]">
              Στοιχεία δημοσιευμένα σύμφωνα με το άρθρο 47 του ν.4072/2012
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[oklch(0.35_0.02_240)] bg-[oklch(0.18_0.02_240)]">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <p className="text-xs text-center text-[oklch(0.75_0.02_240)]">
            © {new Date().getFullYear()} {company.legalName}. Όλα τα δικαιώματα διατηρούνται.
          </p>
        </div>
      </div>
    </footer>
  )
}
