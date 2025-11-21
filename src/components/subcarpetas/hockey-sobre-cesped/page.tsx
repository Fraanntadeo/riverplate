import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Hockey sobre Césped | River Plate",
  description: "Hockey sobre Césped en River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Hockey sobre Césped" subtitle="Deporte de precisión" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Equipo Masculino", "Equipo Femenino"].map((team) => (
            <div key={team} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">{team}</h3>
              <img
                src={`/placeholder.svg?height=300&width=400&query=field+hockey`}
                alt={team}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-muted-foreground">Información sobre {team} de River Plate.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
