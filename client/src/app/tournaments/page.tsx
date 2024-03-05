import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { lang } from "@/lang";
import { homeBreadcrumb, tournamentsBreadcrumb } from "@/utils/breadcrumbs";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(), tournamentsBreadcrumb(false)]}>
      <div className="flex flex-col gap-4">
        <PageTitle>{lang.sidebar.tournaments}</PageTitle>

        <Link className="underline underline-offset-4" href={`/tournaments/0`}>
          CS2 - NTLAN 2024 Vår
        </Link>
      </div>
    </PageWrapper>
  );
}
