import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Viví el Club | River Plate",
  description: "Experiencias en River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Viví el Club" subtitle="Experimenta la pasión Millonaria" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Visita el Estadio", icon: "🏟️" },
            { title: "Conoce la Cantera", icon: "⚽" },
            { title: "Museo del Club", icon: "🏛️" },
            { title: "Tours Guiados", icon: "👥" },
          ].map((experience) => (
            <div key={experience.title} className="bg-card p-6 rounded-lg border hover:shadow-lg transition">
              <p className="text-4xl mb-2">{experience.icon}</p>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-muted-foreground mt-2">Descubre lo mejor de River Plate.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
