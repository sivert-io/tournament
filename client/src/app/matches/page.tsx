import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import React from "react";
import { homeBreadcrumb } from "../page";

export const matchesBreadcrumb = (useHref = true): ItemType => ({
  title: lang.sidebar.matches,
  href: useHref ? "/matches" : undefined,
});

export default function Page() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(), matchesBreadcrumb(false)]}>
      <Title>{lang.sidebar.matches}</Title>
    </PageWrapper>
  );
}
