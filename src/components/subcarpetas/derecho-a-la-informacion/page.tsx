import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Derecho a la Información | River Plate",
  description: "Derecho a la información para socios",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Derecho a la Información" subtitle="Transparencia para todos" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg">
            Como socio tienes derecho a acceder a información sobre las decisiones, finanzas y actividades del club.
          </p>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Tipos de Información Disponibles</h3>
            <ul className="space-y-2">
              {[
                "Estados financieros auditados",
                "Actas de asambleas",
                "Decisiones del directorio",
                "Políticas del club",
              ].map((info) => (
                <li key={info} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
