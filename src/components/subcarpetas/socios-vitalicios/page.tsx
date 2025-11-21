import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Socios Vitalicios | River Plate",
  description: "Categoría de Socios Vitalicios",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Socios Vitalicios" subtitle="Membresía de por vida" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">¿Qué es un Socio Vitalicio?</h3>
            <p className="text-muted-foreground">
              Un Socio Vitalicio es un socio que ha realizado un aporte especial al club y disfrutará de beneficios
              exclusivos de por vida.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Beneficios Exclusivos</h3>
            <ul className="space-y-2">
              {[
                "Entrada gratuita a todos los partidos",
                "Acceso a palcos VIP",
                "Invitaciones a eventos especiales",
                "Reconocimiento en el club",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
