import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { Table } from "@/components/Players/Table";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import React from "react";
import { fakePlayers } from "@/fakeData/players";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { homeBreadcrumb } from "../page";

export const playersBreadcrumb = (useHref = true): ItemType => ({
  title: lang.sidebar.players,
  href: useHref ? "/players" : undefined,
});

export default function Page() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(), playersBreadcrumb(false)]}>
      <div className="flex flex-col gap-4">
        <Title>{lang.sidebar.players}</Title>
        <Table data={fakePlayers} />
      </div>
    </PageWrapper>
  );
}
