import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { lang } from "@/lang";
import React from "react";

export default function Page() {
  return (
    <PageWrapper>
      <PageTitle>{lang.sidebar.settings}</PageTitle>
    </PageWrapper>
  );
}
