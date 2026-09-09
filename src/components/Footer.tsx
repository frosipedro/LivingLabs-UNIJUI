import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import unijuiBlueLogo from "@/assets/unijui/unijui-azul.png";
import unijuiWhiteLogo from "@/assets/unijui/unijui-branco2.png";

export function Footer() {
  const { pathname } = useLocation();
  const isAgro = pathname === "/agro";
  const isSmartCities = pathname === "/smart-cities";
  const isLab = isAgro || isSmartCities;
  const unijuiLogo = isLab ? unijuiWhiteLogo : unijuiBlueLogo;

  return (
    <footer
      className={cn(
        "border-t border-border bg-background text-foreground",
        isAgro && "theme-agro",
        isSmartCities && "theme-smart",
      )}
    >
      <div className="container-page py-10 grid gap-10 md:gap-46 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            Portal dos Living Labs Agro e Smart Cities da Universidade Regional do Noroeste do
            Estado do Rio Grande do Sul.
          </p>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Navegar</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/sobre" className="link-underline">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/projetos" className="link-underline">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/noticias" className="link-underline">
                Notícias
              </Link>
            </li>
            <li>
              <Link to="/equipe" className="link-underline">
                Equipe
              </Link>
            </li>
            <li>
              <Link to="/contato" className="link-underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Labs</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/agro" className="link-underline">
                Agro
              </Link>
            </li>
            <li>
              <Link to="/smart-cities" className="link-underline">
                Smart Cities
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page py-6 border-t border-border flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} UNIJUÍ — Universidade Regional do Noroeste do Estado do RS.
        </p>
        <p>Rua do Comércio, 3000, Bairro Universitário · Ijuí/RS</p>
      </div>
    </footer>
  );
}
