import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Trophy, Heart } from "lucide-react"

const benefits = [
  {
    icon: Trophy,
    title: "Acceso VIP",
    description: "Entra antes que nadie a la preventa de entradas para partidos especiales",
  },
  {
    icon: Heart,
    title: "Beneficios Exclusivos",
    description: "Descuentos en tienda oficial y merchandise limitado solo para socios",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Conecta con otros hinchas y participa en actividades exclusivas del club",
  },
  {
    icon: CheckCircle,
    title: "Voto en Decisiones",
    description: "Participa en asambleas y votaciones importantes del club",
  },
]

export function MembersCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-accent to-accent/95">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sé Parte de la Familia</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Únete como socio del Club Atlético River Plate y disfruta de beneficios exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/15 transition"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-100 text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-accent mb-4">Tres Planes Especiales</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Plan Básico desde $50/mes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Plan Premium desde $100/mes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Plan Platino desde $200/mes</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                Cada plan incluye acceso a partidos, tienda oficial y beneficios exclusivos. Cancela cuando quieras.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg">
                Convertirse en Socio Ahora
              </Button>
              <Button
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary/5 font-bold py-6 text-lg bg-transparent"
              >
                Ver Más Información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
