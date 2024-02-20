import { lang } from "@/lang";
import Link from "next/link";
import React from "react";

export function NavbarLink({
  className,
  children,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className={`hover:underline underline-offset-2 ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
