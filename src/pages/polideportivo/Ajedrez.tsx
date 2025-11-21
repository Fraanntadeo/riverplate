import PageHeader from "../../components/PageHeader"

export default function Ajedrez() {
  return (
    <>
      <PageHeader title="Ajedrez" description="El deporte ciencia" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Equipo de Ajedrez</h3>
          <img src="/placeholder.svg?height=300&width=400" alt="Ajedrez" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground">
            Nuestro equipo de ajedrez compite en torneos regionales y nacionales, manteniendo la tradición del club en esta disciplina estratégica.
          </p>
        </div>
      </div>
    </>
  )
}
