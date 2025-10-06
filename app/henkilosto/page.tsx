import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"
import { Mail, Phone } from "lucide-react"

export default function HenkilostoPage() {
  return (
    <>
      <PageHeader title="Henkilöstöä" description="Tutustu TVT-koulutuksen opettajiin ja henkilökuntaan" />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Koulutuspäällikkö">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Matti Meikäläinen</h3>
            <p className="text-muted-foreground mb-4">Koulutuspäällikkö, TVT-koulutus</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <a href="mailto:matti.meikalainen@edu.hel.fi" className="hover:text-secondary">
                  matti.meikalainen@edu.hel.fi
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} />
                <span>09 310 12345</span>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Opettajat">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Liisa Virtanen</h3>
              <p className="text-sm text-muted-foreground mb-3">Ohjelmoinnin opettaja</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <a href="mailto:liisa.virtanen@edu.hel.fi" className="hover:text-secondary">
                    liisa.virtanen@edu.hel.fi
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Pekka Korhonen</h3>
              <p className="text-sm text-muted-foreground mb-3">Verkkojen opettaja</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <a href="mailto:pekka.korhonen@edu.hel.fi" className="hover:text-secondary">
                    pekka.korhonen@edu.hel.fi
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Anna Nieminen</h3>
              <p className="text-sm text-muted-foreground mb-3">IT-tuen opettaja</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <a href="mailto:anna.nieminen@edu.hel.fi" className="hover:text-secondary">
                    anna.nieminen@edu.hel.fi
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Jari Mäkinen</h3>
              <p className="text-sm text-muted-foreground mb-3">Elektroniikan opettaja</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <a href="mailto:jari.makinen@edu.hel.fi" className="hover:text-secondary">
                    jari.makinen@edu.hel.fi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Opinto-ohjaaja">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Sari Lahtinen</h3>
            <p className="text-muted-foreground mb-4">Opinto-ohjaaja</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <a href="mailto:sari.lahtinen@edu.hel.fi" className="hover:text-secondary">
                  sari.lahtinen@edu.hel.fi
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} />
                <span>09 310 12346</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Opinto-ohjaaja auttaa opintojen suunnittelussa, uraohjauksessa ja henkilökohtaisten haasteiden
              ratkaisemisessa.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="IT-tuki">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">TVT-tukipalvelu</h3>
            <p className="text-muted-foreground mb-4">Tekninen tuki opiskelijoille ja henkilökunnalle</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <a href="mailto:tvt.tuki@edu.hel.fi" className="hover:text-secondary">
                  tvt.tuki@edu.hel.fi
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} />
                <span>09 310 12350</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Avoinna arkisin klo 8-16</p>
          </div>
        </ContentSection>
      </div>
    </>
  )
}
