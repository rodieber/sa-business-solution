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

export function Cta() {
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
      id="formulario"
      className="relative py-20 lg:py-28 bg-[#040a10] border-t border-[#28aab4]/20 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-[#28aab4]/12 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0a1826] via-[#0d2033] to-[#040a10] border-2 border-[#5ec2a6]/60 p-6 sm:p-10 lg:p-14 shadow-[0_0_40px_rgba(40,170,180,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (5 cols): Selbetti Section 9 Value Pitch */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#12263a] border border-[#5ec2a6]/40 px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#5ec2a6] animate-pulse" />
                <span className="font-display font-semibold text-xs uppercase tracking-[0.14em] text-[#5ec2a6]">
                  Atendimento Executivo Especializado
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[36px] text-white leading-[1.2] mb-5">
                Impulsione os seus resultados com uma{" "}
                <span className="teal-gradient-text">
                  gestão de ponta a ponta
                </span>
              </h2>

              <p className="text-[#d5e0ec] text-sm sm:text-base leading-relaxed mb-7">
                Preencha os dados ao lado para falar diretamente com a nossa
                diretoria. Analisaremos os desafios da sua empresa e
                apresentaremos um plano prático para o seu negócio.
              </p>

              {/* Key Benefits List */}
              <div className="space-y-3.5 mb-8">
                {[
                  "Diagnóstico empresarial direcionado à sua realidade",
                  "Atuação prática em Financeiro, Negociações e Comercial",
                  "Implantação de POPs, Fluxogramas, 5S e Organograma",
                  "Apresentação mensal em Dashboard para a diretoria",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5ec2a6] shrink-0 mt-0.5" />
                    <span className="text-sm text-white font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-xl bg-[#040a10]/70 hover:bg-[#12263a] border border-[#28aab4]/30 px-4 py-3 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#28aab4]/20 border border-[#5ec2a6]/40 flex items-center justify-center text-[#5ec2a6] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#8fa6bc]">
                      WhatsApp Direto • {DIRECTOR_NAME}
                    </p>
                    <p className="font-display font-bold text-sm sm:text-base text-white">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-3.5 rounded-xl bg-[#040a10]/70 hover:bg-[#12263a] border border-[#28aab4]/30 px-4 py-3 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#28aab4]/20 border border-[#5ec2a6]/40 flex items-center justify-center text-[#5ec2a6] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#8fa6bc]">
                      E-mail Corporativo
                    </p>
                    <p className="font-display font-bold text-sm text-white truncate">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column (7 cols): Interactive Specialist Lead Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmitWhatsApp}
                className="rounded-[18px] bg-[#040a10]/90 border border-[#28aab4]/35 p-6 sm:p-8 shadow-xl"
              >
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      Solicite o contato de um especialista
                    </h3>
                    <p className="text-xs text-[#8fa6bc] mt-0.5">
                      Retorno rápido direto com a diretoria executiva
                    </p>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-[#5ec2a6] shrink-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="block text-xs font-display font-semibold uppercase tracking-wider text-[#c4d3e3] mb-1.5"
                    >
                      Seu Nome *
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex.: João Silva"
                      className="w-full rounded-xl bg-[#0a1826] border border-[#28aab4]/35 focus:border-[#5ec2a6] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lead-company"
                      className="block text-xs font-display font-semibold uppercase tracking-wider text-[#c4d3e3] mb-1.5"
                    >
                      Nome da Empresa *
                    </label>
                    <input
                      id="lead-company"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ex.: Empresa Ltda"
                      className="w-full rounded-xl bg-[#0a1826] border border-[#28aab4]/35 focus:border-[#5ec2a6] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label
                      htmlFor="lead-phone"
                      className="block text-xs font-display font-semibold uppercase tracking-wider text-[#c4d3e3] mb-1.5"
                    >
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(44) 99999-9999"
                      className="w-full rounded-xl bg-[#0a1826] border border-[#28aab4]/35 focus:border-[#5ec2a6] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lead-email"
                      className="block text-xs font-display font-semibold uppercase tracking-wider text-[#c4d3e3] mb-1.5"
                    >
                      E-mail Corporativo
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contato@suaempresa.com.br"
                      className="w-full rounded-xl bg-[#0a1826] border border-[#28aab4]/35 focus:border-[#5ec2a6] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Multi-select Service Pillars */}
                <div className="mb-5">
                  <span className="block text-xs font-display font-semibold uppercase tracking-wider text-[#c4d3e3] mb-2">
                    Quais unidades sua empresa mais precisa agora?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const active = selectedPillars.includes(s.name);
                      return (
                        <button
                          key={s.index}
                          type="button"
                          onClick={() => togglePillar(s.name)}
                          className={`rounded-lg px-3.5 py-2 text-xs font-display font-semibold transition-all cursor-pointer ${
                            active
                              ? "bg-[#5ec2a6] text-[#040a10] shadow-[0_0_12px_rgba(94,194,166,0.4)]"
                              : "bg-[#0a1826] text-[#c4d3e3] border border-[#28aab4]/30 hover:border-[#5ec2a6]"
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
                    htmlFor="lead-message"
                    className="block text-xs font-display font-semibold uppercase tracking-wider text-[#c4d3e3] mb-1.5"
                  >
                    Principais desafios ou objetivos (opcional)
                  </label>
                  <textarea
                    id="lead-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte brevemente sobre o momento atual da sua empresa..."
                    className="w-full rounded-xl bg-[#0a1826] border border-[#28aab4]/35 focus:border-[#5ec2a6] px-4 py-3 text-sm text-white placeholder-[#647b91] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#28aab4] to-[#5ec2a6] px-7 py-4 font-display font-bold text-sm uppercase tracking-wider text-[#040a10] selbetti-cta-glow hover:brightness-110 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar e Falar com Especialista</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
