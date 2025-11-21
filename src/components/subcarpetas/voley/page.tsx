import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Volley | River Plate",
  description: "Volley en River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Volley" subtitle="El equipo Millonario" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Equipo Masculino</h3>
            <img src="/volleyball-men.jpg" alt="Volley Masculino" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Información del equipo de volley masculino.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Equipo Femenino</h3>
            <img src="/volleyball-women.jpg" alt="Volley Femenino" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Información del equipo de volley femenino.</p>
          </div>
        </div>
      </div>
    </>
  )
}
