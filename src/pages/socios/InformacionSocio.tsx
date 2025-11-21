import PageHeader from "../../components/PageHeader"

export default function InformacionSocio() {
  return (
    <>
      <PageHeader title="Información de Socio" description="Gestiona tu membresía" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Tu Perfil de Socio</h3>
            <p className="text-muted-foreground mb-6">
              Accede a tu información de membresía, beneficios disponibles y historial de transacciones.
            </p>
            <div className="space-y-4">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Categoría de Socio</p>
                <p className="text-sm text-muted-foreground">Ver tu categoría actual</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Beneficios</p>
                <p className="text-sm text-muted-foreground">Conoce tus derechos y ventajas</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Historial</p>
                <p className="text-sm text-muted-foreground">Tu historial de membresía</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
