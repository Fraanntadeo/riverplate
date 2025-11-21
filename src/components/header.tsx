import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
            RP
          </div>
          <span className="font-bold text-xl text-accent hidden sm:inline">River Plate</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#matches" className="text-sm font-medium text-accent hover:text-primary transition">
            Próximos Partidos
          </a>
          <a href="#news" className="text-sm font-medium text-accent hover:text-primary transition">
            Noticias
          </a>
          <a href="#community" className="text-sm font-medium text-accent hover:text-primary transition">
            Comunidad
          </a>
          <a href="#about" className="text-sm font-medium text-accent hover:text-primary transition">
            Sobre Nosotros
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white">Ser Socio</Button>
          <button className="md:hidden p-2 hover:bg-secondary rounded-lg transition">
            <Menu className="w-6 h-6 text-accent" />
          </button>
        </div>
      </div>
    </header>
  )
}
