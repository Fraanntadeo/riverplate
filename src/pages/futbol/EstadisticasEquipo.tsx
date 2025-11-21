import PageHeader from "../../components/PageHeader"

export default function EstadisticasEquipo() {
  return (
    <>
      <PageHeader title="Estadísticas de Equipo" description="Análisis y datos del equipo de primera división" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Estadísticas Generales</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Partidos Jugados</span>
                <span className="font-bold text-lg">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Victorias</span>
                <span className="font-bold text-lg text-green-600">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Empates</span>
                <span className="font-bold text-lg text-yellow-600">7</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Derrotas</span>
                <span className="font-bold text-lg text-red-600">3</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Goles</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Goles Marcados</span>
                <span className="font-bold text-lg">58</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Goles Recibidos</span>
                <span className="font-bold text-lg">21</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Diferencia</span>
                <span className="font-bold text-lg">+37</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Promedio por Partido</span>
                <span className="font-bold text-lg">2.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
