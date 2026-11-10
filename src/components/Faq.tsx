import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS, WHATSAPP_URL } from "../lib/data";
import { EASE, Eyebrow, Reveal } from "../lib/anim";
import { WhatsAppIcon } from "./icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative w-full max-w-full overflow-hidden bg-obsidian py-20 sm:py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 sm:gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.35fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>Dúvidas Frequentes</Eyebrow>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-ice md:text-6xl">
              Perguntas sobre nossa <span className="italic text-teal">consultoria</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md leading-relaxed text-ice/60 text-[15px]">
              Transparência, confidencialidade e foco em resultados práticos fazem parte de cada
              etapa do nosso trabalho.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal to-mint px-7 py-3.5 text-xs sm:text-sm font-bold text-obsidian transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(40,170,180,0.4)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com a Diretoria no WhatsApp
            </a>
          </Reveal>
        </div>

        <div>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.06} y={24}>
                <div
                  className={`border-t border-ice/10 ${i === FAQS.length - 1 ? "border-b" : ""}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display text-xl font-light transition-colors duration-300 md:text-2xl ${
                        isOpen ? "text-teal" : "text-ice group-hover:text-teal"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-teal bg-gradient-to-br from-teal to-mint"
                          : "border-ice/20 group-hover:border-teal/60"
                      }`}
                    >
                      <Plus
                        className={`h-4 w-4 transition-colors ${
                          isOpen ? "text-obsidian" : "text-ice"
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 text-[15px] leading-relaxed text-ice/65">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
