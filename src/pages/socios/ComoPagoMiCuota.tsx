import PageHeader from "../../components/PageHeader"

export default function ComoPagoMiCuota() {
  return (
    <>
      <PageHeader title="¿Cómo pago mi cuota?" description="Métodos de pago para socios" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Métodos de Pago Disponibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Transferencia Bancaria</p>
                <p className="text-sm text-muted-foreground">Directo a nuestra cuenta</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Tarjeta de Crédito</p>
                <p className="text-sm text-muted-foreground">Todas las tarjetas principales</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Débito Automático</p>
                <p className="text-sm text-muted-foreground">Pago automático mensual</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <p className="font-bold">Billetera Virtual</p>
                <p className="text-sm text-muted-foreground">Wallets digitales</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Información Importante</h3>
            <p className="text-muted-foreground mb-4">
              El pago de la cuota debe realizarse antes de la fecha límite establecida en tu recibo. Puedes acceder al comprobante de pago desde tu cuenta.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
