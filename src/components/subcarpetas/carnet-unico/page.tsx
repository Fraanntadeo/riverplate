import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Carnet Único | River Plate",
  description: "Carnet Único de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Carnet Único" subtitle="Tu credencial como socio" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">¿Qué es el Carnet Único?</h3>
            <p className="text-muted-foreground">
              El Carnet Único es tu identificación como socio de River Plate. Te permite acceder al estadio, disfrutar
              de beneficios exclusivos y participar en la vida del club.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Beneficios</h3>
            <ul className="space-y-2">
              {[
                "Acceso al Estadio Monumental",
                "Descuentos especiales",
                "Venta prioritaria de entradas",
                "Acceso a areas VIP",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Cómo Obtenerlo</h3>
            <p className="text-muted-foreground">
              Dirígete a la oficina de socios con tu documentación completa para tramitar tu Carnet Único.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
