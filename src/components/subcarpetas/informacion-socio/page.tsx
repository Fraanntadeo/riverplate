import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Información Socio | River Plate",
  description: "Portal de información para socios",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Información Socio" subtitle="Portal exclusivo" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Mi Cuota", description: "Consulta el estado de tu cuota" },
            { title: "Mis Datos", description: "Actualiza tu información personal" },
            { title: "Mis Beneficios", description: "Conoce tus beneficios como socio" },
            { title: "Mensajes", description: "Comunicaciones del club" },
          ].map((item) => (
            <div key={item.title} className="bg-card p-6 rounded-lg border hover:shadow-lg transition">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-muted-foreground mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
