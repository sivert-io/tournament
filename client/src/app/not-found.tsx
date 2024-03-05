"use client";
import Back from "@/components/Navigation/Back";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { lang } from "@/lang";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
        <PageTitle>{lang.generic.not_found}</PageTitle>
        <Back />
      </div>
    </PageWrapper>
  );
}
