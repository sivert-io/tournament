"use client";
import NotFound from "@/app/not-found";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PlayerBanner } from "@/components/Players/Player/PlayerBanner";
import { Socials } from "@/components/Players/Player/Socials";
import { usePlayerInfo } from "@/hooks/usePlayerInfo";
import { lang } from "@/lang";
import { homeBreadcrumb, playersBreadcrumb } from "@/utils/breadcrumbs";
import Title from "antd/es/typography/Title";

export default function Page({ params }: { params: { id: string } }) {
  const { steam, gameStats, videoSrc } = usePlayerInfo(params.id);

  if (steam === null) return <NotFound />;

  return (
    <PageWrapper
      breadCrumb={[
        homeBreadcrumb(),
        playersBreadcrumb(),
        {
          title: steam?.personaname || params.id,
        },
      ]}
    >
      <div className="flex flex-col w-full gap-2">
        <PlayerBanner
          avatarURL={steam?.avatarfull}
          name={steam?.personaname}
          stats={gameStats}
          bannerURL={videoSrc}
        />
        <Socials steamid={steam?.steamid} />
        <Title level={3}>{lang.generic.team}</Title>
      </div>
    </PageWrapper>
  );
}
