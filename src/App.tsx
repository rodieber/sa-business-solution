import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Leadership from "./components/Leadership";
import Methodology from "./components/Methodology";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        lenisRef.current?.scrollTo(href, { duration: 1.35 });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const navigate = (href: string) => {
    lenisRef.current?.scrollTo(href, { duration: 1.35 });
  };

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-obsidian text-ice">
      <Navbar onNavigate={navigate} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Leadership />
        <Methodology />
        <Faq />
        <Cta />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
