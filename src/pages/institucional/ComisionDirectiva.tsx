import PageHeader from "../../components/PageHeader"

export default function ComisionDirectiva() {
  return (
    <>
      <PageHeader title="Comisión Directiva 2025" description="Autoridades de Club Atlético River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Autoridades Principales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Presidente</p>
                <p className="text-muted-foreground">Nombre del Presidente</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Vicepresidente</p>
                <p className="text-muted-foreground">Nombre del Vicepresidente</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Tesorero</p>
                <p className="text-muted-foreground">Nombre del Tesorero</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Secretario</p>
                <p className="text-muted-foreground">Nombre del Secretario</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Comisiones</h3>
            <p className="text-muted-foreground mb-4">
              La Comisión Directiva está integrada por las principales comisiones que rigen el funcionamiento del club.
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">• Comisión de Fútbol</p>
              <p className="text-muted-foreground">• Comisión de Deportes</p>
              <p className="text-muted-foreground">• Comisión de Hacienda</p>
              <p className="text-muted-foreground">• Comisión de Patrimonio</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
