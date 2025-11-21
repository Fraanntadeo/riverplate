import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "El Monumental | River Plate",
  description: "Estadio Monumental de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Estadio Monumental" subtitle="La Casa del Millonario" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="/monumental-stadium.jpg" alt="Estadio Monumental" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Información del Estadio</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Capacidad</p>
                <p className="text-muted-foreground">86,000 espectadores</p>
              </div>
              <div>
                <p className="font-semibold">Ubicación</p>
                <p className="text-muted-foreground">San Nicolás, Buenos Aires</p>
              </div>
              <div>
                <p className="font-semibold">Inaugación</p>
                <p className="text-muted-foreground">17 de mayo de 1938</p>
              </div>
              <div>
                <p className="font-semibold">Características</p>
                <p className="text-muted-foreground">Uno de los estadios más modernos de Sudamérica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
