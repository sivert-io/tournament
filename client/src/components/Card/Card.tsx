import React from "react";

export default function Card({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 bg-base-3 rounded-lg border-2 border-base-4 p-4 ${
        size ? size : "w-72"
      }`}
    >
      {children}
    </div>
  );
}
