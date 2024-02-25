import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { NewTeamModal } from "@/components/Team/NewTeamModal";
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
          <div className="flex flex-col gap-1 p-4 bg-base-3 border-2 border-base-4 rounded-lg w-72">
            <h2 className="font-medium text-sm">{lang.teams.rules_title}</h2>
            <p className="text-sm">{lang.teams.rules_description}</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
