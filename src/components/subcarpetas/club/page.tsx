import { Card, CardContent } from "@/components/ui/card"
import { Trophy, MapPin } from "lucide-react"

const trophies = [
  { year: 2024, title: "Campeón de América", trophy: "Copa Libertadores" },
  { year: 2024, title: "Campeón de Sudamérica", trophy: "Recopa Sudamericana" },
  { year: 2023, title: "Campeón Local", trophy: "Liga Profesional" },
  { year: 2022, title: "Campeón de América", trophy: "Copa Libertadores" },
]

export default function ClubPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">Club Atlético River Plate</h1>
          <p className="text-gray-100">Historia, tradición y pasión desde 1901.</p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-accent mb-2 text-center">Nuestra Historia</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-6">
              <div className="w-1 bg-primary" />
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">1901 - Fundación</h3>
                <p className="text-gray-700">
                  Club Atlético River Plate fue fundado por la fusión de dos clubes: Asociación Atlética River Plate y
                  Club Atlético Plate.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-1 bg-primary" />
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">1950 - Era de Oro</h3>
                <p className="text-gray-700">
                  River Plate comienza su era de gloria con la llegada de los grandes talentos y títulos
                  internacionales.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-1 bg-primary" />
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">2024 - Campeón de América</h3>
                <p className="text-gray-700">
                  River Plate se corona nuevamente Campeón de América, consolidando su legado como potencia del
                  continente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stadium */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-accent mb-4">Estadio Monumental</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  El Estadio Monumental es la casa de River Plate desde 1938 y uno de los estadios más importantes de
                  América del Sur.
                </p>
                <p>Con capacidad para más de 80,000 espectadores, es testigo de las glorias de la Banda Cruzada.</p>
                <div className="flex items-center gap-3 mt-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Av. Figueroa Alcorta, Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: "url(/placeholder.svg?height=400&width=600&query=stadium)" }}
            />
          </div>
        </div>
      </section>

      {/* Trophies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-accent mb-2 text-center">Trofeos</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trophies.map((trophy, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <Trophy className="w-12 h-12 text-primary" />
                  <h3 className="text-lg font-bold text-accent">{trophy.title}</h3>
                  <p className="text-sm text-gray-600">{trophy.trophy}</p>
                  <p className="text-primary font-bold text-xl">{trophy.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
