import PageHeader from "../../components/PageHeader"

export default function DivisionReserva() {
  return (
    <>
      <PageHeader title="División Reserva" description="El semillero del fútbol de River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Plantel de Reserva</h3>
          <p className="text-muted-foreground mb-6">
            La División Reserva de River Plate es el puente entre las categorías inferiores y el primer equipo, donde se forman y preparan los jugadores jóvenes para competir al más alto nivel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-background p-4 rounded border text-center">
                <img src="/placeholder.svg?height=200&width=200" alt={`Jugador ${i}`} className="w-full h-40 object-cover rounded mb-2" />
                <p className="font-bold">Jugador {i}</p>
                <p className="text-sm text-muted-foreground">Posición</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
