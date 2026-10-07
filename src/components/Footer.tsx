import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { offers } from "@/data/offers";
import { site } from "@/data/site";
import { CookiePreferencesButton } from "./CookieConsent";
import WhatsAppLink from "./WhatsAppLink";

const socialLinks = [
  { name: "Instagram", href: site.social.instagram, Icon: FaInstagram },
  { name: "LinkedIn", href: site.social.linkedin, Icon: FaLinkedin },
  { name: "Facebook", href: site.social.facebook, Icon: FaFacebook },
  { name: "GitHub", href: site.social.github, Icon: FaGithub },
];

const footerLink = "text-gray-300 hover:text-primary transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-secondary px-4 pb-24 text-white sm:px-6 lg:px-8">
      <div className="absolute left-0 top-0 h-1 w-full bg-primary" aria-hidden="true" />

      <div className="container-page relative py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.4fr]">
          <div className="space-y-5">
            <Image
              src="/company/easydev-logo-escuro.webp"
              alt="EasyDev"
              width={96}
              height={96}
              className="h-24 w-24 object-contain"
            />
            <p className="max-w-xs leading-relaxed text-gray-300">{site.tagline}</p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} da EasyDev`}
                  className="rounded-full bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-on-primary"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Serviços">
            <h2 className="mb-5 text-lg font-bold tracking-wide">Serviços</h2>
            <ul className="space-y-3">
              {offers.map((offer) => (
                <li key={offer.slug}>
                  <Link href={`/${offer.slug}/`} className={footerLink}>
                    {offer.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Empresa">
            <h2 className="mb-5 text-lg font-bold tracking-wide">Empresa</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/diagnostico/" className={footerLink}>
                  Diagnóstico gratuito
                </Link>
              </li>
              <li>
                <Link href="/precos/" className={footerLink}>
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/sobre/" className={footerLink}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade/" className={footerLink}>
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso/" className={footerLink}>
                  Termos de uso
                </Link>
              </li>
              <li>
                <CookiePreferencesButton className={`${footerLink} text-left`} />
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 text-lg font-bold tracking-wide">Fale com a gente</h2>
            <ul className="space-y-3">
              <li>
                <WhatsAppLink origin="rodape" className={footerLink}>
                  WhatsApp {site.phoneDisplay}
                </WhatsAppLink>
              </li>
              <li>
                <a href={`tel:${site.phoneE164}`} className={footerLink}>
                  Ligar para {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={`${footerLink} [overflow-wrap:anywhere]`}>
                  {site.email}
                </a>
              </li>
              <li className="text-gray-300">
                {site.city}, {site.region} · atendemos a {site.serviceArea} e, de forma remota, todo o Brasil
              </li>
              <li className="text-gray-300">{site.hours.display}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {site.fullName}. CNPJ {site.cnpj}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
