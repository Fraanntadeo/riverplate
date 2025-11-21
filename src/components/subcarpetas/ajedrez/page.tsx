import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Ajedrez | River Plate",
  description: "Ajedrez en River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Ajedrez" subtitle="El deporte ciencia" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Equipo de Ajedrez</h3>
          <img src="/chess-tournament.png" alt="Ajedrez" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground">Nuestro equipo de ajedrez compite en torneos regionales y nacionales.</p>
        </div>
      </div>
    </>
  )
}
