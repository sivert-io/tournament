import React from "react";

export function PageWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full flex items-start justify-center py-12 px-6">
      <div className="max-w-[800px] w-full h-full">{children}</div>
    </div>
  );
}
