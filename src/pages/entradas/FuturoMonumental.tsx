import PageHeader from "../../components/PageHeader"

export default function FuturoMonumental() {
  return (
    <>
      <PageHeader title="Futuro Monumental" description="Proyecto de remodelación del estadio" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Remodelación del Estadio</h3>
          <img src="/placeholder.svg?height=300&width=400" alt="Futuro Monumental" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground mb-4">
            River Plate trabaja en la modernización continua del Estadio Monumental para mejorar la experiencia de los aficionados.
          </p>
          <div className="space-y-3">
            <p className="text-muted-foreground">• Mejora de infraestructura</p>
            <p className="text-muted-foreground">• Tecnología de última generación</p>
            <p className="text-muted-foreground">• Mayor confort para espectadores</p>
            <p className="text-muted-foreground">• Sostenibilidad ambiental</p>
          </div>
        </div>
      </div>
    </>
  )
}
