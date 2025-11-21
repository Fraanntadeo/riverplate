import PageHeader from "../../components/PageHeader"

export default function Titulos() {
  return (
    <>
      <PageHeader title="Títulos y Trofeos" description="La historia ganadora de River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Títulos Internacionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Copas Libertadores</p>
                <p className="text-muted-foreground">3 títulos</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Supercopa Sudamericana</p>
                <p className="text-muted-foreground">2 títulos</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Títulos Nacionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Campeonatos de la Liga Argentina</p>
                <p className="text-muted-foreground">35 títulos</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Copas Nacionales</p>
                <p className="text-muted-foreground">12 títulos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
