"use client";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { useTournament } from "@/hooks/useTournament";
import { lang } from "@/lang";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <Title>{lang.navbar.tournaments}</Title>

        <Link className="underline underline-offset-4" href={`/tournament/0`}>
          CS2 - NTLAN 2024 Vår
        </Link>
      </div>
    </PageWrapper>
  );
}
