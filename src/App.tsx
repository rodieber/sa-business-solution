import { useCallback, useState } from "react";
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
  // Selbetti HTML Widget b7b9d4b: top #formulario starts hidden while bottom #forms is visible;
  // clicking any #formulario CTA reveals top #formulario, hides bottom #forms, and scrolls smoothly to #formulario.
  const [showTopForm, setShowTopForm] = useState(false);

  const navigate = useCallback((href: string) => {
    const id = href.replace("#", "");
    if (id === "formulario") {
      setShowTopForm(true);
      window.setTimeout(() => {
        const topEl = document.getElementById("formulario");
        if (topEl) {
          topEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 60);
      return;
    }

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
        {/* Selbetti Section 2 (#formulario): Hidden initially, revealed when CTA is clicked */}
        {showTopForm && <Cta sectionId="formulario" />}
        <About onNavigate={navigate} />
        <Conquests onNavigate={navigate} />
        <Services onNavigate={navigate} />
        <Leadership />
        {/* Selbetti Section 9 (#forms): Visible by default at the bottom until top #formulario is revealed */}
        {!showTopForm && <Cta sectionId="forms" />}
        <Faq />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
