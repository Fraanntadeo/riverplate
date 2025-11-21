import PageHeader from "../../components/PageHeader"

export default function Natacion() {
  return (
    <>
      <PageHeader title="Natación" description="Deportes acuáticos en River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Departamento de Natación</h3>
          <img src="/placeholder.svg?height=300&width=400" alt="Natación" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground mb-4">
            El departamento de natación de River Plate ofrece programas de formación y competencia en distintas categorías.
          </p>
          <div className="space-y-3">
            <p className="text-muted-foreground">• Natación competitiva</p>
            <p className="text-muted-foreground">• Clases de iniciación</p>
            <p className="text-muted-foreground">• Formación de talentos</p>
          </div>
        </div>
      </div>
    </>
  )
}
