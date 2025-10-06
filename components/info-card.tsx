import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface InfoCardProps {
  icon?: LucideIcon
  title: string
  description: string
  children?: ReactNode
  href?: string
}

export function InfoCard({ icon: Icon, title, description, children, href }: InfoCardProps) {
  const content = (
    <>
      {Icon && (
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-secondary" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      {children}
      {href && !children && (
        <div className="inline-flex items-center gap-2 text-secondary font-medium mt-4">
          Lue lisää <ArrowRight size={16} />
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-secondary/50 block"
      >
        {content}
      </Link>
    )
  }

  return <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">{content}</div>
}
