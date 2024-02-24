"use client";
import { Tournament } from "@/types/tournament";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function SidebarTournament({
  tournamentData,
}: {
  tournamentData: Tournament;
}) {
  const getBrowserLocale = () =>
    navigator.language || navigator.languages[0] || "en";

  return (
    <Link
      href={`/tournaments/${tournamentData.id}`}
      className="flex justify-between bg-base-3 text-sm text-gray-300 rounded-lg border-2 border-base-4"
    >
      <div className="flex flex-col gap-1 p-2 w-[75%]">
        <p className="truncate">{tournamentData.name}</p>
        {typeof window !== "undefined" && (
          <>
            <p className="text-gray-400">
              {tournamentData.start.toLocaleString(getBrowserLocale(), {
                month: "short",
                day: "numeric",
              })}{" "}
              –{" "}
              {tournamentData.end.toLocaleString(getBrowserLocale(), {
                month: "short",
                day: "numeric",
              })}
            </p>
          </>
        )}
      </div>
      <div className="flex flex-1 h-full items-center justify-center p-3">
        <Image
          src={tournamentData.gameLogo || ""}
          alt=""
          width={48}
          height={48}
        />
      </div>
    </Link>
  );
}
