

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-accent text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Club Atlético River Plate</h4>
            <p className="text-gray-300 text-sm">
              Campeón de América. Somos el equipo más tradicional y ganador de Argentina.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/historia" className="text-gray-300 hover:text-primary transition">
                  Acerca de River
                </a>
              </li>
              <li>
                <a href="/historia" className="text-gray-300 hover:text-primary transition">
                  Historia
                </a>
              </li>
              <li>
                <a href="/el-monumental" className="text-gray-300 hover:text-primary transition">
                  Estadio Monumental
                </a>
              </li>
              <li>
                <a href="mailto:info@riverplate.com.ar" className="text-gray-300 hover:text-primary transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Equipo</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/plantel-de-primera" className="text-gray-300 hover:text-primary transition">
                  Plantel de Primera
                </a>
              </li>
              <li>
                <a href="/divisiones-juveniles" className="text-gray-300 hover:text-primary transition">
                  Categorías
                </a>
              </li>
              <li>
                <a href="/division-reserva" className="text-gray-300 hover:text-primary transition">
                  División Reserva
                </a>
              </li>
              <li>
                <a href="/estadisticas-equipo" className="text-gray-300 hover:text-primary transition">
                  Estadísticas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/riverplate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/riverplate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/riverplate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/riverplate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">&copy; 2025 Club Atlético River Plate. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-300 hover:text-primary transition">
              Privacidad
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition">
              Términos de Uso
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
