"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Info } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real implementation, this would send an email
    alert("Το μήνυμά σας έχει σταλεί!")
  }

  return (
    <div className="min-h-screen py-12 md:py-20 bg-[oklch(0.97_0_0)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.25_0.02_240)]">Επικοινωνία</h1>
            <p className="text-lg text-[oklch(0.45_0_0)] leading-relaxed">
              Επικοινωνήστε μαζί μας για οποιαδήποτε πληροφορία
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Corporate Email Card */}
              <Card className="border-[oklch(0.85_0_0)]">
                <CardHeader className="bg-[oklch(0.93_0.01_240)]">
                  <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                    <Mail className="w-5 h-5" />
                    Εταιρικό Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <a
                    href="mailto:info@example-company.gr"
                    className="text-lg text-[oklch(0.25_0.02_240)] hover:underline font-semibold"
                  >
                    info@example-company.gr
                  </a>
                  <p className="text-sm text-[oklch(0.45_0_0)] mt-2 leading-relaxed">
                    Επίσημο email για επικοινωνία με την εταιρεία
                  </p>
                </CardContent>
              </Card>

              {/* Address Card */}
              <Card className="border-[oklch(0.85_0_0)]">
                <CardHeader className="bg-[oklch(0.93_0.01_240)]">
                  <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                    <MapPin className="w-5 h-5" />
                    Διεύθυνση
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <address className="text-base text-[oklch(0.25_0.02_240)] not-italic leading-relaxed">
                    Οδός Παραδείγματος 123
                    <br />
                    Τ.Κ. 10000, Αθήνα
                    <br />
                    Ελλάδα
                  </address>
                </CardContent>
              </Card>

              {/* Phone Card (Optional) */}
              <Card className="border-[oklch(0.85_0_0)]">
                <CardHeader className="bg-[oklch(0.93_0.01_240)]">
                  <CardTitle className="flex items-center gap-2 text-[oklch(0.45_0_0)]">
                    <Phone className="w-5 h-5" />
                    Τηλέφωνο (Προαιρετικό)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-base text-[oklch(0.25_0.02_240)]">+30 210 1234567</p>
                </CardContent>
              </Card>

              {/* Important Notice */}
              <Card className="bg-[oklch(0.93_0.01_240)] border-[oklch(0.25_0.02_240)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)] text-base">
                    <Info className="w-5 h-5" />
                    Σημαντική Πληροφορία
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[oklch(0.35_0_0)] leading-relaxed">
                  Το εταιρικό email χρησιμοποιείται για:
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Προσκλήσεις σε Γενικές Συνελεύσεις</li>
                    <li>Γραπτές αποφάσεις των εταίρων</li>
                    <li>Ανακοινώσεις μεταβίβασης εταιρικών μεριδίων</li>
                    <li>Άλλες επίσημες εταιρικές ανακοινώσεις</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-[oklch(0.85_0_0)]">
                <CardHeader className="bg-[oklch(0.93_0.01_240)]">
                  <CardTitle className="flex items-center gap-2 text-[oklch(0.25_0.02_240)]">
                    <Send className="w-5 h-5" />
                    Φόρμα Επικοινωνίας
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[oklch(0.35_0_0)] mb-2">
                        Ονοματεπώνυμο *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Το όνομά σας"
                        className="border-[oklch(0.85_0_0)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[oklch(0.35_0_0)] mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="email@example.com"
                        className="border-[oklch(0.85_0_0)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[oklch(0.35_0_0)] mb-2">
                        Θέμα *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        placeholder="Το θέμα του μηνύματος"
                        className="border-[oklch(0.85_0_0)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[oklch(0.35_0_0)] mb-2">
                        Μήνυμα *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        placeholder="Το μήνυμά σας..."
                        className="border-[oklch(0.85_0_0)] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[oklch(0.25_0.02_240)] text-[oklch(0.98_0_0)] hover:bg-[oklch(0.20_0.02_240)]"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Αποστολή Μηνύματος
                    </Button>

                    <p className="text-xs text-[oklch(0.45_0_0)] mt-4 leading-relaxed">
                      Τα μηνύματα από αυτή τη φόρμα αποστέλλονται στο εταιρικό email. Θα λάβετε απάντηση εντός 2-3
                      εργάσιμων ημερών.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
