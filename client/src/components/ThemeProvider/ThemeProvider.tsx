"use client";
import React from "react";
import { ThemeProvider as Theme } from "@lobehub/ui";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <Theme appearance="dark">{children}</Theme>;
}
