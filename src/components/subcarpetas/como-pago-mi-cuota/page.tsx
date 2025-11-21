import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Cómo Pago mi Cuota | River Plate",
  description: "Formas de pago de cuota de socio",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Cómo Pago mi Cuota" subtitle="Opciones de pago fáciles" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Transferencia Bancaria",
              description: "Realiza una transferencia a nuestras cuentas bancarias.",
            },
            {
              title: "Débito Automático",
              description: "Configura el pago automático de tu cuota mensual.",
            },
            {
              title: "Oficina de Socios",
              description: "Paga directamente en nuestras oficinas.",
            },
            {
              title: "En Línea",
              description: "Plataforma de pagos segura en línea.",
            },
          ].map((method) => (
            <div key={method.title} className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-bold">{method.title}</h3>
              <p className="text-muted-foreground mt-2">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
