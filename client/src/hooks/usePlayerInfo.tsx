"use client";
import { PlayerStats } from "@/types/stats";
import axios from "axios";
import { SteamProfile } from "next-auth-steam";
import { useEffect, useState } from "react";

function usePlayerInfo(id: string) {
  const [steam, setSteam] = useState<SteamProfile | undefined | null>(
    undefined
  );
  const [gameStats, setGameStats] = useState<PlayerStats | undefined>(
    undefined
  );

  const [backgroundImage, setBackgroundImage] = useState<undefined | string>(
    undefined
  );

  useEffect(() => {
    async function getData() {
      let steamData = undefined;
      let gameData = undefined;
      let background = undefined;
      await axios.get(`/api/steam/player/${id}`).then((res) => {
        steamData = res.data;
      });

      await axios.get(`/api/steam/player/game/${id}`).then((res) => {
        gameData = res.data;
      });

      await axios.get(`/api/steam/player/background/${id}`).then((res) => {
        background = res.data.url;
      });

      setSteam(steamData);
      setGameStats(gameData);
      setBackgroundImage(background);
    }
    getData();
  }, [id]);

  return { steam, gameStats, backgroundImage };
}

export { usePlayerInfo };
