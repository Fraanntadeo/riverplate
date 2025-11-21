import PageHeader from "../../components/PageHeader"

export default function DivisionesJuveniles() {
  return (
    <>
      <PageHeader title="Divisiones Juveniles" description="Formación de talentos del futuro" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {[
            { name: "Sub-20", description: "Categoría superior de menores" },
            { name: "Sub-17", description: "Formación de jóvenes talentos" },
            { name: "Sub-15", description: "Desarrollo técnico y táctico" },
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
