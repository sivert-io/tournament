"use client";
import NotFound from "@/app/not-found";
import PlayerBanner from "@/components/Players/Player/PlayerBanner";
import { PlayerStats } from "@/types/stats";
import axios from "axios";
import { SteamProfile } from "next-auth-steam";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [steam, setSteam] = useState<SteamProfile | undefined | null>(
    undefined
  );
  const [gameStats, setGameStats] = useState<PlayerStats | undefined>(
    undefined
  );

  useEffect(() => {
    axios.get(`/api/steam/player/${params.id}`).then((res) => {
      setSteam(res.data);
    });
    axios.get(`/api/steam/player/game/${params.id}`).then((res) => {
      setGameStats(res.data);
    });
  }, [params]);

  if (steam === null) return <NotFound />;

  return (
    <div className="flex flex-col w-full">
      <PlayerBanner
        avatarURL={steam?.avatarfull}
        name={steam?.personaname}
        stats={gameStats}
      />
    </div>
  );
}
