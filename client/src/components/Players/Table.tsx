"use client";
import { PlayerData } from "@/types/player";
import React from "react";
import { Table as AntTable, TableColumnsType } from "antd";

type dataType = {
  key: number;
  name: string;
  team: string;
  total_kills: number;
  won_tournaments: number;
};

const columns: TableColumnsType<dataType> = [
  {
    title: "Rank",
    dataIndex: "key",
    key: "rank",
    defaultSortOrder: "ascend",
    sorter: (a: any, b: any) => a.key - b.key,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "Total kills",
    dataIndex: "total_kills",
    key: "total_kills",
  },
];

export function Table({ data }: { data: PlayerData[] }) {
  const dataSource: dataType[] = data.map((player, index) => ({
    key: index + 1,
    name: player.steam.personaname,
    team: player.main_team.name,
    total_kills: 0,
    won_tournaments: player.won_tournaments,
  }));
  return <AntTable dataSource={dataSource} columns={columns} />;
}
