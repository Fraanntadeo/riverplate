import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
      <Link to="/">
        <Button className="bg-primary">Volver al inicio</Button>
      </Link>
    </div>
  )
}
