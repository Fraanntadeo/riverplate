import PageHeader from "../../components/PageHeader"

export default function ElMonumental() {
  return (
    <>
      <PageHeader title="El Monumental" description="El templo del fútbol argentino" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Estadio Monumental</h3>
            <img src="/placeholder.svg?height=400&width=600" alt="Estadio Monumental" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground mb-4">
              El Estadio Monumental Antonio Vespucio Liberti es la casa de River Plate y uno de los estadios más emblemáticos de América Latina.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Capacidad</p>
                <p className="text-muted-foreground">84,702 espectadores</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Inaugurado</p>
                <p className="text-muted-foreground">26 de mayo de 1938</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
