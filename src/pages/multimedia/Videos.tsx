import PageHeader from "../../components/PageHeader"

export default function Videos() {
  return (
    <>
      <PageHeader title="Videos" description="Contenido multimedia de River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition">
              <img src="/placeholder.svg?height=200&width=400" alt={`Video ${i}`} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">Título del Video {i}</h3>
                <p className="text-sm text-muted-foreground">Descripción breve del contenido</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
