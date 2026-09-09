import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface Props extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  as?: "div" | "section" | "article" | "header";
}

export function SectionReveal({
  className,
  delay = 0,
  as: Tag = "div",
  style,
  children,
  ...rest
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", inView && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
