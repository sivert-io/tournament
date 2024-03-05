import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { lang } from "@/lang";
import { Button } from "antd";
import React from "react";
import { Plus } from "lucide-react";
import { homeBreadcrumb, teamsBreadcrumb } from "@/utils/breadcrumbs";
import Title from "antd/es/typography/Title";

export default function Page() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(), teamsBreadcrumb(false)]}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <PageTitle>{lang.sidebar.teams}</PageTitle>
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
          <Title level={2}>{lang.teams.my_teams}</Title>
        </div>
        <div className="flex flex-col gap-2">
          <Title level={2}>{lang.teams.all_teams}</Title>
        </div>
      </div>
    </PageWrapper>
  );
}
