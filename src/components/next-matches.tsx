import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const matches = [
  {
    id: 1,
    date: "24 Nov 2025",
    time: "20:30",
    competition: "Liga Profesional",
    home: "River Plate",
    away: "Boca Juniors",
    stadium: "Estadio Monumental",
    status: "próximo",
  },
  {
    id: 2,
    date: "30 Nov 2025",
    time: "19:00",
    competition: "Copa Libertadores",
    home: "River Plate",
    away: "Atlético Mineiro",
    stadium: "Estadio Monumental",
    status: "próximo",
  },
  {
    id: 3,
    date: "7 Dec 2025",
    time: "18:00",
    competition: "Liga Profesional",
    home: "Independiente",
    away: "River Plate",
    stadium: "Estadio Libertadores de América",
    status: "próximo",
  },
]

export function NextMatches() {
  return (
    <section id="matches" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-2">Próximos Partidos</h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matches.map((match) => (
            <Card key={match.id} className="border-2 hover:border-primary hover:shadow-lg transition overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    {match.competition}
                  </Badge>
                  <Badge className="bg-primary text-white">{match.status === "próximo" ? "Próximo" : "Agendado"}</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {match.date} - {match.time}
                    </span>
                  </div>

                  <div className="bg-secondary rounded-lg p-4 text-center">
                    <p className="font-bold text-lg text-accent mb-2">
                      {match.home} vs {match.away}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{match.stadium}</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg transition">
                    Comprar Entradas
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
