"use client";

import { NextUIProvider } from "@nextui-org/react";
import { GlobalContextProvider } from "./Context/appData";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalContextProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </GlobalContextProvider>
  );
}
