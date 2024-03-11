"use client";

import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { homeBreadcrumb, matchesBreadcrumb } from "@/utils/breadcrumbs";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <PageWrapper
      breadCrumb={[
        homeBreadcrumb(),
        matchesBreadcrumb(),
        {
          title: params.id,
        },
      ]}
    ></PageWrapper>
  );
}
