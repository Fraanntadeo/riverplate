import PageHeader from "../../components/PageHeader"

export default function IngresosAlMonumental() {
  return (
    <>
      <PageHeader title="Ingresos al Monumental" description="Cómo acceder al estadio" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Información de Acceso</h3>
            <p className="text-muted-foreground mb-6">
              El Estadio Monumental cuenta con múltiples accesos y facilidades para garantizar una experiencia segura y cómoda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Horarios de Apertura</p>
                <p className="text-sm text-muted-foreground">2 horas antes del partido</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Acceso para Discapacitados</p>
                <p className="text-sm text-muted-foreground">Facilidades completas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
