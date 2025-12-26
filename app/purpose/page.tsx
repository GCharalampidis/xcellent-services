import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Target } from "lucide-react"

export default function PurposePage() {
  return (
    <div className="min-h-screen py-12 md:py-20 bg-[oklch(0.97_0_0)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.25_0.02_240)]">Σκοπός της Εταιρείας</h1>
            <p className="text-lg text-[oklch(0.45_0_0)] leading-relaxed">
              Αντικείμενο και δραστηριότητες σύμφωνα με το Καταστατικό
            </p>
          </div>

          {/* Main Purpose Card */}
          <Card className="mb-6 border-[oklch(0.85_0_0)]">
            <CardHeader className="bg-[oklch(0.93_0.01_240)]">
              <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                <Target className="w-6 h-6" />
                Κύριος Σκοπός
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base text-[oklch(0.35_0_0)] leading-relaxed mb-4">Σκοπός της εταιρείας είναι:</p>
              <div className="pl-4 border-l-4 border-[oklch(0.25_0.02_240)] space-y-3">
                <p className="text-base text-[oklch(0.25_0.02_240)] leading-relaxed">
                  Η παροχή επαγγελματικών υπηρεσιών συμβούλου επιχειρήσεων, η διαχείριση έργων, και η υποστήριξη
                  επιχειρηματικής ανάπτυξης σε εταιρείες και οργανισμούς του ιδιωτικού και δημόσιου τομέα.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Business Activities Card */}
          <Card className="mb-6 border-[oklch(0.85_0_0)]">
            <CardHeader className="bg-[oklch(0.93_0.01_240)]">
              <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                <FileText className="w-6 h-6" />
                Επιχειρηματικές Δραστηριότητες
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base text-[oklch(0.35_0_0)] leading-relaxed mb-4">
                Για την επίτευξη του σκοπού της, η εταιρεία δύναται να ασκεί τις ακόλουθες δραστηριότητες:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base text-[oklch(0.25_0.02_240)] leading-relaxed list-disc">
                  Παροχή συμβουλευτικών υπηρεσιών σε θέματα επιχειρηματικής στρατηγικής και ανάπτυξης
                </li>
                <li className="text-base text-[oklch(0.25_0.02_240)] leading-relaxed list-disc">
                  Διαχείριση και υλοποίηση επιχειρηματικών έργων
                </li>
                <li className="text-base text-[oklch(0.25_0.02_240)] leading-relaxed list-disc">
                  Ανάλυση αγοράς και ερευνητικές υπηρεσίες
                </li>
                <li className="text-base text-[oklch(0.25_0.02_240)] leading-relaxed list-disc">
                  Εκπαίδευση και ανάπτυξη προσωπικού επιχειρήσεων
                </li>
                <li className="text-base text-[oklch(0.25_0.02_240)] leading-relaxed list-disc">
                  Υπηρεσίες τεχνολογικής και ψηφιακής καινοτομίας
                </li>
                <li className="text-base text-[oklch(0.25_0.02_240)] leading-relaxed list-disc">
                  Συμμετοχή σε επενδυτικά έργα και επιχειρηματικές πρωτοβουλίες
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Legal Framework Card */}
          <Card className="bg-[oklch(0.93_0.01_240)] border-[oklch(0.25_0.02_240)]">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-[oklch(0.25_0.02_240)]">Νομικό Πλαίσιο</h3>
              <p className="text-sm text-[oklch(0.35_0_0)] leading-relaxed">
                Ο σκοπός της εταιρείας όπως περιγράφεται παραπάνω είναι σύμφωνος με το Καταστατικό που έχει κατατεθεί
                στο Γ.Ε.ΜΗ. και τις διατάξεις του ν.4072/2012 περί Ιδιωτικών Κεφαλαιουχικών Εταιριών. Η εταιρεία
                δεσμεύεται να ασκεί τις δραστηριότητές της εντός του νόμιμου πλαισίου και σύμφωνα με τις κείμενες
                διατάξεις.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
