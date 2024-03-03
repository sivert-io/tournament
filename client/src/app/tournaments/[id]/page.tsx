"use client";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { homeBreadcrumb, tournamentsBreadcrumb } from "@/utils/breadcrumbs";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <PageWrapper
      breadCrumb={[
        homeBreadcrumb(),
        tournamentsBreadcrumb(),
        {
          title: params.id,
        },
      ]}
    ></PageWrapper>
  );
}
