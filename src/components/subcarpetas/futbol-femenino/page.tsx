import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Fútbol Femenino | River Plate",
  description: "El fútbol femenino de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Fútbol Femenino" subtitle="Las mujeres del Millonario" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="/women-football-team.jpg" alt="Equipo Femenino" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo Femenino</h2>
            <p className="text-lg text-muted-foreground mb-4">
              River Plate sigue creciendo en el fútbol femenino con un equipo competitivo y lleno de talento.
            </p>
            <div className="space-y-2">
              <p>Campeonato: Primera División</p>
              <p>Fondista: Estadio Monumental</p>
              <p>Entrenador Principal: TBD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
