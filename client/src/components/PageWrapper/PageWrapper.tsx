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
    <div className="flex flex-col w-full h-full gap-4 py-8 px-64">
      <Breadcrumb separator=">" items={breadCrumb} />
      {children}
    </div>
  );
}
