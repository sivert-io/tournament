import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { Table } from "@/components/Players/Table";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { lang } from "@/lang";
import React from "react";
import { fakePlayers } from "@/fakeData/players";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { homeBreadcrumb, playersBreadcrumb } from "@/utils/breadcrumbs";

export default function Page() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(), playersBreadcrumb(false)]}>
      <div className="flex flex-col gap-4">
        <PageTitle>{lang.sidebar.players}</PageTitle>
        <Table data={fakePlayers} />
      </div>
    </PageWrapper>
  );
}
