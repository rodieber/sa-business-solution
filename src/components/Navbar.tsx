import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  ChevronRight,
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

function ServiceIcon({ name, active }: { name: string; active?: boolean }) {
  const cls = `h-4 w-4 transition-colors duration-250 ${
    active ? "text-[#167a82]" : "text-white"
  }`;
  switch (name) {
    case "wallet":
      return <Wallet className={cls} />;
    case "handshake":
      return <Handshake className={cls} />;
    case "trending":
      return <TrendingUp className={cls} />;
    case "workflow":
      return <Workflow className={cls} />;
    default:
      return <BarChart3 className={cls} />;
  }
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  // Selbetti HTML Widget baf4e30: activates first item on open & resets to 0 on leave
  const [activeUnitIdx, setActiveUnitIdx] = useState(0);

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

  const activeService = SERVICES[activeUnitIdx] ?? SERVICES[0];

  return (
    <>
      <header
        onMouseLeave={() => {
          setMegaOpen(false);
          setActiveUnitIdx(0);
        }}
        style={{ backdropFilter: "blur(15px)" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || megaOpen
            ? "border-b border-[#28aab4]/25 bg-[#040a10]/92 shadow-[0_10px_35px_rgba(0,0,0,0.65)]"
            : "border-b border-white/10 bg-[#040a10]/75"
        }`}
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
          {/* Brand Logo */}
          <button
            onClick={() => go("#inicio")}
            className="group flex items-center gap-3 text-left cursor-pointer"
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

          {/* Desktop Navigation (Selbetti style with Mega Menu for Business Units) */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Menu principal"
          >
            <button
              onClick={() => go("#sobre")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint cursor-pointer"
            >
              A Consultoria
            </button>

            <div
              className="relative"
              onMouseEnter={() => {
                setMegaOpen(true);
                setActiveUnitIdx(0);
              }}
            >
              <button
                onClick={() => setMegaOpen((v) => !v)}
                aria-expanded={megaOpen}
                className="flex items-center gap-1.5 text-[14px] font-medium text-ice/85 transition-colors hover:text-mint py-2 cursor-pointer"
              >
                <span>Unidades de Negócio</span>
                <ChevronDown
                  className={`h-4 w-4 text-mint transition-transform duration-300 ${
                    megaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <button
              onClick={() => go("#desafios")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint cursor-pointer"
            >
              Barreiras & Dores
            </button>

            <button
              onClick={() => go("#conquistas")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint cursor-pointer"
            >
              Conquistas
            </button>

            <button
              onClick={() => go("#solucoes")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint cursor-pointer"
            >
              Soluções
            </button>

            <button
              onClick={() => go("#lideranca")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint cursor-pointer"
            >
              Diretoria & Cases
            </button>

            <button
              onClick={() => go("#faq")}
              className="text-[14px] font-medium text-ice/85 transition-colors hover:text-mint cursor-pointer"
            >
              FAQ
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
              className="hidden items-center gap-2 bg-[#28aab4] hover:bg-[#5ec2a6] px-6 py-2.5 font-display text-[14px] font-medium text-white hover:text-[#040a10] selbetti-cta-glow sm:inline-flex cursor-pointer"
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

        {/* Exact Selbetti post-2003.css + HTML Widget baf4e30 Dual-Panel Mega Menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              onMouseLeave={() => setActiveUnitIdx(0)}
              className="hidden border-t border-[#28aab4]/30 bg-[#040a10]/95 backdrop-blur-2xl lg:block shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
            >
              <div className="mx-auto max-w-[1140px] px-8 py-6">
                <div className="grid grid-cols-12 rounded-[12px] overflow-hidden shadow-2xl border border-[#28aab4]/30">
                  {/* Left Vertical Menu (#menu-unidade .htmega-verticle-menu ul) */}
                  <div className="col-span-4 bg-[#167a82] p-4 flex flex-col justify-between">
                    <ul className="space-y-1.5">
                      {SERVICES.map((svc, idx) => {
                        const isActive = idx === activeUnitIdx;
                        return (
                          <li
                            key={svc.index}
                            onMouseEnter={() => setActiveUnitIdx(idx)}
                          >
                            <button
                              type="button"
                              onClick={() => go("#solucoes")}
                              className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left font-display text-[14px] font-medium transition-all duration-250 cursor-pointer ${
                                isActive
                                  ? "rounded-[50px] bg-white text-[#167a82] shadow-md"
                                  : "rounded-[50px] bg-transparent text-white hover:bg-white hover:text-[#167a82]"
                              }`}
                            >
                              <span className="flex items-center gap-2.5">
                                <ServiceIcon
                                  name={svc.iconName}
                                  active={isActive}
                                />
                                <span>{svc.name}</span>
                              </span>
                              <ChevronRight
                                className={`w-4 h-4 transition-transform duration-250 ${
                                  isActive
                                    ? "text-[#167a82] translate-x-0.5"
                                    : "text-white/80"
                                }`}
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-4 pt-3 border-t border-white/20 px-2 flex items-center justify-between text-xs text-white/90">
                      <span>5 Unidades Integradas</span>
                      <button
                        type="button"
                        onClick={() => go("#solucoes")}
                        className="font-display font-bold underline hover:text-white cursor-pointer"
                      >
                        Ver todas →
                      </button>
                    </div>
                  </div>

                  {/* Right Content Wrapper (.htmegamenu-content-wrapper, white bg #FFFFFF like post-2003.css) */}
                  <div className="col-span-8 bg-white text-[#0a1826] p-7 grid grid-cols-12 gap-6 items-center">
                    {/* 2-Column Loop Grid of Deliverables (7 cols) */}
                    <div className="col-span-7 flex flex-col justify-between h-full">
                      <div>
                        <span className="inline-block text-[11px] font-display font-bold uppercase tracking-[0.18em] text-[#167a82] mb-1">
                          Unidade {activeService.index} · S.A Business Solution
                        </span>
                        <h3 className="font-display font-bold text-2xl text-[#0a1826] mb-2">
                          {activeService.name}
                        </h3>
                        <p className="text-xs text-[#3b5268] leading-relaxed mb-5">
                          {activeService.description}
                        </p>

                        {/* 2-column grid matching Selbetti loop-grid (--grid-columns: 2; --grid-row-gap: 20px) */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
                          {activeService.deliverables.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => go("#solucoes")}
                              className="group/item flex items-start gap-2 text-left p-2 rounded-lg hover:bg-[#f0f7f7] transition-colors cursor-pointer"
                            >
                              <span className="mt-1 h-2 w-2 rounded-full bg-[#167a82] shrink-0 group-hover/item:scale-125 transition-transform" />
                              <span className="font-display font-semibold text-xs text-[#0a1826] group-hover/item:text-[#167a82] transition-colors leading-snug">
                                {item}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-slate-500">
                          {activeService.meta}
                        </span>
                        <button
                          type="button"
                          onClick={() => go("#formulario")}
                          className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#167a82] hover:text-[#0a1826] transition-colors cursor-pointer"
                        >
                          Solicitar diagnóstico
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Featured Cover Card (.elementor-element-1df5e20 with 0.4 teal hover overlay) */}
                    <div className="col-span-5">
                      <div
                        onClick={() => go("#solucoes")}
                        className="group/card relative min-h-[220px] rounded-xl overflow-hidden flex flex-col justify-end p-5 cursor-pointer shadow-md"
                      >
                        <img
                          src={activeService.image}
                          alt={activeService.name}
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                        />
                        {/* Default dark gradient + Selbetti :hover 0.4 teal overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040a10]/90 via-[#040a10]/40 to-transparent transition-colors duration-300 group-hover/card:bg-[#167a82]/55" />
                        <div className="relative z-10">
                          <span className="inline-block rounded bg-[#5ec2a6] px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-[#040a10] mb-2">
                            Atuação Prática
                          </span>
                          <p className="font-display font-bold text-sm text-white leading-snug">
                            {activeService.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-mint px-6 py-3.5 font-display text-sm font-bold text-obsidian"
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
