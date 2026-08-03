import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import type { sectionVariants } from "./Section.styles";

export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}