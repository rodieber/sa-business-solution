import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS, IMAGES } from "../lib/data";

export function Faq() {
  // Selbetti b9dc29a: default_state: "expanded", max_items_expended: "one", duration: 400ms
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative pt-[80px] pb-[160px] bg-[#040a10] border-t border-[#28aab4]/15 overflow-hidden"
    >
      {/* Selbetti post-70.css .elementor-element-bcb53d5::before (Subtraction-21-1.webp wave overlay, opacity 0.55) */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage: `url("${IMAGES.faqWaveBg}")`,
          backgroundPosition: "0px 220px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="pointer-events-none absolute inset-0 opacity-45 hue-rotate-[35deg]"
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8">
        {/* Centered Header (.elementor-element-d1e6f7a: Montserrat 48px weight 600, padding-bottom 80px) */}
        <div className="text-center pb-12 lg:pb-[70px]">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[48px] text-white leading-[1.2]">
            Perguntas frequentes
          </h2>
        </div>

        {/* Selbetti .elementor-element-b9dc29a: 90% width underline-border accordion */}
        <div className="mx-auto w-full max-w-[90%]">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="mb-5">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between gap-[40px] py-4 text-left transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "border-b-0"
                      : "border-b-2 border-[#80baa5] hover:border-b"
                  }`}
                >
                  <span className="font-display font-bold text-lg sm:text-[20px] text-white leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-[18px] h-[18px] text-[#5ec2a6] shrink-0 transition-transform duration-400 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-2 pb-5 border-b-2 border-[#80baa5] text-base sm:text-[17px] text-[#80baa5] leading-relaxed animate-fadeIn">
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
