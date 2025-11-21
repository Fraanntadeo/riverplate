import PageHeader from "../../components/PageHeader"

export default function DivisionesInfantiles() {
  return (
    <>
      <PageHeader title="Divisiones Infantiles" description="Semillero de futuros campeones" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {[
            { name: "Sub-13", description: "Iniciación en fútbol competitivo" },
            { name: "Sub-11", description: "Formación en técnica básica" },
            { name: "Sub-9", description: "Primeros pasos en el fútbol" },
          ].map((categoria) => (
            <div key={categoria.name} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">{categoria.name}</h3>
              <p className="text-muted-foreground">{categoria.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
