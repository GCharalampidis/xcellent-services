import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin, Mail, Globe, Badge } from "lucide-react"
import { company } from "../config/company"

export default function CompanyInfoPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 bg-[oklch(0.97_0_0)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.25_0.02_240)]">
              Στοιχεία Εταιρείας
            </h1>
            <p className="text-lg text-[oklch(0.45_0_0)] leading-relaxed">Σύμφωνα με το άρθρο 47 του ν.4072/2012</p>
          </div>

          {/* Company Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <Card className="border-[oklch(0.85_0_0)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                  <Building2 className="w-5 h-5" />
                  Βασικά Στοιχεία
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] mb-1">Επωνυμία Εταιρείας</dt>
                  <dd className="text-base text-[oklch(0.25_0.02_240)]">
                    {company.legalName}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] mb-1">Διακριτικός Τίτλος</dt>
                  <dd className="text-base text-[oklch(0.25_0.02_240)]">Επωνυμία Εταιρείας ΙΚΕ</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] mb-1">Νομική Μορφή</dt>
                  <dd className="text-base text-[oklch(0.25_0.02_240)] font-semibold">
                    Ιδιωτική Κεφαλαιουχική Εταιρία (ΙΚΕ)
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] mb-1">Κατάσταση Εταιρείας</dt>
                  <dd className="text-base text-[oklch(0.25_0.02_240)]">Ενεργή (Μη υπό εκκαθάριση)</dd>
                </div>
              </CardContent>
            </Card>

            {/* Registration */}
            <Card className="border-[oklch(0.85_0_0)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                  <Badge className="w-5 h-5" />
                  Μητρώο & Κεφάλαιο
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] mb-1">Αριθμός Γ.Ε.ΜΗ.</dt>
                  <dd className="text-base text-[oklch(0.25_0.02_240)] font-mono">
                    {company.gemiNumber}
                  </dd>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-[oklch(0.85_0_0)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                  <MapPin className="w-5 h-5" />
                  Έδρα & Διεύθυνση
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] mb-1">Έδρα Εταιρείας</dt>
                  <dd className="text-base text-[oklch(0.25_0.02_240)]">
                    {company.address.city}, {company.address.country}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] mb-1">Πλήρης Ταχυδρομική Διεύθυνση</dt>
                  <dd className="text-base text-[oklch(0.25_0.02_240)]">
                    {company.address.street} {company.address.number}
                    <br />
                    Τ.Κ. {company.address.postalCode}, {company.address.city}
                    <br />
                    {company.address.country}
                  </dd>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Web */}
            <Card className="border-[oklch(0.85_0_0)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                  <Globe className="w-5 h-5" />
                  Επικοινωνία & Ιστοσελίδα
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] mb-1">Εταιρική Ιστοσελίδα</dt>
                  <dd className="text-base text-[oklch(0.25_0.02_240)]">
                    {company.website}
                  </dd>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legal Notice */}
          <Card className="mt-8 bg-[oklch(0.93_0.01_240)] border-[oklch(0.25_0.02_240)]">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-[oklch(0.25_0.02_240)]">Νομική Σημείωση</h3>
              <p className="text-sm text-[oklch(0.35_0_0)] leading-relaxed">
                Τα παραπάνω στοιχεία δημοσιεύονται σύμφωνα με την υποχρέωση του άρθρου 47 του ν.4072/2012 περί Ιδιωτικών
                Κεφαλαιουχικών Εταιριών. Όλες οι πληροφορίες είναι ακριβείς και ενημερωμένες σύμφωνα με τα στοιχεία που
                έχουν καταχωρηθεί στο Γ.Ε.ΜΗ.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
