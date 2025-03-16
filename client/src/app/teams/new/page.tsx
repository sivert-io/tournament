"use client";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { lang } from "@/lang";
import { homeBreadcrumb, teamsBreadcrumb } from "@/utils/breadcrumbs";
import React, { useState } from "react";
import { TeamBanner } from "@/components/Team/TeamBanner";

export default function Page() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <PageWrapper
      breadCrumb={[
        homeBreadcrumb(),
        teamsBreadcrumb(),
        { title: lang.teams.create_new_team },
      ]}
    >
      <div className="flex flex-col gap-4 justify-start">
        <PageTitle>{lang.teams.create_new_team}</PageTitle>
        <div className="flex flex-col gap-4">
          <TeamBanner
            avatarURL={avatar}
            bannerURL={banner}
            name={name}
            editMode
          />
          {/* <NewTeamModal /> */}
          {/* <NewTeamRules /> */}
        </div>
      </div>
    </PageWrapper>
  );
}
