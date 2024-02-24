"use client";

import NotFound from "@/app/not-found";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { useTournament } from "@/hooks/useTournament";
import { lang } from "@/lang";
import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const tournaments = useTournament();
  const tournament = tournaments[parseInt(params.id, 2)];

  if (!tournament) return <NotFound />;

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <Link
          href="/tournaments"
          className="px-3 py-2 text-sm font-medium bg-base-2 rounded-lg flex gap-2 items-center justify-center w-fit h-fit"
        >
          <RiArrowLeftLine size={20} />
          {lang.generic.back}
        </Link>
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
      </div>
    </PageWrapper>
  );
}
