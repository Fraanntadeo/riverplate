import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Estadísticas del Equipo | River Plate",
  description: "Estadísticas de la temporada del equipo de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Estadísticas del Equipo" subtitle="Datos de la temporada actual" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card p-6 rounded-lg border">
            <p className="text-muted-foreground text-sm">Partidos Jugados</p>
            <p className="text-3xl font-bold text-primary">34</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <p className="text-muted-foreground text-sm">Victorias</p>
            <p className="text-3xl font-bold text-primary">22</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <p className="text-muted-foreground text-sm">Empates</p>
            <p className="text-3xl font-bold text-primary">8</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <p className="text-muted-foreground text-sm">Goles Anotados</p>
            <p className="text-3xl font-bold text-primary">67</p>
          </div>
        </div>
        <div className="mt-8 bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Próximos Partidos</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center pb-4 border-b last:border-b-0">
                <div>
                  <p className="font-bold">River Plate vs Equipo {i}</p>
                  <p className="text-sm text-muted-foreground">Fecha {i + 5}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-primary font-semibold">En vivo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
