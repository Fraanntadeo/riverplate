import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
        <img
          src="/river-plate-champions-celebration.jpg"
          alt="River Plate"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Club Atlético River Plate</h1>
          <p className="text-xl mb-8 max-w-2xl">Un millonario de gloria. Bienvenido a la casa del fútbol argentino.</p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Comprar Entradas
            </Button>
            <Link to="/carnet-unico">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
                Ser Socio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Próximos Partidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((match) => (
            <div key={match} className="border border-border rounded-lg p-6 hover:shadow-lg transition">
              <p className="text-sm text-muted-foreground mb-2">Fecha {match}</p>
              <p className="font-bold mb-4">River vs Rival {match}</p>
              <p className="text-sm mb-4">Estadio Monumental - 20:00 hs</p>
              <Button variant="outline" className="w-full bg-transparent">
                Ver Entradas
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((news) => (
              <div
                key={news}
                className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img src="/placeholder.svg?height=200&width=400" alt="News" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold mb-2">Noticia {news}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Descripción de la noticia...</p>
                  <Link to="/" className="text-primary hover:underline text-sm font-bold">
                    Leer más →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
