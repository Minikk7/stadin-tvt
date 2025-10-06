interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-white/80 max-w-3xl text-pretty leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}
