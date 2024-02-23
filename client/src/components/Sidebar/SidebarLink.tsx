"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function SidebarLink({
  href,
  children,
  Icon,
  ActiveIcon,
}: {
  href: string;
  children: React.ReactNode;
  Icon?: any;
  ActiveIcon?: any;
}) {
  const pathname = usePathname();
  const isPathActive =
    (href !== "/" && pathname.match(href)) || pathname === href;

  function GrabIcon() {
    if (isPathActive && ActiveIcon) {
      return <ActiveIcon size={18} />;
    } else if (Icon) {
      return <Icon size={18} />;
    }

    return null;
  }

  return (
    <Link
      className={`flex text-gray-300 gap-2 items-center justify-start border-2 p-2 rounded-lg 
      ${isPathActive ? "bg-base-3 border-base-4" : "border-transparent"}`}
      href={href}
    >
      <GrabIcon />
      {children}
    </Link>
  );
}
