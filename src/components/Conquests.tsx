import { useState } from "react";
import {
  Wallet,
  Handshake,
  TrendingUp,
  Workflow,
  Sparkles,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { CONQUESTS, IMAGES } from "../lib/data";

function ConquestIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Wallet className="w-[26px] h-[26px]" />;
    case 1:
      return <Handshake className="w-[26px] h-[26px]" />;
    case 2:
      return <TrendingUp className="w-[26px] h-[26px]" />;
    case 3:
      return <Workflow className="w-[26px] h-[26px]" />;
    case 4:
      return <Sparkles className="w-[26px] h-[26px]" />;
    default:
      return <BarChart3 className="w-[26px] h-[26px]" />;
  }
}

interface ConquestsProps {
  onNavigate: (href: string) => void;
}

export function Conquests({ onNavigate }: ConquestsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="conquistas"
      style={{
        backgroundImage: "linear-gradient(180deg, #040a10 0%, #061824 100%)",
      }}
      className="relative py-[80px] border-t border-[#28aab4]/15 overflow-hidden"
    >
      {/* Selbetti post-70.css .elementor-element-cb93b0d: Floating left glow image (left: -78px, bottom: 258px, width: 308px) */}
      <img
        src={IMAGES.glowRectLeft}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none hidden lg:block absolute left-[-78px] bottom-[160px] w-[308px] h-auto opacity-75 hue-rotate-[35deg]"
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8">
        {/* Centered Header (.elementor-element-c2dcb26: Montserrat 48px/57px weight 600) */}
        <div className="max-w-4xl mx-auto text-center mb-10 lg:pb-[40px]">
          <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-[46px] text-white leading-[1.2]">
            O que sua empresa conquista com uma{" "}
            <span className="teal-gradient-text">
              consultoria empresarial especializada
            </span>
          </h2>
          <p className="mt-4 font-body font-normal text-base sm:text-[20px] text-[#80baa5]">
            A S.A Business Solution atua de forma prática para gerar eficiência,
            governança e resultados sustentáveis:
          </p>
        </div>

        {/* Selbetti Interactive Split Showcase (45% Left #gptw-swiper / 55% Right .gptw-trigger list) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (5 cols): #gptw-swiper Horizontal Slide Deck + Morphing Pagination Bullets */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full overflow-hidden rounded-[10px] border-2 border-[#80baa5] bg-[#0a1826] shadow-[0_0_15px_#80baa5]">
              {/* Horizontal Sliding Track (speed: 500ms like Selbetti Swiper) */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {CONQUESTS.map((slide) => (
                  <div
                    key={slide.id}
                    className="w-full shrink-0 flex flex-col justify-between p-6 sm:p-7 min-h-[520px] sm:min-h-[560px]"
                  >
                    <div>
                      {/* Slide Image Header */}
                      <div className="relative h-52 sm:h-56 rounded-[8px] overflow-hidden mb-6 border border-[#80baa5]/40 bg-[#040a10]">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1826] via-[#0a1826]/25 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#040a10]/90 backdrop-blur-md border border-[#80baa5]/50 px-3 py-1 text-[11px] font-display font-bold uppercase tracking-wider text-[#80baa5]">
                            {slide.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between">
                          <span className="font-display font-extrabold text-2xl sm:text-3xl text-white drop-shadow">
                            {slide.metric}
                          </span>
                          <span className="text-xs text-[#ebebeb] font-medium">
                            {slide.metricLabel}
                          </span>
                        </div>
                      </div>

                      {/* Slide Title & Description */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#d5e0ec] leading-relaxed mb-5">
                        {slide.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2.5 border-t border-white/10 pt-4">
                        {slide.bullets.map((bullet, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 text-sm text-white font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#80baa5] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => onNavigate("#formulario")}
                        className="w-full bg-[#28aab4] hover:bg-[#5ec2a6] px-5 py-3 font-display font-semibold text-xs sm:text-sm uppercase tracking-wider text-white hover:text-[#040a10] transition-colors cursor-pointer"
                      >
                        Solicitar diagnóstico desta área
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selbetti post-70.css #gptw-swiper .swiper-pagination-bullet (circle -> morphs to square when active!) */}
            <div
              className="flex items-center justify-center mt-4"
              role="tablist"
              aria-label="Navegação de conquistas"
            >
              {CONQUESTS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Slide ${idx + 1}: ${item.title}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`gptw-bullet ${
                    idx === activeIndex ? "gptw-bullet-active" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column (7 cols): 6 Interactive .gptw-trigger Bars (square icon -> morphs to 50% circle on hover/active) */}
          <div className="lg:col-span-7 flex flex-col gap-1">
            {CONQUESTS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                  className={`gptw-trigger flex items-center gap-[15px] text-left ${
                    isActive ? "gptw-trigger-active" : ""
                  }`}
                >
                  {/* Stacked Icon (square 0px -> morphs to 50% circle on hover/active) */}
                  <span className="gptw-icon shrink-0">
                    <ConquestIcon index={idx} />
                  </span>

                  <div className="min-w-0">
                    <h4 className="font-body text-[16px] font-medium text-white mb-[5px] leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-body text-[14px] font-normal text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
