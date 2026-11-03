import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { MessageCircleMore } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fluxo Cliente" },
      {
        name: "description",
        content: "Fale com a equipe do Fluxo Cliente.",
      },
],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 lg:px-8">
          <span className="inline-flex items-center gap-2.5 font-bold text-brand-deep">
            <span className="grid size-8 place-items-center rounded-lg bg-brand text-primary-foreground">
              <MessageCircleMore className="size-4" />
            </span>
            <span>fluxo <span className="text-brand">cliente.</span></span>
          </span>
          <a href="/" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-xs font-extrabold text-brand-deep transition hover:bg-brand-wash">
            <ArrowLeft className="size-3.5" /> Voltar ao site
          </a>
        </div>
      </header>
      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-deep sm:text-5xl">Contato</h1>
        <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">
          Quer conhecer melhor o Fluxo Cliente ou tirar uma dúvida? Fale diretamente pelo WhatsApp. Nossa equipe poderá orientar você sobre o acesso, o período de teste e o funcionamento da plataforma.
        </p>
        <a href="https://wa.me/5521996765863?text=Oi!%20Vim%20pela%20p%C3%A1gina%20de%20contato%20do%20Fluxo%20Cliente%20e%20quero%20tirar%20uma%20d%C3%BAvida." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-brand px-6 text-sm font-extrabold text-primary-foreground transition hover:bg-brand-deep">
          Falar pelo WhatsApp <MessageCircleMore className="size-4" />
        </a>
      </section>
    </main>
  );
}
