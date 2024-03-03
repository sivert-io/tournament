import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import React from "react";
import { homeBreadcrumb, matchesBreadcrumb } from "@/utils/breadcrumbs";

export default function Page() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(), matchesBreadcrumb(false)]}>
      <Title>{lang.sidebar.matches}</Title>
    </PageWrapper>
  );
}
