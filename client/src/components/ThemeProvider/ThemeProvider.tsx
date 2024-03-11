"use client";
import React from "react";
import {
  GaussianBackgroundProps,
  ThemeProvider as LobeThemeProvider,
} from "@lobehub/ui";

const options: GaussianBackgroundProps["options"] = {
  blurRadius: 16,
  fpsCap: 60,
  scale: 16,
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <LobeThemeProvider
      customTheme={{ primaryColor: "blue" }}
      themeMode="dark"
      appearance="dark"
    >
      {children}
    </LobeThemeProvider>
  );
}
