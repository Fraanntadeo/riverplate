import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Esports | River Plate",
  description: "Esports en River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Esports" subtitle="Competición Digital" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["FIFA", "Valorant"].map((game) => (
            <div key={game} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Equipo {game}</h3>
              <img
                src={`/esports-.jpg?height=300&width=400&query=esports+${game}`}
                alt={game}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-muted-foreground">Competidores profesionales de {game}.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
