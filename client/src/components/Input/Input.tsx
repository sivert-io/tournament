import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: any;
  setValue?: (e: any) => any;
}

export function Input({ label, value, setValue, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      {label && <p className="font-medium">{label}</p>}
      <input
        className={`bg-base-2 border-2 rounded-lg border-base-4 px-2 py-1 ${
          props.type === "checkbox" ? "w-fit h-fit" : ""
        }`}
        onChange={(e) => setValue && setValue(e.target.value)}
        type="text"
        value={value ? value : undefined}
        {...props}
      />
    </div>
  );
}
