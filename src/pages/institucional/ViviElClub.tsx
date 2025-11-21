import PageHeader from "../../components/PageHeader"

export default function ViviElClub() {
  return (
    <>
      <PageHeader title="Viví el Club" description="Experiencias únicas en River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {[
            { title: "Tours por el Estadio", description: "Conoce el histórico Estadio Monumental" },
            { title: "Experiencias VIP", description: "Vive partidos desde una experiencia premium" },
            { title: "Entrenamientos", description: "Acceso a entrenamientos con el equipo" },
            { title: "Museo River Plate", description: "Recorre la historia del club" },
          ].map((experiencia) => (
            <div key={experiencia.title} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">{experiencia.title}</h3>
              <p className="text-muted-foreground">{experiencia.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
