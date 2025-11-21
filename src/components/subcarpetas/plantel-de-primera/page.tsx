import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Plantel de Primera | River Plate",
  description: "Conoce el plantel profesional de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Plantel de Primera" subtitle="Campeones de América" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-lg shadow-md overflow-hidden">
              <img
                src={`/footballer-.jpg?height=300&width=300&query=footballer+${i}`}
                alt="Jugador"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Jugador {i}</h3>
                <p className="text-muted-foreground">Posición • Dorsal</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
