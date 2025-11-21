import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Títulos | River Plate",
  description: "Todos los títulos ganados por River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Nuestros Títulos" subtitle="Trofeos y logros" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Copas Internacionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Copa Libertadores - 1996, 2015",
                "Copa Interamericana - 1987",
                "Recopa Sudamericana - 1997",
                "Supercopa Sudamericana - 1989",
              ].map((title) => (
                <div key={title} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <p className="font-semibold">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Ligas Locales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Campeonato de Primera División - 36 títulos",
                "Copa Argentina - 2 títulos",
                "Supercopa Argentina - 3 títulos",
              ].map((title) => (
                <div key={title} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <p className="font-semibold">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
