"use client";

import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { useTournament } from "@/hooks/useTournament";
import { lang } from "@/lang";
import Link from "next/link";

function NotFound() {
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-start">
      <Title>{lang.tournament.not_found}</Title>
      <Link className="underline underline-offset-2" href="/">
        {lang.tournament.go_back}
      </Link>
    </div>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  const tournament = useTournament(Number(params.id));

  if (tournament.stage?.length === 0)
    return (
      <PageWrapper>
        <NotFound />
      </PageWrapper>
    );

  return (
    <PageWrapper>
      {tournament.stage && (
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Stages</h2>
          {tournament.stage.map((stage) => (
            <div key={stage.name}>
              <Title>{stage.name}</Title>
              <p>{stage.type}</p>
            </div>
          ))}
        </div>
      )}
      {tournament.group && (
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Groups</h2>
          {tournament.group.map((group) => (
            <div key={group.number}>
              <Title>{group.number}</Title>
            </div>
          ))}
        </div>
      )}
      {tournament.round && (
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Rounds</h2>
          {tournament.round.map((round) => (
            <div key={round.number}>
              <Title>{round.number}</Title>
              <p>{round.group_id}</p>
            </div>
          ))}
        </div>
      )}
      {tournament.match && (
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Matches</h2>
          {tournament.match.map((match) => (
            <div key={match.id}>
              <Title>{match.group_id}</Title>
              <p>{match.child_count}</p>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
