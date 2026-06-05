import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import unijuiBlueLogo from "@/assets/unijui/unijui-azul.png";
import unijuiWhiteLogo from "@/assets/unijui/unijui-branco.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/noticias", label: "Notícias" },
  { to: "/agro", label: "Agro" },
  { to: "/smart-cities", label: "Smart Cities" },
  { to: "/equipe", label: "Equipe" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isAgro = pathname === "/agro";
  const isSmartCities = pathname === "/smart-cities";
  const isLab = isAgro || isSmartCities;
  const unijuiLogo = isLab ? unijuiWhiteLogo : unijuiBlueLogo;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 bg-transparent text-foreground transition-[background-color,backdrop-filter,border-color,box-shadow] duration-1000",
        scrolled &&
          (isLab
            ? "bg-black/60 backdrop-blur-[6px]"
            : "bg-white/70 backdrop-blur-md border-b border-black/5 shadow-sm"),
        isAgro && "theme-agro",
        isSmartCities && "theme-smart",
      )}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link to="/" aria-label="UNIJUI Living Labs — Home">
          <img src={unijuiLogo} alt="UNIJUI" className="h-8 w-auto md:h-10" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="link-underline text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center size-10 rounded-md hover:bg-accent transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 bottom-0 bg-background border-t border-border transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="container-page py-8 flex flex-col gap-1">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="font-display text-3xl py-3 border-b border-border/60 transition-colors hover:text-foreground"
              style={{
                animation: open
                  ? `fade-up 0.5s ${i * 50}ms cubic-bezier(0.22,1,0.36,1) both`
                  : undefined,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
