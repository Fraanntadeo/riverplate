import PageHeader from "../../components/PageHeader"

export default function DefensoriaSocio() {
  return (
    <>
      <PageHeader title="Defensoría del Socio" description="Protección de derechos del socio" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border max-w-2xl">
            <h3 className="text-xl font-bold mb-4">¿Necesitas Ayuda?</h3>
            <p className="text-muted-foreground mb-6">
              La Defensoría del Socio existe para proteger tus derechos y resolver cualquier inconveniente que tengas como miembro de River Plate.
            </p>
            <div className="bg-background p-4 rounded border mb-4">
              <p className="font-bold">Teléfono</p>
              <p className="text-muted-foreground">+54 11 XXXX-XXXX</p>
            </div>
            <div className="bg-background p-4 rounded border mb-4">
              <p className="font-bold">Email</p>
              <p className="text-muted-foreground">defensoria@riverplate.com.ar</p>
            </div>
            <div className="bg-background p-4 rounded border">
              <p className="font-bold">Oficina</p>
              <p className="text-muted-foreground">Estadio Monumental - Planta Baja</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
