import {
  Wallet,
  Handshake,
  TrendingUp,
  Workflow,
  BarChart3,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { IMAGES, SERVICES, type Service } from "../lib/data";

function ServiceCardIcon({ name }: { name: Service["iconName"] }) {
  switch (name) {
    case "wallet":
      return <Wallet className="w-6 h-6 text-[#0a1826]" />;
    case "handshake":
      return <Handshake className="w-6 h-6 text-[#0a1826]" />;
    case "trending":
      return <TrendingUp className="w-6 h-6 text-[#0a1826]" />;
    case "workflow":
      return <Workflow className="w-6 h-6 text-[#0a1826]" />;
    case "chart":
      return <BarChart3 className="w-6 h-6 text-[#0a1826]" />;
  }
}

interface ServicesProps {
  onNavigate: (href: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  return (
    <section
      id="solucoes"
      className="relative py-24 lg:py-32 bg-[#040a10] border-t border-[#28aab4]/20 overflow-hidden"
    >
      {/* Selbetti Section 6 Planet / Horizon Glow Background */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <img
          src={IMAGES.horizonGlow}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-top opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040a10] via-[#040a10]/65 to-[#040a10]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Centered Header (Selbetti Section 6 exact structure) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#12263a]/90 border border-[#5ec2a6]/35 px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#5ec2a6]" />
            <span className="font-display font-semibold text-xs uppercase tracking-[0.14em] text-[#5ec2a6]">
              Portfólio Oficial S.A Business Solution
            </span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-white leading-[1.2]">
            Soluções que conectam{" "}
            <span className="teal-gradient-text">
              estratégia, processos e resultados
            </span>
          </h2>
          <p className="mt-4 font-display font-medium text-base sm:text-lg text-[#5ec2a6]">
            Conheça as 5 unidades de negócio especializadas para estruturar e
            escalar a sua empresa:
          </p>
        </div>

        {/* Solutions Grid: 5 Official Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => (
            <div
              key={service.index}
              className="group relative flex flex-col justify-between rounded-[18px] bg-[#0a1826]/92 backdrop-blur-md border border-[#28aab4]/35 hover:border-[#5ec2a6] p-7 sm:p-8 transition-all duration-300 selbetti-card-glow hover:-translate-y-1.5"
            >
              <div>
                {/* Top Row: Selbetti White Circular Icon Badge + Unit Number */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_6px_20px_rgba(255,255,255,0.18)] group-hover:scale-105 transition-transform">
                    <ServiceCardIcon name={service.iconName} />
                  </div>
                  <span className="font-display font-bold text-xs uppercase tracking-[0.16em] text-[#5ec2a6] bg-[#12263a] border border-[#28aab4]/30 px-3.5 py-1.5 rounded-full">
                    Unidade {service.index}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#5ec2a6] transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="font-display font-semibold text-xs uppercase tracking-wider text-[#28aab4] mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#c4d3e3] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Official Client Deliverables Box */}
                <div className="rounded-xl bg-[#040a10]/70 border border-[#28aab4]/20 p-4 space-y-2.5">
                  <p className="text-[11px] font-display font-bold uppercase tracking-[0.14em] text-[#5ec2a6] mb-2">
                    Serviços e Entregas Inclusas:
                  </p>
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-white font-medium"
                    >
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-[#28aab4]/20 border border-[#5ec2a6]/50 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#5ec2a6]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer with Circular Arrow Action (Selbetti Section 6 card footer) */}
              <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#8fa6bc]">
                  {service.meta}
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate("#formulario")}
                  aria-label={`Solicitar proposta para ${service.name}`}
                  className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-white group-hover:text-[#5ec2a6] transition-colors cursor-pointer"
                >
                  <span>Contratar</span>
                  <span className="w-9 h-9 rounded-full bg-[#12263a] group-hover:bg-[#5ec2a6] group-hover:text-[#040a10] border border-[#5ec2a6]/40 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Full-Scope Diagnostic Card to complete the 3x2 grid */}
          <div className="relative flex flex-col justify-between rounded-[18px] bg-gradient-to-br from-[#12263a] via-[#0a1826] to-[#040a10] border-2 border-[#5ec2a6] p-7 sm:p-8 shadow-[0_0_30px_rgba(94,194,166,0.2)]">
            <div>
              <span className="inline-block font-display font-bold text-xs uppercase tracking-[0.16em] text-[#040a10] bg-[#5ec2a6] px-3.5 py-1.5 rounded-full mb-6">
                Consultoria Integrada 360°
              </span>
              <h3 className="font-display font-bold text-2xl text-white leading-snug mb-3">
                Precisa integrar todas as 5 áreas na sua empresa?
              </h3>
              <p className="text-sm text-[#d5e0ec] leading-relaxed mb-6">
                Montamos um plano de ação personalizado combinando Financeiro,
                Negociações, Comercial, Processos (POPs, Fluxogramas, 5S e
                Organograma) e Dashboard Mensal.
              </p>

              <div className="rounded-xl bg-[#040a10]/60 border border-[#5ec2a6]/30 p-4">
                <p className="text-xs text-[#5ec2a6] font-display font-semibold mb-1">
                  Atendimento Executivo Direto
                </p>
                <p className="text-xs text-[#c4d3e3] leading-relaxed">
                  Diagnóstico inicial sem compromisso para mapear as prioridades
                  imediatas do seu negócio.
                </p>
              </div>
            </div>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => onNavigate("#formulario")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#28aab4] to-[#5ec2a6] px-6 py-4 font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-[#040a10] selbetti-cta-glow hover:brightness-110 transition-all cursor-pointer"
              >
                Solicitar Diagnóstico Completo
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
