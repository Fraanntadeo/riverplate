import PageHeader from "../../components/PageHeader"

export default function IntegridadRiver() {
  return (
    <>
      <PageHeader title="Integridad River" description="Compromiso ético del club" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Nuestro Compromiso</h3>
            <p className="text-muted-foreground mb-4">
              River Plate se compromete a mantener los más altos estándares de integridad en todas sus operaciones.
            </p>
            <div className="space-y-3">
              <p className="text-muted-foreground">• Cumplimiento normativo</p>
              <p className="text-muted-foreground">• Transparencia en decisiones</p>
              <p className="text-muted-foreground">• Ética en la competencia</p>
              <p className="text-muted-foreground">• Responsabilidad social</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
