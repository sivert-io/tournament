import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="font-bold text-2xl truncate">{children}</h1>;
}
