import { Card } from "@/components/ui/card"
import { Instagram, Facebook, Twitter, Youtube, Heart } from "lucide-react"

const socialStats = [
  {
    platform: "Instagram",
    followers: "8.5M",
    icon: Instagram,
    color: "from-pink-500 to-rose-500",
    handle: "@RiverPlate",
  },
  {
    platform: "Facebook",
    followers: "6.2M",
    icon: Facebook,
    color: "from-blue-600 to-blue-500",
    handle: "River Plate",
  },
  {
    platform: "Twitter/X",
    followers: "4.8M",
    icon: Twitter,
    color: "from-gray-900 to-gray-700",
    handle: "@RiverPlate",
  },
  {
    platform: "YouTube",
    followers: "2.3M",
    icon: Youtube,
    color: "from-red-600 to-red-500",
    handle: "River Plate",
  },
]

export function SocialSection() {
  return (
    <section id="community" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-2">Síguenos en Redes</h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl">
            Conecta con millones de hinchas de River Plate en nuestras redes sociales. Sé parte de la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialStats.map((social) => {
            const Icon = social.icon
            return (
              <Card
                key={social.platform}
                className="overflow-hidden border-2 hover:border-primary hover:shadow-xl transition cursor-pointer group"
              >
                <div className={`h-32 bg-gradient-to-br ${social.color} relative overflow-hidden`}>
                  <Icon className="absolute bottom-2 right-2 w-16 h-16 opacity-20" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-accent mb-1">{social.platform}</h3>
                  <p className="text-sm text-gray-600 mb-4">{social.handle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{social.followers}</span>
                    <Heart className="w-5 h-5 text-primary group-hover:fill-primary transition" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 bg-primary/5 rounded-xl p-8 border-2 border-primary/20">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-accent mb-3">Únete a la Comunidad</h3>
            <p className="text-gray-700 mb-6">
              Suscríbete a nuestro boletín para recibir actualizaciones exclusivas, noticias y ofertas especiales.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary outline-none transition"
              />
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
