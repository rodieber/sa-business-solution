import { useEffect, useState } from "react";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import {
  CREDENTIALS,
  DIRECTOR_NAME,
  DIRECTOR_ROLE,
  IMAGES,
  TESTIMONIALS,
} from "../lib/data";

const MARQUEE_BADGES = [
  { title: "PAGAMENTOS & RECEBIMENTOS", area: "Unidade Financeira" },
  { title: "CONCILIAÇÃO BANCÁRIA", area: "Unidade Financeira" },
  { title: "CONTROLE DE INADIMPLÊNCIA", area: "Unidade Financeira" },
  { title: "NEGOCIAÇÕES COM FORNECEDORES", area: "Unidade de Negociações" },
  { title: "NEGOCIAÇÕES COM CLIENTES", area: "Unidade de Negociações" },
  { title: "PROSPECÇÃO DE NOVOS CLIENTES", area: "Unidade Comercial" },
  { title: "REATIVAÇÃO DE INATIVOS", area: "Unidade Comercial" },
  { title: "POPS & FLUXOGRAMAS", area: "Processos & Organização" },
  { title: "PROGRAMA 5S & ORGANOGRAMA", area: "Processos & Organização" },
  { title: "DASHBOARD MENSAL EXECUTIVO", area: "Gestão & Indicadores" },
];

export function Leadership() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Selbetti 2d728f6: autoplay 5000ms, pause_on_hover: yes
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const prevSlide = () => {
    setSlideIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Build visible pair for desktop 2-slides-to-show carousel
  const visiblePair = [
    TESTIMONIALS[slideIndex % TESTIMONIALS.length],
    TESTIMONIALS[(slideIndex + 1) % TESTIMONIALS.length],
  ];

  return (
    <section
      id="lideranca"
      className="relative bg-[#040a10] border-t border-[#28aab4]/15 overflow-hidden"
    >
      {/* PART 1: SELBETTI SECTION 7 (.elementor-element-606e777 & 8a7d1d3) — Authority Headline + Infinite Linear Marquee */}
      <div className="py-[70px] bg-[#02060a] border-b border-white/5">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="font-display font-semibold text-xl sm:text-[24px] leading-[36px] text-[#28aab4]">
              + de 30 anos transformando a gestão de empresas com soluções
              práticas de ponta a ponta
            </h3>
          </div>

          {/* Infinite Linear Marquee with edge mask & saturate(0)/opacity(0.45) -> hover saturate(1)/opacity(1) */}
          <div className="selbetti-marquee-mask relative w-full overflow-hidden py-3">
            <div className="flex w-max animate-marquee gap-[50px] items-center">
              {[...MARQUEE_BADGES, ...MARQUEE_BADGES].map((badge, idx) => (
                <div
                  key={idx}
                  className="selbetti-marquee-item flex items-center gap-3 rounded-xl border border-[#28aab4]/40 bg-[#0a1826] px-5 py-3 shrink-0 cursor-default"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5ec2a6]" />
                  <div>
                    <p className="font-display font-bold text-xs tracking-wider text-white">
                      {badge.title}
                    </p>
                    <p className="text-[10px] font-medium text-[#80baa5] uppercase tracking-widest">
                      {badge.area}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PART 2: Executive Director Authority (Silvana A. Ozima) */}
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Portrait Frame with Selbetti 40px Glow (5 cols) */}
          <div className="lg:col-span-5">
            <div className="selbetti-feature-frame relative mx-auto max-w-md bg-[#0a1826] p-3">
              <div className="relative rounded-[8px] overflow-hidden aspect-[4/5] bg-[#040a10]">
                <img
                  src={IMAGES.silvana}
                  alt={`${DIRECTOR_NAME} — ${DIRECTOR_ROLE} da S.A Business Solution`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040a10] via-[#040a10]/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-[10px] bg-[#040a10]/92 backdrop-blur-md border border-[#80baa5]/45 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-display font-bold text-lg text-white">
                        {DIRECTOR_NAME}
                      </p>
                      <p className="font-display text-xs font-semibold uppercase tracking-wider text-[#80baa5]">
                        {DIRECTOR_ROLE} • S.A Business Solution
                      </p>
                    </div>
                    <span className="rounded bg-[#28aab4]/20 border border-[#80baa5]/40 px-3 py-1.5 font-display font-extrabold text-sm text-[#80baa5]">
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
              <Award className="w-4 h-4 text-[#80baa5]" />
              <span className="font-display font-semibold text-xs uppercase tracking-[0.14em] text-[#80baa5]">
                Diretoria Executiva & Experiência Comprovada
              </span>
            </div>

            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-[40px] text-white leading-[1.22] mb-5">
              Liderança sênior com mais de três décadas na{" "}
              <span className="teal-gradient-text">
                gestão estratégica de empresas
              </span>
            </h2>

            <p className="text-[#ebebeb] text-base sm:text-[18px] leading-relaxed mb-4">
              À frente da{" "}
              <strong className="text-white">S.A Business Solution</strong>,{" "}
              <strong className="text-white">{DIRECTOR_NAME}</strong> reúne mais
              de 30 anos de atuação executiva estruturando os setores{" "}
              <span className="text-[#80baa5] font-medium">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CREDENTIALS.map((cred, idx) => (
                <div
                  key={idx}
                  className="rounded-[10px] bg-[#0a1826]/90 border border-[#28aab4]/35 hover:border-[#80baa5] p-4 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <GraduationCap className="w-4 h-4 text-[#80baa5] shrink-0" />
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
      </div>

      {/* PART 3: SELBETTI SECTION 8 (.elementor-element-87c576e & 2d728f6) — Floating 3D Layers Badge + 2-Slide Testimonial Carousel */}
      <div className="relative pt-10 pb-[120px] bg-[#02060a] border-t border-[#28aab4]/20">
        {/* Selbetti post-70.css .elementor-element-e046522: Centered 3D Layers Image at margin-top -47px */}
        <div className="flex justify-center -mt-[47px] mb-[45px]">
          <img
            src={IMAGES.layersBadge}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-[140px] sm:w-[158px] h-auto hue-rotate-[35deg] drop-shadow-[0_0_24px_rgba(40,170,180,0.45)]"
          />
        </div>

        <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
          {/* Heading (.elementor-element-1bef03c: Montserrat 48px weight 600) */}
          <div className="text-center mb-12">
            <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-[48px] text-white">
              Depoimentos de quem confia
            </h2>
          </div>

          {/* 2-Slide Nested Carousel (.elementor-element-2d728f6: 90% width, outside arrows at -55px) */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative mx-auto max-w-[1140px]"
          >
            {/* Left Arrow (.elementor-swiper-button-prev: background #80baa5, hover accent) */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Depoimento anterior"
              className="hidden xl:flex absolute -left-[56px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center bg-[#80baa5] hover:bg-[#28aab4] text-[#040a10] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow (.elementor-swiper-button-next: background #80baa5, hover accent) */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próximo depoimento"
              className="hidden xl:flex absolute -right-[56px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center bg-[#80baa5] hover:bg-[#28aab4] text-[#040a10] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 2-Column Cards Grid (matching .elementor-element-706ca2b & 61d5f52) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {visiblePair.map((item, idx) => (
                <div
                  key={`${item.author}-${idx}`}
                  style={{
                    backgroundImage:
                      "linear-gradient(-90deg, #167a82 0%, #0d4a52 100%)",
                  }}
                  className="rounded-[10px] p-[30px] min-h-[360px] flex flex-col justify-between shadow-xl transition-all duration-500"
                >
                  <div>
                    {/* Top-left White Pill Box (.elementor-element-a6fd25a: background #FFFFFF, border-radius 10px, min-height 60px) */}
                    <div className="inline-flex items-center gap-2.5 rounded-[10px] bg-white px-4 py-3 min-h-[56px] mb-6 shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-[#0d4a52] shrink-0" />
                      <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0a1826]">
                        {item.area}
                      </span>
                    </div>

                    {/* Quote Text (.elementor-element-344a918: color #FFFFFF, margin-bottom 30px) */}
                    <p className="font-body text-base sm:text-[17px] text-white leading-relaxed mb-[30px]">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* Bottom Author Row (60x60 circle + Roboto 20px title + 16px italic #80baa5 role) */}
                  <div className="flex items-center gap-4 pt-3 border-t border-white/15">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#040a10]/40 border-2 border-[#80baa5] flex items-center justify-center font-display font-bold text-lg text-white shrink-0">
                      S.A
                    </div>
                    <div>
                      <p className="font-body text-[20px] font-normal text-white leading-tight mb-1">
                        {item.author}
                      </p>
                      <p className="font-body text-[16px] italic font-normal text-[#80baa5]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Arrow Controls */}
            <div className="flex xl:hidden items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Depoimento anterior"
                className="w-10 h-10 flex items-center justify-center bg-[#80baa5] text-[#040a10] cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Próximo depoimento"
                className="w-10 h-10 flex items-center justify-center bg-[#80baa5] text-[#040a10] cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
