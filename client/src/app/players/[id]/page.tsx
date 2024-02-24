"use client";

import NotFound from "@/app/not-found";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { useTournament } from "@/hooks/useTournament";
import { lang } from "@/lang";
import { RiArrowLeftLine } from "@remixicon/react";
import axios from "axios";
import { SteamProfile } from "next-auth-steam";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Page({ params }: { params: { id: string } }) {
  const [steam, setSteam] = useState<SteamProfile | undefined | null>(
    undefined
  );

  useEffect(() => {
    axios
      .get("/api/steam/player", { data: { steamId: params.id } })
      .then((res) => {
        if (res.status === 200) {
          setSteam(res.data);
        } else {
          setSteam(null);
        }
      });
  }, []);

  if (steam === null) return <NotFound />;

  return (
    <PageWrapper>
      {steam ? <h1>{steam.personaname}</h1> : <Skeleton />}
    </PageWrapper>
  );
}
