import PageHeader from "../../components/PageHeader"

export default function FundacionRiver() {
  return (
    <>
      <PageHeader title="Fundación River Plate" description="Transformando vidas a través del fútbol" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Nuestros Programas</h3>
            <div className="space-y-4">
              {[
                { title: "Programa de Fútbol Inclusivo", description: "Acceso al fútbol para comunidades vulnerables" },
                { title: "Educación Deportiva", description: "Formación integral de jóvenes talentos" },
                { title: "Apoyo Social", description: "Programas de ayuda comunitaria" },
                { title: "Desarrollo Territorial", description: "Infraestructura deportiva en la comunidad" },
              ].map((programa) => (
                <div key={programa.title} className="bg-background p-4 rounded border">
                  <p className="font-bold">{programa.title}</p>
                  <p className="text-sm text-muted-foreground">{programa.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
