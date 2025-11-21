import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export function HeroBanner() {
  return (
    <section className="relative w-full h-screen max-h-[600px] md:max-h-[700px] overflow-hidden bg-accent">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=700&width=1400&query=football%20stadium%20river%20plate%20dynamic%20action)",
          opacity: 0.4,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            SOMOS <span className="text-primary">RIVER</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl">
            Campeón de América 2024. Vive la pasión de la Banda Cruzada en cada partido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 px-8">
              Ver Próximos Partidos
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg py-6 px-8 flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Ver Último Partido
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
