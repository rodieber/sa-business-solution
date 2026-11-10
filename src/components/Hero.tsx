import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Award, Building2, ShieldCheck } from "lucide-react";
import { DIRECTOR_NAME, IMAGES, WHATSAPP_URL } from "../lib/data";
import { EASE } from "../lib/anim";
import { BrandLinesPattern, SaMonogram, WhatsAppIcon } from "./icons";

function RotatingBadge() {
  return (
    <div className="relative h-32 w-32 md:h-36 md:w-36">
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow-safe">
        <defs>
          <path id="saCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-teal text-[7.6px] font-semibold uppercase tracking-[0.24em]">
          <textPath href="#saCirclePath">
            s.a business solution · solução empresarial ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <SaMonogram className="h-9 w-11" />
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="S.A Business Solution — Consultoria e Gestão Empresarial"
          fetchpriority="high"
          width={1440}
          height={1440}
          className="h-full w-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/45 md:from-obsidian/98 md:via-obsidian/80 md:to-obsidian/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
      </motion.div>

      {/* Subtle brand lines graphic on bottom-right */}
      <div className="pointer-events-none absolute -bottom-10 right-0 z-0 w-[340px] sm:w-[480px] md:w-[620px] opacity-25">
        <BrandLinesPattern className="w-full h-auto" />
      </div>

      <div className="grain absolute inset-0" />

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="mb-5 sm:mb-7 flex flex-wrap items-center gap-3"
        >
          <span className="h-px w-8 sm:w-10 bg-gradient-to-r from-teal to-mint" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] sm:tracking-[0.38em] text-teal">
            Consultoria & Soluções Empresariais · +30 Anos de Experiência
          </span>
        </motion.div>

        <h1 className="font-display font-light leading-[0.98] text-ice max-w-4xl">
          <span className="block overflow-hidden pb-1">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
              className="block text-[clamp(2.35rem,5.2vw,5.4rem)] font-light tracking-tight"
            >
              Excelência em gestão e
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.58 }}
              className="block text-[clamp(2.35rem,5.2vw,5.4rem)] font-light tracking-tight"
            >
              <span className="teal-gradient-text italic pr-2">soluções</span> para sua empresa.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.78 }}
          className="mt-5 sm:mt-6 max-w-xl text-[14px] sm:text-[16px] leading-relaxed text-ice/75"
        >
          Organizamos processos, otimizamos custos e apoiamos decisões estratégicas com
          informações claras e confiáveis. Mais de três décadas de atuação executiva em
          administração, finanças, recursos humanos e estratégia comercial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex justify-center items-center gap-3 rounded-full bg-gradient-to-r from-teal to-mint px-7 sm:px-8 py-4 text-xs sm:text-sm font-bold tracking-wide text-obsidian transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(40,170,180,0.45)]"
          >
            <WhatsAppIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            Solicitar Diagnóstico Executivo
          </a>
          <a
            href="#solucoes"
            className="group flex justify-center items-center gap-3 rounded-full border border-ice/25 bg-obsidian/40 backdrop-blur-sm px-7 sm:px-8 py-4 text-xs sm:text-sm font-semibold tracking-wide text-ice transition-all duration-300 hover:border-teal/70 hover:text-teal"
          >
            Conhecer Soluções
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-9 sm:mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ice/10 pt-6 text-xs sm:text-[13px] text-ice/65 max-w-2xl"
        >
          <span className="flex items-center gap-2">
            <Award className="h-4 w-4 text-teal" />
            <span>
              Direção Executiva: <strong className="font-semibold text-ice">{DIRECTOR_NAME}</strong>
            </span>
          </span>
          <span className="hidden sm:inline-block h-3.5 w-px bg-ice/20" />
          <span className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-mint" />
            <span>Administração · Finanças · RH · Comercial</span>
          </span>
          <span className="hidden sm:inline-block h-3.5 w-px bg-ice/20" />
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-teal" />
            <span>+30 anos de experiência sólida</span>
          </span>
        </motion.div>
      </motion.div>

      {/* Rotating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 1.25 }}
        className="absolute bottom-8 right-6 z-10 hidden lg:block xl:right-12 xl:bottom-12"
      >
        <RotatingBadge />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35, duration: 0.8 }}
        className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-ice/40">explorar</span>
        <div className="relative h-8 w-px overflow-hidden bg-ice/15">
          <motion.div
            className="absolute left-0 top-0 h-3 w-px bg-teal"
            animate={{ y: [-12, 32] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
