import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import React from "react";

export default function Page() {
  return (
    <PageWrapper>
      <Title>{lang.sidebar.teams}</Title>
    </PageWrapper>
  );
}
