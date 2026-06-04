import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-full bg-foreground" />
            <span className="font-display font-semibold text-lg">
              UNIJUI <span className="text-muted-foreground font-normal">Living Labs</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Portal dos Living Labs Agro e Smart Cities da Universidade Regional do Noroeste do Estado do Rio Grande do Sul.
          </p>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Navegar</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre" className="link-underline">Sobre</Link></li>
            <li><Link to="/projetos" className="link-underline">Projetos</Link></li>
            <li><Link to="/noticias" className="link-underline">Notícias</Link></li>
            <li><Link to="/equipe" className="link-underline">Equipe</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Labs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/agro" className="link-underline">Living Lab Agro</Link></li>
            <li><Link to="/smart-cities" className="link-underline">Living Lab Smart Cities</Link></li>
            <li><Link to="/contato" className="link-underline">Contato</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-page py-6 border-t border-border flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} UNIJUI — Universidade Regional do Noroeste do Estado do RS.</p>
        <p>Rua do Comércio, 3000 · Ijuí/RS</p>
      </div>
    </footer>
  );
}
