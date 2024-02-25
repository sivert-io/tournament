import { lang } from "@/lang";
import { PlayerData } from "@/types/player";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Link from "next/link";

export function Table({ data }: { data: PlayerData[] }) {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>{lang.table.player_rank}</th>
          <th>{lang.table.player_name}</th>
          <th>{lang.table.player_main_team}</th>
          <th>{lang.table.player_tournament_wins}</th>
          <th>{lang.table.player_tournaments_participated}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((player, i) => (
          <tr key={i}>
            <td>{i + 1}.</td>
            <td>
              <Link href={`/players/${player.steam.steamid}`}>
                {player.steam.personaname}
              </Link>
            </td>
            <td>
              <Link
                className="flex gap-2 items-center"
                href={`/teams/${player.main_team.slug}`}
              >
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt=""
                  src={player.main_team.logoURL || "/games/cs.svg"}
                />
                <span>{player.main_team.name}</span>
              </Link>
            </td>
            <td>{player.won_tournaments}</td>
            <td>{player.num_tournaments_participated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
