"use client";
import { PlayerStats } from "@/types/stats";
import { SteamProfile } from "next-auth-steam";
import { useEffect, useState } from "react";

function usePlayerInfo(id: string) {
  const [steam, setSteam] = useState<SteamProfile | undefined | null>(
    undefined
  );
  const [gameStats, setGameStats] = useState<PlayerStats | undefined>(
    undefined
  );

  const [videoSrc, setVideoSrc] = useState<undefined | string>(undefined);

  useEffect(() => {
    async function getData() {
      let steamData = undefined;
      let gameData = undefined;
      let background = undefined;
      await fetch(`/api/steam/player/${id}`, {
        headers: {
          "Cache-Control": "max-age=60", // Cache for 1 hour
        },
      }).then(async (res) => {
        steamData = await res.json();
      });

      await fetch(`/api/steam/player/game/${id}`, {
        headers: {
          "Cache-Control": "max-age=60", // Cache for 1 hour
        },
      }).then(async (res) => {
        gameData = await res.json();
      });

      await fetch(`/api/steam/player/background/${id}`, {
        headers: {
          "Cache-Control": "max-age=60", // Cache for 1 hour
        },
      }).then(async (res) => {
        background = (await res.json()).src;
      });

      setSteam(steamData);
      setGameStats(gameData);
      setVideoSrc(background);
    }
    getData();
  }, [id]);

  return { steam, gameStats, videoSrc };
}

export { usePlayerInfo };
