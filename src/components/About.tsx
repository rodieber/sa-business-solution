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
      return <Wallet className="w-7 h-7 text-[#28aab4]" />;
    case "handshake":
      return <Handshake className="w-7 h-7 text-[#28aab4]" />;
    case "trending":
      return <TrendingUp className="w-7 h-7 text-[#28aab4]" />;
    case "workflow":
      return <Workflow className="w-7 h-7 text-[#28aab4]" />;
  }
}

interface AboutProps {
  onNavigate: (href: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <>
      {/* SELBETTI SECTION 3: 30+ Years Institutional Split + Glowing Frame */}
      <section
        id="sobre"
        className="relative py-20 lg:py-28 bg-[#040a10] border-t border-[#28aab4]/15 overflow-hidden"
      >
        {/* Subtle background radial light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-[#28aab4]/8 blur-[130px]"
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8">
          {/* Centered Header (Selbetti Section 3 exact pattern) */}
          <div className="max-w-4xl mx-auto text-center mb-14 lg:mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[38px] text-white leading-[1.22] tracking-tight">
              Consultoria de Gestão Empresarial que há mais de 30 anos{" "}
              <span className="teal-gradient-text">
                transforma estratégias em resultados
              </span>
            </h2>
            <p className="mt-4 font-display font-medium text-base sm:text-lg text-[#5ec2a6]">
              Atuamos lado a lado com a sua diretoria para estruturar processos,
              blindar o financeiro e acelerar o crescimento sustentável.
            </p>
          </div>

          {/* 2-Column Split: Left Narrative + Right Glowing Bordered Frame (#5EC2A6) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (50% / 6 cols) */}
            <div className="lg:col-span-6 space-y-5 text-[#d5e0ec] text-base sm:text-[16.5px] leading-[1.75]">
              <p>
                A <strong className="text-white font-semibold">S.A Business Solution</strong>{" "}
                nasceu da sólida trajetória executiva de mais de três décadas em{" "}
                <span className="text-[#5ec2a6] font-medium">
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
                <span className="text-[#5ec2a6] font-medium">
                  POPs, fluxogramas, programa 5S e organograma
                </span>{" "}
                até a{" "}
                <strong className="text-white font-semibold">
                  apresentação mensal em dashboard
                </strong>
                , entregamos governança de ponta a ponta para que a sua empresa
                cresça com previsibilidade e segurança.
              </p>

              {/* Mini Authority Pills */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-3 rounded-xl bg-[#0a1826]/90 border border-[#28aab4]/25 px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5ec2a6] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Diagnóstico & Execução In-Company
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[#0a1826]/90 border border-[#28aab4]/25 px-4 py-3">
                  <ShieldCheck className="w-5 h-5 text-[#5ec2a6] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Acompanhamento Mensal por KPIs
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (50% / 6 cols) — Selbetti Glowing Bordered Showcase Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[18px] border-2 border-[#5ec2a6] bg-[#0a1826] p-2.5 shadow-[0_0_30px_rgba(94,194,166,0.22)]">
                <div className="relative rounded-[12px] overflow-hidden aspect-[16/10] bg-[#040a10]">
                  <img
                    src={IMAGES.stationery}
                    alt="Identidade corporativa e metodologia S.A Business Solution"
                    loading="lazy"
                    className="w-full h-full object-cover object-center opacity-90 hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040a10] via-[#040a10]/35 to-transparent" />

                  {/* Overlay Executive Summary Card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 rounded-xl bg-[#040a10]/90 backdrop-blur-md border border-[#5ec2a6]/35 p-4 sm:p-5">
                    <div>
                      <span className="inline-block text-[11px] font-display font-bold uppercase tracking-[0.16em] text-[#5ec2a6] mb-1">
                        Metodologia Ponta a Ponta
                      </span>
                      <p className="font-display font-bold text-white text-base sm:text-lg leading-snug">
                        5 Unidades de Solução Integradas para a sua Empresa
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate("#solucoes")}
                      className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#040a10] bg-[#5ec2a6] hover:bg-[#28aab4] hover:text-white px-4 py-2.5 rounded-lg transition-colors shrink-0 cursor-pointer"
                    >
                      Ver Unidades
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELBETTI SECTION 4: "Quais barreiras ainda limitam a evolução da sua empresa?" */}
      <section
        id="desafios"
        className="relative py-20 lg:py-28 bg-gradient-to-b from-[#040a10] via-[#0a1826] to-[#040a10] border-t border-[#28aab4]/15"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          {/* Centered Heading */}
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[38px] text-white leading-[1.22]">
              Quais barreiras ainda limitam a{" "}
              <span className="teal-gradient-text">
                evolução da sua empresa?
              </span>
            </h2>
            <p className="mt-4 font-display font-medium text-base sm:text-lg text-[#5ec2a6]">
              Identifique os gargalos que travam a sua rentabilidade e veja como
              nossa consultoria resolve cada um deles na prática:
            </p>
          </div>

          {/* 4-Column Barrier Cards (Selbetti Section 4 style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BARRIERS.map((barrier, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[16px] bg-[#0a1826]/90 border border-[#28aab4]/30 hover:border-[#5ec2a6] p-6 sm:p-7 transition-all duration-300 selbetti-card-glow hover:-translate-y-1"
              >
                <div>
                  {/* Top Icon Circle + Highlight Pill */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#12263a] border border-[#5ec2a6]/40 flex items-center justify-center shadow-[0_0_15px_rgba(40,170,180,0.2)] group-hover:scale-105 transition-transform">
                      <BarrierIcon name={barrier.iconName} />
                    </div>
                    <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#5ec2a6] bg-[#5ec2a6]/10 border border-[#5ec2a6]/25 px-3 py-1 rounded-full">
                      {barrier.highlight}
                    </span>
                  </div>

                  {/* Pain-point Question */}
                  <h3 className="font-display font-bold text-[18px] text-white leading-snug mb-4">
                    {barrier.question}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#28aab4] to-[#5ec2a6] mb-4" />

                  {/* Solution Answer */}
                  <p className="text-sm text-[#c4d3e3] leading-relaxed">
                    {barrier.answer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => onNavigate("#formulario")}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#5ec2a6] group-hover:text-white transition-colors cursor-pointer"
                  >
                    Superar este desafio
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
