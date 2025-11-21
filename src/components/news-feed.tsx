import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "River Plate se corona Campeón de América",
    excerpt:
      "En un emocionante encuentro, la Banda Cruzada logró su séptimo título continental tras vencer en la final.",
    category: "Campeonato",
    date: "22 Nov 2025",
    image: "/river-plate-champions-celebration.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Quintero vuelve a la cancha tras recuperarse de lesión",
    excerpt: "El mediocampista está listo para enfrentar a Boca Juniors en el próximo clásico de la Liga Profesional.",
    category: "Equipo",
    date: "20 Nov 2025",
    image: "/soccer-player-training.jpg",
  },
  {
    id: 3,
    title: "River Plate refuerza su defensa con nuevas contrataciones",
    excerpt: "La dirigencia anunció la llegada de dos nuevos defensas para fortalecer la línea defensiva.",
    category: "Mercado",
    date: "18 Nov 2025",
    image: "/soccer-players-training-camp.jpg",
  },
]

export function NewsFeed() {
  return (
    <section id="news" className="w-full py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-2">Últimas Noticias</h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="md:col-span-1 lg:col-span-2">
            {news[0] && (
              <Card className="overflow-hidden border-2 border-primary h-full hover:shadow-xl transition">
                <div className="md:flex">
                  <div
                    className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url('${news[0].image}')` }}
                  />
                  <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-primary text-white">{news[0].category}</Badge>
                    <h3 className="text-3xl font-bold text-accent mb-3">{news[0].title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{news[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{news[0].date}</span>
                      <button className="text-primary hover:text-primary/80 font-bold flex items-center gap-2 transition">
                        Leer más
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}
          </div>

          {/* Secondary Articles */}
          {news.slice(1).map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden border hover:border-primary hover:shadow-lg transition flex flex-col"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }} />
              <CardHeader className="pb-3">
                <Badge variant="outline" className="w-fit text-xs">
                  {article.category}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-accent mb-2">{article.title}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{article.date}</span>
                  <button className="text-primary hover:text-primary/80 font-bold text-sm">Leer →</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
