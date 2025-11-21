import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface News {
  id: number
  title: string
  description: string
  image: string
  category: string
  link: string
}

interface Match {
  id: number
  date: string
  homeTeam: string
  awayTeam: string
  stadium: string
  time: string
}

export default function Home() {
  // Datos de ejemplo - en producción vendrían de una API
  const upcomingMatches: Match[] = [
    {
      id: 1,
      date: "Dom. 24/11/25",
      homeTeam: "Racing",
      awayTeam: "River Plate",
      stadium: "Estadio Presidente Perón",
      time: "19:15"
    }
  ]

  const news: News[] = [
    {
      id: 1,
      title: "Clausura 2025 - Racing, el rival en octavos de final",
      description: "Luego de la última fecha por la fase de grupos, el equipo de Marcelo Gallardo jugará la próxima instancia frente al conjunto de Avellaneda...",
      image: "https://www.cariverplate.com.ar/imagenes/contenidos/2025-11/27622-nota.jpg",
      category: "Fútbol Profesional",
      link: "/clausura-2025-racing"
    },
    {
      id: 2,
      title: "Empate en Liniers por la 16ª fecha",
      description: "Este domingo 16 de noviembre, por el último partido de la fase de grupos del Clausura, River Plate igualó 0-0 frente a Vélez Sarsfield.",
      image: "https://www.cariverplate.com.ar/imagenes/contenidos/2025-11/27617-nota.jpg",
      category: "Fútbol Profesional",
      link: "/empate-liniers"
    },
    {
      id: 3,
      title: "Las estadísticas de Vélez vs. River (Clausura 2025)",
      description: "Los datos del partido de este domingo 16 de noviembre, en Liniers, por la fecha 16 del campeonato.",
      image: "https://www.cariverplate.com.ar/imagenes/contenidos/2025-11/27616-riv_4409.jpg",
      category: "Fútbol Profesional",
      link: "/estadisticas-velez-river"
    },
    {
      id: 4,
      title: "Santiago Lencina renovó su vínculo",
      description: "En compañía del Presidente Stefano Di Carlo, el talentoso mediocampista firmó la extensión de su contrato con el Club hasta el 31 de diciembre de 2028.",
      image: "https://www.cariverplate.com.ar/imagenes/contenidos/2025-11/27610-firmasantiagolencinarenovacion_014.jpg",
      category: "Fútbol Profesional",
      link: "/lencina-renovacion"
    }
  ]

  const highlights = [
    {
      title: "Nuestras autoridades",
      description: "Los nombres de quienes llevan el club hacia adelante con profesionalismo y pasión.",
      image: "https://www.cariverplate.com.ar/imagenes/banners/2025-04/41-4922674670822600560.jpg",
      link: "/comision-directiva-2025-club-atletico-river-plate"
    },
    {
      title: "Viví el club",
      description: "Acercate a la institución y conocé todas nuestras actividades, deportes y disciplinas.",
      image: "https://www.cariverplate.com.ar/imagenes/banners/2024-08/39-club.jpg",
      link: "/vivi-el-club"
    },
    {
      title: "Nuestra Historia",
      description: "Conocé todos nuestros logros a través de los años. Ingresá a esta sección y recorré cada parte de nuestra historia.",
      image: "https://www.cariverplate.com.ar/imagenes/banners/2015-06/40-nuestrahistoria2.png",
      link: "/historia"
    },
    {
      title: "Plantel Profesional",
      description: "Recorré uno por uno a los jugadores del plantel. Conocé sus datos y estadísticas en esta sección.",
      image: "https://www.cariverplate.com.ar/imagenes/banners/2024-08/42-115.jpg",
      link: "/plantel-de-primera"
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://www.cariverplate.com.ar/imagenes/banners/2025-09/182-header2025.jpg"
            alt="River Plate Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Club Atlético River Plate
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Un millonario de gloria. Bienvenido a la casa del fútbol argentino.
            </p>
          </div>
        </div>
      </section>

      {/* Próximos Partidos */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Próximos Partidos</h2>
          <Link to="/calendario-de-partidos" className="text-primary hover:underline text-sm font-bold">
            Ver calendario completo
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingMatches.map((match) => (
            <div key={match.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <p className="text-sm text-gray-600 font-semibold mb-2">{match.date}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <p className="font-bold text-lg">{match.homeTeam}</p>
                  <p className="text-gray-600 text-sm">vs</p>
                  <p className="font-bold text-lg">{match.awayTeam}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{match.stadium}</p>
              <p className="text-sm font-bold text-primary mb-4">{match.time}</p>
              <Link to="/ingresos-al-monumental">
                <Button className="w-full">Comprar Entradas</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Noticias Principales */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Noticias principales</h2>
          <Link to="/todas-las-noticias" className="text-primary hover:underline text-sm font-bold">
            ver todas las noticias
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item) => (
            <Link key={item.id} to={item.link}>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold text-primary uppercase mb-2">{item.category}</p>
                    <h3 className="font-bold text-base mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  </div>
                  <p className="text-primary text-sm font-bold mt-4">Leer más →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section className="bg-gray-50 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Destaca</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <Link key={idx} to={item.link}>
                <div className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plantel */}
      <section className="max-w-7xl mx-auto px-4 py-12 mt-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Plantel de fútbol profesional</h2>
          <Link to="/plantel-de-primera" className="text-primary hover:underline text-sm font-bold">
            ver todo el plantel
          </Link>
        </div>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-4">Sección de plantel en desarrollo</p>
          <Link to="/plantel-de-primera">
            <Button>Ver Plantel Completo</Button>
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary text-white py-12 mt-8">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¡Recibí el newsletter oficial!</h2>
          <p className="mb-6">Entérate de todas las noticias de River Plate primero</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-2 rounded text-black"
            />
            <Button className="bg-white text-primary hover:bg-gray-100">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
