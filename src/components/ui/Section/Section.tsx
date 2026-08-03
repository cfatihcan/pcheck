import { cn } from "@/lib/cn";

import { sectionVariants } from "./Section.styles";
import type { SectionProps } from "./Section.types";

export function Section({
  className,
  spacing,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants({
          spacing,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}