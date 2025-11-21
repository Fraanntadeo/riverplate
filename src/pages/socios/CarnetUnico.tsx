import { Button } from "@/components/ui/button"
import PageHeader from "@/components/PageHeader"

export default function CarnetUnico() {
  return (
    <>
      <PageHeader title="Carnet Único del Socio" description="Tu identificación como socio del club" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/placeholder.svg?height=400&width=300" alt="Carnet" className="rounded-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">¿Qué es el Carnet Único?</h2>
            <p className="text-muted-foreground mb-6">
              El Carnet Único del Socio es tu identificación oficial como miembro de Club Atlético River Plate. Te
              permite acceder a todos los beneficios y servicios que ofrece el club.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Acceso a todos los partidos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Descuentos en tienda oficial</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Acceso a eventos exclusivos</span>
              </li>
            </ul>
            <Button className="bg-primary">Solicitar Carnet</Button>
          </div>
        </div>
      </div>
    </>
  )
}
