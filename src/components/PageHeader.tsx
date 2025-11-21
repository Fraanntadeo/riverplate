interface PageHeaderProps {
  title: string
  description?: string
  backgroundImage?: string
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div
      className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 md:py-16"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-balance">{title}</h1>
        {description && <p className="text-lg mt-2 text-primary-foreground/90">{description}</p>}
      </div>
    </div>
  )
}