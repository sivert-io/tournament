import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { NewTeamModal } from "@/components/Team/NewTeam/NewTeamModal";
import { NewTeamRules } from "@/components/Team/NewTeam/NewTeamRules";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import React from "react";

export const metadata = {
  title: `Tournament - ${lang.teams.create_new_team}`,
};

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 items-start justify-start">
        <Title>{lang.teams.create_new_team}</Title>
        <div className="flex gap-4">
          <NewTeamModal />
          <NewTeamRules />
        </div>
      </div>
    </PageWrapper>
  );
}
