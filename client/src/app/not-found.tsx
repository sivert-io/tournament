"use client";
import Back from "@/components/Navigation/Back";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
        <Title>{lang.generic.not_found}</Title>
        <Back />
      </div>
    </PageWrapper>
  );
}
