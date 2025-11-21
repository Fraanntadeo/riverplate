import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Integridad River | River Plate",
  description: "Políticas de integridad en River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Integridad River" subtitle="Compromiso con los valores" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-2">Código de Conducta</h3>
            <p className="text-muted-foreground">
              Nuestro compromiso con la ética y la integridad en todas nuestras acciones.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-2">Anti-Corrupción</h3>
            <p className="text-muted-foreground">
              Políticas anti-corrupción y transparencia en la administración del club.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-2">Denuncia de Irregularidades</h3>
            <p className="text-muted-foreground">
              Canal seguro para reportar cualquier irregularidad o conducta inapropiada.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
