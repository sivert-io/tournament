"use client";
import { useTheme } from "antd-style";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function SidebarLink({
  href,
  children,
  Icon,
}: {
  href: string;
  children: React.ReactNode;
  Icon?: any;
}) {
  const theme = useTheme();
  const pathname = usePathname();
  const isPathActive =
    (href !== "/" && pathname.match(href)) || pathname === href;

  return (
    <Link
      style={{
        background: isPathActive ? theme.colorBgElevated : "transparent",
        color: theme.colorText,
      }}
      className="flex gap-2 items-center justify-start p-2 rounded-lg"
      href={href}
    >
      <Icon size={20} />
      {children}
    </Link>
  );
}
