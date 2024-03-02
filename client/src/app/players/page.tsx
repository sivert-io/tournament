import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { Table } from "@/components/Players/Table";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import React from "react";
import { fakePlayers } from "@/fakeData/players";

export const metadata = {
  title: `Tournament - ${lang.sidebar.players}`,
};

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <Title>{lang.sidebar.players}</Title>
        <Table data={fakePlayers} />
      </div>
    </PageWrapper>
  );
}
