import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 bg-base-3 rounded-lg border-2 border-base-4 p-4 w-72">
      {children}
    </div>
  );
}
