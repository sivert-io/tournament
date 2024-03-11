"use client";
import { useTheme } from "antd-style";
import React from "react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <div
      className="flex flex-col w-full h-full max-w-[1600px] max-h-[1024px] rounded-2xl p-0 overflow-hidden"
      style={{
        background: theme.colorBgContainer,
        border: "1px solid " + theme.colorBorder,
      }}
    >
      {children}
    </div>
  );
}
