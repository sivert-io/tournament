import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { Table } from "@/components/Players/Table";
import Title from "@/components/Title/Title";
import { fakePlayers } from "@/fakeData/players";
import { lang } from "@/lang";
import React from "react";

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <Title>{lang.sidebar.players}</Title>
        <div className="w-full overflow-scroll">
          <Table
            data={fakePlayers.sort(
              (a, b) => b.won_tournaments - a.won_tournaments
            )}
          />
        </div>
      </div>
    </PageWrapper>
  );
}
