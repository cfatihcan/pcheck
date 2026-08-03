import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-xl",
    "font-medium",
    "transition-all",
    "duration-300",
    "select-none",
    "outline-none",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-red-600 text-white hover:bg-red-700",

        secondary:
          "bg-zinc-900 text-white hover:bg-black",

        outline:
          "border border-zinc-300 bg-white hover:bg-zinc-100",

        ghost:
          "hover:bg-zinc-100",

        danger:
          "bg-red-700 text-white hover:bg-red-800",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        md: "h-11 px-5",

        lg: "h-14 px-7 text-lg",

        icon: "h-11 w-11",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);