import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { METHODOLOGY_STEPS, PILLARS, WHATSAPP_URL } from "../lib/data";
import { Eyebrow, Reveal } from "../lib/anim";

export default function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative w-full max-w-full overflow-hidden bg-navy py-20 sm:py-24 md:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[560px] max-w-[100vw] -translate-x-1/2 rounded-full bg-mint/6 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Eyebrow align="center">Metodologia S.A Business</Eyebrow>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-ice md:text-6xl">
              Do diagnóstico à <span className="italic text-teal">governança</span> contínua
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ice/60">
              Nossa abordagem combina rigor técnico e proximidade humana para organizar cada
              engrenagem da sua empresa sem interromper sua operação.
            </p>
          </Reveal>
        </div>

        {/* 4-Step Process Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METHODOLOGY_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ice/10 bg-obsidian/65 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl italic text-teal">{step.number}</span>
                    <span className="h-px flex-1 mx-4 bg-gradient-to-r from-teal/40 to-transparent" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-light text-ice group-hover:text-teal transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint/85">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ice/65">{step.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-ice/10 flex items-center justify-between text-xs text-ice/45">
                  <span>Etapa {step.number}</span>
                  <span className="text-teal group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* 3 Visual Pillars Showcase */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Eyebrow>Tríade de Gestão</Eyebrow>
              <Reveal delay={0.1}>
                <h3 className="mt-4 font-display text-3xl font-light text-ice md:text-5xl">
                  Frentes integradas para <span className="italic text-teal">resultados</span> reais
                </h3>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-teal/40 px-6 py-3 text-xs sm:text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-obsidian"
              >
                Solicitar apresentação executiva
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.12} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ice/10 bg-obsidian/70">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-teal/35 bg-obsidian/80 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-teal backdrop-blur-md">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <h4 className="font-display text-2xl font-light text-ice group-hover:text-teal transition-colors">
                        {pillar.title}
                      </h4>
                      <ul className="mt-5 space-y-3">
                        {pillar.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-ice/70">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
