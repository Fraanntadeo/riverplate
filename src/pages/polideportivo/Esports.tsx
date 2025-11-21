import PageHeader from "../../components/PageHeader"

export default function Esports() {
  return (
    <>
      <PageHeader title="E-Sports" description="La competencia digital de River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-card p-6 rounded-lg border max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Equipo de E-Sports</h3>
          <img src="/placeholder.svg?height=300&width=400" alt="E-Sports" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground mb-4">
            River Plate amplía su alcance al mundo de los e-sports, formando un equipo competitivo en juegos principales.
          </p>
          <div className="space-y-3">
            <p className="font-bold">Títulos Competitivos:</p>
            <p className="text-muted-foreground">• League of Legends</p>
            <p className="text-muted-foreground">• Counter Strike</p>
            <p className="text-muted-foreground">• Valorant</p>
          </div>
        </div>
      </div>
    </>
  )
}
