import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Sensor } from "@/content/api";
import { SensorCard } from "./SensorCard";
import { SectionReveal } from "./SectionReveal";

interface Props {
  sensors: Sensor[];
  title: string;
}

export function SensorSection({ sensors, title }: Props) {
  const [expanded, setExpanded] = useState(false);
  const gridId = useId();
  const initialSensors = sensors.slice(0, 3);
  const extraSensors = sensors.slice(3);
  const hasMore = sensors.length > 3;

  return (
    <section className="container-page py-24">
      <SectionReveal>
        <span className="eyebrow">Sensores</span>
        <h2 className="h-section mt-3">{title}</h2>
      </SectionReveal>

      <div id={gridId} className="mt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initialSensors.map((sensor, index) => (
            <SectionReveal key={sensor._id} delay={(index % 3) * 70}>
              <SensorCard sensor={sensor} />
            </SectionReveal>
          ))}
        </div>

        <div
          aria-hidden={!expanded}
          className={`grid transition-[grid-template-rows,opacity,margin] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            expanded ? "mt-6 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {extraSensors.map((sensor, index) => (
                <div
                  key={sensor._id}
                  className={`transition-[opacity,transform] duration-500 ease-out ${
                    expanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: expanded ? `${index * 70}ms` : "0ms" }}
                >
                  <SensorCard sensor={sensor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={gridId}
            onClick={() => setExpanded((current) => !current)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-[background-color,color,transform] duration-300 hover:bg-accent hover:text-accent-foreground active:scale-[0.97] sm:w-auto"
          >
            {expanded ? "Mostrar menos" : "Mostrar mais sensores"}
            <ChevronDown
              className={`size-4 transition-transform duration-500 ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        </div>
      )}
    </section>
  );
}
