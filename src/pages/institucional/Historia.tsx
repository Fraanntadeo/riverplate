import PageHeader from "../../components/PageHeader"

export default function Historia() {
  return (
    <>
      <PageHeader title="Historia de River Plate" description="Más de 130 años de gloria y tradición" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="prose max-w-3xl">
          <h2>Fundación y Primeros Años</h2>
          <p>
            Club Atlético River Plate fue fundado el 25 de mayo de 1901, resultado de la fusión entre el Club Atlético
            River Plate (fundado en 1897) y el Atlético del Río de la Plata (fundado en 1900).
          </p>
          <h2>Épocas Doradas</h2>
          <p>
            A lo largo de su historia, River Plate ha ganado numerosos títulos nacionales e internacionales,
            consolidándose como uno de los clubes más exitosos del fútbol argentino.
          </p>
        </div>
      </div>
    </>
  )
}
