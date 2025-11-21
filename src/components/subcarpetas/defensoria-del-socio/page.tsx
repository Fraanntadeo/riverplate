import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Defensoría del Socio | River Plate",
  description: "Defensoría del Socio - Protección de derechos",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Defensoría del Socio" subtitle="Protegemos tus derechos" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Misión</h3>
            <p className="text-muted-foreground">
              Defender y proteger los derechos de los socios ante cualquier irregularidad o abuso.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Cómo Presentar un Reclamo</h3>
            <p className="text-muted-foreground mb-4">
              Contáctanos con los detalles de tu reclamo y nosotros investigaremos.
            </p>
            <div className="bg-muted p-4 rounded">
              <p className="font-semibold">Email: defensoria@riverplate.com.ar</p>
              <p className="font-semibold">Teléfono: +54 11 XXXX-XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
