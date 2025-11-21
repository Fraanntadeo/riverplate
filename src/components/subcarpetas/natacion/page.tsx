import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Natación | River Plate",
  description: "Natación en River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Natación" subtitle="Nadadores Millonarios" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Equipo Competitivo</h3>
            <img src="/swimming-competition.png" alt="Natación" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Nadadores de alto rendimiento.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Escuela de Natación</h3>
            <img src="/swimming-lessons.jpg" alt="Escuela" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Clases para todas las edades.</p>
          </div>
        </div>
      </div>
    </>
  )
}
