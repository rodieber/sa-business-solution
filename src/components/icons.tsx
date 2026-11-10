import type { SVGProps } from "react";

/**
 * Custom SVG recreation of the official S.A Business Solution 5-line geometric monogram ("a" / S+a+B)
 */
export function SaMonogram(props: SVGProps<SVGSVGElement>) {
  const offsets = [0, 3.2, 6.4, 9.6, 12.8];
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="saGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#28AAB4" />
          <stop offset="55%" stopColor="#3EB6AD" />
          <stop offset="100%" stopColor="#5EC2A6" />
        </linearGradient>
      </defs>
      {/* Outer loop going from top-left -> top-right curve -> down right stem -> bottom loop -> middle left -> horizontal bar */}
      {offsets.map((o, i) => {
        // Top horizontal start -> right top corner -> right vertical -> bottom right corner -> bottom horizontal -> bottom left corner -> mid left corner -> horizontal bar right
        const topY = 12 + o;
        const rightX = 82 - o;
        const botY = 88 - o;
        const leftX = 16 + o;
        const midY = 46 + o;
        const r = Math.max(4, 16 - o * 0.9);
        const rInner = Math.max(3, 12 - o * 0.7);

        const d = [
          `M 14 ${topY}`,
          `H ${rightX - r}`,
          `A ${r} ${r} 0 0 1 ${rightX} ${topY + r}`,
          `V ${botY - r}`,
          `A ${r} ${r} 0 0 1 ${rightX - r} ${botY}`,
          `H ${leftX + r}`,
          `A ${r} ${r} 0 0 1 ${leftX} ${botY - r}`,
          `V ${midY + rInner}`,
          `A ${rInner} ${rInner} 0 0 1 ${leftX + rInner} ${midY}`,
          `H 108`,
        ].join(" ");

        return (
          <path
            key={i}
            d={d}
            stroke="url(#saGrad)"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}

/**
 * Decorative 5-line geometric arch pattern from the S.A Business Solution Brand Guideline
 */
export function BrandLinesPattern(props: SVGProps<SVGSVGElement>) {
  const offsets = [0, 8, 16, 24, 32];
  return (
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="patternGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#28AAB4" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#5EC2A6" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {offsets.map((o, i) => (
        <path
          key={`arch-${i}`}
          d={`M ${20 + o * 1.4} 320 L ${200 + o * 0.5} ${140 + o * 1.1} Q ${250} ${90 + o * 1.1} ${300 - o * 0.5} ${140 + o * 1.1} L ${480 - o * 1.4} 320`}
          stroke="url(#patternGrad)"
          strokeWidth="2.2"
          fill="none"
        />
      ))}
      {offsets.map((o, i) => (
        <path
          key={`cross-${i}`}
          d={`M ${260 + o * 1.4} 320 L ${490} ${90 + o * 1.4}`}
          stroke="url(#patternGrad)"
          strokeWidth="2.2"
          fill="none"
        />
      ))}
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.93-4.38-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.59.17.29.75 1.23 1.61 2 .89.79 1.63 1.04 1.92 1.18.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.26.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.17 1.38z" />
    </svg>
  );
}
