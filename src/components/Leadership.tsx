import { Award, Briefcase, GraduationCap, Mail, Phone } from "lucide-react";
import {
  CREDENTIALS,
  DIRECTOR_NAME,
  DIRECTOR_ROLE,
  EMAIL_ADDRESS,
  IMAGES,
  MAILTO_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "../lib/data";
import { Eyebrow, Reveal } from "../lib/anim";
import { BrandLinesPattern, SaMonogram, WhatsAppIcon } from "./icons";

export default function Leadership() {
  return (
    <section
      id="lideranca"
      className="relative w-full max-w-full overflow-hidden bg-obsidian py-20 sm:py-24 md:py-36"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[680px] max-w-[100vw] -translate-x-1/2 rounded-full bg-teal/8 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <Eyebrow align="center">Diretoria Executiva</Eyebrow>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-ice md:text-6xl">
              Liderança com <span className="italic text-teal">três décadas</span> de experiência
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ice/65 sm:text-base">
              Conheça a trajetória executiva e acadêmica que sustenta cada projeto, diagnóstico e
              solução entregue pela S.A Business Solution.
            </p>
          </Reveal>
        </div>

        {/* Main Executive Profile Card */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] items-start">
          {/* Portrait & Executive Business Card */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-teal/25 bg-gradient-to-b from-slate-navy to-navy p-7 sm:p-8 shadow-2xl">
              <div className="pointer-events-none absolute -bottom-8 -right-8 w-56 opacity-20">
                <BrandLinesPattern className="w-full h-auto" />
              </div>

              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-full border-4 border-teal p-1 shadow-[0_0_40px_rgba(40,170,180,0.25)]">
                <img
                  src={IMAGES.silvana}
                  alt={`${DIRECTOR_NAME} — ${DIRECTOR_ROLE}`}
                  loading="lazy"
                  width={388}
                  height={388}
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>

              <div className="mt-7 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-obsidian/50 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-teal">
                  {DIRECTOR_ROLE}
                </div>
                <h3 className="mt-3 font-display text-3xl font-light text-ice sm:text-4xl">
                  Silvana Ozima
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-ice/50">
                  S.A Business Solution
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ice/75">
                  Mais de 30 anos de experiência em administração, finanças e recursos humanos, com
                  foco em processos, gestão e decisões estratégicas.
                </p>
              </div>

              <div className="mt-7 space-y-3 border-t border-ice/10 pt-6 text-xs sm:text-sm text-ice/75">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-ice/10 bg-obsidian/40 px-4 py-3 transition-colors hover:border-teal/50 hover:text-teal"
                >
                  <Phone className="h-4 w-4 shrink-0 text-teal" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a
                  href={MAILTO_URL}
                  className="flex items-center gap-3 rounded-xl border border-ice/10 bg-obsidian/40 px-4 py-3 transition-colors hover:border-teal/50 hover:text-teal break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-teal" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
              </div>

              <div className="mt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-teal to-mint px-6 py-3.5 text-xs sm:text-sm font-bold text-obsidian transition-all hover:brightness-110"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Falar com Silvana Ozima
                </a>
              </div>
            </div>
          </Reveal>

          {/* Bio, Trajectory & Academic Credentials */}
          <div className="space-y-8">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-ice/10 bg-navy/70 p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-teal" />
                  <h3 className="font-display text-2xl font-light text-ice sm:text-3xl">
                    Trajetória & Experiência Profissional
                  </h3>
                </div>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ice/75">
                  <p>
                    Ao longo de mais de três décadas, atuei em administração, finanças e recursos
                    humanos, sempre buscando organizar processos, otimizar custos e apoiar decisões
                    estratégicas com informações claras e confiáveis.
                  </p>
                  <p>
                    Minha trajetória inclui a <strong className="text-ice">gestão completa de empresas</strong>,
                    o relacionamento com clientes, fornecedores e instituições financeiras e a
                    coordenação de equipes, com dedicação à melhoria contínua e ao atendimento de
                    qualidade.
                  </p>
                  <p>
                    Na <strong className="text-ice">gestão administrativa, financeira e de RH</strong>,
                    responsável por planejamento, auditoria, contas a pagar e a receber,
                    faturamento, fluxo de caixa, custos e investimentos, além de processos de
                    contratação, folha de pagamento, controle de ponto, cargos e salários. Na{" "}
                    <strong className="text-ice">área comercial</strong>, definição de estratégias e
                    acompanhamento de metas e resultados de vendas. Na{" "}
                    <strong className="text-ice">área técnica</strong>, supervisão de agendas,
                    ordens de serviço, treinamentos e integração de equipes.
                  </p>
                  <p>
                    Em <strong className="text-ice">consultoria</strong>, atuei com otimização de
                    processos, gestão de documentos, controle de suprimentos e análise de custos,
                    além de negociações com clientes, fornecedores, cartórios e instituições
                    financeiras. Na <strong className="text-ice">coordenação pedagógica de polo</strong>,
                    atuação em cursos de graduação e pós-graduação, com orientação de bancas em MBA
                    e pós-graduação.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Academic Credentials */}
            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-ice/10 bg-navy/70 p-7 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-teal" />
                    <h3 className="font-display text-2xl font-light text-ice sm:text-3xl">
                      Formação Acadêmica & Especializações
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1 text-[11px] font-semibold text-teal">
                    <Award className="h-3.5 w-3.5" />
                    Excelência Acadêmica
                  </span>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {CREDENTIALS.map((cred) => (
                    <div
                      key={cred.degree}
                      className="group relative overflow-hidden rounded-2xl border border-ice/10 bg-obsidian/55 p-5 transition-all duration-300 hover:border-teal/40"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal to-mint" />
                      <div className="pl-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-display text-lg font-medium text-ice group-hover:text-teal transition-colors">
                            {cred.degree}
                          </h4>
                          <SaMonogram className="h-5 w-6 shrink-0 opacity-40 group-hover:opacity-90 transition-opacity" />
                        </div>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-teal/85">
                          {cred.institution}
                        </p>
                        <p className="mt-2.5 text-xs leading-relaxed text-ice/60">
                          {cred.focus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
