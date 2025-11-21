import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "División Reserva | River Plate",
  description: "Información sobre la División Reserva de River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="División Reserva" subtitle="El futuro de River Plate" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg mb-8">
          La División Reserva es el trampolín hacia el profesionalismo, donde los jugadores más talentosos desarrollan
          sus habilidades y experiencia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-2">Plantilla Reserva</h3>
            <img src="/reserve-football-team.jpg" alt="División Reserva" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Conoce a nuestros promesas del fútbol argentino.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-2">Calendario</h3>
            <img src="/football-schedule.jpg" alt="Calendario" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">Próximos partidos de la División Reserva.</p>
          </div>
        </div>
      </div>
    </>
  )
}
