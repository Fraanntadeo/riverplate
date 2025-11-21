import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import PlantelDePrimera from "./pages/futbol/PlantelDePrimera"
import Historia from "./pages/institucional/Historia"
import CarnetUnico from "./pages/socios/CarnetUnico"
import Voley from "./pages/polideportivo/Voley"
import Basquet from "./pages/polideportivo/Basquet"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plantel-de-primera" element={<PlantelDePrimera />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/carnet-unico" element={<CarnetUnico />} />
            <Route path="/voley" element={<Voley />} />
            <Route path="/basquet" element={<Basquet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
