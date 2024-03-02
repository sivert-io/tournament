"use client";
import { useTheme } from "antd-style";
import React from "react";

export default function Card({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: string;
}) {
  const theme = useTheme();
  return (
    <div
      style={{
        background: theme.colorBgElevated,
        border: "1px solid " + theme.colorBorder,
      }}
      className={`flex flex-col gap-4 rounded-lg p-4 ${size ? size : "w-72"}`}
    >
      {children}
    </div>
  );
}
