import Link from "next/link"
import { Building2, FileText, Users, Mail, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { company } from "./config/company"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-[oklch(0.25_0.02_240)] text-[oklch(0.98_0_0)] py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{company.tradeName}</h1>
            <p className="text-lg md:text-xl text-[oklch(0.85_0.02_240)] mb-8 text-pretty leading-relaxed">
              Ιδιωτική Κεφαλαιουχική Εταιρία με έδρα την Ελλάδα. Παρέχουμε επαγγελματικές υπηρεσίες με διαφάνεια,
              αξιοπιστία και πλήρη συμμόρφωση προς το ελληνικό νομικό πλαίσιο.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[oklch(0.98_0_0)] text-[oklch(0.25_0.02_240)] hover:bg-[oklch(0.92_0_0)]"
              >
                <Link href="/company-info">Στοιχεία Εταιρείας</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 md:py-24 bg-[oklch(0.97_0_0)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[oklch(0.25_0.02_240)]">
              Υποχρεωτικές Δημοσιεύσεις
            </h2>
            <p className="text-lg text-[oklch(0.45_0_0)] max-w-2xl mx-auto text-pretty leading-relaxed">
              Σύμφωνα με τον ν.4072/2012, άρθρο 47, η εταιρεία μας διατηρεί ιστοσελίδα με όλες τις απαιτούμενες
              πληροφορίες.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Link href="/company-info" className="group">
              <Card className="h-full transition-all hover:shadow-lg border-[oklch(0.85_0_0)]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.25_0.02_240)] text-[oklch(0.98_0_0)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[oklch(0.25_0.02_240)]">Στοιχεία Εταιρείας</h3>
                  <p className="text-sm text-[oklch(0.45_0_0)] text-pretty leading-relaxed">
                    Πλήρη στοιχεία, ΓΕΜΗ, έδρα, κεφάλαιο
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/purpose" className="group">
              <Card className="h-full transition-all hover:shadow-lg border-[oklch(0.85_0_0)]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.25_0.02_240)] text-[oklch(0.98_0_0)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[oklch(0.25_0.02_240)]">Σκοπός Εταιρείας</h3>
                  <p className="text-sm text-[oklch(0.45_0_0)] text-pretty leading-relaxed">
                    Αντικείμενο και δραστηριότητες
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[oklch(0.98_0_0)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-[oklch(0.25_0.02_240)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.25_0.02_240)]">Νομική Συμμόρφωση</h2>
            </div>
            <div className="space-y-4 text-[oklch(0.35_0_0)] leading-relaxed">
              <p className="text-lg">
                Η εταιρεία μας λειτουργεί ως <strong>Ιδιωτική Κεφαλαιουχική Εταιρία (ΙΚΕ)</strong> σύμφωνα με τον
                ν.4072/2012 και διατηρεί πλήρη διαφάνεια στις εταιρικές της πληροφορίες.
              </p>
              <p className="text-lg">
                Σύμφωνα με το άρθρο 47 του νόμου, κάθε ΙΚΕ υποχρεούται να διατηρεί ιστοσελίδα όπου δημοσιεύονται όλα τα
                απαραίτητα στοιχεία της εταιρείας, των εταίρων και της διαχείρισης. Η παρούσα ιστοσελίδα πληροί πλήρως
                αυτές τις υποχρεώσεις.
              </p>
              <p className="text-lg">
                Το εταιρικό email χρησιμοποιείται για την αποστολή προσκλήσεων σε Γενικές Συνελεύσεις, γραπτές αποφάσεις
                των εταίρων και άλλες επίσημες ανακοινώσεις.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
