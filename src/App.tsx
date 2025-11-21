import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Header from "./components/header"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

// Fútbol
import PlantelDePrimera from "./pages/futbol/PlantelDePrimera"
import EstadisticasEquipo from "./pages/futbol/EstadisticasEquipo"
import DivisionReserva from "./pages/futbol/DivisionReserva"
import DivisionesJuveniles from "./pages/futbol/DivisionesJuveniles"
import DivisionesInfantiles from "./pages/futbol/DivisionesInfantiles"
import FutbolFemenino from "./pages/futbol/FutbolFemenino"
import FutbolSala from "./pages/futbol/FutbolSala"
import Titulos from "./pages/futbol/Titulos"

// Institucional
import Historia from "./pages/institucional/Historia"
import ComisionDirectiva from "./pages/institucional/ComisionDirectiva"
import ViviElClub from "./pages/institucional/ViviElClub"
import ElMonumental from "./pages/institucional/ElMonumental"
import IntegridadRiver from "./pages/institucional/IntegridadRiver"
import FundacionRiver from "./pages/institucional/FundacionRiver"
import ResponsabilidadSocial from "./pages/institucional/ResponsabilidadSocial"

// Socios
import CarnetUnico from "./pages/socios/CarnetUnico"
import DerrechoALaInformacion from "./pages/socios/DerrechoALaInformacion"
import InformacionSocio from "./pages/socios/InformacionSocio"
import ComoPagoMiCuota from "./pages/socios/ComoPagoMiCuota"
import DefensoriaSocio from "./pages/socios/DefensoriaSocio"
import SociosVitalicios from "./pages/socios/SociosVitalicios"

// Polideportivo
import Voley from "./pages/polideportivo/Voley"
import Basquet from "./pages/polideportivo/Basquet"
import Hockey from "./pages/polideportivo/Hockey"
import Handball from "./pages/polideportivo/Handball"
import Ajedrez from "./pages/polideportivo/Ajedrez"
import Natacion from "./pages/polideportivo/Natacion"
import Esports from "./pages/polideportivo/Esports"

// Entradas
import IngresosAlMonumental from "./pages/entradas/IngresosAlMonumental"
import FuturoMonumental from "./pages/entradas/FuturoMonumental"

// Multimedia
import Videos from "./pages/multimedia/Videos"
import Brandbook from "./pages/multimedia/Brandbook"

// Otros
import Patrocinadores from "./pages/Patrocinadores"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        {/*<Header />*/}
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Fútbol */}
            <Route path="/plantel-de-primera" element={<PlantelDePrimera />} />
            <Route path="/estadisticas-equipo" element={<EstadisticasEquipo />} />
            <Route path="/division-reserva" element={<DivisionReserva />} />
            <Route path="/divisiones-juveniles" element={<DivisionesJuveniles />} />
            <Route path="/divisiones-infantiles" element={<DivisionesInfantiles />} />
            <Route path="/futbol-femenino" element={<FutbolFemenino />} />
            <Route path="/futbol-sala" element={<FutbolSala />} />
            <Route path="/titulos" element={<Titulos />} />
            
            {/* Institucional */}
            <Route path="/historia" element={<Historia />} />
            <Route path="/comision-directiva-2025-club-atletico-river-plate" element={<ComisionDirectiva />} />
            <Route path="/vivi-el-club" element={<ViviElClub />} />
            <Route path="/el-monumental" element={<ElMonumental />} />
            <Route path="/integridad-river" element={<IntegridadRiver />} />
            <Route path="/fundacion-river-plate" element={<FundacionRiver />} />
            <Route path="/responsabilidad-social" element={<ResponsabilidadSocial />} />
            
            {/* Socios */}
            <Route path="/carnet-unico" element={<CarnetUnico />} />
            <Route path="/derecho-a-la-informacion" element={<DerrechoALaInformacion />} />
            <Route path="/informacion-socio" element={<InformacionSocio />} />
            <Route path="/como-pago-mi-cuota" element={<ComoPagoMiCuota />} />
            <Route path="/defensoria-del-socio" element={<DefensoriaSocio />} />
            <Route path="/socios-vitalicios" element={<SociosVitalicios />} />
            
            {/* Polideportivo */}
            <Route path="/voley" element={<Voley />} />
            <Route path="/basquet" element={<Basquet />} />
            <Route path="/hockey-sobre-cesped" element={<Hockey />} />
            <Route path="/handball" element={<Handball />} />
            <Route path="/ajedrez" element={<Ajedrez />} />
            <Route path="/natacion" element={<Natacion />} />
            <Route path="/esports" element={<Esports />} />
            
            {/* Entradas */}
            <Route path="/ingresos-al-monumental" element={<IngresosAlMonumental />} />
            <Route path="/futuro-monumental" element={<FuturoMonumental />} />
            
            {/* Multimedia */}
            <Route path="/videos" element={<Videos />} />
            <Route path="/brandbook" element={<Brandbook />} />
            
            {/* Otros */}
            <Route path="/patrocinadores" element={<Patrocinadores />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
