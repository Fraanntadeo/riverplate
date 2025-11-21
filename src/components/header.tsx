import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 hidden md:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <ul className="flex gap-8 text-sm font-semibold text-gray-700">
            <li>
              <a
                href="https://www.somosriver.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary uppercase"
              >
                Somos River
              </a>
            </li>
            <li>
              <a
                href="http://www.tiendariver.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary uppercase"
              >
                Tienda River
              </a>
            </li>
            <li>
              <a
                href="http://www.fundacionriver.org.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary uppercase"
              >
                Fundación River
              </a>
            </li>
            <li>
              <Link to="/patrocinadores" className="hover:text-primary uppercase">
                Patrocinadores
              </Link>
            </li>
          </ul>

          {/* Sponsors/Logos */}
          <ul className="flex gap-4 items-center">
            <li>
              <a
                href="https://www.adidas.com.ar/river_plate"
                target="_blank"
                rel="noopener noreferrer"
                title="Adidas"
              >
                <img
                  src="https://www.cariverplate.com.ar/imagenes/banners/2024-05/30-adidasbarrasuperior.png"
                  alt="Adidas"
                  className="h-6"
                />
              </a>
            </li>
            <li>
              <a href="http://betano.bet.ar/" target="_blank" rel="noopener noreferrer" title="Betano">
                <img
                  src="https://www.cariverplate.com.ar/imagenes/banners/2025-05/203-betano-logo-negro21.png"
                  alt="Betano"
                  className="h-6"
                />
              </a>
            </li>
            <li>
              <a href="https://www.directv.com.ar/" target="_blank" rel="noopener noreferrer" title="DIRECTV">
                <img
                  src="https://www.cariverplate.com.ar/imagenes/banners/2023-01/201-directv-sponsor-header.png"
                  alt="DIRECTV"
                  className="h-6"
                />
              </a>
            </li>
          </ul>

          {/* Language Selector */}
          <div className="border-l border-gray-200 pl-4">
            <div className="flex gap-2 text-sm">
              <span className="font-semibold">🇦🇷 ES</span>
              <a href="#en" className="text-gray-600 hover:text-primary">
                🇺🇸 EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
