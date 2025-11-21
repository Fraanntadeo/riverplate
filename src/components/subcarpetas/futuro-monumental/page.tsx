import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Futuro Monumental | River Plate",
  description: "Proyectos de ampliación del Estadio Monumental",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Futuro Monumental" subtitle="Proyectos de mejora" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Proyecto de Modernización</h3>
            <img src="/stadium-modernization.jpg" alt="Proyecto" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Ampliación y mejora de instalaciones del Estadio Monumental.</p>
          </div>
        </div>
      </div>
    </>
  )
}
