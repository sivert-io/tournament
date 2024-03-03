"use client";
import React from "react";
import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

export function PageWrapper({
  children,
  breadCrumb,
}: {
  children?: React.ReactNode;
  breadCrumb?: ItemType[];
}) {
  return (
    <div className="flex items-start justify-center w-full h-full p-8">
      <div className="flex flex-col w-full max-w-[1200px] h-full gap-4">
        <Breadcrumb separator=">" items={breadCrumb} />
        {children}
      </div>
    </div>
  );
}
