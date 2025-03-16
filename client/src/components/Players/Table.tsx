"use client";
import { PlayerData } from "@/types/player";
import React, { useMemo } from "react";
import { Table as AntTable, TableColumnsType } from "antd";
import Image from "next/image";
import Link from "next/link";
import { lang } from "@/lang";

type dataType = {
  key: number;
  name: string;
  team: string;
  total_kills: number;
  headshot_p: number;
  won_tournaments: number;
  rest: PlayerData;
};

const columns: TableColumnsType<dataType> = [
  {
    title: lang.table.player_rank,
    dataIndex: "key",
    key: "rank",
    width: "1%",
  },
  {
    title: lang.table.player_name,
    dataIndex: "name",
    key: "name",
    width: "15%",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name: string, record) => (
      <Link href={`/players/${record.rest.steam.steamid}`}>{name}</Link>
    ),
  },
  {
    title: lang.table.player_main_team,
    dataIndex: "team",
    key: "team",
    width: "15%",
    sorter: (a, b) => a.team.localeCompare(b.team),
    render: (name, record) => (
      <Link
        href={`/teams/${record.rest.main_team.slug}`}
        className="relative flex items-center justify-start w-fit"
      >
        <Image
          alt=""
          src={record.rest.main_team.logoURL || "/games/logo-cs2.png"}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full absolute object-contain object-center"
        />
        <p className="pl-12">{name}</p>
      </Link>
    ),
  },
  {
    title: lang.table.player_kills,
    dataIndex: "total_kills",
    key: "total_kills",
    width: "15%",
    sorter: (a: any, b: any) => a.total_kills - b.total_kills,
  },
  {
    title: lang.table.player_headshot_percentage,
    dataIndex: "headshot_p",
    key: "headshot_p",
    width: "15%",
    render: (percentage) => <>{percentage} %</>,
    sorter: (a: any, b: any) => a.headshot_p - b.headshot_p,
  },
  {
    title: lang.table.player_tournament_wins,
    dataIndex: "won_tournaments",
    key: "won_tournaments",
    width: "15%",
    sorter: (a: any, b: any) => a.won_tournaments - b.won_tournaments,
  },
];

export function Table({ data }: { data?: PlayerData[] }) {
  const dataSource = useMemo(
    () =>
      data?.map((player, index) => ({
        key: index + 1,
        name: player.steam.personaname,
        team: player.main_team.name,
        total_kills: 0,
        won_tournaments: player.won_tournaments,
        headshot_p: 0,
        rest: player,
      })),
    [data]
  );
  return (
    <AntTable
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 50 }}
    />
  );
}
