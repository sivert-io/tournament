import React from "react";

export function PageWrapper({ children }: { children?: React.ReactNode }) {
  return <div className="w-full h-full p-8">{children}</div>;
}
