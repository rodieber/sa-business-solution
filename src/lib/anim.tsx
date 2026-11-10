import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: i * 0.12 },
  }),
};

export const viewportOnce = { once: true, margin: "-30px", amount: 0.1 } as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, y = 40 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

interface EyebrowProps {
  children: ReactNode;
  align?: "left" | "center";
}

export function Eyebrow({ children, align = "left" }: EyebrowProps) {
  return (
    <Reveal
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      y={20}
    >
      <span className="h-px w-8 bg-gradient-to-r from-teal to-mint" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-teal">
        {children}
      </span>
      {align === "center" && <span className="h-px w-8 bg-gradient-to-r from-mint to-teal" />}
    </Reveal>
  );
}
