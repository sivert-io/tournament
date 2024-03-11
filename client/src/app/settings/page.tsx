import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { lang } from "@/lang";
import { homeBreadcrumb } from "@/utils/breadcrumbs";
import React from "react";

export default function Page() {
  return (
    <PageWrapper
      breadCrumb={[
        homeBreadcrumb(),
        {
          title: lang.sidebar.settings,
        },
      ]}
    >
      <PageTitle>{lang.sidebar.settings}</PageTitle>
    </PageWrapper>
  );
}
