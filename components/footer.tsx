import Link from "next/link"
import { Building2, Mail } from "lucide-react"

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
              Επωνυμία Εταιρείας ΙΚΕ
            </h3>
            <p className="text-sm leading-relaxed">
              Ιδιωτική Κεφαλαιουχική Εταιρία
              <br />
              Νομική Μορφή: ΙΚΕ
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
                <Link href="/partners" className="hover:text-[oklch(0.98_0_0)] transition-colors">
                  Εταίροι & Διαχείριση
                </Link>
              </li>
              <li>
                <Link href="/purpose" className="hover:text-[oklch(0.98_0_0)] transition-colors">
                  Σκοπός Εταιρείας
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[oklch(0.98_0_0)]">Επικοινωνία</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@example-company.gr"
                  className="hover:text-[oklch(0.98_0_0)] transition-colors break-all"
                >
                  info@example-company.gr
                </a>
              </li>
              <li>
                Οδός Παραδείγματος 123
                <br />
                10000 Αθήνα
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
                123456789000
              </li>
              <li>
                <strong>Κεφάλαιο:</strong>
                <br />
                €10.000,00
              </li>
              <li>
                <strong>Κατάσταση:</strong>
                <br />
                Ενεργή
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
              <strong>Επωνυμία Εταιρείας Ιδιωτική Κεφαλαιουχική Εταιρία</strong> |<strong> Νομική Μορφή:</strong> ΙΚΕ |
              <strong> Αρ. Γ.Ε.ΜΗ.:</strong> 123456789000
            </p>
            <p>
              <strong>Έδρα:</strong> Αθήνα, Οδός Παραδείγματος 123, Τ.Κ. 10000 |<strong> Κεφάλαιο:</strong> €10.000,00 |
              <strong> Εγγυητικές Εισφορές:</strong> €0,00 |<strong> Κατάσταση:</strong> Ενεργή (Μη υπό εκκαθάριση)
            </p>
            <p>
              <strong>Ιστοσελίδα:</strong> https://example-company.gr |<strong> Email:</strong> info@example-company.gr
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
            © {new Date().getFullYear()} Επωνυμία Εταιρείας ΙΚΕ. Όλα τα δικαιώματα διατηρούνται.
          </p>
        </div>
      </div>
    </footer>
  )
}
