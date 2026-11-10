import { ArrowUp, Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  DIRECTOR_NAME,
  DIRECTOR_ROLE,
  EMAIL_ADDRESS,
  LOCATION_DISPLAY,
  MAILTO_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  WEBSITE_DISPLAY,
  WHATSAPP_URL,
} from "../lib/data";
import { SaMonogram, WhatsAppIcon } from "./icons";

interface FooterProps {
  onNavigate: (href: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-teal/15 bg-obsidian">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-teal/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-10">
        <button
          onClick={() => onNavigate("#inicio")}
          className="group flex flex-wrap items-center gap-4 sm:gap-6 text-left"
          aria-label="Voltar ao topo"
        >
          <SaMonogram className="h-14 w-16 sm:h-20 sm:w-24 transition-transform duration-500 group-hover:scale-105" />
          <span className="font-display text-[clamp(2.2rem,6.5vw,5.4rem)] font-light leading-none tracking-tight text-ice transition-colors duration-500 group-hover:text-teal">
            S.A Business <span className="teal-gradient-text italic">Solution</span>
          </span>
        </button>

        <div className="mt-14 grid gap-12 border-t border-ice/10 pt-12 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-[15px] text-ice/65 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">
              Contato Direto
            </p>
            <ul className="mt-5 space-y-4 text-[14px] sm:text-[15px] text-ice/65">
              <li className="text-ice font-medium">
                {DIRECTOR_NAME}{" "}
                <span className="text-xs font-normal uppercase tracking-wider text-teal">
                  · {DIRECTOR_ROLE}
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-teal"
                >
                  <Phone className="h-4 w-4 shrink-0 text-teal" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={MAILTO_URL}
                  className="flex items-center gap-3 transition-colors hover:text-teal break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-teal" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-teal" />
                <span>{WEBSITE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-teal" />
                <span>{LOCATION_DISPLAY}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">
              S.A Business Solution
            </p>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ice/60">
              Mais de 30 anos de experiência em administração, finanças, recursos humanos e
              estratégia comercial — organizando processos, otimizando custos e apoiando decisões
              estratégicas.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-teal/40 px-6 py-3 text-sm font-semibold text-teal transition-all duration-300 hover:bg-gradient-to-r hover:from-teal hover:to-mint hover:text-obsidian"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar Diagnóstico
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-ice/10 pt-8 sm:flex-row">
          <p className="text-xs text-ice/45 text-center sm:text-left">
            © {year} S.A Business Solution · {DIRECTOR_NAME}. Todos os direitos reservados.
          </p>
          <p className="font-display text-sm italic text-teal/80">
            solução para sua empresa
          </p>
          <button
            onClick={() => onNavigate("#inicio")}
            aria-label="Voltar ao topo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ice/15 text-ice/70 transition-all duration-300 hover:border-teal hover:text-teal"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
