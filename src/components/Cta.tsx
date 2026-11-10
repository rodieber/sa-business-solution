import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail } from "lucide-react";
import {
  DIRECTOR_NAME,
  EMAIL_ADDRESS,
  IMAGES,
  MAILTO_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "../lib/data";
import { Eyebrow, Reveal } from "../lib/anim";
import { BrandLinesPattern, SaMonogram, WhatsAppIcon } from "./icons";

export default function Cta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      id="contato"
      className="relative w-full max-w-full overflow-hidden py-24 sm:py-28 md:py-40"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img
          src={IMAGES.hero}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-obsidian/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-navy/60 to-obsidian" />
      </motion.div>

      <div className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] opacity-20">
        <BrandLinesPattern className="w-full h-auto" />
      </div>

      <div className="grain absolute inset-0" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center md:px-10">
        <Eyebrow align="center">Agende uma Conversa Executiva</Eyebrow>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[clamp(2.3rem,5.6vw,5.2rem)] font-light leading-[1.03] text-ice">
            Pronto para elevar a{" "}
            <span className="teal-gradient-text italic">gestão</span> da sua empresa?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl leading-relaxed text-ice/75 text-sm sm:text-base">
            Entre em contato diretamente com <strong className="text-ice">{DIRECTOR_NAME}</strong>{" "}
            para uma análise das necessidades administrativas, financeiras, comerciais e de RH da
            sua organização.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex justify-center items-center gap-3 rounded-full bg-gradient-to-r from-teal to-mint px-8 sm:px-9 py-4 text-xs sm:text-sm font-bold tracking-wide text-obsidian transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_50px_rgba(40,170,180,0.5)]"
            >
              <WhatsAppIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              WhatsApp: {PHONE_DISPLAY}
            </a>
            <a
              href={MAILTO_URL}
              className="group flex justify-center items-center gap-3 rounded-full border border-ice/25 bg-obsidian/50 px-8 sm:px-9 py-4 text-xs sm:text-sm font-semibold tracking-wide text-ice backdrop-blur-sm transition-all duration-300 hover:border-teal hover:text-teal"
            >
              <Mail className="h-4 w-4 text-teal" />
              {EMAIL_ADDRESS}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ice/55">
            <SaMonogram className="h-5 w-6" />
            <span>S.A Business Solution · Solução para sua empresa</span>
            <SaMonogram className="h-5 w-6" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
