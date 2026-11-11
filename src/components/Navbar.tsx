import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  Handshake,
  Mail,
  Menu,
  TrendingUp,
  Wallet,
  Workflow,
  X,
} from "lucide-react";
import { SaMonogram, WhatsAppIcon } from "./icons";
import {
  EMAIL_ADDRESS,
  MAILTO_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  SERVICES,
  WHATSAPP_URL,
} from "../lib/data";
import { EASE } from "../lib/anim";

interface NavbarProps {
  onNavigate: (href: string) => void;
}

function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "wallet":
      return <Wallet className="h-5 w-5 text-teal" />;
    case "handshake":
      return <Handshake className="h-5 w-5 text-teal" />;
    case "trending":
      return <TrendingUp className="h-5 w-5 text-teal" />;
    case "workflow":
      return <Workflow className="h-5 w-5 text-teal" />;
    default:
      return <BarChart3 className="h-5 w-5 text-teal" />;
  }
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setMegaOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header
        onMouseLeave={() => setMegaOpen(false)}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || megaOpen
            ? "border-b border-teal/20 bg-obsidian/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.65)]"
            : "border-b border-white/10 bg-obsidian/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
          {/* Brand Logo */}
          <button
            onClick={() => go("#inicio")}
            className="group flex items-center gap-3 text-left"
            aria-label="S.A Business Solution — Início"
          >
            <SaMonogram className="h-9 w-11 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ice sm:text-[15px]">
                S.A Business
              </span>
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-mint">
                Solution
              </span>
            </div>
          </button>

          {/* Desktop Navigation (Selbetti style with Mega Menu for Services) */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
            <button
              onClick={() => go("#sobre")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint"
            >
              Sobre a Consultoria
            </button>

            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
            >
              <button
                onClick={() => setMegaOpen((v) => !v)}
                aria-expanded={megaOpen}
                className="flex items-center gap-1.5 text-[14px] font-medium text-ice/85 transition-colors hover:text-mint py-2"
              >
                <span>Unidades de Serviço</span>
                <ChevronDown
                  className={`h-4 w-4 text-mint transition-transform duration-300 ${
                    megaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <button
              onClick={() => go("#desafios")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint"
            >
              Desafios
            </button>

            <button
              onClick={() => go("#conquistas")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint"
            >
              Resultados
            </button>

            <button
              onClick={() => go("#lideranca")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint"
            >
              Diretoria Executiva
            </button>

            <button
              onClick={() => go("#faq")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint"
            >
              Perguntas Frequentes
            </button>
          </nav>

          {/* Right CTA ("Fale com um Especialista") */}
          <div className="flex items-center gap-3">
            <a
              href={MAILTO_URL}
              aria-label={`E-mail ${EMAIL_ADDRESS}`}
              title={EMAIL_ADDRESS}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ice/80 transition-all hover:border-mint hover:text-mint xl:flex"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() => go("#formulario")}
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-teal to-mint px-6 py-2.5 font-display text-[13px] font-bold text-obsidian selbetti-cta-glow transition-all duration-300 hover:brightness-110 sm:inline-flex"
            >
              Fale com um Especialista
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ice lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Selbetti-style Mega Menu Dropdown */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="hidden border-t border-teal/20 bg-navy/98 backdrop-blur-2xl lg:block"
            >
              <div className="mx-auto max-w-[1360px] px-8 py-8">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.28em] text-mint">
                    Portfólio de Soluções · S.A Business Solution
                  </span>
                  <button
                    onClick={() => go("#solucoes")}
                    className="text-xs font-semibold text-teal hover:text-mint transition-colors"
                  >
                    Ver todas as soluções na página →
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {SERVICES.map((svc) => (
                    <button
                      key={svc.index}
                      onClick={() => go("#solucoes")}
                      className="group flex flex-col justify-between rounded-xl border border-white/10 bg-obsidian/70 p-4 text-left transition-all duration-300 hover:border-mint/60 hover:bg-slate-navy/70"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/15 border border-teal/30">
                            <ServiceIcon name={svc.iconName} />
                          </span>
                          <span className="font-mono text-xs text-mint/70">{svc.index}</span>
                        </div>
                        <h3 className="mt-3 font-display text-base font-bold text-ice group-hover:text-mint transition-colors">
                          {svc.name}
                        </h3>
                        <ul className="mt-2.5 space-y-1.5">
                          {svc.deliverables.map((item) => (
                            <li
                              key={item}
                              className="text-xs text-ice/70 flex items-start gap-1.5"
                            >
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="mt-4 inline-block text-[11px] font-semibold text-teal group-hover:translate-x-1 transition-transform">
                        Conhecer solução →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col bg-obsidian/98 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <SaMonogram className="h-8 w-10" />
                <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ice">
                  S.A Business <span className="text-mint">Solution</span>
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ice"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.05 * i }}
                  onClick={() => go(link.href)}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-navy/50 px-4 py-3.5 text-left font-display text-lg font-semibold text-ice hover:border-mint/40 hover:text-mint"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-mint">0{i + 1}</span>
                </motion.button>
              ))}
            </nav>

            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5">
              <div className="text-xs text-ice/70">
                <p className="font-semibold text-ice">{PHONE_DISPLAY}</p>
                <p>{EMAIL_ADDRESS}</p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-mint px-6 py-3.5 font-display text-sm font-bold text-obsidian"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Fale com um Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
