import {
  Wallet,
  Handshake,
  TrendingUp,
  Workflow,
  BarChart3,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { IMAGES, SERVICES, type Service } from "../lib/data";

function ServiceCardIcon({ name }: { name: Service["iconName"] }) {
  switch (name) {
    case "wallet":
      return <Wallet className="w-[25px] h-[25px] text-[#0a1826]" />;
    case "handshake":
      return <Handshake className="w-[25px] h-[25px] text-[#0a1826]" />;
    case "trending":
      return <TrendingUp className="w-[25px] h-[25px] text-[#0a1826]" />;
    case "workflow":
      return <Workflow className="w-[25px] h-[25px] text-[#0a1826]" />;
    case "chart":
      return <BarChart3 className="w-[25px] h-[25px] text-[#0a1826]" />;
  }
}

interface ServicesProps {
  onNavigate: (href: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  return (
    <section
      id="solucoes"
      style={{
        backgroundImage: `url("${IMAGES.horizonGlow}")`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
      className="relative pt-[110px] lg:pt-[140px] pb-[90px] bg-[#040a10] border-t border-[#28aab4]/20 overflow-hidden"
    >
      {/* Selbetti Section 6 (9baf7ab) Background Video (Comp-1_2.mp4) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <video
          src={IMAGES.horizonVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-55 hue-rotate-[35deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040a10]/80 via-[#040a10]/55 to-[#040a10]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8">
        {/* Centered Header (.elementor-element-62a16b3: 72% width, Montserrat 48px/58px weight 600, padding-bottom 90px) */}
        <div className="max-w-[980px] mx-auto text-center pb-14 lg:pb-[100px]">
          <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-[48px] text-white leading-[1.2]">
            Soluções que conectam{" "}
            <span className="teal-gradient-text">
              estratégia, processos e resultados
            </span>
          </h2>
          <p className="mt-4 font-body font-normal text-base sm:text-[20px] text-[#80baa5]">
            Conheça as unidades de negócio da S.A Business Solution e passe o
            mouse sobre cada área:
          </p>
        </div>

        {/* Selbetti post-70.css .elementor-element-0a60f9e: 2-Column Centered Grid (40% width per card on desktop) with .solucoes & .caixa-icon */}
        <div className="mx-auto max-w-[1140px] grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[28px]">
          {SERVICES.map((service) => (
            <div
              key={service.index}
              onClick={() => onNavigate("#formulario")}
              className="solucoes cursor-pointer"
            >
              {/* .caixa-icon-wrapper (lights up with gradient + 2px #5ec2a6 border + 15px shadow on hover) */}
              <div className="caixa-icon-wrapper flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center">
                  {/* White Stacked Icon Badge (50% circle -> morphs to 0px square on .solucoes:hover!) */}
                  <div className="mb-4">
                    <span className="caixa-icon-badge shadow-md">
                      <ServiceCardIcon name={service.iconName} />
                    </span>
                  </div>

                  {/* Title (Roboto 20px weight 500, #FFFFFF) */}
                  <h3 className="font-body text-[21px] font-medium text-white mb-2.5">
                    {service.name}
                  </h3>

                  {/* Description (Roboto 16px weight 400, #EBEBEB) */}
                  <p className="font-body text-[15.5px] font-normal text-[#ebebeb] leading-relaxed mb-5 max-w-md">
                    {service.description}
                  </p>
                </div>

                {/* Official Client Deliverables Pills */}
                <div className="w-full rounded-lg bg-[#040a10]/65 border border-white/10 p-4 text-left">
                  <p className="text-[11px] font-display font-bold uppercase tracking-[0.14em] text-[#80baa5] mb-2 text-center">
                    Entregas da Unidade {service.index}:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-[13.5px] text-white font-medium"
                      >
                        <Check className="w-4 h-4 text-[#5ec2a6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* .solucoes-link (Overlapping bottom circular button at margin-top: -21px that fades in on hover!) */}
              <div className="solucoes-link">
                <span
                  aria-label={`Solicitar diagnóstico para ${service.name}`}
                  className="w-[42px] h-[42px] rounded-full bg-[#5ec2a6] text-[#040a10] flex items-center justify-center shadow-[0_0_16px_rgba(94,194,166,0.85)]"
                >
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}

          {/* 6th Card: Consultoria Integrada 360° (completes the 2x3 symmetrical Selbetti grid) */}
          <div
            onClick={() => onNavigate("#formulario")}
            className="solucoes cursor-pointer"
          >
            <div className="caixa-icon-wrapper flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <span className="caixa-icon-badge shadow-md">
                    <Sparkles className="w-[25px] h-[25px] text-[#0a1826]" />
                  </span>
                </div>

                <h3 className="font-body text-[21px] font-medium text-white mb-2.5">
                  Consultoria Integrada Ponta a Ponta
                </h3>

                <p className="font-body text-[15.5px] font-normal text-[#ebebeb] leading-relaxed mb-5 max-w-md">
                  Integramos todas as 5 unidades em um plano único sob a direção
                  executiva de Silvana A. Ozima (+30 anos de experiência).
                </p>
              </div>

              <div className="w-full rounded-lg bg-[#040a10]/65 border border-white/10 p-4 text-center">
                <p className="text-[11px] font-display font-bold uppercase tracking-[0.14em] text-[#80baa5] mb-1.5">
                  Diagnóstico Personalizado In-Company
                </p>
                <p className="text-xs sm:text-[13.5px] text-white font-medium">
                  Financeiro • Negociações • Comercial • Processos & 5S •
                  Dashboard Mensal
                </p>
              </div>
            </div>

            <div className="solucoes-link">
              <span
                aria-label="Solicitar diagnóstico integrado"
                className="w-[42px] h-[42px] rounded-full bg-[#5ec2a6] text-[#040a10] flex items-center justify-center shadow-[0_0_16px_rgba(94,194,166,0.85)]"
              >
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
