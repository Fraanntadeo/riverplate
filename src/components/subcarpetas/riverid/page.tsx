import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "River ID | River Plate",
  description: "River ID - Sistema de identificación digital",
}

export default function Page() {
  return (
    <>
      <PageHeader title="River ID" subtitle="Plataforma Digital del Socio" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">¿Qué es River ID?</h3>
            <p className="text-muted-foreground">
              River ID es tu plataforma digital para gestionar tu membresía, acceder a beneficios y participar en la
              vida del club.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Acceso Directo</h3>
            <p className="text-center py-4">
              <a
                href="https://riverid.cariverplate.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Ir a River ID →
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
