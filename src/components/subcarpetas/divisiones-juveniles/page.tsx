import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Divisiones Juveniles | River Plate",
  description: "Categorías juveniles de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Divisiones Juveniles" subtitle="Formación de talentos" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Sub 20", "Sub 17", "Sub 15", "Sub 14"].map((category) => (
            <div key={category} className="bg-card p-6 rounded-lg border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <img
                src={`/youth-football-.jpg?height=200&width=400&query=youth+football+${category}`}
                alt={category}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-muted-foreground">Información sobre la categoría {category} de River Plate.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
