import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle?: "tertiary";
}

export function Button({ children, btnStyle, ...props }: ButtonProps) {
  return (
    <button
      className="px-2 py-1 text-sm font-medium rounded-xl bg-slate-300 text-black"
      {...props}
    >
      {children}
    </button>
  );
}
