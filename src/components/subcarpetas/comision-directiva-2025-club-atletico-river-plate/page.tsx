import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Comisión Directiva 2025 | River Plate",
  description: "Integrantes de la Comisión Directiva 2025 de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Comisión Directiva 2025" subtitle="Liderando el Millonario" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Presidente", title: "Lider Deportivo" },
            { name: "Vice Presidente", title: "Segundo al Mando" },
            { name: "Secretario", title: "Administración" },
          ].map((member, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border text-center">
              <img
                src={`/director-.jpg?height=200&width=200&query=director+${i}`}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
