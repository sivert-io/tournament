import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: `Tournament - ${lang.sidebar.tournaments}`,
};

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <Title>{lang.sidebar.tournaments}</Title>

        <Link className="underline underline-offset-4" href={`/tournaments/0`}>
          CS2 - NTLAN 2024 Vår
        </Link>
      </div>
    </PageWrapper>
  );
}
