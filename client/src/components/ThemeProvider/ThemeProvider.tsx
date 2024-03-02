"use client";
import React from "react";
import { ThemeProvider as LobeThemeProvider } from "@lobehub/ui";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <LobeThemeProvider
      customTheme={{ primaryColor: "blue", neutralColor: "slate" }}
      themeMode="dark"
      appearance="dark"
    >
      {children}
    </LobeThemeProvider>
  );
}
