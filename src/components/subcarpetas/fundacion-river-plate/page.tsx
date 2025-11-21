import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Fundación River Plate | River Plate",
  description: "Fundación River Plate - responsabilidad social",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Fundación River Plate" subtitle="Responsabilidad Social" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-2">Misión</h3>
            <p className="text-muted-foreground">Promover el desarrollo social y cultural a través del deporte.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-2">Programas</h3>
            <p className="text-muted-foreground">Iniciativas de inclusión social en comunidades vulnerables.</p>
          </div>
        </div>
      </div>
    </>
  )
}
