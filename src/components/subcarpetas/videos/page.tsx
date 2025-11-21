import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Videos | River Plate",
  description: "Galería de videos de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Videos" subtitle="Contenido multimedia" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition">
              <img
                src={`/generic-video-thumbnail.png?height=200&width=400&query=video+thumbnail+${i}`}
                alt="Video"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Video {i}</h3>
                <p className="text-sm text-muted-foreground">Descripción del video</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
