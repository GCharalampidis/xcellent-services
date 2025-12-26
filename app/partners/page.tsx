import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCog } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 bg-[oklch(0.97_0_0)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.25_0.02_240)]">Εταίροι & Διαχείριση</h1>
            <p className="text-lg text-[oklch(0.45_0_0)] leading-relaxed">
              Πλήρη στοιχεία εταίρων και διαχειριστών σύμφωνα με το άρθρο 47 του ν.4072/2012
            </p>
          </div>

          {/* Partners Section */}
          <div className="mb-8">
            <Card className="border-[oklch(0.85_0_0)]">
              <CardHeader className="bg-[oklch(0.93_0.01_240)]">
                <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                  <Users className="w-6 h-6" />
                  Εταίροι της Εταιρείας
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Partner 1 */}
                  <div className="border-l-4 border-[oklch(0.25_0.02_240)] pl-4 py-2">
                    <h3 className="font-semibold text-lg text-[oklch(0.25_0.02_240)] mb-3">Ονοματεπώνυμο Εταίρου Α</h3>
                    <dl className="space-y-2">
                      <div className="flex gap-2">
                        <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] min-w-[180px]">Διεύθυνση:</dt>
                        <dd className="text-sm text-[oklch(0.35_0_0)]">Οδός Παραδείγματος 45, 10000 Αθήνα</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] min-w-[180px]">
                          Κατηγορία Εισφοράς:
                        </dt>
                        <dd className="text-sm text-[oklch(0.35_0_0)]">Κεφαλαιακή Εισφορά</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] min-w-[180px]">
                          Ποσοστό Συμμετοχής:
                        </dt>
                        <dd className="text-sm text-[oklch(0.35_0_0)] font-semibold">50%</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Partner 2 */}
                  <div className="border-l-4 border-[oklch(0.25_0.02_240)] pl-4 py-2">
                    <h3 className="font-semibold text-lg text-[oklch(0.25_0.02_240)] mb-3">Ονοματεπώνυμο Εταίρου Β</h3>
                    <dl className="space-y-2">
                      <div className="flex gap-2">
                        <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] min-w-[180px]">Διεύθυνση:</dt>
                        <dd className="text-sm text-[oklch(0.35_0_0)]">Οδός Παραδείγματος 67, 10000 Αθήνα</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] min-w-[180px]">
                          Κατηγορία Εισφοράς:
                        </dt>
                        <dd className="text-sm text-[oklch(0.35_0_0)]">Κεφαλαιακή Εισφορά</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] min-w-[180px]">
                          Ποσοστό Συμμετοχής:
                        </dt>
                        <dd className="text-sm text-[oklch(0.35_0_0)] font-semibold">50%</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Management Section */}
          <div className="mb-8">
            <Card className="border-[oklch(0.85_0_0)]">
              <CardHeader className="bg-[oklch(0.93_0.01_240)]">
                <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                  <UserCog className="w-6 h-6" />
                  Διαχείριση Εταιρείας
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Manager */}
                  <div className="border-l-4 border-[oklch(0.25_0.02_240)] pl-4 py-2">
                    <h3 className="font-semibold text-lg text-[oklch(0.25_0.02_240)] mb-3">
                      Ονοματεπώνυμο Διαχειριστή
                    </h3>
                    <dl className="space-y-2">
                      <div className="flex gap-2">
                        <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] min-w-[180px]">Ιδιότητα:</dt>
                        <dd className="text-sm text-[oklch(0.35_0_0)] font-semibold">Διαχειριστής ΙΚΕ</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-sm font-semibold text-[oklch(0.45_0_0)] min-w-[180px]">Αρμοδιότητες:</dt>
                        <dd className="text-sm text-[oklch(0.35_0_0)]">Εκπροσώπηση και διαχείριση της εταιρείας</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Note */}
          <Card className="bg-[oklch(0.93_0.01_240)] border-[oklch(0.25_0.02_240)]">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-[oklch(0.25_0.02_240)]">Σημείωση</h3>
              <div className="space-y-2 text-sm text-[oklch(0.35_0_0)] leading-relaxed">
                <p>
                  <strong>Κεφαλαιακή Εισφορά:</strong> Συνεισφορά στο εταιρικό κεφάλαιο με χρηματικό ποσό ή άλλα
                  περιουσιακά στοιχεία.
                </p>
                <p>
                  <strong>Εξωκεφαλαιακή Εισφορά:</strong> Συνεισφορά με παροχή υπηρεσιών ή εργασίας στην εταιρεία.
                </p>
                <p>
                  <strong>Εγγυητική Εισφορά:</strong> Δέσμευση για κάλυψη υποχρεώσεων της εταιρείας μέχρι συγκεκριμένο
                  ποσό.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
