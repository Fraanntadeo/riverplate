"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users, Trophy, Heart } from "lucide-react"

const plans = [
  {
    id: 1,
    name: "Plan Básico",
    price: "$50",
    period: "/mes",
    features: [
      "Acceso a preventa de entradas",
      "Descuento del 10% en tienda oficial",
      "Acceso a contenido exclusivo",
      "Boletín mensual",
    ],
  },
  {
    id: 2,
    name: "Plan Premium",
    price: "$100",
    period: "/mes",
    featured: true,
    features: [
      "Acceso VIP a preventa de entradas",
      "Descuento del 20% en tienda oficial",
      "Acceso a eventos exclusivos",
      "Merchandise limitado",
      "Voto en asambleas",
      "Tarjeta de socio física",
    ],
  },
  {
    id: 3,
    name: "Plan Platino",
    price: "$200",
    period: "/mes",
    features: [
      "Acceso VIP garantizado a todos los partidos",
      "Descuento del 30% en tienda oficial",
      "Entrada gratuita a 4 partidos por temporada",
      "Merchandise exclusivo Platino",
      "Voto prioritario en asambleas",
      "Tarjeta de socio VIP",
      "Invitaciones a eventos especiales",
    ],
  },
]

const faqs = [
  {
    question: "¿Cuál es el proceso de afiliación?",
    answer:
      "El proceso es simple: completa tu información personal, selecciona tu plan y realiza el pago. Recibirás tu carnet digital inmediatamente.",
  },
  {
    question: "¿Puedo cambiar de plan?",
    answer:
      "Sí, puedes cambiar tu plan en cualquier momento desde tu perfil. Los cambios se aplicarán en tu próximo período de facturación.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Puedes cancelar tu membresía en cualquier momento sin penalizaciones. Tu acceso continuará hasta fin del período de pago actual.",
  },
  {
    question: "¿Cuáles son los beneficios exclusivos?",
    answer:
      "Los socios Premium y Platino reciben invitaciones a eventos exclusivos, acceso prioritario a merchandising y voto en decisiones del club.",
  },
]

export default function MembersPage() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">Sé Socio</h1>
          <p className="text-gray-100">Únete a la familia de River Plate y disfruta de beneficios exclusivos.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-accent mb-2 text-center">Nuestros Planes</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`flex flex-col ${plan.featured ? "ring-2 ring-primary shadow-xl" : ""}`}>
                {plan.featured && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-bold">MÁS POPULAR</div>
                )}
                <CardHeader>
                  <h3 className="text-2xl font-bold text-accent mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 ${plan.featured ? "bg-primary hover:bg-primary/90" : "border-2 border-primary text-primary hover:bg-primary/10"}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-accent mb-12 text-center">Beneficios de Ser Socio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <Trophy className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg text-accent mb-2">Acceso VIP</h3>
              <p className="text-sm text-gray-700">Preventa exclusiva de entradas para todos los partidos.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg text-accent mb-2">Descuentos</h3>
              <p className="text-sm text-gray-700">Hasta 30% en tienda oficial y merchandise exclusivo.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg text-accent mb-2">Comunidad</h3>
              <p className="text-sm text-gray-700">Conecta con otros hinchas en eventos exclusivos.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg text-accent mb-2">Voto</h3>
              <p className="text-sm text-gray-700">Participa en decisiones importantes del club.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-accent mb-12 text-center">Preguntas Frecuentes</h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-accent hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent to-accent/95">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">¿Listo para unirte?</h2>
          <p className="text-xl mb-8 text-gray-100">Conviértete en parte de la familia de River Plate hoy mismo.</p>
          <Button className="bg-white text-primary hover:bg-secondary font-bold py-6 px-8 text-lg">
            Comenzar Ahora
          </Button>
        </div>
      </section>
    </main>
  )
}
