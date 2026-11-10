import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { MARQUEE_ITEMS } from "../lib/data";
import { SaMonogram } from "./icons";

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      aria-label="Áreas de especialidade"
      className="relative z-20 -mt-px w-full max-w-full overflow-hidden bg-obsidian py-6"
    >
      <div className="w-full max-w-full overflow-hidden">
        <div className="rotate-[-0.9deg] scale-[1.02] overflow-hidden">
          <div className="relative overflow-hidden border-y border-teal/25 bg-gradient-to-r from-navy via-slate-navy to-navy py-4">
            <div
              className="flex w-max animate-marquee-safe items-center gap-10 pr-10"
              style={{ animationPlayState: paused ? "paused" : "running" }}
            >
              {items.map((item, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span
                    className={`whitespace-nowrap text-lg tracking-wide md:text-xl ${
                      i % 2 === 0
                        ? "font-display italic text-teal"
                        : "font-body text-xs font-semibold uppercase tracking-[0.32em] text-ice/85"
                    }`}
                  >
                    {item}
                  </span>
                  <SaMonogram className="h-5 w-6 shrink-0 opacity-80" />
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Retomar faixa animada" : "Pausar faixa animada"}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-teal/30 bg-obsidian/80 text-teal backdrop-blur-sm transition-colors hover:bg-teal hover:text-obsidian"
            >
              {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
