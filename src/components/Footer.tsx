import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import {
  DIRECTOR_NAME,
  DIRECTOR_ROLE,
  EMAIL_ADDRESS,
  LOCATION_DISPLAY,
  NAV_LINKS,
  PHONE_DISPLAY,
  SERVICES,
  WEBSITE_DISPLAY,
  WHATSAPP_URL,
} from "../lib/data";

interface FooterProps {
  onNavigate: (href: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-[#02060a] border-t border-[#28aab4]/25 text-[#c4d3e3]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Identity (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#12263a] to-[#0a1826] border border-[#28aab4]/40 flex items-center justify-center shadow-[0_0_18px_rgba(40,170,180,0.2)]">
                <span className="font-display font-extrabold text-lg tracking-tight text-white">
                  S<span className="text-[#5ec2a6]">.</span>A
                </span>
              </div>
              <div>
                <span className="block font-display font-bold text-base text-white tracking-wide uppercase">
                  S.A Business Solution
                </span>
                <span className="block font-display text-[11px] font-medium text-[#5ec2a6] tracking-[0.16em] uppercase">
                  Solução para sua empresa
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8fa6bc] leading-relaxed mb-6">
              Consultoria em Gestão Empresarial especializada em Financeiro,
              Negociações, Comercial, Processos & Organização (POPs,
              Fluxogramas, 5S e Organograma) e Gestão por Indicadores em
              Dashboard.
            </p>

            <div className="rounded-xl bg-[#0a1826] border border-[#28aab4]/25 p-4">
              <p className="font-display font-bold text-xs uppercase tracking-wider text-[#5ec2a6]">
                Direção Executiva
              </p>
              <p className="font-display font-bold text-sm text-white mt-0.5">
                {DIRECTOR_NAME} — {DIRECTOR_ROLE}
              </p>
              <p className="text-xs text-[#8fa6bc] mt-1">
                +30 anos de experiência em Gestão Empresarial
              </p>
            </div>
          </div>

          {/* Col 2: Unidades de Serviço (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.16em] text-[#5ec2a6] mb-4">
              Unidades de Serviço
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.index}>
                  <button
                    type="button"
                    onClick={() => onNavigate("#solucoes")}
                    className="text-sm text-[#c4d3e3] hover:text-[#5ec2a6] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-xs font-display font-bold text-[#28aab4]">
                      {service.index}.
                    </span>
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navegação Rápida (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.16em] text-[#5ec2a6] mb-4">
              Institucional
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.href)}
                    className="text-sm text-[#c4d3e3] hover:text-[#5ec2a6] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Canais de Atendimento (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.16em] text-[#5ec2a6] mb-4">
              Fale com a Diretoria
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white hover:text-[#5ec2a6] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#5ec2a6] shrink-0" />
                  <span>{PHONE_DISPLAY}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5ec2a6]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-2.5 text-[#c4d3e3] hover:text-[#5ec2a6] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#5ec2a6] shrink-0" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[#8fa6bc]">
                <Globe className="w-4 h-4 text-[#5ec2a6] shrink-0" />
                <span>{WEBSITE_DISPLAY}</span>
              </li>
              <li className="flex items-start gap-2.5 text-[#8fa6bc]">
                <MapPin className="w-4 h-4 text-[#5ec2a6] shrink-0 mt-0.5" />
                <span>{LOCATION_DISPLAY}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#647b91]">
          <p>
            © {new Date().getFullYear()} S.A Business Solution — Todos os
            direitos reservados.
          </p>
          <p>
            Direção Executiva: <span className="text-[#8fa6bc]">{DIRECTOR_NAME}</span>
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button (Selbetti-style quick contact button) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com especialista pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#28aab4] to-[#5ec2a6] px-4 py-3 sm:px-5 sm:py-3.5 text-[#040a10] font-display font-bold text-xs sm:text-sm shadow-[0_6px_24px_rgba(94,194,166,0.45)] hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-[#040a10]" />
        <span className="hidden sm:inline">Fale com um Especialista</span>
      </a>
    </footer>
  );
}
