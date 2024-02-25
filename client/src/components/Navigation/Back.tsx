"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { lang } from "@/lang";
import { RiArrowLeftLine } from "@remixicon/react";
import { Button } from "../Button/Button";

export default function Back() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <RiArrowLeftLine size={16} />
      {lang.generic.go_back}
    </Button>
  );
}
