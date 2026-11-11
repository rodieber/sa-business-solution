import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import {
  DIRECTOR_NAME,
  EMAIL_ADDRESS,
  PHONE_DISPLAY,
  SERVICES,
  WHATSAPP_PHONE,
} from "../lib/data";

interface CtaProps {
  sectionId?: string;
}

export function Cta({ sectionId = "forms" }: CtaProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPillars, setSelectedPillars] = useState<string[]>([
    "Financeiro",
  ]);
  const [message, setMessage] = useState("");

  const togglePillar = (pillarName: string) => {
    setSelectedPillars((prev) =>
      prev.includes(pillarName)
        ? prev.filter((p) => p !== pillarName)
        : [...prev, pillarName]
    );
  };

  const handleSubmitWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const areas =
      selectedPillars.length > 0
        ? selectedPillars.join(", ")
        : "Diagnóstico Completo";
    const text = [
      `Olá, ${DIRECTOR_NAME}! Gostaria de agendar um diagnóstico com a *S.A Business Solution*.`,
      "",
      `*Nome:* ${name || "Não informado"}`,
      `*Empresa:* ${company || "Não informada"}`,
      `*Telefone:* ${phone || "Não informado"}`,
      email ? `*E-mail:* ${email}` : "",
      `*Áreas de interesse:* ${areas}`,
      message ? `*Observações:* ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id={sectionId}
      style={{
        backgroundImage: "linear-gradient(180deg, #040a10 54%, #061824 100%)",
      }}
      className="relative pt-[80px] pb-[140px] border-t border-[#28aab4]/20 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols — .elementor-element-9545a85 / 0a03c3b: padding-right 50px) */}
          <div className="lg:col-span-6 lg:pr-[50px]">
            {/* Heading (.elementor-element-61686fb / a287691: Montserrat 40px/52px weight 600) */}
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-[40px] text-white leading-[1.3] mb-5">
              Impulsione os seus resultados com uma{" "}
              <span className="teal-gradient-text">
                gestão de ponta a ponta
              </span>
            </h2>

            {/* Subtitle (.elementor-element-4dff177 / 100c1f7: Roboto 20px color #80baa5) */}
            <p className="font-body text-base sm:text-[20px] font-normal text-[#80baa5] leading-relaxed mb-7">
              Preencha o formulário ao lado e fale diretamente com um
              especialista da nossa consultoria empresarial para estruturar o
              crescimento do seu negócio.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-3 mb-8">
              {[
                "Diagnóstico empresarial direcionado à sua realidade",
                "Atuação prática em Financeiro, Negociações e Comercial",
                "Implantação de POPs, Fluxogramas, 5S e Organograma",
                "Apresentação mensal em Dashboard para a diretoria",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#80baa5] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[10px] bg-[#0a1826]/85 hover:bg-[#12263a] border border-[#28aab4]/35 px-4 py-3 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#80baa5] shrink-0" />
                <div>
                  <p className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#80baa5]">
                    WhatsApp Direto
                  </p>
                  <p className="font-display font-bold text-xs sm:text-sm text-white">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-3 rounded-[10px] bg-[#0a1826]/85 hover:bg-[#12263a] border border-[#28aab4]/35 px-4 py-3 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#80baa5] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#80baa5]">
                    E-mail Corporativo
                  </p>
                  <p className="font-display font-bold text-xs text-white truncate">
                    {EMAIL_ADDRESS}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column (6 cols — .elementor-element-d19da54 / 838987a) */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmitWhatsApp}
              className="selbetti-feature-frame bg-[#0a1826]/95 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    Fale com um Especialista
                  </h3>
                  <p className="text-xs text-[#80baa5] mt-0.5">
                    Atendimento executivo direto • {DIRECTOR_NAME}
                  </p>
                </div>
                <ShieldCheck className="w-6 h-6 text-[#80baa5] shrink-0" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor={`${sectionId}-name`}
                    className="block text-xs font-display font-semibold uppercase tracking-wider text-[#ebebeb] mb-1.5"
                  >
                    Seu Nome *
                  </label>
                  <input
                    id={`${sectionId}-name`}
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex.: João Silva"
                    className="w-full rounded-[4px] bg-[#040a10] border border-[#28aab4]/45 focus:border-[#80baa5] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${sectionId}-company`}
                    className="block text-xs font-display font-semibold uppercase tracking-wider text-[#ebebeb] mb-1.5"
                  >
                    Nome da Empresa *
                  </label>
                  <input
                    id={`${sectionId}-company`}
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex.: Empresa Ltda"
                    className="w-full rounded-[4px] bg-[#040a10] border border-[#28aab4]/45 focus:border-[#80baa5] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label
                    htmlFor={`${sectionId}-phone`}
                    className="block text-xs font-display font-semibold uppercase tracking-wider text-[#ebebeb] mb-1.5"
                  >
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id={`${sectionId}-phone`}
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(44) 99999-9999"
                    className="w-full rounded-[4px] bg-[#040a10] border border-[#28aab4]/45 focus:border-[#80baa5] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${sectionId}-email`}
                    className="block text-xs font-display font-semibold uppercase tracking-wider text-[#ebebeb] mb-1.5"
                  >
                    E-mail Corporativo
                  </label>
                  <input
                    id={`${sectionId}-email`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contato@suaempresa.com.br"
                    className="w-full rounded-[4px] bg-[#040a10] border border-[#28aab4]/45 focus:border-[#80baa5] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Multi-select Service Pillars */}
              <div className="mb-5">
                <span className="block text-xs font-display font-semibold uppercase tracking-wider text-[#ebebeb] mb-2">
                  Unidades de interesse:
                </span>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const active = selectedPillars.includes(s.name);
                    return (
                      <button
                        key={s.index}
                        type="button"
                        onClick={() => togglePillar(s.name)}
                        className={`rounded-[4px] px-3 py-1.5 text-xs font-display font-semibold transition-all cursor-pointer ${
                          active
                            ? "bg-[#80baa5] text-[#040a10] shadow-[0_0_12px_rgba(128,186,165,0.45)]"
                            : "bg-[#040a10] text-[#c4d3e3] border border-[#28aab4]/35 hover:border-[#80baa5]"
                        }`}
                      >
                        {active ? "✓ " : "+ "}
                        {s.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor={`${sectionId}-message`}
                  className="block text-xs font-display font-semibold uppercase tracking-wider text-[#ebebeb] mb-1.5"
                >
                  Principais desafios ou objetivos (opcional)
                </label>
                <textarea
                  id={`${sectionId}-message`}
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte brevemente sobre o momento atual da sua empresa..."
                  className="w-full rounded-[4px] bg-[#040a10] border border-[#28aab4]/45 focus:border-[#80baa5] px-4 py-2.5 text-sm text-white placeholder-[#647b91] outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#28aab4] hover:bg-[#5ec2a6] px-[35px] py-[15px] font-display font-medium text-[16px] text-white hover:text-[#040a10] selbetti-cta-glow cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar e Falar com Especialista</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
