"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = [
  { href: "/", label: "Etusivu" },
  { href: "/orientaatio", label: "Orientaatio" },
  { href: "/pakollinen", label: "Pakollinen tutkinnon osa" },
  {
    label: "Tutkintonimikkeet",
    dropdown: [
      { href: "/tutkintonimikkeet/elektroniikka-asentaja", label: "Elektroniikka-asentaja" },
      { href: "/tutkintonimikkeet/hyvinvointiteknologia-asentaja", label: "Hyvinvointiteknologia-asentaja" },
      { href: "/tutkintonimikkeet/it-tukihenkilo", label: "IT-tukihenkilö" },
      { href: "/tutkintonimikkeet/ohjelmistokehittaja", label: "Ohjelmistokehittäjä" },
      { href: "/tutkintonimikkeet/tietoverkkoasentaja", label: "Tietoverkkoasentaja" },
    ],
  },
  {
    label: "Valinnaiset tutkinnon osat",
    dropdown: [
      { href: "/valinnaiset/tietoverkkolaitteiden-asennus", label: "Tietoverkkolaitteiden asennus, 45 osp" },
      { href: "/valinnaiset/elektroniikkalaitteiden-huolto", label: "Elektroniikkalaitteiden huoltotyöt, 30 osp" },
      { href: "/valinnaiset/digitaalisen-median-mallinnus", label: "Digitaalisen median mallinnus, 15 osp" },
      { href: "/valinnaiset/kulunvalvonta-jarjestelma", label: "Kulunvalvonta-järjestelmän asennus, 30 osp" },
      { href: "/valinnaiset/kyberturvallisuus", label: "Kyberturvallisuuden ylläpitäminen, 30 osp" },
      { href: "/valinnaiset/sulautettu-jarjestelma", label: "Sulautetun järjestelmän toteuttaminen, 45 osp" },
      { href: "/valinnaiset/koti-ja-palvelujarjestelmat", label: "Koti- ja palvelujärjestelmät, 15 osp" },
      { href: "/valinnaiset/sahko-ja-automaatio", label: "Sähkö- ja automaatioalalla toimiminen, 30 osp" },
      { href: "/valinnaiset/tietoteknisen-ratkaisun-myynti", label: "Tietoteknisen ratkaisun myynti, 30 osp" },
      { href: "/valinnaiset/verkkopalvelun-toteuttaminen", label: "Verkkopalvelun tekninen toteuttaminen, 15 osp" },
      { href: "/valinnaiset/jarjestelmätuki", label: "Järjestelmätuessa toimiminen, 45 osp" },
      { href: "/valinnaiset/tyotehtavien-automatisointi", label: "Työtehtävien automatisointi, 15 osp" },
      { href: "/valinnaiset/it-laitehuolto", label: "IT-laitehuolto, 15 osp" },
      { href: "/valinnaiset/front-end-ohjelmointi", label: "Front end -ohjelmointi, 15 osp" },
      { href: "/valinnaiset/hyvinvointiteknologialaitteet", label: "Hyvinvointiteknologialaitteiden huolto, 30 osp" },
      { href: "/valinnaiset/ohjelmiston-toteuttaminen", label: "Ohjelmiston toteuttaminen, 15 osp" },
    ],
  },
  {
    label: "Yhteiset tutkinnon osat",
    dropdown: [
      { href: "/yhteiset/viestinta-vuorovaikutus", label: "Viestintä- ja vuorovaikutusosaaminen" },
      { href: "/yhteiset/matemaattis-luonnontieteellinen", label: "Matemaattis-luonnontieteellinen osaaminen" },
      { href: "/yhteiset/yhteiskunta-tyoelama", label: "Yhteiskunta- ja työelämäosaaminen" },
      { href: "/yhteiset/valinnaiset-ytot", label: "Valinnaiset YTOT" },
    ],
  },
  { href: "/wilma", label: "Wilma-perusteita" },
  { href: "/tyo-ja-loma-ajat", label: "Työ- ja loma-ajat" },
  { href: "/henkilosto", label: "Henkilöstöä" },
  { href: "/yhteystiedot", label: "Yhteystietoja" },
  { href: "/linkit", label: "Linkkejä" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Stadin TVT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="px-4 py-2 rounded-md text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-colors inline-flex items-center gap-1">
                    {item.label}
                    <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link href={subItem.href} className="cursor-pointer text-sm">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 max-h-[80vh] overflow-y-auto">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className="mb-2">
                  <div className="px-4 py-2 text-sm font-bold text-white">{item.label}</div>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block pl-8 pr-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
