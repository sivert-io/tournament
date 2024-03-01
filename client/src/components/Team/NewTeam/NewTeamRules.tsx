import Card from "@/components/Card/Card";
import { lang } from "@/lang";
import React from "react";

export function NewTeamRules() {
  return (
    <Card>
      <h2 className="font-medium text-sm">{lang.teams.rules_title}</h2>
      <p className="text-sm">{lang.teams.rules_description}</p>
    </Card>
  );
}
