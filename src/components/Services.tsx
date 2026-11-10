import { useRef, useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "../lib/data";
import { EASE, Eyebrow, Reveal } from "../lib/anim";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.5 });
  const py = useSpring(my, { stiffness: 180, damping: 22, mass: 0.5 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    mx.set(e.clientX + 28);
    my.set(e.clientY - 170);
  };

  return (
    <section
      id="solucoes"
      className="relative w-full max-w-full overflow-hidden bg-navy py-20 sm:py-24 md:py-36"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] max-w-[100vw] rounded-full bg-teal/8 blur-[110px] sm:blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Portfólio de Serviços</Eyebrow>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-ice md:text-6xl">
                Soluções completas para a{" "}
                <span className="italic text-teal">sua empresa</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-[15px] leading-relaxed text-ice/60">
              Cinco pilares estratégicos com entregas práticas para organizar o financeiro,
              padronizar processos, impulsionar vendas e acompanhar resultados em tempo real.
            </p>
          </Reveal>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setActive(null)}
          className="relative mt-16"
        >
          {/* Floating preview card on desktop */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 2 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 4 }}
                transition={{ duration: 0.35, ease: EASE }}
                style={{ x: px, y: py }}
                className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[290px] w-[240px] overflow-hidden rounded-2xl border border-teal/35 bg-obsidian shadow-2xl shadow-obsidian lg:block"
              >
                <img
                  src={SERVICES[active].image}
                  alt={SERVICES[active].name}
                  className="h-full w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal">
                    {SERVICES[active].meta}
                  </span>
                  <p className="mt-0.5 font-display text-lg italic text-ice leading-snug">
                    {SERVICES[active].name}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.06} y={30}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActive(i)}
                className={`group relative grid grid-cols-[auto_1fr_auto] items-start md:items-center gap-5 border-t border-ice/10 py-8 transition-colors duration-500 md:grid-cols-[70px_1fr_1.25fr_auto] md:gap-8 md:py-11 ${
                  i === SERVICES.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-teal/[0.08] via-mint/[0.04] to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  aria-hidden
                />

                <span className="relative pt-1 md:pt-0 font-display text-sm italic text-teal/70 transition-colors group-hover:text-teal md:text-base">
                  ({service.index})
                </span>

                <div className="relative">
                  <h3 className="font-display text-2xl font-light text-ice transition-all duration-500 group-hover:translate-x-2 group-hover:text-teal md:text-4xl">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-teal/80">
                    {service.meta}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ice/60">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="relative col-span-3 md:col-span-1 pl-8 md:pl-0">
                  <ul className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 rounded-xl border border-ice/10 bg-obsidian/50 px-3.5 py-2.5 text-xs sm:text-[13px] font-medium text-ice/85 transition-all duration-300 group-hover:border-teal/35 group-hover:bg-obsidian/80 group-hover:text-ice"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative flex items-center gap-5 self-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ice/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-teal group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-mint">
                    <ArrowUpRight className="h-4 w-4 text-ice transition-colors group-hover:text-obsidian" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <p className="text-center text-sm text-ice/55">
            Precisa de uma solução específica ou do pacote completo de gestão?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="italic text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:text-ice"
            >
              Fale com a S.A Business Solution
            </a>{" "}
            e solicite uma proposta personalizada.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
