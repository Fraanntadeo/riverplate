import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Historia | River Plate",
  description: "La historia de Club Atlético River Plate",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Historia del Club" subtitle="Desde 1901" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {[
            {
              year: "1901",
              title: "Fundación",
              description: "Club Atlético River Plate es fundado.",
            },
            {
              year: "1938",
              title: "Estadio Monumental",
              description: "Inauguración del Estadio Monumental.",
            },
            {
              year: "1996",
              title: "Copa Libertadores",
              description: "River Plate gana su primera Copa Libertadores.",
            },
            {
              year: "2015",
              title: "Segunda Copa Libertadores",
              description: "River Plate conquista nuevamente la Copa Libertadores.",
            },
            {
              year: "2024",
              title: "Campeón de América",
              description: "River Plate se corona Campeón de América.",
            },
          ].map((event) => (
            <div key={event.year} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full" />
                <div className="w-1 h-16 bg-primary/20" />
              </div>
              <div className="pb-8">
                <p className="text-sm font-semibold text-primary">{event.year}</p>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
