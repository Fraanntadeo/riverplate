import PageHeader from "../../components/PageHeader"

export default function PlantelDePrimera() {
  return (
    <>
      <PageHeader title="Plantel de Primera" description="Conoce a los jugadores que representan a River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src="/diverse-football-player.png" alt="Player" className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="text-sm text-muted-foreground">Número {i + 1}</p>
                <h3 className="font-bold text-lg">Jugador {i + 1}</h3>
                <p className="text-sm text-muted-foreground">Posición</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
