import { Award, GraduationCap, Quote, CheckCircle2 } from "lucide-react";
import {
  CREDENTIALS,
  DIRECTOR_NAME,
  DIRECTOR_ROLE,
  IMAGES,
  TESTIMONIALS,
} from "../lib/data";

export function Leadership() {
  return (
    <section
      id="lideranca"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-[#040a10] via-[#0a1826] to-[#040a10] border-t border-[#28aab4]/15 overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* PART 1: Executive Director Authority (Silvana A. Ozima) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-24">
          {/* Portrait Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-[20px] border-2 border-[#5ec2a6] bg-[#0a1826] p-3 shadow-[0_0_32px_rgba(94,194,166,0.2)]">
              <div className="relative rounded-[14px] overflow-hidden aspect-[4/5] bg-[#040a10]">
                <img
                  src={IMAGES.silvana}
                  alt={`${DIRECTOR_NAME} — ${DIRECTOR_ROLE} da S.A Business Solution`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040a10] via-[#040a10]/20 to-transparent" />

                {/* Floating Executive Badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#040a10]/92 backdrop-blur-md border border-[#5ec2a6]/40 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-display font-bold text-lg text-white">
                        {DIRECTOR_NAME}
                      </p>
                      <p className="font-display text-xs font-semibold uppercase tracking-wider text-[#5ec2a6]">
                        {DIRECTOR_ROLE} • S.A Business Solution
                      </p>
                    </div>
                    <span className="rounded-lg bg-[#28aab4]/20 border border-[#5ec2a6]/40 px-3 py-1.5 font-display font-extrabold text-sm text-[#5ec2a6]">
                      +30 Anos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Bio & Academic Credentials (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#12263a] border border-[#28aab4]/40 px-4 py-1.5 mb-4">
              <Award className="w-4 h-4 text-[#5ec2a6]" />
              <span className="font-display font-semibold text-xs uppercase tracking-[0.14em] text-[#5ec2a6]">
                Diretoria Executiva & Experiência Comprovada
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[36px] text-white leading-[1.22] mb-5">
              Liderança sênior com mais de três décadas na{" "}
              <span className="teal-gradient-text">
                gestão estratégica de empresas
              </span>
            </h2>

            <p className="text-[#d5e0ec] text-base leading-relaxed mb-4">
              À frente da <strong className="text-white">S.A Business Solution</strong>,{" "}
              <strong className="text-white">{DIRECTOR_NAME}</strong> reúne mais de
              30 anos de atuação executiva estruturando os setores{" "}
              <span className="text-[#5ec2a6] font-medium">
                Financeiro, Administrativo, Comercial, Recursos Humanos e
                Processos Organizacionais
              </span>{" "}
              em empresas de diversos portes e segmentos.
            </p>

            <p className="text-[#c4d3e3] text-sm sm:text-base leading-relaxed mb-7">
              Sua metodologia alia o rigor técnico da controladoria e da
              padronização operacional (POPs, Fluxogramas e Programa 5S) à
              habilidade de negociação e desenvolvimento humano — garantindo que
              o planejamento estratégico saia do papel e se transforme em
              indicadores claros em dashboard.
            </p>

            {/* 4 UNINTER Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CREDENTIALS.map((cred, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0a1826]/90 border border-[#28aab4]/30 hover:border-[#5ec2a6]/60 p-4 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <GraduationCap className="w-4 h-4 text-[#5ec2a6] shrink-0" />
                    <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#28aab4]">
                      {cred.institution.split("—")[0]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-white mb-1">
                    {cred.degree}
                  </h3>
                  <p className="text-xs text-[#9fb3c8] leading-relaxed">
                    {cred.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PART 2: SELBETTI SECTION 7 & 8 — Social Proof & Testimonials */}
        <div className="pt-16 border-t border-[#28aab4]/20">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[36px] text-white leading-[1.22]">
              O impacto prático de uma gestão{" "}
              <span className="teal-gradient-text">
                estruturada ponta a ponta
              </span>
            </h2>
            <p className="mt-3 font-display font-medium text-base text-[#5ec2a6]">
              Veja os resultados percebidos pelas diretorias que contam com a
              metodologia S.A Business Solution:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[16px] bg-[#0a1826]/90 border border-[#28aab4]/30 hover:border-[#5ec2a6] p-7 flex flex-col justify-between selbetti-card-glow transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#12263a] border border-[#5ec2a6]/40 flex items-center justify-center">
                      <Quote className="w-4 h-4 text-[#5ec2a6]" />
                    </div>
                    <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#5ec2a6] bg-[#5ec2a6]/10 border border-[#5ec2a6]/25 px-3 py-1 rounded-full">
                      {item.area}
                    </span>
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#e1eaf2] leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#28aab4] to-[#5ec2a6] flex items-center justify-center text-[#040a10] font-display font-bold text-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white">
                      {item.role}
                    </p>
                    <p className="text-xs text-[#8fa6bc]">{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
