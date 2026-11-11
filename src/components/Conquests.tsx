import { useState } from "react";
import { CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { CONQUESTS } from "../lib/data";

interface ConquestsProps {
  onNavigate: (href: string) => void;
}

export function Conquests({ onNavigate }: ConquestsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = CONQUESTS[activeIndex] ?? CONQUESTS[0];

  return (
    <section
      id="conquistas"
      className="relative py-20 lg:py-28 bg-[#040a10] border-t border-[#28aab4]/15 overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#28aab4]/8 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Centered Header (Selbetti Section 5 exact hierarchy) */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[38px] text-white leading-[1.22]">
            O que sua empresa conquista com uma{" "}
            <span className="teal-gradient-text">
              consultoria empresarial especializada
            </span>
          </h2>
          <p className="mt-4 font-display font-medium text-base sm:text-lg text-[#5ec2a6]">
            Selecione cada frente de atuação ao lado para visualizar as entregas
            práticas na sua operação:
          </p>
        </div>

        {/* Selbetti Interactive Split Showcase (45% Left Preview Card / 55% Right Gradient Bars) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (45% / 5 cols): Active Preview Card with #5EC2A6 2px border */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-[16px] border-2 border-[#5ec2a6] bg-[#0a1826] p-6 sm:p-7 shadow-[0_0_28px_rgba(94,194,166,0.2)] flex flex-col justify-between transition-all duration-300">
              <div>
                {/* Preview Image Header */}
                <div className="relative h-48 sm:h-52 rounded-[12px] overflow-hidden mb-6 border border-[#28aab4]/30 bg-[#040a10]">
                  <img
                    src={current.image}
                    alt={current.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center opacity-90 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1826] via-[#0a1826]/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#040a10]/90 backdrop-blur-md border border-[#5ec2a6]/40 px-3 py-1 text-[11px] font-display font-bold uppercase tracking-wider text-[#5ec2a6]">
                      <Sparkles className="w-3 h-3" />
                      {current.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-white drop-shadow">
                      {current.metric}
                    </span>
                    <span className="text-xs text-[#d5e0ec] font-medium">
                      {current.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Active Title & Description */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug mb-3">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#c4d3e3] leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Bullet Deliverables */}
                <div className="space-y-2.5 border-t border-white/10 pt-5">
                  {current.bullets.map((bullet, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-white font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#5ec2a6] shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onNavigate("#formulario")}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#28aab4] to-[#5ec2a6] px-5 py-3.5 font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-[#040a10] hover:brightness-110 transition-all cursor-pointer"
                >
                  Solicitar diagnóstico desta área
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (55% / 7 cols): 6 Interactive Horizontal Selector Bars */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3.5">
            {CONQUESTS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full text-left rounded-[12px] px-5 py-4 sm:px-6 sm:py-5 transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                    isActive
                      ? "selbetti-active-bar border border-[#5ec2a6] shadow-[0_0_22px_rgba(40,170,180,0.32)] scale-[1.01]"
                      : "bg-[#0a1826]/85 hover:bg-[#12263a]/80 border border-[#28aab4]/25 hover:border-[#28aab4]/60"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-xs shrink-0 transition-colors ${
                        isActive
                          ? "bg-white text-[#040a10] shadow-md"
                          : "bg-[#12263a] text-[#5ec2a6] border border-[#28aab4]/30"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4
                        className={`font-display font-bold text-base sm:text-[17px] leading-snug transition-colors ${
                          isActive ? "text-white" : "text-[#e1eaf2]"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-xs sm:text-sm line-clamp-1 mt-0.5 ${
                          isActive ? "text-white/90" : "text-[#8fa6bc]"
                        }`}
                      >
                        {item.bullets.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isActive
                        ? "bg-white/20 text-white translate-x-0.5"
                        : "bg-white/5 text-[#5ec2a6]"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
