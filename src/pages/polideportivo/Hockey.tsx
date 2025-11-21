import PageHeader from "../../components/PageHeader"

export default function Hockey() {
  return (
    <>
      <PageHeader title="Hockey sobre Césped" description="Tradición de campeones" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Equipo de Hockey</h3>
          <img src="/placeholder.svg?height=300&width=400" alt="Hockey" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground mb-4">
            El hockey sobre césped de River Plate es una disciplina con gran trayectoria y tradición, compitiendo en las máximas categorías nacionales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background p-4 rounded border">
              <p className="font-bold">Equipo Masculino</p>
              <p className="text-sm text-muted-foreground">Competición máxima</p>
            </div>
            <div className="bg-background p-4 rounded border">
              <p className="font-bold">Equipo Femenino</p>
              <p className="text-sm text-muted-foreground">Competición máxima</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
