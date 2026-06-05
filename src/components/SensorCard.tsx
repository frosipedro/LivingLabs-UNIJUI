import { Clock3, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Sensor } from "@/content/api";

const STATUS = {
  online: {
    label: "Online",
    dot: "bg-accent",
    badge: "border-accent/20 bg-accent/10 text-accent",
  },
  atencao: {
    label: "Atenção",
    dot: "bg-amber-400",
    badge: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  },
  offline: {
    label: "Offline",
    dot: "bg-muted-foreground",
    badge: "border-border bg-muted text-muted-foreground",
  },
} as const;

export function SensorCard({ sensor }: { sensor: Sensor }) {
  const status = STATUS[sensor.status];
  const updatedTime = sensor.updatedAt.slice(11, 16);

  return (
    <article className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6 hover-lift">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" aria-hidden />
          <span className="truncate">{sensor.location}</span>
        </div>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
            status.badge,
          )}
        >
          <span className={cn("size-1.5 rounded-full", status.dot)} aria-hidden />
          {status.label}
        </span>
      </div>

      <h3 className="mt-6 font-display text-lg font-semibold leading-snug">{sensor.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{sensor.metric}</p>

      <div className="mt-7 flex items-end justify-between gap-4 border-t border-border pt-5">
        <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {sensor.value}
          <span className="ml-1.5 text-sm font-medium text-muted-foreground">{sensor.unit}</span>
        </p>
        <p className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
          <Clock3 className="size-3.5" aria-hidden />
          <time dateTime={sensor.updatedAt}>{updatedTime}</time>
        </p>
      </div>
    </article>
  );
}
