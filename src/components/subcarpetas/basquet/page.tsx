import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Básquet | River Plate",
  description: "Básquet en River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Básquet" subtitle="La canasta Millonaria" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Primera División</h3>
            <img src="/diverse-basketball-team.png" alt="Básquet" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Equipo de básquet en primera división.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Categorías Menores</h3>
            <img src="/youth-basketball.jpg" alt="Categorías Menores" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Formación de jóvenes basquetbolistas.</p>
          </div>
        </div>
      </div>
    </>
  )
}
