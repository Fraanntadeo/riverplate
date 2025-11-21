import PageHeader from "../../components/PageHeader"

export default function FutbolFemenino() {
  return (
    <>
      <PageHeader title="Fútbol Femenino" description="El fútbol femenino en River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Equipo Femenino</h3>
          <p className="text-muted-foreground mb-6">
            El equipo femenino de River Plate representa los valores y la tradición del club en el fútbol femenino, compitiendo en las máximas categorías del fútbol argentino.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-background p-4 rounded border text-center">
                <img src="/placeholder.svg?height=200&width=200" alt={`Jugadora ${i}`} className="w-full h-40 object-cover rounded mb-2" />
                <p className="font-bold">Jugadora {i}</p>
                <p className="text-sm text-muted-foreground">Posición</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
