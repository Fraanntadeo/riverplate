import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Español | River Plate",
  description: "Sitio en Español",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Bienvenido a River Plate" subtitle="Sitio en Español" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Este es el sitio oficial de Club Atlético River Plate en español.
          </p>
          <p className="text-muted-foreground">
            Estás viendo el contenido en español. Puedes cambiar de idioma en el menú superior.
          </p>
        </div>
      </div>
    </>
  )
}
