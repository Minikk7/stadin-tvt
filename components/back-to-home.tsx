import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackToHome() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:underline font-medium mb-6">
      <ArrowLeft size={20} />
      Takaisin etusivulle
    </Link>
  )
}
