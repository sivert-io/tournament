import { Button } from "@/components/Button/Button";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import { RiAddFill } from "@remixicon/react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex items-center gap-4">
        <Title>{lang.sidebar.teams}</Title>
        <Button href="/teams/new" btnStyle="primary">
          <RiAddFill size={16} />
          {lang.teams.create_new_team}
        </Button>
      </div>
    </PageWrapper>
  );
}
