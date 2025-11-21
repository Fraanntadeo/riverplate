import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Patrocinadores | River Plate",
  description: "Nuestros patrocinadores",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Patrocinadores" subtitle="Aliados del Millonario" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {["Adidas", "Betano", "MasonLine", "DirectTV"].map((sponsor) => (
            <div key={sponsor} className="bg-card p-6 rounded-lg border text-center">
              <img
                src={`/.jpg?height=100&width=150&query=${sponsor}+logo`}
                alt={sponsor}
                className="w-full mb-2"
              />
              <p className="font-semibold">{sponsor}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
