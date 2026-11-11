import {
  Wallet,
  Handshake,
  TrendingUp,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { BARRIERS, IMAGES, type BarrierItem } from "../lib/data";

function BarrierIcon({ name }: { name: BarrierItem["iconName"] }) {
  switch (name) {
    case "wallet":
      return <Wallet className="w-[25px] h-[25px]" />;
    case "handshake":
      return <Handshake className="w-[25px] h-[25px]" />;
    case "trending":
      return <TrendingUp className="w-[25px] h-[25px]" />;
    case "workflow":
      return <Workflow className="w-[25px] h-[25px]" />;
  }
}

interface AboutProps {
  onNavigate: (href: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <>
      {/* SELBETTI SECTION 3 (.elementor-element-866b41c): 30+ Years Institutional Split + 40px Glow Frame */}
      <section
        id="sobre"
        style={{
          backgroundImage: `url("${IMAGES.featureFrameBg}")`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative py-20 lg:pt-[80px] lg:pb-[140px] bg-[#040a10] border-t border-[#28aab4]/15 overflow-hidden"
      >
        {/* Selbetti post-70.css .elementor-element-b042ba7: Floating decorative glow rectangle at right:0, top:61px */}
        <img
          src={IMAGES.glowRectRight}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none hidden lg:block absolute right-0 top-[61px] w-[289px] h-auto opacity-80 hue-rotate-[35deg]"
        />

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8">
          {/* Centered Header (.elementor-element-d6c6773: max-width 72%, Montserrat 48px/58px weight 600) */}
          <div className="max-w-[980px] mx-auto text-center mb-12 lg:pb-[50px]">
            <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-[46px] text-white leading-[1.2] tracking-tight">
              Consultoria de Gestão Empresarial que há mais de 30 anos{" "}
              <span className="teal-gradient-text">
                transforma estratégias em resultados
              </span>
            </h2>
            <p className="mt-4 font-body font-normal text-base sm:text-[20px] text-[#80baa5]">
              Atuamos lado a lado com a sua diretoria para estruturar processos,
              blindar o financeiro e acelerar o crescimento sustentável.
            </p>
          </div>

          {/* 2-Column Split (47% Left Narrative / 47% Right 40px-Glow Frame .elementor-element-f9b0dde) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (.elementor-element-7027abb: Roboto 20px, color #EBEBEB, padding-right 40px) */}
            <div className="lg:col-span-6 lg:pr-8 space-y-5 text-[#ebebeb] text-base sm:text-[18px] leading-[1.7]">
              <p>
                A{" "}
                <strong className="text-white font-semibold">
                  S.A Business Solution
                </strong>{" "}
                nasceu da sólida trajetória executiva de mais de três décadas em{" "}
                <span className="text-[#80baa5] font-medium">
                  Administração, Finanças, Comercial, Recursos Humanos e
                  Processos Gerenciais
                </span>
                , oferecendo às empresas uma consultoria prática, próxima e
                orientada a indicadores reais.
              </p>

              <p>
                Diferente de consultorias meramente teóricas, mergulhamos na
                realidade operacional do seu negócio: organizamos{" "}
                <strong className="text-white font-semibold">
                  pagamentos, recebimentos, conciliação bancária e controle de
                  inadimplência
                </strong>
                , conduzimos{" "}
                <strong className="text-white font-semibold">
                  negociações estratégicas com clientes e fornecedores
                </strong>{" "}
                e reativamos o potencial comercial da sua carteira.
              </p>

              <p>
                Da padronização departamental com{" "}
                <span className="text-[#80baa5] font-medium">
                  POPs, fluxogramas, programa 5S e organograma
                </span>{" "}
                até a{" "}
                <strong className="text-white font-semibold">
                  apresentação mensal em dashboard
                </strong>
                , entregamos governança de ponta a ponta para que a sua empresa
                cresça com previsibilidade e segurança.
              </p>

              {/* Authority Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-3 rounded-[10px] bg-[#0a1826]/90 border border-[#80baa5]/35 px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-[#80baa5] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Diagnóstico & Execução In-Company
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-[10px] bg-[#0a1826]/90 border border-[#80baa5]/35 px-4 py-3">
                  <ShieldCheck className="w-5 h-5 text-[#80baa5] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Apresentação Mensal em Dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (.elementor-element-f9b0dde: 1px solid #80baa5, border-radius 10px, box-shadow #80baa5 0 0 40px 0) */}
            <div className="lg:col-span-6">
              <div className="selbetti-feature-frame relative overflow-hidden aspect-video bg-[#040a10]">
                <img
                  src={IMAGES.stationery}
                  alt="Identidade corporativa e metodologia S.A Business Solution"
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-92 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040a10] via-[#040a10]/35 to-transparent" />

                {/* Overlay Executive Summary Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 rounded-[10px] bg-[#040a10]/90 backdrop-blur-md border border-[#80baa5]/45 p-4 sm:p-5">
                  <div>
                    <span className="inline-block text-[11px] font-display font-bold uppercase tracking-[0.16em] text-[#80baa5] mb-1">
                      Metodologia Ponta a Ponta
                    </span>
                    <p className="font-display font-bold text-white text-base sm:text-lg leading-snug">
                      5 Unidades de Solução Integradas para a sua Empresa
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate("#solucoes")}
                    className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#040a10] bg-[#80baa5] hover:bg-[#5ec2a6] px-4 py-2.5 transition-colors shrink-0 cursor-pointer"
                  >
                    Ver Unidades
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELBETTI SECTION 4 (.elementor-element-3c9d0ff): "Quais barreiras ainda limitam a evolução da sua empresa?" + .caixa-icon2 Hover Effect */}
      <section
        id="desafios"
        style={{
          backgroundImage: "linear-gradient(0deg, #061824 0%, #040a10 100%)",
        }}
        className="relative py-[80px] border-t border-[#28aab4]/15"
      >
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
          {/* Centered Heading (.elementor-element-dff596c: 70% width, Montserrat 48px/57px weight 600) */}
          <div className="max-w-[960px] mx-auto text-center mb-12 lg:pb-[40px]">
            <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-[46px] text-white leading-[1.2]">
              Quais barreiras ainda limitam a{" "}
              <span className="teal-gradient-text">
                evolução da sua empresa?
              </span>
            </h2>
            <p className="mt-4 font-body font-normal text-base sm:text-[20px] text-[#80baa5] max-w-[860px] mx-auto">
              Na rotina empresarial, desafios operacionais, processos
              desconectados e falta de controle financeiro travam o crescimento
              e reduzem a eficiência:
            </p>
          </div>

          {/* 4-Column Barrier Cards with exact Selbetti .caixa-icon2 effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {BARRIERS.map((barrier, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate("#formulario")}
                className="caixa-icon2 cursor-pointer"
              >
                <div className="caixa-icon2-wrapper flex flex-col justify-between h-full">
                  <div>
                    {/* Stacked Icon Badge (square 0px -> morphs to 50% circle on hover) */}
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span className="caixa-icon2-badge">
                        <BarrierIcon name={barrier.iconName} />
                      </span>
                      <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#80baa5] bg-[#0a1826]/80 border border-[#80baa5]/30 px-2.5 py-1 rounded-full">
                        {barrier.highlight}
                      </span>
                    </div>

                    {/* Question Title (Roboto 22px weight 400 -> turns accent on hover) */}
                    <h3 className="caixa-icon2-title font-body text-[20px] sm:text-[21px] font-normal leading-[1.32] mb-3.5">
                      {barrier.question}
                    </h3>

                    {/* Answer Description (Roboto 16px color #80baa5 -> turns #FFFFFF on hover) */}
                    <p className="caixa-icon2-desc font-body text-[15.5px] font-normal leading-relaxed">
                      {barrier.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
