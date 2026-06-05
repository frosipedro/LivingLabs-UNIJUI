import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — UNIJUI Living Labs" },
      { name: "description", content: "Fale com os Living Labs Agro e Smart Cities da UNIJUI." },
      { property: "og:title", content: "Contato — UNIJUI Living Labs" },
      { property: "og:description", content: "Envie sua mensagem para os Living Labs da UNIJUI." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  email: z.string().email("Email inválido"),
  assunto: z.string().min(3, "Informe um assunto"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});
type FormValues = z.infer<typeof schema>;

function ContatoPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", email: "", assunto: "", mensagem: "" },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Mensagem enviada!", {
      description: `Obrigado, ${data.nome}. Responderemos em breve.`,
    });
    reset();
  };

  return (
    <section className="container-page pt-20 md:pt-28 pb-24">
      <SectionReveal>
        <span className="eyebrow">Contato</span>
      </SectionReveal>
      <SectionReveal delay={100}>
        <h1 className="h-display mt-4 max-w-3xl">Vamos conversar!</h1>
      </SectionReveal>
      <SectionReveal delay={200}>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Parcerias, propostas de pesquisa, imprensa ou apenas curiosidade — escreva pra gente.
        </p>
      </SectionReveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] max-w-6xl">
        <SectionReveal delay={120}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome"
                  {...register("nome")}
                  aria-invalid={!!errors.nome}
                />
                {errors.nome && <p className="text-xs text-destructive">{errors.nome.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="voce@dominio.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="assunto">Assunto</Label>
              <Input
                id="assunto"
                placeholder="Sobre o que você quer falar?"
                {...register("assunto")}
                aria-invalid={!!errors.assunto}
              />
              {errors.assunto && (
                <p className="text-xs text-destructive">{errors.assunto.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                rows={6}
                placeholder="Escreva sua mensagem…"
                {...register("mensagem")}
                aria-invalid={!!errors.mensagem}
              />
              {errors.mensagem && (
                <p className="text-xs text-destructive">{errors.mensagem.message}</p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting} className="rounded-full px-6">
              {isSubmitting ? (
                "Enviando…"
              ) : (
                <>
                  Enviar mensagem <Send className="size-4 ml-1.5" />
                </>
              )}
            </Button>
          </form>
        </SectionReveal>

        <SectionReveal delay={240}>
          <aside className="rounded-2xl border border-border bg-card p-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="size-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Endereço</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Rua do Comércio, 3000
                  <br />
                  Ijuí — RS, Brasil
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="size-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground mt-1">livinglabs@unijui.edu.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="size-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground mt-1">+55 (55) 3332-0200</p>
              </div>
            </div>
          </aside>
        </SectionReveal>
      </div>
    </section>
  );
}
