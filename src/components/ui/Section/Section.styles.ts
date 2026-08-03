import { cva } from "class-variance-authority";

export const sectionVariants = cva("relative w-full", {
  variants: {
    spacing: {
      none: "",

      sm: "py-12",

      md: "py-20",

      lg: "py-28",

      xl: "py-36",
    },
  },

  defaultVariants: {
    spacing: "lg",
  },
});