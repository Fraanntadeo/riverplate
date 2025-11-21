import PageHeader from "../../components/PageHeader"

export default function FutbolSala() {
  return (
    <>
      <PageHeader title="Fútbol Sala" description="La pasión del futsal en River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Equipo de Futsal</h3>
          <p className="text-muted-foreground mb-6">
            El equipo de futsal de River Plate compite en las principales competiciones de fútbol sala, manteniendo la tradición ganadora del club en esta disciplina.
          </p>
          <img src="/placeholder.svg?height=300&width=400" alt="Futsal" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground">Equipo dedicado a la práctica y competencia del futsal de alto nivel.</p>
        </div>
      </div>
    </>
  )
}
