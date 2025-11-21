import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Ingresos al Monumental | River Plate",
  description: "Información sobre ingresos al Estadio Monumental",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Ingresos al Monumental" subtitle="Información de acceso" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Acceso de Socios</h3>
            <p className="text-muted-foreground">
              Los socios acceden con su carnet único. Recuerda llegar con anticipación.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Normas de Seguridad</h3>
            <ul className="space-y-2">
              {[
                "Seguir indicaciones de seguridad",
                "No ingresar con objetos prohibidos",
                "Respetar el orden en los accesos",
              ].map((rule) => (
                <li key={rule} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
