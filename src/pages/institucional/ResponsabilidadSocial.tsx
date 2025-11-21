import PageHeader from "../../components/PageHeader"

export default function ResponsabilidadSocial() {
  return (
    <>
      <PageHeader title="Responsabilidad Social" description="Impacto positivo en la comunidad" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Iniciativas Comunitarias</h3>
            <p className="text-muted-foreground mb-6">
              River Plate actúa como agente de transformación social, impulsando iniciativas que mejoren la calidad de vida de nuestras comunidades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Educación</p>
                <p className="text-sm text-muted-foreground">Becas y programas educativos</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Salud</p>
                <p className="text-sm text-muted-foreground">Acceso a servicios de salud</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Ambiente</p>
                <p className="text-sm text-muted-foreground">Sustentabilidad y cuidado ambiental</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Deporte</p>
                <p className="text-sm text-muted-foreground">Acceso al deporte para todos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
