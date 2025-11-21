import PageHeader from "../../components/PageHeader"

export default function Handball() {
  return (
    <>
      <PageHeader title="Handball" description="El deporte en equipo por excelencia" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Handball River</h3>
          <img src="/placeholder.svg?height=300&width=400" alt="Handball" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground mb-4">
            River Plate cuenta con un destacado equipo de handball que compite en las máximas categorías nacionales e internacionales.
          </p>
        </div>
      </div>
    </>
  )
}
