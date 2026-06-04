import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  to: "/agro" | "/smart-cities";
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  theme: "theme-agro" | "theme-smart";
}

export function LabCard({ to, eyebrow, title, description, image, theme }: Props) {
  return (
    <Link
      to={to}
      className={cn(
        theme,
        "group relative overflow-hidden rounded-2xl bg-background text-foreground border border-border block aspect-[4/5] md:aspect-[5/6]",
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[1200ms] group-hover:scale-100"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" aria-hidden />
      <div className="relative h-full p-7 md:p-10 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-foreground/80">{eyebrow}</span>
          <span className="size-10 rounded-full bg-foreground text-background flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
        <div>
          <h3 className="font-display font-semibold text-4xl md:text-6xl leading-[0.95] tracking-tight">
            {title}
          </h3>
          <p className="mt-4 max-w-sm text-sm md:text-base text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
