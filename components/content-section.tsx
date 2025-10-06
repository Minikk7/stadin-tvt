import type { ReactNode } from "react"

interface ContentSectionProps {
  title?: string
  children: ReactNode
  className?: string
}

export function ContentSection({ title, children, className = "" }: ContentSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl font-bold mb-6 text-foreground">{title}</h2>}
        <div className="prose prose-lg max-w-none">{children}</div>
      </div>
    </section>
  )
}
