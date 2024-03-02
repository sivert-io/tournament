import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import { Button } from "antd";
import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: `Tournament - ${lang.sidebar.teams}`,
};

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Title>{lang.sidebar.teams}</Title>
          <Button
            href="/teams/new"
            size="small"
            styles={{ icon: { marginRight: 4 } }}
            icon={<Plus size={16} />}
            type="primary"
            tabIndex={-1}
          >
            {lang.teams.create_new_team}
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">{lang.teams.my_teams}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">{lang.teams.all_teams}</h2>
        </div>
      </div>
    </PageWrapper>
  );
}
