import PageHeader from "../../components/PageHeader"

export default function Basquet() {
  return (
    <>
      <PageHeader title="Básquetbol" description="La cancha es nuestro dominio" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <img src="/diverse-basketball-team.png" alt="Básquetbol" className="rounded-lg mb-8 w-full max-w-2xl" />
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Básquetbol en River</h2>
          <p className="text-muted-foreground mb-4">
            River Plate cuenta con un programa de básquetbol que se destaca en las competiciones nacionales e
            internacionales.
          </p>
          <p className="text-muted-foreground">
            Conoce a nuestros jugadores y sigue todas las actualizaciones de nuestros equipos.
          </p>
        </div>
      </div>
    </>
  )
}
