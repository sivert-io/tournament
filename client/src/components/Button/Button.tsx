import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle?: "primary";
  size?: string;
  padding?: string;
  href?: string;
}

export function Button({
  children,
  btnStyle,
  size,
  padding,
  href,
  ...props
}: ButtonProps) {
  const color = () => {
    switch (btnStyle) {
      case "primary":
        return "bg-primary border-2 border-transparent";

      default:
        return "bg-base-2 border-2 border-base-4";
    }
  };
  const className = `${
    padding ? padding : "px-2 py-1"
  } text-sm font-medium rounded-lg flex items-center justify-center gap-1 ${color()} ${
    size ? size : "w-fit h-fit"
  }`;

  if (href)
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
