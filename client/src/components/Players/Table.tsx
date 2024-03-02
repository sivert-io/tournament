"use client";
import { PlayerData } from "@/types/player";
import React, { useMemo } from "react";
import { Table as AntTable, Pagination, TableColumnsType } from "antd";
import Image from "next/image";
import Link from "next/link";

type dataType = {
  key: number;
  name: string;
  team: string;
  total_kills: number;
  won_tournaments: number;
  rest: PlayerData;
};

const columns: TableColumnsType<dataType> = [
  {
    title: "Rank",
    dataIndex: "key",
    key: "rank",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name: string, record) => (
      <Link href={`/players/${record.rest.steam.steamid}`}>{name}</Link>
    ),
  },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
    sorter: (a, b) => a.team.localeCompare(b.team),
    render: (name, record) => (
      <Link
        href={`/teams/${record.rest.main_team.slug}`}
        className="flex gap-2 items-center"
      >
        <Image
          alt=""
          src={record.rest.main_team.logoURL || "/games/cs.svg"}
          width={20}
          height={20}
          className="w-5 h-5 rounded-full"
        />
        <p>{name}</p>
      </Link>
    ),
  },
  {
    title: "Total kills",
    dataIndex: "total_kills",
    key: "total_kills",
    sorter: (a: any, b: any) => a.total_kills - b.total_kills,
  },
  {
    title: "Tournament wins",
    dataIndex: "won_tournaments",
    key: "won_tournaments",
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
        rest: player,
      })),
    [data]
  );
  return <AntTable dataSource={dataSource} columns={columns} />;
}
