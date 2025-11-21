import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Divisiones Infantiles | River Plate",
  description: "Categorías infantiles de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Divisiones Infantiles" subtitle="Los más pequeños" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Sub 12", "Sub 11", "Sub 10", "Sub 9"].map((category) => (
            <div key={category} className="bg-card p-6 rounded-lg border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <img
                src={`/children-football-.jpg?height=200&width=400&query=children+football+${category}`}
                alt={category}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-muted-foreground">Categoría {category}: Iniciación en el fútbol de River Plate.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
