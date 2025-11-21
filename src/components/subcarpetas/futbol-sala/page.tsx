import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Fútbol Sala | River Plate",
  description: "Fútbol Sala de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Fútbol Sala" subtitle="River en las canchas techadas" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Equipo Principal</h3>
            <img src="/futsal-team.jpg" alt="Equipo de Futsal" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Información sobre nuestro equipo de fútbol sala.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Resultados</h3>
            <img src="/futsal-results.jpg" alt="Resultados" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Últimos resultados de fútbol sala.</p>
          </div>
        </div>
      </div>
    </>
  )
}
