import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  FileCheck2,
  Handshake,
  Layers,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { IMAGES, WHATSAPP_URL } from "../lib/data";
import { EASE } from "../lib/anim";
import { SaMonogram, WhatsAppIcon } from "./icons";

const ORBIT_NODES = [
  {
    label: "Financeiro",
    sub: "Caixa & Conciliação",
    Icon: Wallet,
    pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "Negociações",
    sub: "Clientes & Fornecedores",
    Icon: Handshake,
    pos: "top-[22%] right-0 translate-x-1/3 -translate-y-1/2",
  },
  {
    label: "Comercial",
    sub: "Prospecção & Reativação",
    Icon: TrendingUp,
    pos: "bottom-[22%] right-0 translate-x-1/3 translate-y-1/2",
  },
  {
    label: "Gestão & KPIs",
    sub: "Dashboard Mensal",
    Icon: BarChart3,
    pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    label: "Programa 5S",
    sub: "Organograma & Cultura",
    Icon: Layers,
    pos: "bottom-[22%] left-0 -translate-x-1/3 translate-y-1/2",
  },
  {
    label: "Processos",
    sub: "POPs & Fluxogramas",
    Icon: FileCheck2,
    pos: "top-[22%] left-0 -translate-x-1/3 -translate-y-1/2",
  },
];

/**
 * Interactive Orbital Diagram inspired directly by Selbetti Business Consulting's hero graphic
 */
function EcosystemOrbit({ onSelect }: { onSelect: () => void }) {
  return (
    <div className="relative mx-auto flex h-[340px] w-[340px] sm:h-[430px] sm:w-[430px] lg:h-[470px] lg:w-[470px] items-center justify-center select-none">
      {/* Outer ambient glow */}
      <div className="pointer-events-none absolute inset-4 rounded-full bg-teal/20 blur-[70px]" />

      {/* Outer dashed ring */}
      <div className="pointer-events-none absolute inset-6 sm:inset-8 rounded-full border-2 border-dashed border-mint/35" />

      {/* Main connecting ring */}
      <div className="pointer-events-none absolute inset-10 sm:inset-12 rounded-full border-[3px] border-teal/55 shadow-[0_0_35px_rgba(40,170,180,0.35)]" />

      {/* Inner subtle ring */}
      <div className="pointer-events-none absolute inset-24 sm:inset-28 rounded-full border border-mint/30 bg-obsidian/60 backdrop-blur-sm" />

      {/* Center Core Node (S.A Monogram inside crisp white circle + glowing teal ring, just like Selbetti) */}
      <div className="relative z-20 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full border-2 border-mint bg-gradient-to-br from-slate-navy via-teal-dark to-teal p-3 shadow-[0_0_50px_rgba(94,194,166,0.45)]">
        <div className="flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full bg-white shadow-inner">
          <SaMonogram className="h-12 w-14 sm:h-14 sm:w-16" />
          <span className="mt-0.5 font-display text-[8px] font-extrabold uppercase tracking-[0.2em] text-slate-navy">
            S.A Business
          </span>
        </div>
      </div>

      {/* 6 Orbital Service Nodes */}
      <div className="absolute inset-10 sm:inset-12 z-30">
        {ORBIT_NODES.map((node, i) => {
          const Icon = node.Icon;
          return (
            <motion.button
              key={node.label}
              type="button"
              onClick={onSelect}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 + i * 0.08 }}
              className={`group absolute ${node.pos} flex flex-col items-center justify-center h-24 w-24 sm:h-28 sm:w-28 rounded-full border-2 border-mint/80 bg-gradient-to-b from-slate-navy to-teal-dark text-center shadow-[0_0_25px_rgba(40,170,180,0.45)] transition-all duration-300 hover:scale-110 hover:border-white hover:from-teal hover:to-mint`}
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-mint transition-colors group-hover:text-obsidian" />
              <span className="mt-1 font-display text-[10px] sm:text-[11px] font-bold leading-tight text-white group-hover:text-obsidian px-1">
                {node.label}
              </span>
              <span className="hidden sm:block text-[8px] font-medium text-ice/75 group-hover:text-obsidian/80 px-2 leading-tight">
                {node.sub}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <section
      id="inicio"
      className="relative min-h-[780px] lg:min-h-[840px] w-full overflow-hidden flex items-center pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Background image + Selbetti-style top-to-bottom dark gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroConsulting}
          alt="S.A Business Solution — Consultoria de Gestão Empresarial"
          fetchpriority="high"
          width={1440}
          height={819}
          className="h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 24, 38, 0.58) 0%, rgba(7, 18, 28, 0.84) 52%, #040a10 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/65 to-obsidian/30" />
      </div>

      {/* Main Container (1360px max-width like Selbetti) */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1360px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        {/* Left Column: Title, Description, Glowing CTA */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full border border-mint/40 bg-slate-navy/80 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-mint">
              Consultoria & Gestão Empresarial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[54px]"
          >
            S.A Business <span className="teal-gradient-text">Solution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-5 max-w-xl font-body text-base sm:text-lg lg:text-[20px] font-normal leading-relaxed text-white/90"
          >
            Consultoria de gestão empresarial com foco em{" "}
            <strong className="font-semibold text-mint">
              Financeiro, Negociações, Comercial, Processos e Organização (POPs, Fluxogramas, 5S e
              Organograma) e Gestão por Indicadores
            </strong>{" "}
            com soluções ponta a ponta, da estratégia à execução, para destravar resultados,
            garantir governança e superar desafios organizacionais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate("#formulario")}
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-teal to-mint px-8 py-4 font-display text-base sm:text-[17px] font-bold text-obsidian selbetti-cta-glow transition-all duration-300 hover:brightness-110"
            >
              <span>Veja como atuamos na prática!</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-mint/50 bg-obsidian/60 px-7 py-4 font-display text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-mint hover:bg-slate-navy"
            >
              <WhatsAppIcon className="h-4 w-4 text-mint" />
              <span>Falar no WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Ecosystem Orbit (Selbetti Group-286-7 equivalent) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="flex justify-center lg:justify-end py-6"
        >
          <EcosystemOrbit onSelect={() => onNavigate("#solucoes")} />
        </motion.div>
      </div>
    </section>
  );
}
