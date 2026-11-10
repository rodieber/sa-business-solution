import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { SaMonogram, WhatsAppIcon } from "./icons";
import { EMAIL_ADDRESS, MAILTO_URL, NAV_LINKS, PHONE_DISPLAY, WHATSAPP_URL } from "../lib/data";
import { EASE } from "../lib/anim";

interface NavbarProps {
  onNavigate: (href: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-teal/15 bg-obsidian/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <button
            onClick={() => go("#inicio")}
            className="group flex items-center gap-3.5 text-left"
            aria-label="S.A Business Solution — início"
          >
            <SaMonogram className="h-9 w-11 shrink-0 transition-transform duration-500 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-body text-sm font-bold uppercase tracking-[0.18em] text-ice sm:text-[15px]">
                S.A Business
              </span>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.34em] text-teal">
                Solution
              </span>
            </div>
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="group relative text-[13px] font-medium tracking-wide text-ice/75 transition-colors hover:text-ice"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-teal to-mint transition-all duration-400 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={MAILTO_URL}
              aria-label={`Enviar e-mail para ${EMAIL_ADDRESS}`}
              title={EMAIL_ADDRESS}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-ice/15 text-ice/75 transition-all hover:border-teal/60 hover:text-teal sm:flex"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-teal to-mint px-6 py-2.5 text-[13px] font-bold tracking-wide text-obsidian transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(40,170,180,0.4)] sm:inline-flex"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Falar com Consultora
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ice/15 text-ice lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] flex flex-col bg-obsidian/98 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-ice/10">
              <div className="flex items-center gap-3">
                <SaMonogram className="h-8 w-10" />
                <span className="font-body text-sm font-bold uppercase tracking-[0.2em] text-ice">
                  S.A Business <span className="text-teal">Solution</span>
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ice/15 text-ice"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-3 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.07 * i }}
                  onClick={() => go(link.href)}
                  className="group flex items-baseline gap-4 py-1"
                >
                  <span className="font-mono text-xs text-teal/70">0{i + 1}</span>
                  <span className="font-display text-3xl font-light text-ice transition-colors group-hover:text-teal sm:text-5xl">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 border-t border-ice/10 px-8 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="text-xs text-ice/60 space-y-1">
                <p className="font-semibold text-ice">{PHONE_DISPLAY}</p>
                <p>{EMAIL_ADDRESS}</p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-mint px-6 py-3 text-[13px] font-bold text-obsidian"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Agendar Diagnóstico
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
