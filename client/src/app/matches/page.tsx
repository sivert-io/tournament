import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { lang } from "@/lang";
import React from "react";
import { homeBreadcrumb, matchesBreadcrumb } from "@/utils/breadcrumbs";

export default function Page() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(), matchesBreadcrumb(false)]}>
      <PageTitle>{lang.sidebar.matches}</PageTitle>
    </PageWrapper>
  );
}
