"use client";
import { Match } from "@/types/match";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Content({ matchData }: { matchData: Match }) {
  return (
    <>
      <div className="flex flex-col gap-4 p-2 w-[75%]">
        {matchData.teams.map((team, i) => (
          <div className="flex justify-between items-center gap-6" key={i}>
            <div className="flex gap-2 items-center">
              {team.logoURL && (
                <Image
                  className="w-4 h-4 rounded-full"
                  src={team.logoURL}
                  width={16}
                  height={16}
                  alt=""
                />
              )}
              <p className="truncate">{team.name}</p>
            </div>
            <p className={(matchData.winner !== i && "text-red-400") || ""}>
              {matchData.scores[i]}
            </p>
          </div>
        ))}
      </div>
      <div className="flex-1 max-w-[2px] bg-base-4" />
      <div className="flex flex-1 items-center justify-center p-4">
        {matchData.gameLogo && (
          <Image src={matchData.gameLogo} alt="" width={48} height={48} />
        )}
      </div>
    </>
  );
}

export function SidebarMatch({
  matchData,
  clickAble,
}: {
  matchData: Match;
  clickAble?: boolean;
}) {
  if (clickAble === undefined || clickAble)
    return (
      <Link
        href={`/matches/${matchData.id}`}
        className="flex bg-base-3 text-sm text-gray-300 rounded-lg border-2 border-base-4"
      >
        <Content matchData={matchData} />
      </Link>
    );

  return (
    <div className="flex bg-base-3 text-sm text-gray-300 rounded-lg border-2 border-base-4">
      <Content matchData={matchData} />
    </div>
  );
}
