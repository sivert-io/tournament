"use client";
import NotFound from "@/app/not-found";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import axios from "axios";
import { SteamProfile } from "next-auth-steam";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Page({ params }: { params: { id: string } }) {
  const [steam, setSteam] = useState<SteamProfile | undefined | null>(
    undefined
  );

  useEffect(() => {
    axios.get(`/api/steam/player/${params.id}`).then((res) => {
      setSteam(res.data);
    });
  }, [params]);

  if (steam === null) return <NotFound />;

  return (
    <PageWrapper>
      {steam ? <Title>{steam.personaname}</Title> : <Skeleton />}
    </PageWrapper>
  );
}
