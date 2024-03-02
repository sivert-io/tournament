"use client";
import React from "react";
import { ThemeProvider as LobeThemeProvider } from "@lobehub/ui";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <LobeThemeProvider
      appearance="dark"
      customTheme={{ primaryColor: "red", neutralColor: "mauve" }}
    >
      {children}
    </LobeThemeProvider>
  );
}
