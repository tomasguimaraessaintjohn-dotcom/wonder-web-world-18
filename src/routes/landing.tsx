import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "Fluxo Cliente | Recupere oportunidades da sua clínica" },
      {
        name: "description",
        content:
          "Organize oportunidades, acompanhe clientes e recupere conversas que esfriaram no WhatsApp.",
      },
      { property: "og:title", content: "Fluxo Cliente | Recupere oportunidades da sua clínica" },
      {
        property: "og:description",
        content:
          "Organize oportunidades, acompanhe clientes e recupere conversas que esfriaram no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const priorities = [
  { name: "Mariana", note: "Pediu preço de preenchimento há 3 dias.", tone: "bg-destructive" },
  { name: "Ana", note: "Disse ‘vou pensar’ e não respondeu mais.", tone: "bg-chart-1" },
  { name: "Camila", note: "Demonstrou interesse, mas ainda não agendou.", tone: "bg-chart-4" },
];

const messageExamples = [
  {
    situation: "Pediu preço e sumiu",
    message:
      "Oi, Mariana! Passando com o orçamento do preenchimento que você pediu. Se ficou qualquer dúvida, me avisa por aqui. 😊",
  },
  {
    situation: "Disse ‘vou pensar’",
    message:
      "Oi, Ana! Tudo bem? Passando para saber se ficou alguma dúvida sobre o procedimento. Se quiser, posso te explicar melhor como funciona.",
  },
  {
    situation: "Não confirmou o agendamento",
    message:
      "Oi, Camila! Quer deixar seu horário reservado esta semana? Tenho vagas quinta e sexta, se preferir. 😊",
  },
];

const trackingMetrics = [
  ["Clientes acompanhados", "12"],
  ["Follow-ups realizados", "7"],
  ["Clientes recuperados", "8"],
  ["Agendamentos recuperados", "6"],
  ["Valor potencial recuperado", "R$ 7.480"],
];

const faqs = [
  ["Preciso conectar meu WhatsApp?", "Não. Na versão atual você pode cadastrar e acompanhar seus clientes diretamente pela plataforma."],
  ["Preciso entender de CRM?", "Não. O Fluxo Cliente foi pensado para ser simples e fácil de usar no dia a dia da clínica."],
  ["Tenho que instalar alguma coisa?", "Não. O Fluxo Cliente funciona pelo navegador."],
  ["Posso testar antes de pagar?", "Sim. Você pode testar gratuitamente por 7 dias."],
];

function Logo() {
  return (
    <a href="#inicio" className="inline-flex items-center gap-2.5 font-bold text-brand-deep" aria-label="Fluxo Cliente — início">
      <span className="grid size-8 place-items-center rounded-lg bg-brand text-primary-foreground">
        <MessageCircleMore className="size-4" />
      </span>
      <span>fluxo <span className="text-brand">cliente.</span></span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand">{children}</p>;
}

const APP_AUTH_URL = "https://appfluxocliente.app/auth";

function PrimaryLink({ children, href = APP_AUTH_URL }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-extrabold text-primary-foreground shadow-lg shadow-brand/15 transition hover:-translate-y-0.5 hover:bg-brand-deep focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2">
      {children}<ArrowRight className="size-4" />
    </a>
  );
}

const WHATSAPP_URL =
  "https://wa.me/5521996765863?text=Oi!%20Vi%20o%20Fluxo%20Cliente%20e%20quero%20tirar%20uma%20dúvida";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}

function WhatsAppLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-brand-bright/45 bg-brand-bright/5 px-6 text-sm font-extrabold text-brand-bright transition hover:-translate-y-0.5 hover:border-brand-bright hover:bg-brand-bright/15 focus:outline-none focus:ring-2 focus:ring-brand-bright focus:ring-offset-2 ${className}`}>
      {children}<WhatsAppIcon className="size-4" />
    </a>
  );
}

function WhatsAppFloat() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar com o criador no WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-brand shadow-xl shadow-brand-deep/40 ring-1 ring-brand-bright/40 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-bright">
      <WhatsAppIcon className="size-6" />
    </a>
  );
}


function DashboardPreview() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-brand/15 bg-background shadow-2xl shadow-brand-deep/10">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <Logo />
        <span className="rounded-full bg-brand-wash px-3 py-1 text-xs font-bold text-brand">Hoje</span>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2">
        {[
          [UsersRound, "Clientes aguardando", "12"],
          [Clock3, "Follow-ups de hoje", "7"],
          [Target, "Oportunidades", "18"],
          [CircleDollarSign, "Valor potencial", "R$ 8.450"],
        ].map(([Icon, label, value]) => {
          const PreviewIcon = Icon as typeof UsersRound;
          return (
            <div key={String(label)} className="rounded-md border border-border bg-card p-4">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">{String(label)}</span>
                <PreviewIcon className="size-4 text-brand" />
              </div>
              <p className="text-2xl font-extrabold text-brand-deep">{String(value)}</p>
            </div>
          );
        })}
      </div>
      <div className="mx-5 mb-5 rounded-md bg-brand-deep p-5 text-primary-foreground">
        <div className="mb-4 flex items-center justify-between text-xs font-bold"><span>Oportunidades por etapa</span><span>Esta semana</span></div>
        <div className="flex h-20 items-end gap-2" aria-hidden="true">
          {[45, 72, 55, 88, 66, 94, 78].map((height, index) => <span key={index} className="flex-1 rounded-t-sm bg-brand-bright" style={{ height: `${height}%`, opacity: 0.48 + index * 0.06 }} />)}
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <main id="inicio" className="landing-navy overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex" aria-label="Navegação principal">
            <a href="#como-funciona" className="transition hover:text-brand">Como funciona</a>
            <a href="#recursos" className="transition hover:text-brand">Recursos</a>
            <a href="#plano" className="transition hover:text-brand">Plano</a>
          </nav>
          <a href={APP_AUTH_URL} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-brand px-4 text-xs font-extrabold text-primary-foreground transition hover:bg-brand-deep">Começar agora <ArrowRight className="size-3.5" /></a>
        </div>
      </header>

      <section className="relative border-b border-border bg-brand-wash">
        <div className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
          <div className="landing-rise max-w-2xl">
            <SectionLabel>Para clínicas de estética</SectionLabel>
            <h1 className="text-4xl font-extrabold leading-[1.05] text-brand-deep sm:text-5xl lg:text-6xl">Pare de perder clientes da sua clínica <span className="font-editorial italic font-normal text-brand">que pedem preço e somem no WhatsApp.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Veja quem demonstrou interesse, quem parou de responder e quem precisa receber uma nova mensagem hoje.</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><PrimaryLink>Começar agora</PrimaryLink><span className="text-xs font-semibold text-muted-foreground">7 dias grátis • Cancele quando quiser</span></div>
            <div className="mt-4"><WhatsAppLink>Falar com o criador</WhatsAppLink></div>
            <div className="mt-7 flex flex-wrap gap-6 text-xs text-muted-foreground"><span className="flex items-center gap-2"><Check className="size-4 text-brand" />Sem integração obrigatória</span><span className="flex items-center gap-2"><Check className="size-4 text-brand" />Feito para clínicas reais</span></div>
          </div>
          <div className="landing-rise relative [animation-delay:140ms]">
            <DashboardPreview />
            <div className="absolute -left-5 top-12 hidden rounded-md border border-brand/20 bg-background p-4 shadow-xl sm:block"><p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand">Atenção hoje</p><p className="mt-2 text-sm font-bold text-brand-deep">3 conversas para retomar</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div><SectionLabel>01 / O problema</SectionLabel><h2 className="max-w-lg text-4xl font-extrabold leading-tight text-brand-deep sm:text-5xl">Quantos clientes pedem preço e depois <span className="font-editorial italic font-normal text-brand">desaparecem?</span></h2></div>
          <p className="self-end text-lg leading-8 text-muted-foreground">Entre mensagens, orçamentos e uma rotina cheia, boas oportunidades acabam esquecidas por falta de acompanhamento.</p>
        </div>
        <div className="mt-14 grid border-y border-border md:grid-cols-3">
          {["Pediu preço e sumiu", "Disse que ia pensar", "Demonstrou interesse, mas não agendou"].map((item, index) => <div key={item} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="text-4xl font-light text-brand-soft">0{index + 1}</span><p className="mt-6 font-bold text-brand-deep">{item}</p></div>)}
        </div>
      </section>

      <section id="recursos" className="bg-brand-wash py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div><SectionLabel>02 / Produto real</SectionLabel><h2 className="text-4xl font-extrabold leading-tight text-brand-deep sm:text-5xl">Abra o Fluxo Cliente e saiba quem precisa da sua <span className="font-editorial italic font-normal text-brand">atenção hoje.</span></h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Em vez de depender da memória da equipe, o Fluxo Cliente mostra quais oportunidades merecem atenção.</p></div>
          <DashboardPreview />
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <SectionLabel>03 / Como funciona</SectionLabel>
        <h2 className="text-4xl font-extrabold text-brand-deep sm:text-5xl">Da conversa parada ao <span className="font-editorial italic font-normal text-brand">próximo passo.</span></h2>
        <div className="mt-14 grid border-y border-border md:grid-cols-3">
          {[[UserRoundPlus, "Cadastre seus clientes"], [Target, "Veja quem precisa de acompanhamento"], [CalendarCheck, "Retome a conversa no momento certo"]].map(([Icon, label], index) => { const StepIcon = Icon as typeof UserRoundPlus; return <div key={String(label)} className="border-b border-border py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="text-4xl font-light text-brand-soft">0{index + 1}</span><StepIcon className="mt-8 size-6 text-brand" /><h3 className="mt-5 text-lg font-bold text-brand-deep">{String(label)}</h3></div>; })}
        </div>
      </section>

      <section className="border-y border-border bg-warm py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div><SectionLabel>04 / Prioridades</SectionLabel><h2 className="text-4xl font-extrabold text-brand-deep sm:text-5xl">Quem precisa da sua <span className="font-editorial italic font-normal text-brand">atenção hoje?</span></h2><div className="mt-8"><PrimaryLink href="#oportunidades">Ver oportunidades</PrimaryLink></div></div>
          <div id="oportunidades" className="divide-y divide-border rounded-lg border border-border bg-background px-6 shadow-sm">
            {priorities.map((person) => <div key={person.name} className="flex gap-4 py-5"><span className={`mt-2 size-2.5 shrink-0 rounded-full ${person.tone}`} /><div><p className="font-extrabold text-brand-deep">{person.name}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{person.note}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-brand-wash py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>05 / Mensagens de exemplo</SectionLabel>
            <h2 className="text-4xl font-extrabold leading-tight text-brand-deep sm:text-5xl">Saiba o que enviar sem parecer uma <span className="font-editorial italic font-normal text-brand">mensagem automática.</span></h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Três situações comuns e uma sugestão de mensagem para cada uma.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {messageExamples.map((example) => (
              <div key={example.situation} className="flex flex-col rounded-lg border border-brand/15 bg-background p-6 shadow-lg shadow-brand-deep/5">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand">{example.situation}</p>
                <div className="mt-5 flex-1 rounded-md bg-brand-soft p-5 text-sm leading-7 text-brand-deep">{example.message}</div>
                <p className="mt-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-brand"><Sparkles className="size-4" /> Sugestão do Fluxo Cliente</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">Exemplos de demonstração da futura experiência. As mensagens não são enviadas automaticamente.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div><SectionLabel>06 / Organização</SectionLabel><h2 className="text-4xl font-extrabold text-brand-deep sm:text-5xl">Todos os seus clientes organizados em <span className="font-editorial italic font-normal text-brand">um só lugar.</span></h2><p className="mt-6 leading-7 text-muted-foreground">Acompanhe cada oportunidade sem planilhas e sem precisar lembrar de tudo manualmente.</p></div>
          <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-brand-deep text-primary-foreground"><tr>{["Cliente", "Procedimento", "Etapa", "Valor potencial", "Próxima ação"].map((h) => <th key={h} className="px-4 py-4 font-bold">{h}</th>)}</tr></thead><tbody className="divide-y divide-border">{[["Mariana", "Preenchimento", "Orçamento", "R$ 1.200", "Hoje"], ["Ana", "Botox", "Em conversa", "R$ 850", "Amanhã"], ["Camila", "Bioestimulador", "Interesse", "R$ 1.500", "Em 2 dias"]].map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell} className={`px-4 py-4 ${index === 0 ? "font-bold text-brand-deep" : "text-muted-foreground"}`}>{cell}</td>)}</tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="border-y border-border bg-brand-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-bright">07 / O que você poderá acompanhar</p>
          <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">Acompanhe o que importa no <span className="font-editorial italic font-normal text-brand-bright">dia a dia da clínica.</span></h2>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-bright/40 bg-brand-bright/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-brand-bright"><BarChart3 className="size-4" /> Exemplo ilustrativo</p>
          <p className="mt-4 max-w-2xl text-sm opacity-70">Os números abaixo são apenas um exemplo de como o acompanhamento aparece. Não representam resultados de clientes.</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">{trackingMetrics.map(([label, value]) => <div key={label} className="bg-brand-deep p-7"><p className="text-3xl font-extrabold">{value}</p><p className="mt-3 text-sm opacity-70">{label}</p></div>)}</div>
        </div>
      </section>

      <section id="plano" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2"><div><SectionLabel>08 / Um plano simples</SectionLabel><h2 className="text-4xl font-extrabold text-brand-deep sm:text-5xl">Comece agora e cuide de cada <span className="font-editorial italic font-normal text-brand">oportunidade.</span></h2></div><div className="rounded-lg border border-brand/20 bg-brand-wash p-7 sm:p-9"><p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand">Fluxo Cliente Pro</p><div className="mt-5 flex items-end gap-2"><span className="text-5xl font-extrabold text-brand-deep">R$99,90</span><span className="pb-1 text-muted-foreground">/ mês</span></div><p className="mt-3 text-sm text-muted-foreground">Comece com 7 dias grátis.</p><ul className="my-8 grid gap-3 sm:grid-cols-2">{["Gestão de clientes", "Oportunidades", "Follow-ups", "IA para mensagens", "Dashboard", "Histórico", "Resultados"].map((item) => <li key={item} className="flex items-center gap-2 text-sm font-semibold text-brand-deep"><Check className="size-4 text-brand" />{item}</li>)}</ul><PrimaryLink>Comece agora</PrimaryLink></div></div>
      </section>

      <section className="bg-brand-wash py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8"><SectionLabel>09 / Perguntas frequentes</SectionLabel><h2 className="text-4xl font-extrabold text-brand-deep sm:text-5xl">Dúvidas? A gente <span className="font-editorial italic font-normal text-brand">responde.</span></h2><div className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-brand-deep"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-brand transition group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div></div>
      </section>

      <section className="border-b border-border px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <ShieldCheck className="size-7 text-brand" />
          <p className="text-lg font-bold text-brand-deep">Privacidade e segurança fazem parte da estrutura do Fluxo Cliente.</p>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">As informações dos seus clientes ficam na sua conta, visíveis só para você e para quem você autorizar.</p>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-4xl text-center"><BarChart3 className="mx-auto size-7 text-brand" /><h2 className="mt-7 text-4xl font-extrabold text-brand-deep sm:text-6xl">Pare de deixar oportunidades <span className="font-editorial italic font-normal text-brand">esfriarem.</span></h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Descubra quem precisa da sua atenção e transforme conversas esquecidas em novas oportunidades.</p><div className="mt-8"><PrimaryLink>Quero começar agora</PrimaryLink><div className="mt-4 flex justify-center"><WhatsAppLink>Falar com o criador</WhatsAppLink></div></div></div></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pt-10 pb-28 sm:pb-10 lg:px-8"><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><Logo /><nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-muted-foreground" aria-label="Links do rodapé"><a href={APP_AUTH_URL} className="transition hover:text-brand">Entrar</a><a href="/contato" className="transition hover:text-brand">Contato</a><a href="/privacidade" className="transition hover:text-brand">Política de Privacidade</a><a href="/termos" className="transition hover:text-brand">Termos de Uso</a></nav></div><p className="text-xs text-muted-foreground">© 2026 Fluxo Cliente. Feito para clínicas em movimento.</p></div></footer>
      <WhatsAppFloat />
    </main>
  );
}
