import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from "./components/About";
import { Conquests } from "./components/Conquests";
import { Services } from "./components/Services";
import { Leadership } from "./components/Leadership";
import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export function App() {
  const navigate = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#040a10] text-white selection:bg-[#28aab4] selection:text-[#040a10]">
      <Navbar onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <About onNavigate={navigate} />
        <Conquests onNavigate={navigate} />
        <Services onNavigate={navigate} />
        <Leadership />
        <Cta />
        <Faq />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
