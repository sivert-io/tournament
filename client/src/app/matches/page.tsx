import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import React from "react";

export const metadata = {
  title: `Tournament - ${lang.sidebar.matches}`,
};

export default function Page() {
  return (
    <PageWrapper>
      <Title>{lang.sidebar.matches}</Title>
    </PageWrapper>
  );
}
