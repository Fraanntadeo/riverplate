import PageHeader from "../../components/PageHeader"

export default function SociosVitalicios() {
  return (
    <>
      <PageHeader title="Socios Vitalicios" description="Membresía de por vida en River Plate" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Socio Vitalicio</h3>
            <p className="text-muted-foreground mb-6">
              La categoría de Socio Vitalicio representa el máximo nivel de compromiso con River Plate, otorgando beneficios exclusivos de por vida.
            </p>
            <div className="space-y-3">
              <p className="font-bold">Beneficios Exclusivos:</p>
              <p className="text-muted-foreground">✓ Entrada de por vida al Estadio Monumental</p>
              <p className="text-muted-foreground">✓ Acceso VIP a eventos del club</p>
              <p className="text-muted-foreground">✓ Invitaciones a actos sociales</p>
              <p className="text-muted-foreground">✓ Descuentos en tienda oficial</p>
              <p className="text-muted-foreground">✓ Reconocimiento público en el club</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
