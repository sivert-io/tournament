import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { NewTeamModal } from "@/components/Team/NewTeam/NewTeamModal";
import { NewTeamRules } from "@/components/Team/NewTeam/NewTeamRules";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { lang } from "@/lang";
import { homeBreadcrumb, teamsBreadcrumb } from "@/utils/breadcrumbs";
import React from "react";

export default function Page() {
  return (
    <PageWrapper
      breadCrumb={[
        homeBreadcrumb(),
        teamsBreadcrumb(),
        { title: lang.teams.create_new_team },
      ]}
    >
      <div className="flex flex-col gap-4 items-start justify-start">
        <PageTitle>{lang.teams.create_new_team}</PageTitle>
        <div className="flex gap-4">
          <NewTeamModal />
          <NewTeamRules />
        </div>
      </div>
    </PageWrapper>
  );
}
