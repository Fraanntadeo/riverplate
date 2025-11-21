import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Responsabilidad Social | River Plate",
  description: "Iniciativas de responsabilidad social de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Responsabilidad Social" subtitle="Impacto Comunitario" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {[
            {
              title: "Educación",
              description: "Programas educativos para menores en situación de riesgo.",
            },
            {
              title: "Deporte Inclusivo",
              description: "Actividades deportivas para personas con discapacidad.",
            },
            {
              title: "Medio Ambiente",
              description: "Iniciativas de sostenibilidad y cuidado del ambiente.",
            },
            {
              title: "Salud Comunitaria",
              description: "Campañas de prevención y promoción de salud.",
            },
          ].map((program) => (
            <div key={program.title} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-muted-foreground">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
