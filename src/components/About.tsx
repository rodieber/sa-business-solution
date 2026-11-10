import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { IMAGES } from "../lib/data";
import { Eyebrow, Reveal } from "../lib/anim";

const FEATURES = [
  "Financeiro organizado: pagamentos, recebimentos, conciliação bancária e controle de inadimplência",
  "Negociações estratégicas com fornecedores e clientes para melhores margens e prazos",
  "Expansão comercial ativa: prospecção de novos clientes e reativação de clientes inativos",
  "Padronização e gestão: POPs, fluxogramas, programa 5S, organograma e dashboard mensal",
];

const STATS = [
  { value: "30+", label: "anos de experiência" },
  { value: "5", label: "pilares de atuação" },
  { value: "5S", label: "POPs & processos" },
  { value: "100%", label: "visão em dashboard" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [75, -55]);

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative w-full max-w-full overflow-hidden bg-obsidian py-20 sm:py-24 md:py-36"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[360px] w-[360px] sm:h-[480px] sm:w-[480px] max-w-[100vw] rounded-full bg-teal/10 blur-[120px] sm:blur-[140px]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-14 items-center">
        {/* Visual composition */}
        <div className="relative">
          <motion.div style={{ y: yMain }} className="relative">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-ice/10 shadow-2xl">
                <img
                  src={IMAGES.team}
                  alt="S.A Business Solution — Consultoria Corporativa"
                  loading="lazy"
                  className="aspect-[4/4.6] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/55 via-transparent to-transparent" />
              </div>
            </Reveal>
          </motion.div>

          <motion.div
            style={{ y: ySmall }}
            className="absolute -bottom-6 left-2 sm:-bottom-10 sm:-left-4 w-44 sm:w-56 md:-left-8 md:w-64"
          >
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-3xl border border-teal/30 bg-navy shadow-2xl shadow-obsidian">
                <img
                  src={IMAGES.cards}
                  alt="Identidade Executiva S.A Business Solution"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </motion.div>

          <Reveal delay={0.35} className="absolute right-3 sm:right-4 top-6 sm:top-8">
            <div className="rounded-full border border-teal/35 bg-obsidian/80 px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-md shadow-lg">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-teal">
                S + a + B = Solução
              </span>
            </div>
          </Reveal>
        </div>

        {/* Text narrative */}
        <div className="flex flex-col justify-center pt-8 lg:pt-0">
          <Eyebrow>A Consultoria</Eyebrow>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.06] text-ice md:text-5xl lg:text-6xl">
              Processos claros para{" "}
              <span className="italic text-teal">decisões</span> de alto impacto.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl leading-relaxed text-ice/70 text-[15px] sm:text-base">
              A <strong className="font-semibold text-ice">S.A Business Solution</strong> une visão
              estratégica e mais de três décadas de vivência prática na gestão empresarial. Nosso
              propósito é estruturar o financeiro, padronizar departamentos, impulsionar o comercial
              e entregar indicadores claros para a evolução contínua do seu negócio.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3.5">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature} delay={0.28 + i * 0.07} y={20}>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal/40 bg-teal/10">
                    <Check className="h-3.5 w-3.5 text-teal" />
                  </span>
                  <p className="text-[15px] text-ice/80">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ice/10 pt-10 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-light italic text-teal md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ice/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
