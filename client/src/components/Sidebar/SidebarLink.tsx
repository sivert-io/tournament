"use client";
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
  const pathname = usePathname();
  return (
    <Link
      className={`flex text-gray-300 gap-2 items-center justify-start border-2 p-2 rounded-lg 
      ${
        pathname.match(href) ? "bg-base-3 border-base-4" : "border-transparent"
      }`}
      href={href}
    >
      {Icon && <Icon size={18} />}
      {children}
    </Link>
  );
}
