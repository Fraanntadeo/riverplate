import PageHeader from "../../components/PageHeader"

export default function Brandbook() {
  return (
    <>
      <PageHeader title="Brandbook" description="Identidad visual de River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Manual de Identidad Visual</h3>
            <p className="text-muted-foreground mb-6">
              El brandbook de River Plate contiene las directrices para la aplicación correcta de nuestro logo, colores y elementos visuales.
            </p>
            <div className="space-y-4">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Logo Principal</p>
                <p className="text-sm text-muted-foreground">Versiones y aplicaciones</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Paleta de Colores</p>
                <p className="text-sm text-muted-foreground">Colores corporativos oficiales</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Tipografía</p>
                <p className="text-sm text-muted-foreground">Fuentes autorizadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
