import PageHeader from "../components/PageHeader"

const sponsors = [
  {
    name: 'Adidas',
    logo: 'https://www.cariverplate.com.ar/imagenes/banners/2024-05/30-adidasbarrasuperior.png',
    url: 'https://www.adidas.com.ar/river_plate',
  },
  {
    name: 'Betano',
    logo: 'https://www.cariverplate.com.ar/imagenes/banners/2025-05/203-betano-logo-negro21.png',
    url: 'http://betano.bet.ar/',
  },
  {
    name: 'MAS Online',
    logo: 'https://www.cariverplate.com.ar/imagenes/banners/2025-05/202-mas-monu-ok.png',
    url: 'https://www.masonline.com.ar/',
  },
  {
    name: 'DIRECTV',
    logo: 'https://www.cariverplate.com.ar/imagenes/banners/2023-01/201-directv-sponsor-header.png',
    url: 'https://www.directv.com.ar/',
  },
  {
    name: 'Assist Card',
    logo: 'https://www.cariverplate.com.ar/imagenes/banners/2019-08/194-assist-home.png',
    url: 'https://www.assistcard.com/ar/b2c/river-plate',
  },
]

export default function Patrocinadores() {
  return (
    <>
      <PageHeader 
        title="Patrocinadores" 
        description="Conoce a las empresas que acompañan a River Plate en su camino hacia la gloria"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-12">
          
          {/* Principales Patrocinadores */}
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-3xl font-bold mb-8">Principales Patrocinadores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-6 rounded-lg border hover:shadow-lg hover:border-primary transition-all group"
                >
                  <div className="flex items-center justify-center h-32 bg-gray-50 rounded mb-4 group-hover:bg-gray-100 transition">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-28 max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-center group-hover:text-primary transition-colors">
                    {sponsor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Visitar sitio oficial →
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Información */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">¿Interesado en patrocinar a River Plate?</h2>
            <p className="text-white/90 mb-6 text-lg max-w-2xl">
              River Plate ofrece diferentes opciones de patrocinio para empresas que deseen
              asociarse con el club más importante de Argentina. Desde publicidad en el estadio
              hasta programas de responsabilidad social, tenemos soluciones adaptadas a tu negocio.
            </p>
            <div className="space-y-2 text-white/95">
              <p>
                <strong>Email:</strong> marketing@cariverplate.com.ar
              </p>
              <p>
                <strong>Teléfono:</strong> (54 11) 5238-2505
              </p>
              <p>
                <strong>Horario:</strong> Lunes a Viernes, 9:00 a 18:00 hs
              </p>
            </div>
          </div>

          {/* Historia */}
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-3xl font-bold mb-6">Alianzas Estratégicas</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Los patrocinios de River Plate van más allá de una simple relación comercial. 
              Son alianzas estratégicas que comparten valores comunes de excelencia, compromiso 
              y pasión por el fútbol argentino.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Cada empresa que acompaña a River Plate es parte de nuestra historia, contribuyendo 
              a que el Millonario siga siendo el referente del fútbol mundial.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
