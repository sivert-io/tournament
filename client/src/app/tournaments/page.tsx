import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import Link from "next/link";
import React from "react";
import { homeBreadcrumb } from "../page";

export const tournamentsBreadcrumb = (useHref = true): ItemType => ({
  title: lang.sidebar.tournaments,
  href: useHref ? "/tournaments" : undefined,
});

export default function Page() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(), tournamentsBreadcrumb(false)]}>
      <div className="flex flex-col gap-4">
        <Title>{lang.sidebar.tournaments}</Title>

        <Link className="underline underline-offset-4" href={`/tournaments/0`}>
          CS2 - NTLAN 2024 Vår
        </Link>
      </div>
    </PageWrapper>
  );
}
