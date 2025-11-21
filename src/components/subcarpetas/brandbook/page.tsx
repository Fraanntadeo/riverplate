import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Brandbook | River Plate",
  description: "Manual de marca de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Brandbook" subtitle="Identidad Visual" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Logo</h3>
            <img src="/river-plate-logo.png" alt="Logo" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Uso y especificaciones del logo.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Paleta de Colores</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-primary h-20 rounded-lg" />
              <div className="bg-accent h-20 rounded-lg" />
              <div className="bg-secondary h-20 rounded-lg" />
              <div className="bg-muted h-20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
