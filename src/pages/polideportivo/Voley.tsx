import PageHeader from "../../components/PageHeader"

export default function Voley() {
  return (
    <>
      <PageHeader title="Voleibol" description="Conoce a nuestros equipos de voleibol" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Voleibol Masculino</h2>
            <img src="/volleyball-men.jpg" alt="Voleibol Masculino" className="rounded-lg mb-4" />
            <p className="text-muted-foreground">
              Nuestro equipo de voleibol masculino compite en las principales competiciones nacionales.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Voleibol Femenino</h2>
            <img src="/volleyball-women.jpg" alt="Voleibol Femenino" className="rounded-lg mb-4" />
            <p className="text-muted-foreground">
              Las mujeres de River Plate llevan el nombre del club a lo más alto del voleibol argentino.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
