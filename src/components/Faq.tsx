import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../lib/data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 bg-[#040a10] border-t border-[#28aab4]/15"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        {/* Centered Header (Selbetti Section 10) */}
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[38px] text-white leading-[1.2]">
            Perguntas <span className="teal-gradient-text">frequentes</span>
          </h2>
          <p className="mt-3 font-display font-medium text-base text-[#5ec2a6]">
            Tire suas dúvidas sobre como a S.A Business Solution atua na sua
            empresa:
          </p>
        </div>

        {/* 90%-Width Centered Accordion */}
        <div className="mx-auto max-w-[980px] space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-[14px] transition-all duration-300 ${
                  isOpen
                    ? "bg-[#0a1826] border-2 border-[#5ec2a6] shadow-[0_0_24px_rgba(94,194,166,0.16)]"
                    : "bg-[#0a1826]/75 border border-[#28aab4]/30 hover:border-[#28aab4]/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-display font-semibold text-base sm:text-[18px] text-[#5ec2a6] leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#5ec2a6] text-[#040a10] rotate-180"
                        : "bg-[#12263a] text-[#5ec2a6]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-[15.5px] text-[#d5e0ec] leading-relaxed border-t border-white/10">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
