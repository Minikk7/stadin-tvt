import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Stadin TVT</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Helsingin kaupungin Stadin ammatti- ja aikuisopiston tieto- ja viestintätekniikan tukikeskus
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Pikalinkit</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/oppiminen" className="text-white/80 hover:text-white transition-colors">
                  Oppiminen
                </Link>
              </li>
              <li>
                <Link href="/laitteet" className="text-white/80 hover:text-white transition-colors">
                  Laitteet
                </Link>
              </li>
              <li>
                <Link href="/tukipalvelut" className="text-white/80 hover:text-white transition-colors">
                  Tukipalvelut
                </Link>
              </li>
              <li>
                <Link href="/yhteystiedot" className="text-white/80 hover:text-white transition-colors">
                  Yhteystiedot
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Yhteystiedot</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Stadin ammatti- ja aikuisopisto
              <br />
              Helsinki, Suomi
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Stadin TVT. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  )
}
