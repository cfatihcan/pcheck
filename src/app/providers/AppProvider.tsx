import type { ReactNode } from "react";

import { QueryProvider } from "./QueryProvider";

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  );
}