import PageHeader from "../../components/PageHeader"

export default function DerrechoALaInformacion() {
  return (
    <>
      <PageHeader title="Derecho a la Información" description="Acceso a información del club" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Tu Derecho a Saber</h3>
            <p className="text-muted-foreground mb-6">
              Como socio de River Plate, tienes el derecho de acceder a toda la información relevante sobre las decisiones del club.
            </p>
            <div className="space-y-3">
              <p className="text-muted-foreground">• Acceso a actas de asambleas</p>
              <p className="text-muted-foreground">• Estados financieros auditados</p>
              <p className="text-muted-foreground">• Decisiones de la Comisión Directiva</p>
              <p className="text-muted-foreground">• Información sobre contratos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
